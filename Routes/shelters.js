const express = require('express');
const router = express.Router();

// Get all shelters
router.get('/', (req, res) => {
    res.send('All shelters');
});

// Edit a specific shelter
router.get('/:id/edit', (req, res) => {
    res.send(`Editing shelter with ID: ${req.params.id}`);
});

// Get a specific shelter
router.get('/:id', (req, res) => {
    res.send(`Details of shelter with ID: ${req.params.id}`);
});

// Create a new shelter
router.post('/', (req, res) => {
    res.send('Creating a new shelter');
});

module.exports = router;
