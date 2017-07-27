const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`I'm listening on port ${port}`));

app.use(express.static(path.resolve(__dirname)));
app.get('*', (req, res,next) => res.sendFile(__dirname + '/index.html'));