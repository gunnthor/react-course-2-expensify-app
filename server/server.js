const express = require('express');
const path = require('path');
const app = express();
const publicPath = path.join(__dirname, '..', 'public');
const port = process.env.PORT || 3000;

app.use(express.static(publicPath));

//match all unmatched routes
app.get('*', (req, res) => {
  res.sendFile(path.join(public, 'index.html'));
});

app.listen(port, () => {
  console.log('Server is up!');
});