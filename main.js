import express from 'express';
const app = express();

app.get('/', (req, res) => {
  res.send('Hello World mit Port 8010');
});

export {app}