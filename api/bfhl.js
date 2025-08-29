const express = require('express');
const router = express.Router();
const { processData } = require('../helpers/processInput');

router.post('/', (req, res) => {
    try {
        const result = processData(req.body.data);
        res.status(200).json(result);
    } catch (err) {
        res.status(400).json({ is_success: false, error: err.message });
    }
});

module.exports = router;
