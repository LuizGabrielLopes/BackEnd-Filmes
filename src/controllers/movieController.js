const Movie = require("../models/Movie");
const MovieList = require("../models/MovieList");

const lista = new MovieList();

lista.addMovie(new Movie("Bastardos Inglórios", "Quentin Tarantino", "2H33M"));
lista.addMovie(new Movie("Gente Grande", "Adam Sandler", "1H42M"));

const router = {
  getAllMovies: (req, res) => {
    try {
      res.json(lista.getAllMovies());
    } catch (error) {
      res.status(404).json({ message: "Erro ao buscar filmes", error });
    }
  },

  getMovieById: (req, res) => {
    try {
      res.json(lista.getMovieById(req.params.id));
    } catch (error) {
      res.status(404).json({ message: "Filme não encontrado", error });
    }
  },

  addMovie: (req, res) => {
    try {
      const { title, autor, duracao } = req.body;
      if (!title || !autor || !duracao === undefined) {
        throw new Error("Todos os campos são obrigatórios");
      }
      const newMovie = new Movie(title, autor, duracao);
      lista.addMovie(newMovie);
      res.status(201).json(newMovie);
    } catch (error) {
      res.status(400).json({ message: error.message, error });
    }
  },

  updateMovie: (req, res) => {
    try {
      res.json(lista.updateMovie(req.params.id, req.body));
    } catch (error) {
      res.status(404).json({ message: "Erro ao atualizar o Filme", error });
    }
  },

  deleteMovie: (req, res) => {
    try {
      lista.deleteMovie(req.params.id);
      res.status(200).json({ message: "Filme deletado com sucesso",
        IdDeletado: req.params.id
       });
    } catch (error) {
      res.status(404).json({ message: "Erro ao deletar o Filme", error });
    }
  },

};

module.exports = router;