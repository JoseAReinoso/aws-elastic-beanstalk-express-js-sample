const express = require('express');
const app = express();
const port = 8080;

app.get('/', (req, res) => 
res.send('Hello World, This is Jose Reinso doing DevOps Engineer stuf by creating a continuous delivery pipeline for a simple webApp, now i can also add reviews to the the pipeline process!!!'));

app.listen(port);
console.log(`App running on http://localhost:${port}`);
