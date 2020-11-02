const express = require('express');

const router = express.Router();

const db = require('../db');

module.exports = router;

const isUserLoggedIn = (req, res, next) => {
  if (req.user) {
    return next();
  }

  return res.status(403).send({ message: 'You are not authorized' });
};

/**
 * Retrieve all gratitudes
 */
router.get('/', async (req, res) => {
  const results = await db.select().table('gratitudes');
  console.log('results from /routes/gratitudes: ', results);
  res.send(results);
});

/**
 * Given an id, retrieve one gratitude
 */
router.get('/:id', async (req, res) => {
  const { id } = req.params;
  const results = await db('gratitudes').where({ id });
  console.log('results by ID: ', results);

  if (results.length > 0) {
    res.send(results);
  } else {
    res.status(404).send({ message: 'No item with such id' });
  }
});

/**
 * Create one gratitude
 */
router.post('/', async (req, res) => {
  const { dailyGratitude, date } = req.body;
  console.log('post body: ', req.body);
  // add email and phone number filter
  if (!dailyGratitude) {
    return res.status(400).send({ message: 'Please add a sentance for what you are grateful for.' });
  }

  const result = await db('gratitudes').insert({ dailyGratitude, date }).returning('*');
  console.log('post results: ', result);
  return res.send(result);
});

/**
 * Given an id and a dailyGratitude, update one gratitude
 */
router.put('/:id', async (req, res) => {
  const { id } = req.params;
  const { dailyGratitude, date } = req.body;

  const toUpdate = {};

  if (!dailyGratitude) {
    return res.status(400).send({ message: 'Please enter in something you are thankful for.' });
  }

  if (dailyGratitude) {
    toUpdate.dailyGratitude = dailyGratitude;
  }
  if (date) {
    toUpdate.date = date;
  }

  const updated = await db('gratitudes')
    .where('id', '=', id)
    .update(toUpdate)
    .returning('*');

  if (updated.length > 0) {
    console.log('updated: ', updated);
    return res.send(updated);
  }
  return res.status(404).send('No item with such id');
});

/**
 * Given an id, delete one gratitude
 */
router.delete('/:id', async (req, res) => {
  const { id } = req.params;

  const result = await db('gratitudes')
    .where('id', '=', id)
    .del()
    .returning('*');

  if (result.length > 0) {
    console.log('delted entry: ', result);
    return res.send(result);
  }
  return res.status(404).send({ message: 'No item with such id' });
});
