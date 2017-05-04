/* eslint no-console: 0  */

import express from 'express';

import { apiPort } from '../config/config.env';

const app = express();

app.get('/api', (req, res) => {
  res.send('Hello Worldssss');
});

app.listen(apiPort, (err) => {
  if (err) {
    console.error(err);
  } else {
    console.info(`Api listening on port ${apiPort}`);
  }
});

