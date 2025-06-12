var express = require('express');
var router = express.Router();
var fetch = require('node-fetch'); // Using fetch instead of request (request is deprecated)

router.get('/', async (req, res) => {
  try {
    const response = await fetch('https://api.thecatapi.com/v1/images/search?size=med&mime_types=jpg&format=json&has_breeds=true&order=RANDOM&page=0&limit=1", requestOptions');
    if (!response.ok) {
      throw new Error('Failed to fetch cat image');
    }
    const data = await response.json();
    res.json(data);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

module.exports = router;
