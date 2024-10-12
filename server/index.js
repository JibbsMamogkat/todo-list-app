import express from 'express';

import router from './routes/todos.js';

const port = 4000;
const app = express();

app.get('/', (req, res) => {
  res.send('Hello Todo App!!!');
});

app.use('/api', router);

app.listen(port, () => {
    console.log('Listening on port ' + port);   
});

