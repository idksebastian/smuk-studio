export const WA_NUMBER = "573227665148";
export const WA_BASE =
  "https://api.whatsapp.com/send/?phone=" +
  WA_NUMBER +
  "&type=phone_number&app_absent=0&utm_source=web";

export const NEQUI = {
  nombre: "Ana Reyes",
  banco: "Nequi / Llaves",
  numero: "3105265164",
};

// ─── EXTENSIONES DE PESTAÑAS ───────────────────────────────
export const extensiones = [
  {
    id: "pestanina",
    slug: "clasicas-efecto-pestanina",
    nombre: "Clásicas",
    subtitulo: "Efecto Pestañina",
    shortDesc: "Mirada más oscura y definida, como si llevaras pestañina todo el tiempo.",
    descripcion:
      "Las pestañas efecto pestañina hacen que tus pestañas se vean más oscuras, definidas y con más presencia, como si tuvieras pestañina puesta todo el tiempo. El resultado es natural pero muy bonito, ideal si quieres resaltar tu mirada sin que se vean demasiado cargadas.",
    recomendado:
      "Personas que quieren verse más arregladas todos los días con pestañas definidas, sin tener que maquillarlas. Ideal para quienes tienen buena cantidad de pestañas naturales.",
    precios: { set: "$75.000", retoque: "$60.000" },
    image: "/efecto-pestanina.jpg",
    waMessage:
      "Hola Valentina! Me interesa el set de *Pestañas Clásicas Efecto Pestañina* en Smuk Studio. ¿Cuándo tienes disponibilidad? 💫",
  },
  {
    id: "tecnorimel",
    slug: "tecno-rimel-aura",
    nombre: "Tecno Rimel",
    subtitulo: "Aura",
    shortDesc: "Efecto rímel natural con fibra plana de mayor retención y durabilidad.",
    descripcion:
      "Extensiones que crean un efecto similar al rímel, dando una mirada más oscura, definida y natural. Se aplica una extensión sobre cada pestaña natural, logrando un resultado limpio, elegante y con mayor intensidad. Gracias a su fibra plana, ofrecen mayor retención y mejor adherencia.",
    recomendado:
      "Perfectas para quienes desean resaltar su mirada sin perder naturalidad y quieren extensiones que duren más tiempo.",
    precios: { set: "$85.000", retoque: "$60.000" },
    image: "/efecto-tecno-rimel.jpg",
    waMessage:
      "Hola Valentina! Me interesa el set de *Tecno Rimel Aura* en Smuk Studio. ¿Cuándo tienes disponibilidad? ✨",
  },
  {
    id: "brasileno",
    slug: "brasileno-fibras-tecnologicas",
    nombre: "Brasileño",
    subtitulo: "Fibras Tecnológicas",
    shortDesc: "Más volumen y definición con fibras tecnológicas. Resultado lleno y llamativo.",
    descripcion:
      "Extensiones que aportan más volumen y definición a la mirada, creando un efecto más lleno y llamativo. Se aplican fibras tecnológicas sobre cada pestaña natural, logrando un resultado ligero, cómodo y elegante.",
    recomendado:
      "Ideales para quienes desean unas pestañas más voluminosas sin perder naturalidad.",
    precios: { set: "$90.000", retoque: "$65.000" },
    image: "/efecto-brasileno.jpg",
    waMessage:
      "Hola Valentina! Me interesa el set *Brasileño Fibras Tecnológicas* en Smuk Studio. ¿Cuándo tienes disponibilidad? 🌟",
  },
  {
    id: "arabe",
    slug: "arabe",
    nombre: "Árabe",
    subtitulo: "",
    shortDesc: "Volumen pronunciado con fibras tecnológicas. Mirada más intensa y estructurada.",
    descripcion:
      "Extensiones que aportan más volumen y definición a la mirada, creando un efecto más lleno y llamativo. Se aplican fibras tecnológicas sobre cada pestaña natural, logrando un resultado ligero, cómodo y elegante. Son ideales para quienes desean unas pestañas más voluminosas sin perder naturalidad.",
    recomendado:
      "Para quienes buscan una mirada más cargada, con volumen y estructura bien marcados.",
    precios: { set: "$110.000", retoque: "$70.000" },
    image: "/efecto-arabe.jpg",
    waMessage:
      "Hola Valentina! Me interesa el set *Árabe* en Smuk Studio. ¿Cuándo tienes disponibilidad? 💛",
  },
  {
    id: "egipcio",
    slug: "egipcio",
    nombre: "Egipcio",
    subtitulo: "",
    shortDesc: "Look dramático y glamuroso con abanicos de 5 fibras. Mirada fuerte y marcada.",
    descripcion:
      "Un volumen más marcado y esponjoso usando abanicos de 5 fibras, creando un look dramático, definido y glamuroso. Ideal para clientas que aman una mirada fuerte y bien marcada.",
    recomendado:
      "Para clientas que aman una mirada fuerte, bien marcada y con mucho volumen.",
    precios: { set: "$115.000", retoque: "$75.000" },
    image: "/efecto-egipcio.jpg",
    waMessage:
      "Hola Valentina! Me interesa el set *Egipcio* en Smuk Studio. ¿Cuándo tienes disponibilidad? 👁️",
  },
  {
    id: "wispy",
    slug: "wispy-tecnologico",
    nombre: "Wispy",
    subtitulo: "Tecnológico",
    shortDesc: "Volumen con picos (spikes) para una mirada intensa, elegante y alargada.",
    descripcion:
      "Este set combina volumen tecnológico con picos (spikes), creando un efecto más definido, estilizado y llamativo. Es ideal para quienes buscan una mirada intensa y elegante, con picos que resaltan y alargan visualmente los ojos.",
    recomendado:
      "Para quienes buscan una mirada intensa, elegante y visualmente alargada.",
    precios: { set: "$120.000", retoque: "$85.000" },
    image: "/efecto-wispy.jpg",
    waMessage:
      "Hola Valentina! Me interesa el set *Wispy Tecnológico* en Smuk Studio. ¿Cuándo tienes disponibilidad? ✨",
  },
  {
    id: "retiro",
    slug: "retiro-extensiones",
    nombre: "Retiro de Extensiones",
    subtitulo: "",
    shortDesc: "Retiro seguro y sin daño de extensiones anteriores antes de tu nuevo set.",
    descripcion:
      "El retiro de extensiones es un procedimiento en el que se disuelve el adhesivo de las extensiones actuales de forma segura, sin jalar ni dañar las pestañas naturales. Es el primer paso antes de cualquier set nuevo cuando ya tienes extensiones puestas.",
    beneficios: [
      "Proceso seguro que no daña la pestaña natural",
      "Necesario antes de aplicar un set nuevo sobre extensiones viejas",
      "Tiempo aproximado: 20 a 30 minutos",
    ],
    recomendado:
      "Para clientas que llegan con extensiones puestas (de Smuk o de otro lugar) y desean un set nuevo.",
    precios: {
      smuk: "$5.000",
      otroLugar: "$10.000",
    },
    image: "/efecto-retiro.jpg",
    waMessage:
      "Hola Valentina! Necesito un *retiro de extensiones* antes de mi cita en Smuk Studio. ¿Cuándo tienes disponibilidad?",
  },
];

