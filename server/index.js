const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

app.use(express.json());

const controller = require('./controller')

app.get("/api/compliment", controller.getAllCompliments)
app.get("/api/fortunes", controller.getAllFortunes)
app.get("/api/random-compliment", controller.getCompliment);
app.get("/api/random-fortune", controller.getFortune)

app.listen(4000, () => console.log("Server running on 4000"));
