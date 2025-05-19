require('dotenv').config()
let bodyParser = require("body-parser")
let express = require('express')
let app = express()

// 1.
// console.log("Hello World");

// 2.
/*
app.get("/", (req, res) => {
  res.send("Hello Express");
});
*/

// 4. Adds page styling
app.use("/public", express.static(__dirname + "/public"))

// Middleware
// app.use(bodyParser.urlencoded({ extended: false }))

// 7. Implements root level request logger middleware
// app.use((req, res, next) => {
//   console.log(req.method + " " + req.path + " - " + req.ip)
//   next()
// });

// 3. Fetchs index page
app.get("/", (res, req) => {
  req.sendFile(__dirname + "/views/index.html")
});

// 5. Fetchs json data

// app.get("/json", (req, res) => {
//   res.json({ "message": "Hello json" })
// })


// 6. Implements .env file
app.get("/json", (req, res) => {
  if (process.env.MESSAGE_STYLE === "uppercase") {
    res.json({ "message": "HELLO JSON" })
  } else {
    res.json({ "message": "Hello json" })
  }
})

// 8. Implements time server
// app.get("/now", (req, res, next) => {
//   req.time = new Date().toString()
//   next()
// }, (req, res) => {
//   res.json({ "time": req.time })
// })

// 9. Implements echo server
// app.get("/:word/echo", (req, res) => {
//   res.json({ echo: req.params.word })
// })

// 10. Implements name server
// app.get("/name", (req, res) => {
//   res.json({ name: req.query.first + " " + req.query.last })
// })

// 12. Implements post request
// app.post("/name", (req, res) => {
//   res.json({ name: req.body.first + " " + req.body.last })
// })

module.exports = app;