// ─── LIFTING ───────────────────────────────────────────────
export const lifting = {
  id: "lifting",
  slug: "lifting-de-pestanas",
  nombre: "Lifting de Pestañas",
  subtitulo: "",
  shortDesc: "Eleva y curva tus pestañas naturales desde la raíz. Sin extensiones.",
  descripcion:
    "El lifting de pestañas es un procedimiento que eleva, curva y estiliza las pestañas naturales desde la raíz, logrando una mirada más abierta y definida sin necesidad de extensiones. Este tratamiento trabaja con tus propias pestañas, dándoles una curvatura más bonita y un efecto más largo y levantado.",
  beneficios: [
    "Realza las pestañas naturales",
    "Da un efecto de mayor longitud y curvatura",
    "Mirada más abierta y expresiva",
    "No requiere mantenimiento diario",
    "Resultado natural",
  ],
  durabilidad: "Entre 6 y 8 semanas, dependiendo del ciclo natural de las pestañas y los cuidados.",
  recomendado:
    "Personas que desean resaltar sus pestañas naturales, especialmente quienes las tienen rectas, caídas o quieren un efecto natural sin extensiones.",
  precios: { unico: "$80.000" },
  image: "/efecto-lifting.jpg",
  waMessage:
    "Hola Valentina! Me interesa el *Lifting de Pestañas* en Smuk Studio. ¿Cuándo tienes disponibilidad? 🌿",
};

