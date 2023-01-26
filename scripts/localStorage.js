//favorites.includes checks an array, if in array it'll remove it, if not in array it will add it

function saveToLocalStorage(fav){
    //get current values that are saved into local storage
    //create an array of values to store into local storage
    let favorites = getLocalStorage();

    //add new favorite city to our favorites array
    favorites.push(fav);

    //save updated array to local storage
    localStorage.setItem('Favorites', JSON.stringify(favorites));
}

function getLocalStorage(){
    //get all of the values that are stored in Favorites to local storage
    let localStorageData = localStorage.getItem('Favorites');

    if(localStorageData == null || localStorageData == undefined){
        return [];
    }

    return JSON.parse(localStorageData);
}

function removeFromLocalStorage(fav){
    let favorites = getLocalStorage();

    //find the index of the name in local storage
    let favIndex = favorites.indexOf(fav);

    //remove the name from the array using the splice method
    favorites.splice(favIndex, 1);

    //save updated array to local storage
    localStorage.setItem('Favorites', JSON.stringify(favorites))
}

export { saveToLocalStorage, getLocalStorage, removeFromLocalStorage }