const express = require('express');
const router = express.Router();

// Get all dogs
router.get('/', (req, res) => {
    res.send('All dogs');
});

// Edit a specific dog
router.get('/:id/edit', (req, res) => {
    res.send(`Editing dog with ID: ${req.params.id}`);
});

// Get a specific dog
router.get('/:id', (req, res) => {
    res.send(`Details of dog with ID: ${req.params.id}`);
});

// Create a new dog
router.post('/', (req, res) => {
    res.send('New dog');
});

module.exports = router;
