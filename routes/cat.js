var express = require('express');
var router = express.Router();
const request = require('request');

router.get('/', async (req, res) => {
  console.log("Received request for /cat"); // Debugging log
  request('https://api.thecatapi.com/v1/images/search', function (error, response, body) {
    if (!error && response.statusCode == 200) {
      console.log("Successfully fetched cat image"); // Debugging log
      const data = JSON.parse(body);
      res.json(data);
    } else {
      console.error("Error fetching cat image:", error); // Debugging log
      res.status(500).json({ error: 'Failed to fetch cat image' });
    }
  });
});

module.exports = router;
