const express = require('express');
const knex = require('../db/client');
const router = express.Router();

// Index
router.get('/', (req, res) => {
  knex('cohorts')
    .orderBy('created_at', 'desc')
    .then(cohorts => {
      res.render('cohorts/index', { cohorts: cohorts });
    });
});

// New Cohort form
router.get('/new', (req, res) => {
  // res.send('<h1>Create New Cohort Page');
  res.render('cohorts/new');
});

// Individual Cohort
router.get('/:id', (req, res) => {
  res.send('<h1>Individual Cohort Page</h1>');
});


// Create
router.post('/', (req, res) => {
  knex('cohorts')
    .insert({
      name: req.body.name,
      logo_url: req.body.logo_url,
      members: req.body.members
    })
    .returning('*')
    .then(cohorts => {
      const cohort = cohorts[0];
      //res.redirect(`/cohorts/${cohort.id}`);
      res.redirect('/cohorts');
    })
   // May have to change this to ('/:id') if it doesn't work 
})



module.exports = router;