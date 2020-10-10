const express = require('express');

// const { isEmail } = require('laiello-simple-validator');

const router = express.Router();

const db = require('../db');

module.exports = router;

/**
 * Retrieve all gratitudes
 */
router.get('/', async (req, res) => {
  const results = await db.select().table('gratitudes');
  res.send(results);
});

/**
 * Given an id, retrieve one gratitude
 */
router.get('/:id', async (req, res) => {
  const { id } = req.params;
  const results = await db('gratitudes').where({ id });

  if (results.length > 0) {
    res.send(results);
  } else {
    res.status(404).send('No item with such id');
  }
});

/**
 * Create one gratitude
 */
router.post('/', async (req, res) => {
  const { dailyGratitude } = req.body;

  // add profanity, email and phone number filter
  if (!dailyGratitude) {
    return res.status(400).send('Please add a sentance for what you are grateful for.');
  }

  const result = await db('gratitudes').insert({ dailyGratitude }).returning('*');
  res.send(result);
});

/**
 * Given an id and a dailyGratitude, update one gratitude
 */
router.put('/:id', async (req, res) => {
  const { id } = req.params;
  const { dailyGratitude } = req.body;

  const toUpdate = {};

  if (!dailyGratitude) {
    return res.status(400).send('Please enter in something you are thankful for.');
  }

  if (dailyGratitude) {
    toUpdate.dailyGratitude = dailyGratitude;
  }

  const updated = await db('gratitudes')
    .where('id', '=', id)
    .update(toUpdate)
    .returning('*');

  if (updated.length > 0) {
    res.send(updated);
  } else {
    res.status(404).send('No item with such id');
  }
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
    res.send(result);
  } else {
    res.status(404).send('No item with such id');
  }
});
