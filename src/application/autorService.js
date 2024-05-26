export class AutorService {
  constructor(autorRepository) {
      this.autorRepository = autorRepository;
  }

  async obtenerAutorPorId(autorId) {
      return await this.autorRepository.obtenerAutorPorId(autorId);
  }
}