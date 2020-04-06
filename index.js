// dependencies 
const express = require('express');
const shortid = require('shortid');

// server 
const server = express();

// middleware
server.use(express.json());

// data
let users = [
    {
        id: shortid.generate(),
        name: "John Computer",
        bio: "Webdev, coffee junkie, father of 2",
    },
    {
        id: shortid.generate(),
        name: "Jane Computer",
        bio: "Eat sleep breathe JavaScript",
    },
    {
        id: shortid.generate(),
        name: "Tom Computer",
        bio: "You may know me from my invention, Computer 2",
    },
    {
        id: shortid.generate(),
        name: "Dustin Computer",
        bio: "I love heckin doggos and Harry Potter",
    },
    {
        id: shortid.generate(),
        name: "Britt Computer",
        bio: "Not from Lisbon",
    },
]

// endpoints
server.get('/api/users', (req, res) => {
    try {
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({ errorMessage: 'The users information could not be retrieved' });
    }
})

server.post('/api/users', (req, res) => {
    const newUser = req.body;

    if (newUser.name && newUser.bio) {
        try {
            newUser.id = shortid.generate();
            users.push(newUser);
            res.status(201).json(users);
        } catch (error) {
            res.status(500).json({ errorMessage: 'There was an error while saving the user to the database' });
        }
    } else {
        res.status(400).json({ errorMessage: 'Please provide name and bio for the user.' });
    }
})

server.get('/api/users/:id', (req, res) => {
    const id = req.params.id;

    const user = users.find((user) => user.id === id);

    if (user) {
        try {
            res.status(200).json(user);
        } catch (error) {
            res.status(500).json({ errorMessage: 'The user information could not be retrieved' });
        }
    } else {
        res.status(404).json({ message: 'The user with the specified ID does not exist' });
    }
})

server.delete('/api/users/:id', (req, res) => {
    const id = req.params.id;

    const newArr = users.filter((user) => user.id !== id);

    if (users.length === newArr.length) {
        res.status(404).json({ message: 'The user with the specified ID does not exist' });
    } else {
        try {
            users = newArr;
            res.status(200).json(users);
        } catch (error) {
            res.status(500).json({ errorMessage: 'The user could not be removed' })
        }
    }
})

// server start code
const port = 5000;
server.listen(port, () => console.log(`\n=== api running on port ${port} ===\n`));
