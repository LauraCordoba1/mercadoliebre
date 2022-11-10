const express = require("express")
const app = express();
const path = require("path")

let port = process.env.PORT || 3000;

app.use(express.static("public"))

app.listen(PORT, console.log("listen on port" + PORT))

app.get("/", (req, res) => {
  res.sendFile(path.resolve("./views/home.html"));
})

app.get("/register", (req, res) => {
  res.sendFile(path.resolve("./views/register.html"));
})

app.get("/login", (req, res) => {
  res.sendFile(path.resolve("./views/login.html"));
})
