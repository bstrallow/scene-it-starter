$(document).ready(function () {
    function renderMovies(movieArray) {
        var finalHTML = '';

        movieArray.forEach(function(currentMovie) {
            finalHTML += '<div class="movie card">';
            finalHTML += '<img src="' + currentMovie.Poster + '" class="card-img-top" />';
            finalHTML += '<div class="card-body">';
            finalHTML += '<h5 class="card-title movieTitle">' + currentMovie.Title + '</h5>';
            finalHTML += '<h6 class="card-subtitle text-muted movieYear">' + currentMovie.Year + '</h6>';
            finalHTML += '<button type="button" class="btn-primary addButton" data-id="' + currentMovie.imdbID + '">Add!</button>';
            finalHTML += '</div>';
            finalHTML += '</div>';
            
        }); 
        return finalHTML;
    }
    $('form').submit(function(e){
        e.preventDefault();
        var movieHTML = renderMovies(movieData);
        $('.movies-container').html(movieHTML);
    });
    $('.movies-container').on("click", ".addButton", function(){ 
        var imdbID = $(this).data('id');
        var movie = movieData.find(function(currentMovie) {
            return currentMovie.imdbID == imdbID;
        });
        var watchlistJSON = localStorage.getItem('watchlist');
        var watchlist = JSON.parse(watchlistJSON);
        if (watchlist === null) {
            watchlist = [];
            console.log('list action');
        };
        watchlist.push(movie);
        watchlistJSON = JSON.stringify(watchlist);
        localStorage.setItem('watchlist', watchlistJSON);
    });
});