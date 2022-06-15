// Language: javascript
// Path: src/navigation.js

// Eventos para los botones
searchFormBtn.addEventListener('click', (e) => {
    e.preventDefault();
    location.hash = '#search=' + searchFormInput.value;
    window.scrollTo(0, 0);
});

trendingBtn.addEventListener('click', (e) => {
    e.preventDefault();
    location.hash = '#trends';
    window.scrollTo(0, 0);
});

arrowBtn.addEventListener('click', (e) => {
    e.preventDefault();

    if (document.domain !== 'localhost') {
        location.hash = '#home';
    } else {
        history.back();
    }

    window.scrollTo(0, 0);
});

window.addEventListener('DOMContentLoaded', navigation, false);
window.addEventListener('hashchange', navigation, false);

function navigation(){

    if(location.hash.startsWith('#trends')){
        trendingPage();
    } else if (location.hash.startsWith('#search=')){
        searchPage();
    } else if (location.hash.startsWith('#movie=')){
        moviePage();
    } else if (location.hash.startsWith('#category=')){
        categoryPage();
    } else {
        homePage();
    };
};

// Trending Page
function trendingPage () {
    // Modificaciones en el DOM para mostrar la pagina de inicio
    // Header
    headerSection.classList.remove('header-container--long')
    headerSection.style.backgrpundColor = '';
    arrowBtn.classList.remove('inactive');
    arrowBtn.classList.remove('header-arrow--white');
    headerTitle.classList.add('inactive');
    headerCategoryTitle.classList.remove('inactive');

    // Search Section
    searchForm.classList.add('inactive');

    // Body Section
    trendingPreviewSection.classList.add('inactive');
    categoriesPreviewSection.classList.add('inactive');
    genericSection.classList.remove('inactive');
    movieDetailSection.classList.add('inactive');

    // Trending Movies
    headerCategoryTitle.innerText = 'Tendencias';
    window.scrollTo(0, 0);
    getTrendingMovies();
};

// Search Page
function searchPage () {
    // Modificaciones en el DOM para mostrar la pagina de inicio
    // Header
    headerSection.classList.remove('header-container--long')
    headerSection.style.backgrpundColor = '';
    arrowBtn.classList.remove('inactive');
    arrowBtn.classList.remove('header-arrow--white');
    headerTitle.classList.add('inactive');
    headerCategoryTitle.classList.add('inactive');

    // Search Section
    searchForm.classList.remove('inactive');

    // Body Section
    trendingPreviewSection.classList.add('inactive');
    categoriesPreviewSection.classList.add('inactive');
    genericSection.classList.remove('inactive');
    movieDetailSection.classList.add('inactive');

    const [ _, query ] = location.hash.split('=');
    window.scrollTo(0, 0);

    getMoviesBySearch(query);
};

// Movie Page
function moviePage () {

    // Modificaciones en el DOM para mostrar la pagina de inicio
    // Header
    headerSection.classList.add('header-container--long')
    // headerSection.style.backgrpundColor = '';
    arrowBtn.classList.remove('inactive');
    arrowBtn.classList.add('header-arrow--white');
    headerTitle.classList.add('inactive');
    headerCategoryTitle.classList.add('inactive');

    // Search Section
    searchForm.classList.add('inactive');

    // Body Section
    trendingPreviewSection.classList.add('inactive');
    categoriesPreviewSection.classList.add('inactive');
    genericSection.classList.add('inactive');
    movieDetailSection.classList.remove('inactive');

    // Funcion para obtener la informacion de la pelicula
    const [ _, movieId ] = location.hash.split('=');
    window.scrollTo(0, 0);
    getMovieDetail(movieId);
};

// Category Page
function categoryPage () {
    // Modificaciones en el DOM para mostrar la pagina de inicio
    // Header
    headerSection.classList.remove('header-container--long')
    headerSection.style.backgrpundColor = '';
    arrowBtn.classList.remove('inactive');
    arrowBtn.classList.remove('header-arrow--white');
    headerTitle.classList.add('inactive');
    headerCategoryTitle.classList.remove('inactive');

    // Search Section
    searchForm.classList.add('inactive');

    // Body Section
    trendingPreviewSection.classList.add('inactive');
    categoriesPreviewSection.classList.add('inactive');
    genericSection.classList.remove('inactive');
    movieDetailSection.classList.add('inactive');

    const [ hash, id_name ] = location.hash.split('=');
    const [ categoryId, categoryName ] = id_name.split('-');
    const title = categoryName.replace(/%20/g, ' ');
    window.scrollTo(0, 0);
    getMoviesByCategory(categoryId, title);
};

// Home Page
function homePage () {
    // Modificaciones en el DOM para mostrar la pagina de inicio
    // Header
    headerSection.classList.remove('header-container--long')
    headerSection.style.background = '';
    arrowBtn.classList.add('inactive');
    headerTitle.classList.remove('inactive');
    headerCategoryTitle.classList.add('inactive');

    // Search Section
    searchForm.classList.remove('inactive');
    // Body Section
    trendingPreviewSection.classList.remove('inactive');
    categoriesPreviewSection.classList.remove('inactive');
    genericSection.classList.add('inactive');
    movieDetailSection.classList.add('inactive');

    // Peticiones asincronas para mostrar
    // las peliculas en tendencia y las categorias
    window.scrollTo(0, 0);
    getTrendingMoviesPreview();
    getCategoriesMovies();
};