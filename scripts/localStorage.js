//favorites.includes checks an array, if in array it'll remove it, if not in array it will add it
let favorites = [];
favorites = getLocalStorage();

function saveToLocalStorage(fav){
    favorites = getLocalStorage();

    favorites.push(fav);

    localStorage.setItem('Favorites', JSON.stringify(favorites));
}

function getLocalStorage(){
    let localStorageData = localStorage.getItem('Favorites');

    if(localStorageData == null ){
        return [];
    }

    //return JSON.parse(localStorageData);
    return favorites;
}

function removeFromLocalStorage(fav){
    favorites = getLocalStorage();

    let favIndex = favorites.indexOf(fav);

    favorites.splice(favIndex, 1);

    localStorage.setItem('Favorites', JSON.stringify(favorites));
}

export { saveToLocalStorage, getLocalStorage, removeFromLocalStorage, favorites }