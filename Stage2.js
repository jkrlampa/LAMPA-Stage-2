import express from 'express';

const app = express();

app.get('/programming-language', (req, res) => {
  res.send('Python');
});

app.listen(3000, () =>
  console.log('Example app listening on port 3000!'),
);