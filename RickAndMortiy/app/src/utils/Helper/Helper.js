const Helper = {
  urls: {
    allCharacters: 'https://rickandmortyapi.com/api/character',
  },
  setFavoriteItem: (id) => {
    const arrOfFavorites = [...localStorage.getItem('favorites').split(',')];
    if (!arrOfFavorites.find((value) => value
      == id)) {
      localStorage.setItem('favorites', [
        ...localStorage.getItem('favorites').split(','),
        id,
      ]);
    } return null;
  },
  deleteFavoriteItem: (id) => {
    localStorage.setItem(
      'favorites',
      localStorage.getItem('favorites').split(',').filter((num) => num != id),
    );
  },
  getFavoriteItems: () => {
    if (localStorage.getItem('favorites')) {
      return localStorage.getItem('favorites').split(',');
    }
    return null;
  },
  setInitFavorites: () => {
    if (!localStorage.getItem('favorites')) {
      return localStorage.setItem('favorites', ['init cards by id']);
    }
    return null;
  },
  storageObserver: () => {

  },
};

export default Helper;
