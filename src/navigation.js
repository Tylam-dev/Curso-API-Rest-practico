window.addEventListener('haschange', navigator(), false)
window.addEventListener('DOMContentLoaded', navigator(), false)
function navigator(){
    if(location.hash.startsWith('#trends')){
        trendsPage()
    } else if(location.hash.startsWith('#search=')){
        searchPage()
    } else if(location.hash.startsWith('#movie=')){
        moviePage()
    } else if(location.hash.startsWith('#categories=')){
        categoriesPage()
    } else{
        homePage()
    }
    location.hash
}

function homePage(){
    getTrendingMoviesPreview()
    getCategoriesPreview()
}
function trendsPage(){

}
function categoriesPage(){

}
function moviePage(){

}
function searchPage(){

}