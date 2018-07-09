require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const noteCtrl = require('./controllers/note_controller');

const app = express();
//app.use() --> middleware that runs for EVERY request.
app.use(bodyParser.json());

// ===== ENDPOINTS =====
//app.get('/api/users, (req, res) => {})
app.get('/api/notes', noteCtrl.read)
app.get('/api/notes/:id', noteCtrl.read)
app.post('/api/notes', noteCtrl.create)

app.delete('/api/notes/:id', noteCtrl.delete);


// ===== ENDPOINTS =====
app.listen(process.env.SERVER_PORT, () => {
    console.log(`Listening on port: ${process.env.SERVER_PORT}`);
});