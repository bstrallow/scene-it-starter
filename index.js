$(document).ready(function () {
    function renderMovies(movieArray) {
        var finalHTML = '';

        movieArray.forEach(function(currentMovie) {
            finalHTML += '<div class="movie card">';
            finalHTML += '<img src="' + currentMovie.Poster + '" class="card-img-top" />';
            finalHTML += '<div class="card-body">';
            finalHTML += '<h5 class="card-title movieTitle">' + currentMovie.title + '</h5>';
            finalHTML += '<h6 class="card-subtitle text-muted movieYear">' + currentMovie.Year + '</h6>';
            finalHTML += '<a href="#"><button type="button" class="btn-primary">Add!</button></a>';
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
});