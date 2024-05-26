export class Review {
  constructor(id, puntuacion, contenido, usuarioId, videoId) {
      this.id = id;
      this.puntuacion = puntuacion;
      this.contenido = contenido;
      this.usuarioId = usuarioId;
      this.videoId = videoId;
  }
}