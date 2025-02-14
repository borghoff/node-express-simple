import express from 'express';
const app = express();

app.get('/', (req, res) => {
  res.send('Hello World! 11');
});

export {app}