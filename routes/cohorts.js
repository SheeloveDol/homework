const express = require('express');
const knex = require('../db/client');
const router = express.Router();

//! Index
router.get('/', (req, res) => {
  knex('cohorts')
    .orderBy('created_at', 'desc')
    .then(cohorts => {
      res.render('cohorts/index', { cohorts: cohorts });
    });
});

//! New Cohort form
router.get('/new', (req, res) => {
  // res.send('<h1>Create New Cohort Page');
  res.render('cohorts/new');
});



router.get('/:id', (req, res) => {
  // res.send(req.params);

  knex('cohorts')
    .where('id', req.params.id)
    .first() // Built-in knex method that returns the first record of the array of records from a query.
    .then(cohort => {
      if (!cohort) {
        res.send('No such cohort found!')
      } else {
        res.render('cohorts/show', { cohort:cohort });
      }
    });
});



//! Create
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

router.post('/:id', (req, res) => {
  res.redirect('/:id');
  // res.send(req.body)
})


//! EDIT
router.get('/:id/edit', (req, res) => {
  knex('cohorts')
    .where('id', req.params.id)
    .first()
    .then(cohort => {
      res.render('cohorts/edit', { cohort: cohort})
    });
});

//! UPDATE
router.patch('/:id', (req, res) => {
  knex('cohorts')
    .where('id', req.params.id)
    .update({
      logo_url: req.body.logo_url,
      name: req.body.name,
      members: req.body.members
    })
    .then(() => {
      res.redirect(`/cohorts/${req.params.id}`);
    });
});


//! DESTROY
router.delete('/:id', (req, res) => {
  knex('cohorts')
    .where('id', req.params.id)
    .del()
    .then(() => {
      res.redirect('/cohorts');
    });
})


module.exports = router;