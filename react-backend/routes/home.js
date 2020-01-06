const express = require("express"),
  router = express.Router(),
  async = require("express-async-await"),
  fetch = require("node-fetch");

/* GET home page. */
router.get("/", async function(req, res, next) {

  function getData() {

    return fetch(`https://api.weatherbit.io/v2.0/forecast/daily?city=Atlanta&country=US&state=GA&days=5&key=ff8d52c3d6f547cfab9b10d50f932e7e`);
  }

  const processData = async () => {
    const data = await getData();

    const response = await data.json();

    console.log(response);
    return response
  }

  const info = await processData();

  res.send(info).status(200);
});

// router.get("/days", async function(req, res, next) {

//   function getDays() {

//     return fetch(`https://api.weatherbit.io/v2.0/forecast/daily?city=Atlanta&country=US&state=GA&days=5&key=ff8d52c3d6f547cfab9b10d50f932e7e`)
//   }

//   const processDays = async () => {
//     const data = await getDays();

//     const response = await data.json();

//     console.log(response);
//     return response
//   }

//   const days = await processDays();

//   res.send(days).status(200);
// })

module.exports = router;