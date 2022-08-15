// starter code in both routes/celebrities.routes.js and routes/movies.routes.js
const router = require("express").Router();

// all your routes here
const Movie = require('../models/Movie.model');

router.get('/create', (req, res) => res.render('movies/new-movie'));

router.post('/create', (req,res,next) => {
    console.log(req.body);
    const { name, genre, plot, cast } = req.body;

    Movie.create({ name, genre, plot, cast })
        .then(() => res.redirect('/'))
        .catch((err) =>`Your movie cannot be made ${err} `);
});
module.exports = router;