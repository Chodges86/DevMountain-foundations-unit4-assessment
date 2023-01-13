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

    }
    
}