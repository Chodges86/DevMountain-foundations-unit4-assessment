const database = require("./db.json")

module.exports = {

    getAll: (req, res) => {
        res.status(200).send(database)
    },

    getRandom: (req, res) => {
        const button = req.params.button
        let db;
        if (button === "complimentButton") {
            db = 0
        } else if (button === "fortuneButton") {
            db = 1
        }
        const randomIndex = Math.floor(Math.random() * database[db].data.length)
        const randomItem = database[db].data[randomIndex]
        res.status(200).send(randomItem)
    },

    add: (req, res) => {
        const { value, type } = req.body
        let db;
        if (type === "compliments") {
            db = 0
        } else if (type === "fortunes") {
            db = 1
        }
        database[db].data.push(value)
        res.status(200).send(database[db])
    },

    remove: (req, res) => {
        const id = Number(req.params.id)
        const type = req.params.type
        let db;
        if (type === "compliments") {
            db = 0
        } else if (type === "fortunes") {
            db = 1
        }
        database[db].data.splice(id, 1)
        res.status(200).send(database[db])
    },

    update: (req, res) => {
        const id = Number(req.params.id)
        const { newText, type } = req.body
        let db;
        if (type === "compliment") {
            db = 0
        } else if (type === "fortune") {
            db = 1
        }
        database[db].data[id] = newText
        res.status(200).send(database[db])
    }

}