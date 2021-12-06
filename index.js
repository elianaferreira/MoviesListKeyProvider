const MOVIEDB_API_KEY = process.env.API_KEY


const express = require('express');
const app = express();

app.get('/api_key', function(req, res) {
  res.json({
      apiKey: MOVIEDB_API_KEY
    });
});
  
// Setting the server to listen at port 3000
app.listen(3000, function(req, res) {
  console.log("Server is running at port 3000");
});