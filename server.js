const express = require('express');

const app = express();
app.listen(5001, () => console.log('Listening at 5001'));
app.use(express.static('public'));