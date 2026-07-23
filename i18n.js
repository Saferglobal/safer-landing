/* Safer — lightweight EN/ES switcher.
   Swaps visible text by matching English strings to Spanish. Untranslated
   strings gracefully stay English. Choice persists in localStorage. */
(function () {
  const DICT = {
    "No spam — just one launch email when Safer goes live on iPhone.": "Sin spam — solo un correo cuando Safer se lance en iPhone.",
    // ---- nav / common ----
    "How Safer Works": "Cómo funciona Safer",
    "Use Cases": "Casos de uso",
    "Real Situations": "Situaciones reales",
    "Real situations": "Situaciones reales",
    "Resources": "Recursos",
    "Get Early Access": "Acceso anticipado",
    "See how it works": "Ver cómo funciona",
    "Community": "Comunidad",
    "Family": "Familia",
    "For her": "Para ella",
    "For him": "Para él",
    "Common Questions": "Preguntas frecuentes",
    "Privacy Policy": "Política de privacidad",
    "Safety Disclaimer": "Aviso de seguridad",
    "Contact Us": "Contáctanos",
    "Contact": "Contacto",
    "Terms of Use": "Términos de uso",
    "Delete Account": "Eliminar cuenta",
    "Data Request": "Solicitud de datos",
    "Product": "Producto",
    "Support": "Soporte",

    // ---- hero ----
    "Coming soon on iOS": "Muy pronto en iOS",
    "When you can't reach them, Safer does.": "Cuando no puedes contactarlos, Safer lo hace.",
    "Safer watches over you when you're more exposed — walking home, going on a date, going for a run, or sending your kids to school.": "Safer te cuida cuando estás más expuesta — al volver a casa, en una cita, saliendo a correr o cuando llevas a tus hijos al colegio.",
    "Share your live location, start smart monitoring, and alert your trusted people — with one tap or smart activation.": "Comparte tu ubicación en vivo, inicia el monitoreo inteligente y alerta a tus personas de confianza — con un toque o activación inteligente.",
    "Safer is a safety communication tool and is not a replacement for emergency services.": "Safer es una herramienta de comunicación de seguridad y no sustituye a los servicios de emergencia.",

    // ---- never walk alone ----
    "Meet Watch Me": "Conoce Vigílame",
    "Never walk alone.": "Nunca camines sola.",
    "Someone\'s with you, the whole way.": "Alguien te acompaña, todo el camino.",
    "Turn on Watch Me whenever you want to feel safer": "Activa Vigílame cuando quieras sentirte más segura",
    "— heading out, walking alone, or any time something feels off. While it's on, it watches over you, so you're never really alone.": "— al salir, caminando sola o cuando algo no se siente bien. Mientras está activo, te cuida, para que nunca estés realmente sola.",
    "See how Watch Me works": "Cómo funciona Vigílame",
    "Step 1": "Paso 1", "Step 2": "Paso 2", "Step 3": "Paso 3",
    "You turn it on": "Tú lo activas",
    "Going out, alone, or feeling uneasy? Start Watch Me whenever you want — you're in control.": "¿Sales, estás sola o te sientes incómoda? Activa Vigílame cuando quieras: tú tienes el control.",
    "It watches over you": "Te cuida",
    "While it's on, the people you trust can see where you are and know you're okay.": "Mientras está activo, las personas en quienes confías pueden ver dónde estás y saber que estás bien.",
    "If something goes wrong": "Si algo sale mal",
    "No time for a button. Just say your word or shake your phone — Safer alerts your people and takes over.": "No hay tiempo para un botón. Solo di tu palabra o agita el teléfono: Safer avisa a tus personas y se encarga.",
    "Watch Me": "Vigílame",
    "On my way home": "De camino a casa",
    "Live location": "Ubicación en vivo",
    "Shared with 3": "Compartida con 3",
    "Session active": "Sesión activa",
    "Trusted circle": "Círculo de confianza",
    "Alerted instantly": "Avisados al instante",

    // ---- real situations ----
    "Our lives are full of different situations.": "Nuestra vida está llena de situaciones distintas.",
    "Walking home alone late at night": "Caminando sola a casa de noche",
    "Something feels off and you don't know why": "Algo se siente raro y no sabes por qué",
    "Your kids heading back from school": "Tus hijos volviendo del colegio",
    "A solo hike, a late run, or a surf session with no one around": "Una caminata en solitario, salir a correr de noche o surfear sin nadie cerca",
    "Your elderly parent living alone, and you worry every night": "Tu padre o madre mayor viviendo solo, y te preocupas cada noche",
    "When something happens, there is no time to waste.": "Cuando algo pasa, no hay tiempo que perder.",

    // ---- AI watch me ----
    "AI Watch Me Mode": "Modo Vigílame con IA",
    "During the moments that matter most, set Safer to AI Watch Me Mode.": "En los momentos que más importan, activa el Modo Vigílame con IA de Safer.",
    "When you feel in danger, you should not need to explain everything.": "Cuando sientes peligro, no deberías tener que explicarlo todo.",
    "Say your secret word": "Di tu palabra secreta",
    "Shake your phone": "Agita tu teléfono",
    "Tap SOS": "Toca SOS",
    "Or simply talk to Safer": "O simplemente habla con Safer",
    "Safer can alert the right people, share your live location, and provide real-time context to support a faster response.": "Safer puede avisar a las personas indicadas, compartir tu ubicación en vivo y aportar contexto en tiempo real para lograr una respuesta más rápida.",
    "Even if you are stressed, confused, or not sure what to do, Safer helps turn your signal into a clear alert.": "Aunque estés estresada, confundida o no sepas qué hacer, Safer convierte tu señal en una alerta clara.",
    "Safer's mission is simple": "La misión de Safer es simple",
    "Help you reach the right people faster when it matters most.": "Ayudarte a llegar a las personas indicadas más rápido cuando más importa.",

    // ---- waitlist ----
    "Soon on the": "Muy pronto en",
    "Reach the right people faster.": "Llega a las personas indicadas más rápido.",
    "Safer is launching on iPhone. Join the waitlist and we'll notify you the moment it's ready to download — plus early access for you and your trusted circle.": "Safer llega pronto a iPhone. Únete a la lista de espera y te avisaremos en cuanto esté lista para descargar, con acceso anticipado para ti y tu círculo de confianza.",
    "Notify me": "Avísame",
    "You're on the list — we'll email you the moment Safer launches on iOS.": "Estás en la lista: te escribiremos en cuanto Safer llegue a iOS.",
    "iPhone & iOS first. No spam, just one launch email. Unsubscribe anytime.": "iPhone e iOS primero. Sin spam, solo un correo de lanzamiento. Cancela cuando quieras.",
    "Safer is a safety communication tool and is not a replacement for emergency services. In a life-threatening emergency, always call your local emergency number.": "Safer es una herramienta de comunicación de seguridad y no sustituye a los servicios de emergencia. En una emergencia que ponga en riesgo la vida, llama siempre a tu número de emergencia local.",
    "Your location is shared only with the people you choose. You're always in control.": "Tu ubicación se comparte solo con las personas que tú elijas. Siempre tienes el control.",

    // ---- footer ----
    "Reach the right people faster when it matters most. Alert, locate, and share real-time context with the people you care about.": "Llega a las personas indicadas más rápido cuando más importa. Avisa, ubica y comparte contexto en tiempo real con quienes te importan.",
    "Coming soon on": "Muy pronto en",
    "Join the waitlist →": "Únete a la lista de espera →",
    "Important:": "Importante:",
    "Safer is a personal safety communication tool and is not a replacement for emergency services, medical, or law-enforcement response. In a life-threatening emergency, always call your local emergency number (such as 911) first.": "Safer es una herramienta personal de comunicación de seguridad y no sustituye a los servicios de emergencia, médicos o policiales. En una emergencia que ponga en riesgo la vida, llama siempre primero a tu número de emergencia local (como el 911).",
    "© 2026 Safer Global. All rights reserved.": "© 2026 Safer Global. Todos los derechos reservados.",

    // ---- use-case pages ----
    "Use Cases · For her": "Casos de uso · Para ella",
    "Use Cases · For him": "Casos de uso · Para él",
    "Use Cases · Family": "Casos de uso · Familia",
    "Use Cases · Community": "Casos de uso · Comunidad",
    "How Safer helps": "Cómo ayuda Safer",
    "Simple when it matters most.": "Simple cuando más importa.",
    "Get home safe. Every time.": "Vuelve a casa a salvo. Siempre.",
    "Late walks, nights out, or any moment you feel uneasy — the people you trust are one tap away.": "Caminatas nocturnas, salidas o cualquier momento incómodo: las personas en quienes confías están a un toque.",
    "Start Watch Me": "Activa Vigílame",
    "Begin a session and your trusted circle can see your live location in real time.": "Inicia una sesión y tu círculo de confianza podrá ver tu ubicación en vivo en tiempo real.",
    "Just signal": "Solo señala",
    "Say your secret word, shake your phone, or tap SOS — Safer turns it into a clear alert.": "Di tu palabra secreta, agita el teléfono o toca SOS: Safer lo convierte en una alerta clara.",
    "Never alone": "Nunca sola",
    "Even if you're stressed or unsure, the right people get the context to respond fast.": "Aunque estés estresada o dudando, las personas indicadas reciben el contexto para responder rápido.",
    "Safer is launching on iPhone. Join the waitlist and we'll notify you the moment it's ready.": "Safer llega pronto a iPhone. Únete a la lista de espera y te avisaremos en cuanto esté lista.",
    "Solo doesn't mean alone.": "Solo no significa a solas.",
    "Late shifts, long drives, a solo hike or ride — someone you trust always knows where you are.": "Turnos de noche, viajes largos, una caminata o ruta en solitario: alguien de confianza siempre sabe dónde estás.",
    "Share your location": "Comparte tu ubicación",
    "Let the people you trust follow your live location while you're out.": "Deja que las personas en quienes confías sigan tu ubicación en vivo mientras estás fuera.",
    "One-tap SOS": "SOS de un toque",
    "If something goes wrong, one tap alerts your circle with your exact position.": "Si algo sale mal, un toque avisa a tu círculo con tu posición exacta.",
    "No one left wondering": "Nadie se queda con la duda",
    "Automatic check-ins mean nobody has to guess if you made it.": "Los avisos automáticos evitan que alguien tenga que adivinar si llegaste bien.",
    "Head out with backup.": "Sal con respaldo.",
    "Your whole family, one circle.": "Toda tu familia, un solo círculo.",
    "Know your kids got home and your parents are okay — without hovering over anyone.": "Entérate de que tus hijos llegaron y de que tus padres están bien, sin agobiar a nadie.",
    "Peace of mind, without hovering.": "Tranquilidad, sin agobiar.",
    "One private map": "Un mapa privado",
    "Everyone you love in one place, shared only with each other.": "Todos los que quieres en un solo lugar, compartido solo entre ustedes.",
    "Arrival alerts": "Alertas de llegada",
    "Get a nudge the moment your kids reach home or school.": "Recibe un aviso en cuanto tus hijos llegan a casa o al colegio.",
    "Help in one tap": "Ayuda con un toque",
    "Aging parents can reach the whole family instantly if they need to.": "Tus padres mayores pueden avisar a toda la familia al instante si lo necesitan.",
    "Keep your family close.": "Mantén a tu familia cerca.",
    "Look out for each other.": "Cuídense entre todos.",
    "Friends, neighbors, campus or colleagues — safety in numbers, made simple.": "Amigos, vecinos, campus o colegas: seguridad en grupo, de forma simple.",
    "Safety in numbers, made simple.": "Seguridad en grupo, de forma simple.",
    "Build your circle": "Crea tu círculo",
    "Create trusted groups for friends, family, or neighbors.": "Crea grupos de confianza para amigos, familia o vecinos.",
    "Share safe places": "Comparte lugares seguros",
    "Set the spots that matter and see arrivals within your circle.": "Marca los lugares que importan y ve las llegadas dentro de tu círculo.",
    "Everyone knows": "Todos se enteran",
    "When someone needs help, the whole group is alerted at once.": "Cuando alguien necesita ayuda, todo el grupo recibe el aviso a la vez.",
    "Stronger together.": "Más fuertes juntos.",
    // step labels
    "Start": "Empieza", "Signal": "Señala", "Reach": "Conecta",
    "Share": "Comparte", "Alert": "Alerta", "Confirm": "Confirma",
    "Together": "Juntos", "Arrivals": "Llegadas", "Connect": "Conecta",

    // ---- community use-case page ----
    "Safer for communities": "Safer para comunidades",
    "One alert.": "Una alerta.",
    "Everyone knows.": "Todos se enteran.",
    "Safer raises the alarm the moment you're in trouble — even when you can't reach your phone. And it doesn't protect one person. It protects everyone you add.": "Safer da la alarma en el momento en que estás en peligro, incluso cuando no puedes alcanzar tu teléfono. Y no protege a una sola persona: protege a todos los que agregues.",
    "No equipment · No control room · Just the app on the phone": "Sin equipos · Sin central de control · Solo la app en el teléfono",
    // live-alert panel
    "Live alert": "Alerta en vivo",
    "Watch Me active · walking home": "Watch Me activo · volviendo a casa",
    "Your circle notified": "Tu círculo fue avisado",
    "4 contacts · live location shared": "4 contactos · ubicación en vivo compartida",
    "Eli is responding": "Eli está respondiendo",
    "closest · 3 min away": "el más cercano · a 3 min",
    // the end result
    "The end result": "El resultado final",
    "What changes when your community carries Safer.": "Lo que cambia cuando tu comunidad lleva Safer.",
    "Freedom": "Libertad", "Calm": "Calma", "Voice": "Voz",
    "You walk out the door lighter": "Sales por la puerta más tranquilo",
    "The late walk home, the early run, the visit across town — someone is quietly watching over you the whole way.": "La vuelta a casa de noche, el trote temprano, la visita al otro lado de la ciudad: alguien te cuida en silencio todo el camino.",
    "Help comes even when you can't call": "La ayuda llega aunque no puedas llamar",
    "Hands full, phone in a pocket, no time to dial — the alarm still fires, and the right people already know where you are.": "Con las manos ocupadas, el teléfono en el bolsillo, sin tiempo para marcar: la alarma se activa igual, y las personas indicadas ya saben dónde estás.",
    "Your people stop worrying": "Los tuyos dejan de preocuparse",
    "Parents, spouses, community leaders — they know that if anything ever happens, they'll know in seconds. Calm becomes the default.": "Padres, parejas, líderes comunitarios: saben que si algo llega a pasar, se enterarán en segundos. La calma pasa a ser lo normal.",
    "SOS + Watch Me": "SOS + Watch Me",
    "One screen, always ready": "Una pantalla, siempre lista",
    "Your circle sees you live": "Tu círculo te ve en vivo",
    // three ways
    "Live in the app today": "Ya disponible en la app",
    "Three ways to call for help.": "Tres formas de pedir ayuda.",
    "Just say the word": "Solo di la palabra",
    "Say your safe word out loud and Safer raises the alarm — phone locked, in a pocket, mid-call. Your voice is enough.": "Di tu palabra clave en voz alta y Safer da la alarma: con el teléfono bloqueado, en el bolsillo o en plena llamada. Tu voz basta.",
    "Turn on Watch Me": "Activa Watch Me",
    "Heading out? Safer quietly watches over you — following your location and listening for trouble, visible on your lock screen.": "¿Vas a salir? Safer te cuida en silencio: sigue tu ubicación y escucha si algo va mal, visible en tu pantalla de bloqueo.",
    "Tap SOS": "Toca SOS",
    "One tap alerts the people you trust with your exact location. A short countdown makes an accidental tap easy to cancel.": "Un toque avisa a las personas en las que confías con tu ubicación exacta. Una cuenta atrás corta permite cancelar fácilmente un toque accidental.",
    // alert chain
    "When an alert fires": "Cuando se dispara una alerta",
    "Seconds, not minutes.": "Segundos, no minutos.",
    "The alarm is raised": "Se da la alarma",
    "By your voice, a tap, or Watch Me. Whatever way you reach for, the same alert chain fires.": "Con tu voz, un toque o Watch Me. Elijas el modo que elijas, se activa la misma cadena de alerta.",
    "Your circle knows instantly": "Tu círculo se entera al instante",
    "Every trusted contact gets the alarm with your live location — family, friends, neighbors, the people you chose.": "Cada contacto de confianza recibe la alarma con tu ubicación en vivo: familia, amigos, vecinos, las personas que elegiste.",
    "The right person moves": "La persona indicada actúa",
    "Whoever is closest and awake responds, calls you, or comes to you. Everyone else can see it's being handled.": "Quien esté más cerca y despierto responde, te llama o va hacia ti. Los demás pueden ver que ya se está atendiendo.",
    // for your community
    "For your community": "Para tu comunidad",
    "What a connected community gets.": "Lo que gana una comunidad conectada.",
    "Built with real communities in mind: a family at home, a synagogue, a school, a Chabad house whose doors are always open.": "Pensado para comunidades reales: una familia en casa, una sinagoga, una escuela, una casa Jabad cuyas puertas siempre están abiertas.",
    "Live today": "Ya disponible",
    "Alerts reach everyone who matters": "Las alertas llegan a todos los que importan",
    "Each member builds their trusted circle. When one person is in trouble, their whole circle knows in seconds, with live location.": "Cada miembro arma su círculo de confianza. Cuando una persona está en peligro, todo su círculo se entera en segundos, con ubicación en vivo.",
    "Watch over each other": "Cuídense entre ustedes",
    "Mutual Watch Me lets two people keep an eye on each other's journey — walking home late, traveling, visiting family across town.": "El Watch Me mutuo permite que dos personas se cuiden el trayecto: volver a casa tarde, viajar, visitar familia al otro lado de la ciudad.",
    // roadmap
    "On the roadmap": "En la hoja de ruta",
    "What's coming next.": "Lo que viene.",
    "In active development — not in the app yet. We build these with our founding communities.": "En desarrollo activo, todavía no está en la app. Lo construimos junto a nuestras comunidades fundadoras.",
    "Coming": "Próximamente",
    "Family & group circles": "Círculos de familia y grupo",
    "One shared circle for the whole household or community group: live statuses, alert fan-out, and \"everyone home safe\" at a glance.": "Un círculo compartido para todo el hogar o grupo comunitario: estados en vivo, difusión de alertas y \"todos en casa a salvo\" de un vistazo.",
    "Check-in timers": "Temporizadores de confirmación",
    "\"If I don't confirm in 20 minutes, alert my circle.\" For the visit, the walk, the drive that should be routine but isn't guaranteed.": "\"Si no confirmo en 20 minutos, avisa a mi círculo.\" Para la visita, la caminata o el viaje que deberían ser rutina pero no están garantizados.",
    "Deterrence, not just detection": "Disuasión, no solo detección",
    "Siren, flashing screen, and a voice that says out loud that help is on the way. The goal is to end an incident, not just record it.": "Sirena, pantalla parpadeante y una voz que dice en voz alta que la ayuda está en camino. El objetivo es terminar el incidente, no solo registrarlo.",
    "Someone always answers": "Siempre hay alguien que responde",
    "Professional 24/7 monitored response as a fallback, for the 3am moment when your circle is asleep in another timezone.": "Respuesta profesional monitoreada 24/7 como respaldo, para ese momento a las 3 de la mañana en que tu círculo duerme en otra zona horaria.",
    // leaders
    "For community leaders": "Para líderes comunitarios",
    "Bring Safer to your community.": "Lleva Safer a tu comunidad.",
    "You know who walks home late, who opens the building, who's out visiting families after dark. Safer puts them all inside one safety net — with nothing to install in the building and nothing to buy. Your members simply put the app on their phones, and we'll set it up with you, free to start.": "Sabes quién vuelve caminando tarde, quién abre el edificio, quién sale a visitar familias de noche. Safer los coloca a todos dentro de una misma red de protección, sin instalar nada en el edificio y sin comprar nada. Tus miembros solo instalan la app en sus teléfonos, y lo configuramos contigo, gratis para empezar.",
    "Get my invite": "Quiero mi invitación",
    "A member's location is shared only with the circle they chose, and only when they raise an alert or turn on Watch Me — never silently.": "La ubicación de un miembro se comparte solo con el círculo que eligió, y solo cuando da una alerta o activa Watch Me; nunca en silencio.",
    // closing
    "We are each responsible for one another —": "Somos responsables los unos de los otros:",
    ". Safer makes it fast: one alert, and the people who care already know. Join the early-access list, add your circle — every person who joins makes the whole net stronger.": ". Safer lo hace rápido: una alerta, y las personas que te quieren ya lo saben. Únete a la lista de acceso anticipado, suma tu círculo: cada persona que entra hace más fuerte toda la red.",
    "Safer is a safety communication tool and is not a replacement for emergency services. Features marked \"Coming\" are in development.": "Safer es una herramienta de comunicación de seguridad y no sustituye a los servicios de emergencia. Las funciones marcadas como \"Próximamente\" están en desarrollo.",
  };

  const KEY = "safer_lang";
  function textNodes() {
    const w = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, null);
    const a = []; while (w.nextNode()) a.push(w.currentNode); return a;
  }
  function toES() {
    textNodes().forEach(n => {
      const t = n.nodeValue.trim();
      if (t && DICT[t]) { if (n.__en === undefined) n.__en = n.nodeValue; n.nodeValue = n.nodeValue.replace(t, DICT[t]); }
    });
    document.querySelectorAll("[placeholder]").forEach(el => {
      const t = el.getAttribute("placeholder");
      if (DICT[t]) { el.dataset.enPh = t; el.setAttribute("placeholder", DICT[t]); }
      else if (t === "you@email.com") { el.dataset.enPh = t; el.setAttribute("placeholder", "tu@email.com"); }
    });
  }
  function toEN() {
    textNodes().forEach(n => { if (n.__en !== undefined) n.nodeValue = n.__en; });
    document.querySelectorAll("[data-en-ph]").forEach(el => el.setAttribute("placeholder", el.dataset.enPh));
  }
  function setLang(lang) {
    toEN();
    if (lang === "es") toES();
    document.documentElement.lang = lang;
    try { localStorage.setItem(KEY, lang); } catch (e) {}
    document.querySelectorAll(".lang-cur").forEach(e => e.textContent = lang.toUpperCase());
    document.querySelectorAll("[data-lang]").forEach(b => b.setAttribute("aria-current", b.dataset.lang === lang ? "true" : "false"));
  }
  window.setLang = setLang;
  document.addEventListener("click", e => {
    const b = e.target.closest("[data-lang]");
    if (b) { e.preventDefault(); setLang(b.dataset.lang); }
  });
  function init() {
    let saved = "en";
    try { saved = localStorage.getItem(KEY) || "en"; } catch (e) {}
    if (saved === "es") setLang("es");
    else document.querySelectorAll(".lang-cur").forEach(e => e.textContent = "EN");
  }
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", init);
  else init();
})();
