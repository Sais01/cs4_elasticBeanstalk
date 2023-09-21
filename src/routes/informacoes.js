const express      = require('express');
const axios        = require('axios');
const router       = express.Router();

// GET /
router.get('/', (req, res) => {
  res.status(200).send('Este é o app da equipe 5 😀');
});

module.exports = router;
