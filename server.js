const express = require('express');
const app = express();
const path = require('path');
const mime = require('mime');

const port = process.env.PORT || 3000;

// Serve the static files
app.use(express.static(path.join(__dirname, 'build')));

// Serve the service worker file with the correct MIME type
app.get('/service-worker.js', (req, res) => {
  const filePath = path.join(__dirname, 'build', 'service-worker.js');
  const mimeType = mime.getType(filePath);
  res.setHeader('Content-Type', mimeType);
  res.sendFile(filePath);
});

// Serve the index.html file
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

// Start the server
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
