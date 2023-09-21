const express = require('express');
const app     = express();

// Config environment variables
require('dotenv').config({ path: `${__dirname}/config/.env` })

const PORT = process.env.PORT;

// Routes
app.use('/', require('./routes/informacoes'));
app.use('/api', require('./routes/piadas'));
app.use('/api', require('./routes/atividades'));

// Start Server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});