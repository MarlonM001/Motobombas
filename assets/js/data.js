// Contenido de cada servicio: tarjeta + modal de detalle.
export const SERVICES = {
  mantenimiento: {
    title: 'Mantenimiento Preventivo y Correctivo',
    desc: 'Revisión periódica y reparación inmediata de tu equipo de bombeo, con repuestos originales.',
    thumb: 'Foto: mantenimiento preventivo y correctivo',
    image: 'assets/video/preventivo.png',
    thumbImage: 'assets/video/preventivo-thumb.png',
    points: [
      'Preventivo: inspección de motor, eje y acoples',
      'Preventivo: verificación de presión y caudal',
      'Preventivo: lubricación de partes móviles y revisión de conexiones eléctricas',
      'Correctivo: diagnóstico y reparación de fallas eléctricas y mecánicas',
      'Correctivo: sustitución de piezas dañadas con repuestos originales',
      'Correctivo: cambio de sellos mecánicos (elimina fugas y protege el motor)',
      'Correctivo: cambio de rodamientos con balanceo del rotor (reduce vibración y ruido)',
      'Garantía por escrito en todo el servicio'
    ]
  },
  filtros: {
    title: 'Limpieza de filtros',
    desc: 'Limpieza profunda para mantener la eficiencia de filtrado.',
    thumb: 'Foto: limpieza de filtros',
    image: 'assets/video/filtros.png',
    thumbImage: 'assets/video/filtros-thumb.png',
    points: [
      'Retrolavado y limpieza de arena o cartucho',
      'Revisión de válvulas selectoras',
      'Verificación de presión de trabajo',
      'Detección de fugas en tapas y O-rings',
      'Recomendación de frecuencia de limpieza'
    ]
  },
  instalacion: {
    title: 'Instalación de Equipos y Sistemas Automatizados',
    desc: 'Instalación profesional de electrobombas, tableros de control y sistemas automatizados, correctamente dimensionados para tu vivienda o negocio.',
    thumb: 'Foto: instalación de equipos',
    image: 'assets/video/instalacion.png',
    thumbImage: 'assets/video/instalacion-thumb.png',
    points: [
      'Cálculo de caudal, potencia y dimensionamiento del equipo',
      'Instalación de tuberías, válvulas y conexiones hidráulicas',
      'Instalación de tableros de control y sistemas automatizados',
      'Instalación de sensores de nivel, presostatos y protecciones eléctricas',
      'Conexión eléctrica segura',
      'Puesta en marcha, pruebas de funcionamiento y calibración',
      'Capacitación básica de uso al cliente'
    ]
  },
  diagnostico: {
    title: 'Diagnóstico técnico',
    desc: 'Evaluación completa para identificar el origen exacto de la falla.',
    thumb: 'Foto: diagnóstico técnico',
    image: 'assets/video/diagnostico.png',
    thumbImage: 'assets/video/diagnostico-thumb.png',
    points: [
      'Revisión eléctrica y mecánica completa',
      'Medición de consumo y presión',
      'Identificación de causa raíz',
      'Cotización detallada de la reparación',
      'Reporte técnico con evidencia fotográfica'
    ]
  },
  hidroflomk: {
    title: 'Sistema Hidroflo MK — Presión Automatizada',
    desc: 'Sistema hidroneumático automatizado que entrega más presión de agua de forma constante, sin operar la bomba manualmente.',
    thumb: 'Foto: sistema Hidroflo MK',
    image: 'assets/video/SistemaHidroflo.png',
    thumbImage: 'assets/video/SistemaHidroflo-thumb.png',
    points: [
      'Más presión y caudal constante en toda la vivienda o negocio',
      'Encendido y apagado 100% automático por presión',
      'Ideal para edificios, conjuntos residenciales y locales comerciales',
      'Instalación, configuración y calibración del sistema',
      'Mantenimiento y soporte técnico especializado'
    ]
  },
  sumergibles: {
    title: 'Bombas Sumergibles — Pozos Profundos y Aguas Negras',
    desc: 'Venta, instalación y mantenimiento de bombas sumergibles tipo lapicero para pozos profundos y sistemas de aguas negras, además de sumergibles convencionales.',
    thumb: 'Foto: bombas sumergibles tipo lapicero',
    image: 'assets/video/BombasSumergibles.png',
    thumbImage: 'assets/video/BombasSumergibles-thumb.png',
    points: [
      'Bombas sumergibles tipo lapicero para pozos profundos',
      'Bombas sumergibles para aguas negras y aguas residuales',
      'Cálculo de profundidad, caudal y potencia requerida',
      'Instalación especializada en pozo o cárcamo',
      'Mantenimiento, diagnóstico y reparación de sumergibles'
    ]
  }
};