// ─── SERVICIOS DE CEJAS ────────────────────────────────────
export const cejas = [
  {
    id: "depilacion-cera",
    slug: "depilacion-cera-cejas",
    nombre: "Depilación en Cera",
    subtitulo: "Cejas",
    shortDesc: "Define y limpia la forma de la ceja retirando el vello desde la raíz.",
    descripcion:
      "La depilación en cera para cejas permite retirar el vello desde la raíz, ayudando a definir y limpiar la forma de la ceja de manera rápida y precisa. Deja la piel más suave y el vello tarda más en volver a crecer que con rasurado.",
    recomendado:
      "Ideal para quienes quieren cejas más limpias y definidas con un método rápido y duradero.",
    precios: {
      conDiseno: "$12.000",
      sinDiseno: "$10.000",
      bigote: "$6.000",
    },
    image: "/efecto-depilacion-cera.jpg",
    waMessage:
      "Hola Valentina! Me interesa la *Depilación en Cera de cejas* en Smuk Studio. ¿Cuándo tienes disponibilidad?",
  },
  {
    id: "depilacion-hilo",
    slug: "depilacion-hilo-cejas",
    nombre: "Depilación en Hilo",
    subtitulo: "Cejas",
    shortDesc: "Técnica árabe de alta precisión. Ideal para piel sensible y vellos finos.",
    descripcion:
      "La depilación en hilo es una técnica que elimina el vello desde la raíz utilizando un hilo de algodón, permitiendo retirar incluso los vellos más finos con mucha precisión. Es un método natural, delicado con la piel y muy utilizado especialmente en el rostro.",
    zonas: ["Cejas", "Bozo (bigote)", "Patillas", "Mentón", "Frente", "Mejillas"],
    recomendado:
      "Personas con piel sensible o alérgicas a la cera que buscan una depilación precisa y delicada.",
    precios: {
      cejas: "$20.000",
      bigote: "$12.000",
    },
    image: "/efecto-depilacion-hilo.jpg",
    waMessage:
      "Hola Valentina! Me interesa la *Depilación en Hilo de cejas* en Smuk Studio. ¿Cuándo tienes disponibilidad?",
  },
  {
    id: "henna",
    slug: "pigmento-henna-cejas",
    nombre: "Pigmento en Henna",
    subtitulo: "Cejas",
    shortDesc: "Coloración natural que pigmenta piel y vello. Cejas definidas sin maquillaje.",
    descripcion:
      "La henna para cejas es un pigmento de origen natural que da color y definición a las cejas, logrando un efecto más relleno y definido sin necesidad de maquillaje. Pigmenta tanto el vello como la piel, cubriendo espacios donde hay pocos pelitos y creando una apariencia de cejas más pobladas.",
    durabilidad:
      "De 5 a 10 días en la piel (según tipo de piel y cuidados) y hasta 3 o 4 semanas en el vello.",
    recomendado:
      "Ideal para personas con cejas con espacios, que quieren verlas más definidas sin maquillarlas todos los días.",
    precios: { unico: "$25.000" },
    image: "/efecto-henna.jpg",
    waMessage:
      "Hola Valentina! Me interesa el *Pigmento en Henna* para cejas en Smuk Studio. ¿Cuándo tienes disponibilidad? 🌿",
  },
  {
    id: "laminado",
    slug: "laminado-cejas",
    nombre: "Laminado de Cejas",
    subtitulo: "",
    shortDesc: "Alinea, peina y fija los vellos de las cejas. Efecto poblado y estructurado.",
    descripcion:
      "El laminado de cejas es un procedimiento que ayuda a alinear, peinar y fijar los vellos de las cejas, logrando que se vean más ordenadas, definidas y con mayor volumen. Trabaja con tus cejas naturales para darles una forma más estructurada y uniforme.",
    beneficios: [
      "Cejas más ordenadas y definidas",
      "Efecto de mayor volumen",
      "Ayuda a controlar vellos rebeldes",
      "Resultado natural y estilizado",
    ],
    durabilidad: "Entre 4 y 6 semanas, dependiendo del crecimiento natural del vello y los cuidados.",
    recomendado:
      "Personas con cejas rebeldes, poco definidas o que desean un efecto de cejas más pobladas y peinadas.",
    precios: { unico: "$80.000" },
    image: "/efecto-laminado.jpg",
    waMessage:
      "Hola Valentina! Me interesa el *Laminado de Cejas* en Smuk Studio. ¿Cuándo tienes disponibilidad? 💛",
  },
];

