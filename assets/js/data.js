// Contenido de cada servicio: tarjeta + modal de detalle.
const SERVICES = {
  preventivo: {
    title: 'Mantenimiento preventivo',
    desc: 'Revisiones periódicas que evitan fallas y prolongan la vida útil del equipo.',
    thumb: 'Foto: mantenimiento preventivo',
    points: [
      'Inspección de motor, eje y acoples',
      'Verificación de presión y caudal',
      'Lubricación de partes móviles',
      'Revisión de conexiones eléctricas',
      'Informe técnico con recomendaciones'
    ]
  },
  reparacion: {
    title: 'Reparación de electrobombas',
    desc: 'Diagnóstico y reparación de averías con repuestos originales.',
    thumb: 'Foto: reparación de electrobombas',
    points: [
      'Diagnóstico de fallas eléctricas y mecánicas',
      'Reparación de motor y devanado',
      'Sustitución de piezas dañadas',
      'Pruebas de funcionamiento antes de entrega',
      'Garantía por escrito del servicio'
    ]
  },
  sellos: {
    title: 'Cambio de sellos mecánicos',
    desc: 'Reemplazo preciso para eliminar fugas y proteger el motor.',
    thumb: 'Foto: cambio de sellos mecánicos',
    points: [
      'Identificación del sello adecuado por modelo',
      'Desmontaje y limpieza de la cámara de sello',
      'Instalación con alineación de precisión',
      'Prueba de estanqueidad',
      'Repuestos originales certificados'
    ]
  },
  rodamientos: {
    title: 'Cambio de rodamientos',
    desc: 'Reducimos vibración y ruido restaurando el giro suave del motor.',
    thumb: 'Foto: cambio de rodamientos',
    points: [
      'Diagnóstico de vibración y ruido anormal',
      'Extracción de rodamientos desgastados',
      'Montaje con herramienta de precisión',
      'Balanceo del rotor',
      'Prueba de temperatura y funcionamiento'
    ]
  },
  filtros: {
    title: 'Limpieza de filtros',
    desc: 'Limpieza profunda para mantener la eficiencia de filtrado.',
    thumb: 'Foto: limpieza de filtros',
    points: [
      'Retrolavado y limpieza de arena o cartucho',
      'Revisión de válvulas selectoras',
      'Verificación de presión de trabajo',
      'Detección de fugas en tapas y O-rings',
      'Recomendación de frecuencia de limpieza'
    ]
  },
  instalacion: {
    title: 'Instalación de equipos',
    desc: 'Instalación profesional de electrobombas nuevas, correctamente dimensionadas.',
    thumb: 'Foto: instalación de equipos',
    points: [
      'Cálculo de caudal y potencia requerida',
      'Instalación de tuberías y conexiones',
      'Conexión eléctrica segura',
      'Puesta en marcha y pruebas',
      'Capacitación básica de uso al cliente'
    ]
  },
  diagnostico: {
    title: 'Diagnóstico técnico',
    desc: 'Evaluación completa para identificar el origen exacto de la falla.',
    thumb: 'Foto: diagnóstico técnico',
    points: [
      'Revisión eléctrica y mecánica completa',
      'Medición de consumo y presión',
      'Identificación de causa raíz',
      'Cotización detallada de la reparación',
      'Reporte técnico con evidencia fotográfica'
    ]
  }
};
