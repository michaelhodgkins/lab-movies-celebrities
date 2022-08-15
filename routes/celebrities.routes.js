// starter code in both routes/celebrities.routes.js and routes/movies.routes.js
const router = require("express").Router();

// all your routes here
const Celeb = require('../models/Celebrity.model');

router.get('/create', (req, res) => res.render('celebrities/new-celebrity'));

router.post('/create', (req,res,next) => {
    console.log(req.body);
    const { name, occupation, catchPhrase } = req.body;

    Celeb.create({ name, occupation, catchPhrase })
        .then(() => res.redirect('/'))
        .catch((err) =>`Your celebrity cannot be made ${err} `);
})

module.exports = router;