const express = require('express');
const bodyParser = require('body-parser');

const app = express();
//app.use() --> middlware that runs for EVERY request.
app.use(bodyParser.json());

// ===== ENDPOINTS =====
//app.get('/api/users, (req, res) => {})

// ===== ENDPOINTS =====
const PORT = 3010;
app.listen(PORT, () => {
    console.log(`Listening on port: ${PORT}`);
});