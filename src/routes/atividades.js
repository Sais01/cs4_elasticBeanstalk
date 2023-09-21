const express      = require('express');
const axios        = require('axios');
const router       = express.Router();
const generateGUID = require('../utils/guid_generator');

// GET /api/atividades
router.get('/atividades', async (req, res) => {
  const BORED_API_URL = process.env.BORED_API_URL;

  axios.get(BORED_API_URL)
    .then(response => {
      const activityData = response.data;
      const formattedActivityData = {
        "id"            : generateGUID(),
        "atividade"     : activityData.activity,
        "tipo"          : activityData.type,
        "participantes" : activityData.participants,
        "acessibilidade": (activityData.accessibility * 100) + "%",
      };

      // Send the formatted activity data with a status of 200
      res.status(200).send(formattedActivityData);
    })
    .catch(err => {
      // Log the error and send a status of 500
      console.error("Error fetching activity data: ", err);
      res.status(500).send("Error fetching activity data");
    })
});

module.exports = router;
