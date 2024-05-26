import { getPopularRepos }  from '../infraestructure/ports/githubPorts.js';

export async function printPopularRepos() {
    console.log(' Respuesta 1 Repositorios más populares de Google en GitHub:');
    const popularRepos = await getPopularRepos();
    popularRepos.forEach((repo, index) => {
        console.log(`\n${index + 1}. ${repo.name}`);
        console.log(`   Descripción: ${repo.description}`);
        console.log(`   Estrellas: ${repo.stars}`);
        console.log(`   URL: ${repo.url}`);
    });
}
