const express = require('express');
const app = express();

app.use('/public', express.static('public'));

app.listen(3000, () => console.log('Example app is listening on port 3000.'));
