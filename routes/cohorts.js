const express = require('express');
const router = express.Router();

// Index
router.get('/', (req, res) => {
  // res.send('<h1>Index Page inside cohorts</h1>');
  res.render('cohorts/index');
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
  res.redirect('/cohorts/:id'); // May have to change this to ('/:id') if it doesn't work 
})



module.exports = router;