// Language: javascript
// Path: src/navigation.js

// Eventos para los botones
searchFormBtn.addEventListener('click', (e) => {
    e.preventDefault();
    location.hash = '#search=' + searchFormInput.value;
});

trendingBtn.addEventListener('click', (e) => {
    e.preventDefault();
    location.hash = '#trends';
});

arrowBtn.addEventListener('click', (e) => {
    e.preventDefault();
    location.hash = '#home';
});

window.addEventListener('DOMContentLoaded', navigation, false);
window.addEventListener('hashchange', navigation, false);

function navigation(){
    console.log({ location });

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
    headerCategoryTitle.classList.remove('inactive');

    // Search Section
    searchForm.classList.remove('inactive');

    // Body Section
    trendingPreviewSection.classList.add('inactive');
    categoriesPreviewSection.classList.add('inactive');
    genericSection.classList.remove('inactive');
    movieDetailSection.classList.add('inactive');
};

// Movie Page
function moviePage () {
    console.log('Vista de pelicula');
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
};

// Category Page
function categoryPage () {
    // Modificaciones en el DOM para mostrar la pagina de inicio
    // Header
    headerSection.classList.remove('header-container--long')
    headerSection.style.backgrpundColor = '';
    arrowBtn.classList.remove('inactive');
    arrowBtn.classList.add('header-arrow--white');
    headerTitle.classList.add('inactive');
    headerCategoryTitle.classList.remove('inactive');

    // Search Section
    searchForm.classList.add('inactive');

    // Body Section
    trendingPreviewSection.classList.add('inactive');
    categoriesPreviewSection.classList.add('inactive');
    genericSection.classList.remove('inactive');
    movieDetailSection.classList.add('inactive');
};

// Home Page
function homePage () {
    // Modificaciones en el DOM para mostrar la pagina de inicio
    // Header
    headerSection.classList.remove('header-container--long')
    headerSection.style.backgrpundColor = '';
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
    getTrendingMovies();
    getCategoriesMovies();
};