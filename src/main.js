// Import Axios
const api = axios.create({
    baseURL: 'https://api.themoviedb.org/3/',
    headers: {
        'Content-Type': 'application/json;charset=utf-8',
    },
    params: {
        'api_key': API_KEY,
    },
});

// Constantes
// const API_URL = 'https://api.themoviedb.org/3/';
const TRENDING = 'trending/movie/day';
const CATEGORIES_URL = 'genre/movie/list';
const ABS_IMG = 'https://image.tmdb.org/t/p/w300'
const CATEGORIES_MOVIES = 'discover/movie';


// Funcion asincrona para mostrar las Peliculas en tendencia
async function getTrendingMovies () {
    const { data } = await api(`${TRENDING}`);
    const movies = data.results;

    const toRender = [];
    const section = trendingMoviesPreviewList;
    section.innerHTML = '';

    movies.forEach((movie) => {
        const movieContainer = document.createElement('div');
        movieContainer.classList.add('movie-container');

        const movieImg = document.createElement('img');
        movieImg.classList.add('movie-img');
        movieImg.setAttribute('alt', `${movie.title}`);
        movieImg.setAttribute('src', `${ABS_IMG}${movie.poster_path}`);

        movieContainer.append(movieImg);

        toRender.push(movieContainer);
    });

    section.append(...toRender);
};


// Funcion asincrona para mostrar las categorias de peliculas
async function getCategoriesMovies () {
    const { data } = await api(`${CATEGORIES_URL}`);
    const categories = data.genres;

    const toRender = [];
    const article = categoriesPreviewList
    article.innerHTML = '';

    categories.forEach((category) => {
        const categoryContainer = document.createElement('div');
        categoryContainer.classList.add('category-container');

        const categoryTitle = document.createElement('h3');
        categoryTitle.classList.add('category-title');
        categoryTitle.setAttribute('id', `id${category.id}`);
        categoryTitle.addEventListener('click', () => {
            location.hash = `#category=${category.id}-${category.name}`;
            window.scrollTo(0, 0);
        });
        const innerText = document.createTextNode(category.name)

        categoryTitle.append(innerText);
        categoryContainer.append(categoryTitle);

        toRender.push(categoryContainer);
    });

    article.append(...toRender);
};


// Funcion asincrona para mostrar las peliculas de una categoria

async function getMoviesByCategory (categoryId, categoryName) {

    // Consulta a la API
    const { data } = await api(`${CATEGORIES_MOVIES}`, {
        params: {
            with_genres: categoryId,
        },
    });
    const movies = data.results;

    // Area de trabajo y renderizado de peliculas
    const toRender = [];
    const section = genericSection;
    headerCategoryTitle.innerText = categoryName;
    section.innerHTML = '';

    // Loop de peliculas
    movies.forEach((movie) => {
        const movieContainer = document.createElement('div');
        movieContainer.classList.add('movie-container');

        const movieImg = document.createElement('img');
        movieImg.classList.add('movie-img');
        movieImg.setAttribute('alt', `${movie.title}`);
        movieImg.setAttribute('src', `${ABS_IMG}${movie.poster_path}`);

        movieContainer.append(movieImg);

        toRender.push(movieContainer);
    });

    // Renderizado de peliculas
    section.append(...toRender);
};