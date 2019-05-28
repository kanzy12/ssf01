//load modules
const express = require('express');

//set tunables
const PORT = parseInt(process.argv[2] || process.env.APP_PORT || 3000);

//create app
const app = express();

//set root
app.use(express.static(__dirname + '/public'));

//run express
app.listen(PORT, () => {
    console.info(`App started on port ${PORT} at ${new Date()}`);
});