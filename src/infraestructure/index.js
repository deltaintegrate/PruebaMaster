import { printPopularRepos }  from '../application/application.js';
import { sineFunction } from '../common/Respuesta2.js';
import { numerosImparesN }  from '../common/respuesta3.js';

// Importar las dependencias necesarias
import { VideoService } from '../application/videoService.js';
import { AutorService } from '../application/autorService.js';
import { PostgresVideoRepository } from '../infraestructure/ports/postgresVideoRepository.js';
import { PostgresAutorRepository } from '../infraestructure/ports/postgresAutorRepository.js';


//Estos imports deberian venir en infraestructura en los controladores, 
//para temas de ejemplo y ejecucion simple del projecto se dejaron en el index.js
// Crear instancias de los repositorios
const videoRepository = new PostgresVideoRepository();
const autorRepository = new PostgresAutorRepository();

// Crear instancias de los servicios
const videoService = new VideoService(videoRepository);
const autorService = new AutorService(autorRepository);


async function main() {
    console.log('Obteniendo los 10 repositorios más populares de Google en GitHub...');
    await printPopularRepos();

    //respuesta 2

    const sineRunctionResponse = sineFunction(5,5,9);

    //respsuesta 3

    const imparesN = numerosImparesN(9)
    console.log('respuesta 2: ', sineRunctionResponse);
    console.log('respuesta 3: ', imparesN);

    const autorId = 1;

    try {
        // Obtener Respuesta 4
        console.log('Respuesta 4: ')
        const videos = await videoService.obtenerVideosPorAutor(autorId);
        console.log('Videos por autor:', videos);

        // Obtener autor por ID
        const autor = await autorService.obtenerAutorPorId(autorId);
        console.log('Autor por ID:', autor);
    } catch (error) {
        console.log('Error:', error);
    }
}

main();


