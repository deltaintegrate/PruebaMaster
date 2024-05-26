export class VideoService {
  constructor(videoRepository) {
      this.videoRepository = videoRepository;
  }

  async obtenerVideosPorAutor(autorId) {
      return await this.videoRepository.obtenerVideosPorAutor(autorId);
  }
}