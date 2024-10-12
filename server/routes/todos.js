import express from 'express';

const router = express.Router();

router.get('/todos', (req, res) => {
    res.send('All Todos');
});

router.get('/todos/:id', (req, res) => {
    const id = req.params.id;
    res.send(`Getting TODO with id ${id}`);
});

router.post('/todos', (req, res) => {
    //send an object response
    const todos = [
        {id: 1, title: 'Todo', description: "My todo"}
    ];

    res.send(todos);
});

router.put('/todos/:id', (req, res) => {
    const id = req.params.id;
    res.send(`Updating TODO with id ${id}`);
});

router.delete('/todos/:id', (req, res) => {
    const id = req.params.id;
    res.send(`Deleting TODO with id ${id}`);
});

export default router;
