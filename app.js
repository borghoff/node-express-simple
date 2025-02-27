import express from 'express';
const app = express();

app.get('/', (req, res) => {
  res.send('Hello World by node-express-simple');
});

export {app}