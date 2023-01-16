const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

app.use(express.json());

const controller = require('./controller');
const { delFortune } = require("./controller");

app.get("/api/get-all", controller.getAll)
app.get("/api/get-random/:button", controller.getRandom)
app.post("/api/add", controller.add)
app.delete("/api/delete/:id&:type", controller.remove)
app.put("/api/update/:id", controller.update)

app.listen(4000, () => console.log("Server running on 4000"));
