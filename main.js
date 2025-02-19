import express from 'express';
const app = express();

app.get('/', (req, res) => {
  res.send('Hello World mit Port 53');
});

export {app}