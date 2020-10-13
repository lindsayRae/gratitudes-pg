const express = require('express');
const path = require('path');
const routes = require('./routes');

const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());

// Serve the static files from the React app
app.use(express.static(path.join(__dirname, 'client/build')));

// An api endpoint that returns a short list of items
app.get('/api/getList', (req, res) => {
  const list = [
    { id: 1, dailyGratitude: 'Gratitude one' },
    { id: 2, dailyGratitude: 'Gratitude two' },
    { id: 3, dailyGratitude: 'Gratitude three' },
  ];
  res.json(list);
  console.log('Sent list of items');
});

app.use('/api', routes);

// Handles any requests that don't match the ones above
app.get('*', (req, res) => {
  res.sendFile(path.join(`${__dirname}/client/build/index.html`));
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
