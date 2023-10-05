const api = axios.create({
    baseURL: 'https://api.themoviedb.org/3/',
    headers: {
        'Content-type': 'application/json;charset=utf-8'
    },
    params: {
        'api_key': API_KEY,
    }
})

async function getTrendingMoviesPreview(){
    const {data} = await api("trending/movie/day")
    const movies = data.results;
    console.log({movies})
    movies.forEach(element => {
        const movieImage = document.createElement('img')
        movieImage.setAttribute('src', `https://image.tmdb.org/t/p/w300${element.poster_path}`) 
        containerDestacadosMovies.append(movieImage)
    });
}


async function getCategoriesPreview(){
    const {data} = await api("genre/movie/list")
    console.log(data)
    const categories = data.genres;
    categories.forEach(element => {
        const categoriesPreview = document.createElement('p')
        categoriesPreview.classList.add(`${element.id}`)
        categoriesPreview.textContent= element.name
        containerCategoriesTags.append(categoriesPreview)
        categoriesPreview.addEventListener('click', async () => {
            containerMoviesCategories.innerHTML= ""
            const {data} = await api("/discover/movie")
            data.results.forEach(element => {
                if(element.genre_ids.includes(Number(categoriesPreview.classList.value))){
                const movieImage = document.createElement('img')
                movieImage.setAttribute('src', `https://image.tmdb.org/t/p/w300${element.poster_path}`)
                containerMoviesCategories.append(movieImage)
                }
            })
        })
    });

}