// Galería de trabajos realizados por servicio. Estructura lista para recibir
// fotos reales: agregar objetos { src: 'assets/gallery/archivo.jpg', alt: '...' }
// al arreglo del servicio correspondiente cuando estén disponibles.
export const GALLERY = {
  mantenimiento: [
    { src: 'assets/gallery/MantenimientoPreventivo1.jpg', alt: 'Mantenimiento preventivo de electrobomba 1' },
    { src: 'assets/gallery/MantenimientoPreventivo2.jpg', alt: 'Mantenimiento preventivo de electrobomba 2' },
    { src: 'assets/gallery/MantenimientoPreventivo3.jpg', alt: 'Mantenimiento preventivo de electrobomba 3' },
    { src: 'assets/gallery/MantenimientoPreventivo4.jpg', alt: 'Mantenimiento preventivo de electrobomba 4' }
  ],
  filtros: [
    { src: 'assets/gallery/Limpiezafiltros1.jpg', alt: 'Limpieza de filtros 1' },
    { src: 'assets/gallery/Limpiezafiltros2.jpg', alt: 'Limpieza de filtros 2' },
    { src: 'assets/gallery/Limpiezafiltros3.jpg', alt: 'Limpieza de filtros 3' },
    { src: 'assets/gallery/Limpiezafiltros4.jpg', alt: 'Limpieza de filtros 4' }
  ],
  instalacion: [
    { src: 'assets/gallery/InstalacionEquipos1.jpg', alt: 'Instalación de equipos 1' },
    { src: 'assets/gallery/InstalacionEquipos2.jpg', alt: 'Instalación de equipos 2' },
    { src: 'assets/gallery/InstalacionEquipos3.jpg', alt: 'Instalación de equipos 3' },
    { src: 'assets/gallery/InstalacionEquipos4.jpg', alt: 'Instalación de equipos 4' }
  ],
  diagnostico: [
    { src: 'assets/gallery/DiagnosticoTecnico1.jpg', alt: 'Diagnóstico técnico 1' },
    { src: 'assets/gallery/DiagnosticoTecnico2.jpg', alt: 'Diagnóstico técnico 2' },
    { src: 'assets/gallery/DiagnosticoTecnico3.jpg', alt: 'Diagnóstico técnico 3' },
    { src: 'assets/gallery/DiagnosticoTecnico4.jpg', alt: 'Diagnóstico técnico 4' }
  ],
  hidroflomk: [
    { src: 'assets/gallery/SistemaHidroflo1.jpg', alt: 'Sistema Hidroflo MK 1' },
    { src: 'assets/gallery/SistemaHidroflo2.jpg', alt: 'Sistema Hidroflo MK 2' },
    { src: 'assets/gallery/SistemaHidroflo3.jpg', alt: 'Sistema Hidroflo MK 3' },
    { src: 'assets/gallery/SistemaHidroflo4.jpg', alt: 'Sistema Hidroflo MK 4' }
  ],
  sumergibles: [
    { src: 'assets/gallery/BombasSumergibles1.jpg', alt: 'Bombas sumergibles tipo lapicero 1' },
    { src: 'assets/gallery/BombasSumergibles2.jpg', alt: 'Bombas sumergibles tipo lapicero 2' },
    { src: 'assets/gallery/BombasSumergibles3.jpg', alt: 'Bombas sumergibles tipo lapicero 3' },
    { src: 'assets/gallery/BombasSumergibles4.jpg', alt: 'Bombas sumergibles tipo lapicero 4' }
  ]
};

export const FAQS = [
  {
    q: '¿Qué tan rápido pueden atender una emergencia?',
    a: 'Coordinamos la visita técnica en menos de 24 horas desde que nos contactas.'
  },
  {
    q: '¿El servicio incluye garantía?',
    a: 'Sí, todo trabajo realizado incluye garantía por escrito.'
  },
  {
    q: '¿Usan repuestos originales?',
    a: 'Sí, trabajamos con repuestos originales en todos los mantenimientos y reparaciones.'
  },
  {
    q: '¿Solo atienden piscinas o también pozos profundos y aguas negras?',
    a: 'También instalamos y damos mantenimiento a bombas sumergibles tipo lapicero para pozos profundos y sistemas de aguas negras, además de los equipos de piscina.'
  },
  {
    q: '¿Qué es el Sistema Hidroflo MK?',
    a: 'Es un sistema hidroneumático automatizado que entrega más presión de agua de forma constante, sin necesidad de accionar la bomba manualmente. Ideal para viviendas, edificios y locales comerciales.'
  },
  {
    q: '¿Cómo solicito una cotización?',
    a: 'Puedes escribirnos directo por WhatsApp o completar el formulario de contacto y te respondemos con la información lista.'
  }
];

export const WHATSAPP_NUMBER = '573124432044';
