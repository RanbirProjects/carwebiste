const express = require('express');
const router = express.Router();
const Studio = require('../models/Studio');

// GET /api/studio
router.get('/', async (req, res) => {
  try {
    const studio = await Studio.findOne();
    res.json(studio);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
