// server.js
// where your node app starts

// init project
var express = require("express");
var app = express();

// enable CORS (https://en.wikipedia.org/wiki/Cross-origin_resource_sharing)
// so that your API is remotely testable by FCC
var cors = require("cors");
app.use(cors({ optionsSuccessStatus: 200 })); // some legacy browsers choke on 204

// http://expressjs.com/en/starter/static-files.html
app.use(express.static("public"));

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function (req, res) {
  res.sendFile(__dirname + "/views/index.html");
});

// Your first API endpoint...
app.get("/api/(:date)?", function (req, res) {
  const { date } = req.params;
  res.json(toDateObject(date));
});

/*
* Returns an object representing the given `input`. If `input` is 
* valid, returns an object with the `unix` and `utc` keys representing 
* the Unix epoch time in milliseconds and a string in the UTC or GMT timezone
* respectively. Otherwise, it returns an object with an `error` key.
* @function
* @param {undefined|number|string} input? - An optional date represented 
as an Unix epoch timestamp in milliseconds or a date string.
*/
function toDateObject(input = undefined) {
  let date;
  let isValidDate = false;
  if (input === undefined) {
    date = new Date();
    isValidDate = true;
  } else if (Number.isNaN(Number(input))) {
    date = new Date(input);
    if (String(date) != "Invalid Date") isValidDate = true;
  } else {
    date = new Date(Number(input));
    isValidDate = true;
  }
  return isValidDate
    ? {
        unix: date.getTime(),
        utc: date.toUTCString(),
      }
    : {
        error: "Invalid Date",
      };
}

module.exports = {
  toDateObject,
  app,
};
