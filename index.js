// index.js
require("dotenv").config();
const { app } = require("./server");

// listen for requests :)
const listener = app.listen(process.env.PORT, function () {
  console.log("Your app is listening on port " + listener.address().port);
});
