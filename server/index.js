import express from 'express';
import path from 'path';
import connect from './database/mongodb-connect.js';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


import todosRouter from './routes/todos.js';
import usersRouter from './routes/users.js';

const port = 4000;
const app = express();

//Use body-parser middleware
app.use(express.urlencoded({extended: true}));
app.use(express.json());

// Use static middleware to serve static files from the "frontend" folder
app.use(express.static(path.join(__dirname, '../frontend')));

app.get('/', (req, res) => {
  res.send('Hello Todo App!!!');
});

// Routes for each HTML page
app.get('/login', (req, res) => {
  res.sendFile(path.join(__dirname, '../frontend', 'login.html'));
});

app.get('/todoList', (req, res) => {
  res.sendFile(path.join(__dirname, '../frontend', 'todoList.html'));
});

app.get('/edit', (req, res) => {
  res.sendFile(path.join(__dirname, '../frontend', 'edit.html'));
});

// 404 page route (for any undefined routes)
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../frontend', 'error.html'));
});

app.use('/api', todosRouter);
app.use('/api', usersRouter);

//connect to mongodb
connect();

app.listen(port, () => {
    console.log('Listening on port ' + port);   
});

