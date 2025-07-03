const express = require('express');
const router = express.Router();
const Award = require('../models/Award');

// GET /api/awards
router.get('/', async (req, res) => {
  try {
    const awards = await Award.find();
    res.json(awards);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
