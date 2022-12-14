// https://www.youtube.com/watch?v=SbelQW2JaDQ
const APIController = (function() {
    const clientId = '';
    const clientSecret = '';

    //private methods 
    const _getToken = async () => {
      const result = await fetch('https://accounts.spotify.com/api/token', {
        method: 'POST',
        headers:{'Content-Type' : 'application/x-www-form-urlencoded',
                'Authorization' : 'Basic' + btoa(clientId + ':' + clientSecret)
          },
        body: 'grant_type=client_credentials'
        })

      const data = await result.json();
      return data.access_token;
    }

    const _getGenres = async (token) => {
      const result = await fetch('https://api.spotify.com/v1/browse/categories?locale=sv_US', {
        method: 'GET',
        headers: {'Authorization' : 'Bearer' + token}
      });

      const data = await result.json();
      return data.categories.items;
    }

    const _getPlaylistByGenre = async(token, genreId) => {
      const limit = 10;

      const reuslt = await fetch('https://api.spotify.com/v1/browse/categories/${genreId}/playlists?limit=${limit}', {
        method: 'GET',
        headers: {'Authorization' : 'Bearer ' + token}
      });

      const data = await result.json();
      return data.playlists.items;
    }

    return{
      getToken(){
        return _getToken();
      },
      getGenres(token){
        return _getGenres(token);
      }
    }

})();


const UIController = (function(){



})();