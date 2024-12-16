
const express = require('express');
const router = express.Router();

// Admin-only Middleware
router.use((req, res, next) => {
    if (req.query.isAdmin === 'true') {
        return next();
    }
    res.send('Sorry, not an admin!');
});

// Admin Routes
router.get('/topsecret', (req, res) => {
    res.send('Top secret!');
});

router.get('/deleteeverything', (req, res) => {
    res.send('Deleted everything!');
});

module.exports = router;
