const express = require('express');

const router = express.Router();


router.get('*', (req, res) => {
    res.status(404).json({error: 'not api'});
});


module.exports = router;
