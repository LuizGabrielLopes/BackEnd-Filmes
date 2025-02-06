class MovieList {
    constructor() {
        this.movies = [];
    }

    addMovie(movie) {
        this.movies.push(movie);
    }

    getMovieCount() {
        return this.movies.length;
    }

    getAllMovies() {
        return this.movies;
    }

    getMovieById(id) {
        const movie = this.movies.find(movie => movie.id == id);
        if (!movie) throw new Error("Filme não encontrado");
        return movie;
    }

    updateMovie(id, updatedData) {
        const movie = this.getMovieById(id);
        Object.assign(movie, updatedData);
        return movie;
    }

    deleteMovie(id) {
        this.movies = this.movies.filter(movie => movie.id != id);
    }

}

module.exports = MovieList;