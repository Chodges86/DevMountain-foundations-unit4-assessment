const complimentBtn = document.getElementById("complimentButton");
const fortuneBtn = document.getElementById("fortuneButton");
const complimentList = document.getElementById("compliment-list");
const fortuneList = document.getElementById("fortune-list")


const getAllCompliments = () => {
    axios.get("http://localhost:4000/api/compliment/").then((res) => {
        const data = res.data
        data.forEach(compliment => {
            const pElement = document.createElement("p")
            pElement.textContent = compliment
            complimentList.appendChild(pElement)
        })
    })
}

const getAllFortunes = () => {
    axios.get("http://localhost:4000/api/fortunes").then((res) => {
        const data = res.data
        data.forEach(fortune => {
            const pElement = document.createElement("p")
            pElement.textContent = fortune
            fortuneList.appendChild(pElement)
        })
    })
}

const getCompliment = () => {
  axios.get("http://localhost:4000/api/random-compliment/").then((res) => {
    const data = res.data;
    alert(data);
  });
};

complimentBtn.addEventListener("click", getCompliment);

const getFortune = () => {
  axios.get("http://localhost:4000/api/random-fortune/").then((res) => {
    const data = res.data;
    alert(data);
  });
};

fortuneBtn.addEventListener("click", getFortune)

getAllCompliments()
getAllFortunes()