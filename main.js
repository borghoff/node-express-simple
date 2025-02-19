import express from 'express';
const app = express();

export const port = 5000;

app.get('/', (req, res) => {
  res.send('Hello World mit Port ' + port);
});

export {app}