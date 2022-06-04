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
const SEARCH_QUERY = 'search/movie';

// Funcion para construir lo que se renderizara en el DOM
function movieConstructor (list, listRender) {

    list.forEach((item)=> {
        // Movie container
        const movieContainer = document.createElement('div');
        movieContainer.classList.add('movie-container');

        // Movie img
        const movieImg = document.createElement('img');
        movieImg.classList.add('movie-img');
        movieImg.setAttribute('alt', `${item.title}`);
        movieImg.setAttribute('src', `${ABS_IMG}${item.poster_path}`);

        movieContainer.append(movieImg);

        listRender.push(movieContainer);
    });
};

function categoriesConstructor (list, listRender) {

    list.forEach((category) => {

        // Category container
        const categoryContainer = document.createElement('div');
        categoryContainer.classList.add('category-container');

        // Category title
        const categoryTitle = document.createElement('h3');
        categoryTitle.classList.add('category-title');
        categoryTitle.setAttribute('id', `id${category.id}`);
        categoryTitle.setAttribute('data-id', `${category.id}`);
        categoryTitle.addEventListener('click', () => {
            location.hash = `#category=${category.id}-${category.name}`;
            window.scrollTo(0, 0);
        });
        const innerText = document.createTextNode(category.name)

        categoryTitle.append(innerText);
        categoryContainer.append(categoryTitle);

        listRender.push(categoryContainer);
    });
}

// Funcion asincrona para mostrar las Peliculas en tendencia
async function getTrendingMoviesPreview () {

    // Consulta a la API
    const { data } = await api(`${TRENDING}`, {
        params: {},
    });
    const movies = data.results;

    // Area de trabajo y renderizado de peliculas
    const toRender = [];
    const section = trendingMoviesPreviewList;
    section.innerHTML = '';

    // Loop de peliculas
    movieConstructor(movies, toRender);

    // Renderizado de peliculas
    section.append(...toRender);
};


// Funcion asincrona para mostrar las categorias de peliculas
async function getCategoriesMovies () {
    const { data } = await api(`${CATEGORIES_URL}`);
    const categories = data.genres;

    const toRender = [];
    const article = categoriesPreviewList;

    categoriesConstructor(categories, toRender);

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
    movieConstructor(movies, toRender);

    // Renderizado de peliculas
    section.append(...toRender);
};


// Funcion asincrona para mostrar la informacion de una busqueda
async function getMoviesBySearch (query) {

        // Consulta a la API
        const { data } = await api(`${SEARCH_QUERY}`, {
            params: {
                query: query,
            },
        });
        const movies = data.results;

        // Area de trabajo y renderizado de peliculas
        const toRender = [];
        const section = genericSection;
        section.innerHTML = '';

        // Loop de peliculas
        movieConstructor(movies, toRender);

        // Renderizado de peliculas
        section.append(...toRender);
};


// Funcion para mostrar la informacion de una pelicula
async function getTrendingMovies() {

    // Consulta a la API
    const { data } = await api(`${TRENDING}`, {
        params: {},
    });
    console.log(data);
    const movies = data.results;

    // Area de trabajo y renderizado de peliculas
    const toRender = [];
    const section = genericSection;
    section.innerHTML = '';

    // Loop de peliculas
    movieConstructor(movies, toRender);

    // Renderizado de peliculas
    section.append(...toRender);
};