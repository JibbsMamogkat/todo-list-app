import express from 'express';

const port = 3000;
const app = express();

app.get('/', (req, res) => {
  res.send('Hello Todo App!!!');
});

app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});