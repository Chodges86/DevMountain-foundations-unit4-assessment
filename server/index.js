const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

app.use(express.json());

const controller = require('./controller');
const { delFortune } = require("./controller");

app.get("/api/compliment", controller.getAllCompliments)
app.get("/api/fortunes", controller.getAllFortunes)
app.get("/api/random-compliment", controller.getCompliment);
app.get("/api/random-fortune", controller.getFortune)
app.post("/api/add-compliment", controller.addCompliment)
app.post("/api/add-fortune", controller.addFortune)
app.delete("/api/del-compliment/:id", controller.delCompliment)
app.delete("/api/del-fortune/:id", controller.delFortune)
app.put("/api/update-compliment/:id", controller.updateCompliments)
app.put("/api/update-fortune/:id", controller.updateFortune)

app.listen(4000, () => console.log("Server running on 4000"));
