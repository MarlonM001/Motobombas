# Fotos de trabajos realizados

Ya conectados (4 fotos cada uno, carrusel):
- `MantenimientoPreventivo1.jpg` a `4.jpg` → servicio `mantenimiento`
- `Limpiezafiltros1.jpg` a `4.jpg` → servicio `filtros`

Faltan por agregar (4 fotos cada uno), siguiendo la misma secuencia de nombre:
- `InstalacionEquipos1.jpg` a `4.jpg` → servicio `instalacion`
- `DiagnosticoTecnico1.jpg` a `4.jpg` → servicio `diagnostico`
- `SistemaHidrofloMK1.jpg` a `4.jpg` → servicio `hidroflomk`
- `BombasSumergibles1.jpg` a `4.jpg` → servicio `sumergibles`

Después de agregar las fotos de un servicio, edita el objeto `GALLERY` en
`assets/js/data.js` y agrega una entrada por cada foto, por ejemplo:

```js
sumergibles: [
  { src: 'assets/gallery/BombasSumergibles1.jpg', alt: 'Instalación de bomba tipo lapicero en pozo profundo' },
  { src: 'assets/gallery/BombasSumergibles2.jpg', alt: '...' },
  { src: 'assets/gallery/BombasSumergibles3.jpg', alt: '...' },
  { src: 'assets/gallery/BombasSumergibles4.jpg', alt: '...' }
],
```

La sección de galería (`#galeria`) ya arma el carrusel automáticamente en
cuanto el arreglo del servicio tiene fotos — no hay que tocar HTML ni CSS.
