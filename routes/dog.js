var express = require('express');
var router = express.Router();
const request = require('request');

router.get('/', async (req, res) => {
  request('https://images.dog.ceo/breeds/borzoi/n02090622_8814.jpg', function (error, response, body) {
    if (!error && response.statusCode == 200) {
      res.send(`<img src="${response.request.uri.href}" alt="Dog Image">`);
    }
  });
});

module.exports = router;
