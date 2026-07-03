import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { MeshoptDecoder } from 'three/addons/libs/meshopt_decoder.module.js';
import { RoundedBoxGeometry } from 'three/addons/geometries/RoundedBoxGeometry.js';
import { EffectComposer } from 'three/addons/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/addons/postprocessing/RenderPass.js';
import { OutlinePass } from 'three/addons/postprocessing/OutlinePass.js';
import { OutputPass } from 'three/addons/postprocessing/OutputPass.js';

// Draw the Safer app screen (map + route + pin + shield) onto a canvas texture.
function makeScreenTexture() {
  const c = document.createElement('canvas'); c.width = 512; c.height = 1024;
  const x = c.getContext('2d');
  // background
  x.fillStyle = '#eef4ff'; x.fillRect(0,0,512,1024);
  // grid
  x.strokeStyle = 'rgba(47,107,255,.12)'; x.lineWidth = 2;
  for (let i=0;i<=512;i+=64){ x.beginPath(); x.moveTo(i,0); x.lineTo(i,1024); x.stroke(); }
  for (let j=0;j<=1024;j+=64){ x.beginPath(); x.moveTo(0,j); x.lineTo(512,j); x.stroke(); }
  // route
  x.strokeStyle = '#c9d8f5'; x.lineWidth = 26; x.lineCap='round';
  x.beginPath(); x.moveTo(90,900); x.quadraticCurveTo(360,640,180,380); x.quadraticCurveTo(60,220,300,120); x.stroke();
  // shield check
  x.fillStyle = '#2f6bff';
  x.beginPath();
  x.moveTo(256,470); x.lineTo(330,505); x.lineTo(330,600); x.quadraticCurveTo(330,690,256,720);
  x.quadraticCurveTo(182,690,182,600); x.lineTo(182,505); x.closePath(); x.fill();
  x.strokeStyle='#fff'; x.lineWidth=16; x.lineCap='round'; x.lineJoin='round';
  x.beginPath(); x.moveTo(228,585); x.lineTo(250,610); x.lineTo(292,558); x.stroke();
  // location pin (teal)
  x.fillStyle = '#17b3a3';
  x.beginPath(); x.arc(330,300,30,Math.PI,0); x.lineTo(330,360); x.closePath(); x.fill();
  x.fillStyle='#eef4ff'; x.beginPath(); x.arc(330,300,12,0,Math.PI*2); x.fill();
  const t = new THREE.CanvasTexture(c);
  t.colorSpace = THREE.SRGBColorSpace; t.anisotropy = 4;
  return t;
}

