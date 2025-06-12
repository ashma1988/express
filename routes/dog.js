var express = require('express');
var router = express.Router();
var fetch = require('node-fetch'); // Using fetch for API requests

router.get('/', async (req, res) => {
  try {
    const response = await fetch('https://dog.ceo/dog-api/');
    if (!response.ok) {
      throw new Error('Failed to fetch dog image');
    }
    const data = await response.json();
    res.json(data);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

module.exports = router;