// ─── POLÍTICAS ─────────────────────────────────────────────
export const politicas = {
  abono: {
    valor: "$10.000",
    descripcion:
      "Para confirmar y asegurar tu espacio en la agenda se requiere un abono de $10.000 mediante transferencia. Este abono no es reembolsable en caso de cancelación o no asistencia. El valor será descontado del costo total de tu servicio.",
  },
  puntualidad: "Tolerancia de 10 minutos. Pasado este tiempo la cita puede ser cancelada.",
  retoque: "Recomendado entre los 15 y 20 días. El mantenimiento se realiza cuando conservas al menos el 50% del set.",
  retiro: { smuk: "$5.000", otroLugar: "$10.000" },
  pagos: ["Efectivo (traer el dinero lo más exacto posible)", "Nequi", "Transferencia por llaves"],
};

// ─── FAQ ───────────────────────────────────────────────────
export const faqs = [
  {
    pregunta: "¿Cuánto dura el procedimiento de extensiones?",
    respuesta:
      "Depende de la cantidad de pestañas naturales que tengas. Generalmente el proceso tarda entre 1h40min y 2 horas máximo. Te recomendamos llegar puntual para aprovechar todo el tiempo de la cita.",
  },
  {
    pregunta: "¿Necesito un abono para reservar mi cita?",
    respuesta:
      "Sí. Para confirmar y asegurar tu espacio en la agenda se requiere un abono de $10.000 mediante transferencia a Nequi (Ana Reyes – 3105265164). Este valor se descuenta del total del servicio y no es reembolsable en caso de cancelación o no asistencia.",
  },
  {
    pregunta: "¿Cuándo debo venir a retoque?",
    respuesta:
      "El retoque recomendado es entre los 15 y 20 días después del set nuevo. El mantenimiento aplica cuando conservas al menos el 50% del set. Pasado ese tiempo se considera montaje completo.",
  },
  {
    pregunta: "¿Puedo venir con extensiones de otro lugar?",
    respuesta:
      "Sí, pero primero se realiza el retiro de las extensiones anteriores. El costo del retiro es de $5.000 si fueron aplicadas en Smuk Studio, o $10.000 si vienen de otro lugar.",
  },
  {
    pregunta: "¿Qué extensión me conviene según mi estilo?",
    respuesta:
      "Si buscas algo natural, las Clásicas o el Tecno Rimel son perfectas. Si quieres más volumen, el Brasileño o el Árabe son ideales. Para un look más dramático y glamuroso, el Egipcio o el Wispy son tu opción. ¡Podemos asesorarte por WhatsApp antes de tu cita!",
  },
  {
    pregunta: "¿Cómo cuido mis extensiones en casa?",
    respuesta:
      "Evita mojar las extensiones las primeras 24 horas, no uses productos con aceite cerca de los ojos, no las frotes ni jales, y péinalas suavemente con un cepillo de pestañas. Con los cuidados correctos duran mucho más.",
  },
  {
    pregunta: "¿El lifting daña mis pestañas naturales?",
    respuesta:
      "No. El lifting trabaja con tus propias pestañas y no añade ningún elemento externo. Es un procedimiento seguro que eleva y curva la pestaña desde la raíz. El resultado dura entre 6 y 8 semanas de forma natural.",
  },
  {
    pregunta: "¿Puedo combinar servicios en una misma cita?",
    respuesta:
      "Sí, puedes combinar por ejemplo extensiones con depilación de cejas o pigmento en henna. Te recomendamos mencionarlo al momento de reservar para apartar el tiempo necesario.",
  },
  {
    pregunta: "¿Qué pasa si llego tarde a mi cita?",
    respuesta:
      "Manejamos una tolerancia de 10 minutos. Si llegas después de ese tiempo, la cita puede ser cancelada y el abono no es reembolsable. ¡Te recomendamos llegar con tiempo!",
  },
  {
    pregunta: "¿Cuáles son los métodos de pago?",
    respuesta:
      "Aceptamos efectivo (te pedimos traer el valor lo más exacto posible ya que manejamos cambio limitado), Nequi y transferencia por llaves. El abono de reserva siempre va por transferencia.",
  },
];

// ─── TESTIMONIOS ───────────────────────────────────────────
export const testimonials = [];