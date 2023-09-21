// Required modules to run the code
const express      = require('express');
const axios        = require('axios');
const router       = express.Router();
const generateGUID = require('../utils/guid_generator');

// GET /api/piadas
router.get('/piadas', async (req, res) => {
  const JOKES_API = process.env.JOKES_API;

  axios.get(JOKES_API)
    .then(response => {
      const jokeData = response.data;

      // Let the updated_at and created_at fields in the format of "DD/MM/AAAA" as requested
      formattedUpdatedAt  = jokeData.updated_at.split(" ")[0];
      const UpdatedAtDate = formattedUpdatedAt.split("-");
      formattedUpdatedAt  = `${UpdatedAtDate[2]}/${UpdatedAtDate[1]}/${UpdatedAtDate[0]}`;

      formattedCreatedAt  = jokeData.created_at.split(" ")[0];
      const CreatedAtDate = formattedCreatedAt.split("-");
      formattedCreatedAt  = `${CreatedAtDate[2]}/${CreatedAtDate[1]}/${CreatedAtDate[0]}`;

      // Replace all occurrences of "Chuck Norris" with "CHUCK NORRIS" as requested
      if (jokeData.value.includes("Chuck Norris")) {
        jokeData.value = jokeData.value.replace("Chuck Norris", "CHUCK NORRIS");
      }

      // Format the joke data as requested
      const formattedJokeData = {
        "data_atualizacao": formattedUpdatedAt,
        "data_criacao"    : formattedCreatedAt,
        "icone"           : jokeData.icon_url,
        "id"              : generateGUID(),
        "piada"           : jokeData.value,
        "referencia"      : jokeData.url,
      };

      // Send the formatted joke data with a status of 200
      console.log(JSON.stringify(formattedJokeData, null, 2));
      res.status(200).send(formattedJokeData);
    })
    // Returns an error if something goes wrong
    .catch(err => {
      console.error("Error fetching joke data: ", err);
      res.status(500).send("Error fetching joke data");
    })
});

module.exports = router;