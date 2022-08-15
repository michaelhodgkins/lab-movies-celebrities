// starter code in both routes/celebrities.routes.js and routes/movies.routes.js
const router = require("express").Router();

// all your routes here
const Movie = require('../models/Movie.model');
const Celeb = require('../models/Celebrity.model');

router.get("/create", (req, res) => {
    Celeb.find()
      .then((DbCelebs) => {
        //  console.log(“celebs”, DbCelebs);
        res.render("movies/new-movie", { DbCelebs });
      })
      .catch((err) => console.log(err));
  });

router.post('/create', (req,res,next) => {
    console.log(req.body);
    const { name, genre, plot, cast } = req.body;

    Movie.create({ name, genre, plot, cast })
        .then(() => res.redirect('/movies'))
        .catch((err) =>`Your movie cannot be made ${err} `);
});

router.get('/', (req, res, next) => {
    
    Movie.find()
      .then((allTheMoviesFromDB) =>
        res.render('movies/movies', {allTheMoviesFromDB})
      )
      .catch((err) => `Could not find all movies: ${err}`);
  });

  router.get("/:id", (req, res) => {
    const { id } = req.params;
  
    Movie.findById(id)
      .populate("cast")
      .then((foundMovie) => res.render("movies/movie-details", foundMovie))
      .catch((error) => `Error while creating a new book: ${error}`);
  });

  router.post("/:id/delete", (req, res) => {
    const { id } = req.params;
  
    Movie.findByIdAndDelete(id)
      .then(() => res.redirect("/movies"))
      .catch((error) => console.log(`Error while deleting a book: ${error}`));
  });

  router.get("/:id/edit", (req, res) => {
    const { id } = req.params;
  
    Movie.findById(id)
    Celeb.find()
      .then((movieToEdit) => {
        res.render("movies/edit-movie", movieToEdit);
      })
      .catch((error) => `Error while getting a single movie for edit: ${error}`);
  });
  
  router.post("/:id/edit", (req, res) => {
    const { id } = req.params;
    const { name, genre, plot, cast } = req.body;
  
    Movie.findByIdAndUpdate(
      id,
      { name, genre, plot, cast },
      { new: true }
    )
      .then((updatedMovie) => res.redirect(`/${updatedMovie._id}`))
      .catch((error) =>
        console.log(`Error while updating a single movie: ${error}`)
      );
  });
  
module.exports = router;