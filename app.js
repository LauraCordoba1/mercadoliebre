const express = require("express")
const app = express();
const mainRouter = require("./routers/mainRouter")

let PORT = process.env.PORT || 3000;

app.listen(PORT, console.log("listen on port" + PORT))

app.use(express.static("public"))

app.use("/", mainRouter) 
