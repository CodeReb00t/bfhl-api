const express = require('express');
const router = express.Router();
const { processData } = require('../helpers/processInput');

router.post('/', (req, res) => {
    try {
        const inputData = req.body.data;
        const result = processData(inputData);
        res.status(200).json(result);
    } catch (error) {
        res.status(400).json({
            is_success: false,
            error: error.message || "Invalid Request",
        });
    }
});

module.exports = router;
