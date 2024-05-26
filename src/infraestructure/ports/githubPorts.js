import axios from 'axios';

export async function getPopularRepos() {
    try {
        const response = await axios.get('https://api.github.com/users/google/repos?per_page=10&sort=stars&direction=desc');
        return response.data.map(repo => ({
            name: repo.name,
            description: repo.description,
            stars: repo.stargazers_count,
            url: repo.html_url
        }));
    } catch (error) {
        console.log('Error al obtener los repositorios:', error.response ? error.response.data : error.message);
        return [];
    }
}
