const { v4: uuidv4 } = require("uuid");

class Movie {
    constructor(title, autor, duracao) {
        this.id = uuidv4();
        this.title = title;
        this.autor = autor;
        this.duracao = duracao;
    }

}

module.exports = Movie;