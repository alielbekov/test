// server.js

import express from 'express';

const app = express();
const port = 8080;

// Middleware to parse JSON bodies
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello, World!');
});

app.post('/transcribe', (req, res) => {
  // Placeholder endpoint for transcribing audio
  res.send('Transcription endpoint');
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