export function initHero3D(container, opts = {}) {
  const modelURL = opts.model || 'assets/woman.glb';
  const scene = new THREE.Scene();

  const camera = new THREE.PerspectiveCamera(30, 1, 0.1, 100);
  camera.position.set(3.4, 4.6, 10.4);
  camera.lookAt(0, 0.7, 0);

  const renderer = new THREE.WebGLRenderer({ antialias:true, alpha:true });
  renderer.setPixelRatio(Math.min(devicePixelRatio, 2));
  renderer.shadowMap.enabled = true;
  renderer.shadowMap.type = THREE.PCFSoftShadowMap;
  renderer.outputColorSpace = THREE.SRGBColorSpace;
  container.appendChild(renderer.domElement);
  renderer.domElement.style.width = '100%';
  renderer.domElement.style.height = '100%';
  renderer.domElement.style.display = 'block';

  // lights — enough contrast that the toon steps read as 3D form
  scene.add(new THREE.HemisphereLight(0xffffff, 0xcdd9f2, 1.15));
  const key = new THREE.DirectionalLight(0xffffff, 2.0);
  key.position.set(4, 9, 6); key.castShadow = true;
  key.shadow.mapSize.set(2048,2048);
  key.shadow.camera.near=1; key.shadow.camera.far=40;
  key.shadow.camera.left=-7; key.shadow.camera.right=7; key.shadow.camera.top=7; key.shadow.camera.bottom=-7;
  key.shadow.bias=-0.0004; key.shadow.radius=4;
  scene.add(key);
  const fill = new THREE.DirectionalLight(0xffffff, 0.5); fill.position.set(-5,3,7); scene.add(fill);
  const rim = new THREE.DirectionalLight(0x9fc0ff, 0.6); rim.position.set(-6,4,-5); scene.add(rim);

  // toon gradient — clear shadow → light steps so the body has form
  const grad = new Uint8Array([120,185,235,255]);
  const gradTex = new THREE.DataTexture(grad, grad.length, 1, THREE.RedFormat);
  gradTex.needsUpdate = true; gradTex.minFilter = gradTex.magFilter = THREE.NearestFilter;

  // scene root (for pointer parallax)
  const root = new THREE.Group();
  root.rotation.y = -0.5;
  scene.add(root);

  // phone
  const body = new THREE.Mesh(
    new RoundedBoxGeometry(3.3, 0.30, 6.7, 6, 0.36),
    new THREE.MeshToonMaterial({ color:0x0a1f44, gradientMap:gradTex })
  );
  body.castShadow = true; body.receiveShadow = true; root.add(body);

  const screenTex = makeScreenTexture();
  const screen = new THREE.Mesh(
    new THREE.PlaneGeometry(2.9, 6.1),
    new THREE.MeshToonMaterial({ map:screenTex, gradientMap:gradTex })
  );
  screen.rotation.x = -Math.PI/2; screen.position.y = 0.17; screen.receiveShadow = true;
  root.add(screen);

  // ground shadow
  const ground = new THREE.Mesh(new THREE.PlaneGeometry(50,50), new THREE.ShadowMaterial({ opacity:0.16 }));
  ground.rotation.x = -Math.PI/2; ground.position.y = -0.16; ground.receiveShadow = true; scene.add(ground);

  // live-location ping — a ring that pulses under her feet ("Watch Me is tracking her")
  const pingMat = new THREE.MeshBasicMaterial({ color:0x2f6bff, transparent:true, opacity:0.5, side:THREE.DoubleSide, depthWrite:false });
  const ping = new THREE.Mesh(new THREE.RingGeometry(0.30, 0.40, 44), pingMat);
  ping.rotation.x = -Math.PI/2; ping.position.y = 0.185; root.add(ping);

  // post
  const composer = new EffectComposer(renderer);
  composer.addPass(new RenderPass(scene, camera));
  const outline = new OutlinePass(new THREE.Vector2(1,1), scene, camera);
  outline.edgeStrength = 6.5; outline.edgeGlow = 0.0; outline.edgeThickness = 2.2;
  outline.visibleEdgeColor.set('#0a1f44'); outline.hiddenEdgeColor.set('#0a1f44');
  composer.addPass(outline);
  composer.addPass(new OutputPass());

  // character
  let mixer = null, charModel = null, charBaseY = 0, animated = false;

  // shared: cel-shade, auto-fit onto the phone, and play the walk clip in place
  function processModel(model, animations) {
    model.traverse(o => {
      if (o.isMesh || o.isSkinnedMesh) {
        o.castShadow = true; o.frustumCulled = false;
        const src = Array.isArray(o.material) ? o.material[0] : o.material;
        if (src && src.map) {
          // keep her REAL textures (clothes / skin / hair color), lit naturally
          if (src.map.colorSpace !== THREE.SRGBColorSpace) src.map.colorSpace = THREE.SRGBColorSpace;
          src.roughness = 0.9; src.metalness = 0.0;
          src.needsUpdate = true;
          o.material = src;
        } else {
          // untextured mesh -> clean brand-blue line-art figure
          o.material = new THREE.MeshToonMaterial({ color: 0xdbe7ff, gradientMap: gradTex });
        }
      }
    });
    // AUTO-FIT: scale to a target height, then plant feet on the phone screen
    model.rotation.y = opts.rotY ?? (Math.PI * 0.58);
    model.updateMatrixWorld(true);
    const box0 = new THREE.Box3().setFromObject(model);
    const h = (box0.max.y - box0.min.y) || 1;
    model.scale.setScalar((opts.targetHeight ?? 1.5) / h);
    model.updateMatrixWorld(true);
    const box1 = new THREE.Box3().setFromObject(model);
    model.position.set(0, 0.19 - box1.min.y, 0.1);
    charModel = model; charBaseY = model.position.y;
    root.add(model);
    outline.selectedObjects = [model];
    mixer = new THREE.AnimationMixer(model);
    // Mixamo FBX can carry several animation stacks (some empty/bind).
    // Pick the RICHEST clip — most tracks & real duration — so we don't play a dead stack.
    let walk = null;
    if (animations && animations.length) {
      const named = ['walk', 'Walking', 'Walk', 'walking', 'mixamo.com']
        .map(n => THREE.AnimationClip.findByName(animations, n)).find(Boolean);
      walk = named || animations
        .slice()
        .sort((a, b) => ((b.tracks?.length || 0) + (b.duration || 0)) - ((a.tracks?.length || 0) + (a.duration || 0)))[0];
    }
    if (walk && walk.tracks && walk.tracks.length) {
      // strip root translation so she steps IN PLACE (no drift) — but only if rotation tracks remain
      const stripped = walk.tracks.filter(t => !/\.position$/.test(t.name));
      if (stripped.length) walk.tracks = stripped;
      const action = mixer.clipAction(walk);
      action.reset();
      action.setLoop(THREE.LoopRepeat, Infinity);
      action.play();
      animated = walk.duration > 0;
      console.log('[hero3d] clips:', animations.length, '| playing:', walk.name, '| tracks:', walk.tracks.length, '| dur:', walk.duration.toFixed(2));
    } else {
      console.warn('[hero3d] no usable animation clip found', animations);
    }
    if (opts.onReady) opts.onReady();
  }

  const onErr = (e) => { if (opts.onError) opts.onError(e); console.error('[hero3d]', e); };
  if (/\.fbx($|\?)/i.test(modelURL)) {
    import('three/addons/loaders/FBXLoader.js').then(({ FBXLoader }) => {
      new FBXLoader().load(modelURL, (obj) => processModel(obj, obj.animations), undefined, onErr);
    }).catch(onErr);
  } else {
    const loader = new GLTFLoader();
    loader.setMeshoptDecoder(MeshoptDecoder);
    loader.load(modelURL, (gltf) => processModel(gltf.scene, gltf.animations), undefined, onErr);
  }

  // sizing
  function resize() {
    const w = container.clientWidth || 1, h = container.clientHeight || 1;
    renderer.setSize(w, h, false);
    composer.setSize(w, h);
    camera.aspect = w/h; camera.updateProjectionMatrix();
  }
  const ro = new ResizeObserver(resize); ro.observe(container); resize();

  // pointer parallax
  let tx = 0, ty = 0;
  container.addEventListener('pointermove', (e) => {
    const r = container.getBoundingClientRect();
    tx = ((e.clientX - r.left)/r.width - 0.5) * 0.5;
    ty = ((e.clientY - r.top)/r.height - 0.5) * 0.25;
  });
  container.addEventListener('pointerleave', () => { tx = 0; ty = 0; });

  // run only when visible
  const clock = new THREE.Clock();
  let visible = true;
  const io = new IntersectionObserver(([en]) => { visible = en.isIntersecting; }, { threshold: 0.01 });
  io.observe(container);

  let tSec = 0;
  const walkFace = opts.walkFace ?? 0;   // facing that points ALONG the phone's length
  renderer.setAnimationLoop(() => {
    if (!visible) return;
    const dt = clock.getDelta();
    tSec += dt;
    if (mixer) mixer.update(dt);
    // Unrigged model -> stand still with only a subtle breath (NO sliding).
    // Real stepping legs come from the rigged file; her walk clip drives it via `animated`.
    if (charModel && !animated) {
      charModel.position.set(0, charBaseY + Math.sin(tSec * 1.5) * 0.02, 0.1);
    }
    // live-location ping pulses under her feet
    { const p = (tSec % 1.6) / 1.6;
      if (charModel) { ping.position.x = charModel.position.x; ping.position.z = charModel.position.z; }
      ping.scale.setScalar(0.6 + p * 2.4); pingMat.opacity = 0.5 * (1 - p);
    }
    // hold a flattering fixed camera angle (no idle spin) + subtle pointer parallax
    root.rotation.y += ( (-0.5 + tx * 0.5) - root.rotation.y ) * 0.05;
    root.rotation.x += ( (ty * 0.3) - root.rotation.x ) * 0.05;
    composer.render();
  });

  return {
    dispose() {
      renderer.setAnimationLoop(null); ro.disconnect(); io.disconnect();
      renderer.dispose(); container.removeChild(renderer.domElement);
    }
  };
}
