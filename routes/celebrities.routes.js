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

router.get('/celebrities', (req, res, next) => {
    
    Celeb.find()
      .then((allTheCelebsFromDB) =>
        res.render('celebrities/celebrities', {allTheCelebsFromDB})
      )
      .catch((err) => `Could not find all celebs: ${err}`);
  });

module.exports = router;