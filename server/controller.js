const database = require("./db.json")

module.exports = {

    getAllCompliments: (req, res) => {
        res.status(200).send(database[0].data)
    },

    getAllFortunes: (req, res) => {
        res.status(200).send(database[1].data)
    },

    getCompliment: (req, res) => {
        const compliments = database[0].data
        // choose random compliment
        let randomIndex = Math.floor(Math.random() * compliments.length);
        let randomCompliment = compliments[randomIndex];
      
        res.status(200).send(randomCompliment);
    },

    getFortune: (req, res) => {
        const fortunes = database[1].data

        let randomIndex = Math.floor(Math.random() * fortunes.length)
        let randomFortune = fortunes[randomIndex]

        res.status(200).send(randomFortune)

    },

    addCompliment: (req, res) => {
        const { value } = req.body
        database[0].data.push(value)
        res.status(200).send(database[0].data)
    },
    
    addFortune: (req, res) => {
        const { value } = req.body
        database[1].data.push(value)
        res.status(200).send(database[1].data)
    },

    delCompliment: (req, res) => {
        const id = Number(req.params.id)
        
        database[0].data.splice(id, 1)

        res.status(200).send(database[0].data)
    },

    delFortune: (req, res) => {
        const id = Number(req.params.id)

        database[1].data.splice(id, 1)

        res.status(200).send(database[1].data)
    },

    updateCompliments: (req, res) => {
        const id = Number(req.params.id)
        const { newText } = req.body
        database[0].data[id] = newText
        res.status(200).send(database[0].data)

    },

    updateFortune: (req, res) => {
        const id = Number(req.params.id)
        const { newText } = req.body
        database[1].data[id] = newText
        res.status(200).send(database[1].data)
    }

}