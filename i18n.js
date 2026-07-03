/* Safer — lightweight EN/ES switcher.
   Swaps visible text by matching English strings to Spanish. Untranslated
   strings gracefully stay English. Choice persists in localStorage. */
(function () {
  const DICT = {
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
    "When something happens, every second matters.": "Cuando algo pasa, cada segundo cuenta.",
    "Safer helps you connect with the people you care about, share what's happening, and give them the context they need to respond faster in real time.": "Safer te ayuda a conectar con las personas que te importan, compartir lo que está pasando y darles el contexto que necesitan para responder más rápido, en tiempo real.",
    "Safer is a safety communication tool and is not a replacement for emergency services.": "Safer es una herramienta de comunicación de seguridad y no sustituye a los servicios de emergencia.",

    // ---- never walk alone ----
    "Walk with Safer": "Camina con Safer",
    "Never walk alone.": "Nunca camines sola.",
    "Walking home late, or somewhere new? Turn on Watch Me. The people you trust can see where you are — and if anything feels wrong, they'll know right away.": "¿Volviendo tarde a casa o en un lugar nuevo? Activa Vigílame. Las personas en quienes confías pueden ver dónde estás, y si algo va mal, lo sabrán de inmediato.",
    "See how Watch Me works": "Cómo funciona Vigílame",
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
