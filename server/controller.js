module.exports = {

    getCompliment: (req, res) => {
        const compliments = ["Gee, you're a smart cookie!", "Cool shirt!", "Your Javascript skills are stellar."];
      
        // choose random compliment
        let randomIndex = Math.floor(Math.random() * compliments.length);
        let randomCompliment = compliments[randomIndex];
      
        res.status(200).send(randomCompliment);
    },
    getFortune: (req, res) => {
        const fortunes = [
            "A feather in the hand is better than a bird in the air.",
            "A short pencil is usually better than a long memory any day.",
            "Don’t confuse recklessness with confidence.", 
            "Imagination rules the world.", 
            "Miles are covered one step at a time."
        ]

        let randomIndex = Math.floor(Math.random() * fortunes.length)
        let randomFortune = fortunes[randomIndex]

        res.status(200).send(randomFortune)

    }
    
}