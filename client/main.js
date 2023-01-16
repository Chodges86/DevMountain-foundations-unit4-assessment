const complimentBtn = document.getElementById("complimentButton");
const fortuneBtn = document.getElementById("fortuneButton");

const centerMessage = document.getElementById("center-message");
const compliments = document.getElementById("compliments");
const fortunes = document.getElementById("fortunes");

const addComplimentForm = document.getElementById("add-compliment");
const addFortuneForm = document.getElementById("add-fortune");
const delComplimentForm = document.getElementById("del-compliment");
const delFortuneForm = document.getElementById("del-fortune");
const updateComplimentForm = document.getElementById("update-compliment")
const updateFortuneForm = document.getElementById("update-fortune")

const getAllCompliments = () => {
  axios.get("http://localhost:4000/api/compliment/").then((res) => {
    const data = res.data;
    data.forEach((compliment) => {
      const liElement = document.createElement("li");
      liElement.textContent = compliment;
      compliments.appendChild(liElement);
    });
  });
};

const getAllFortunes = () => {
  axios.get("http://localhost:4000/api/fortunes").then((res) => {
    const data = res.data;
    data.forEach((fortune) => {
      const liElement = document.createElement("li");
      liElement.textContent = fortune;
      fortunes.appendChild(liElement);
    });
  });
};

const getCompliment = () => {
  axios.get("http://localhost:4000/api/random-compliment/").then((res) => {
    const data = res.data;
    centerMessage.textContent = data;
  });
};



const getFortune = () => {
  axios.get("http://localhost:4000/api/random-fortune/").then((res) => {
    const data = res.data;
    centerMessage.textContent = data;
  });
};



const addCompliment = (body) => {
  axios
    .post("http://localhost:4000/api/add-compliment", body)
    .then(updateCompliments);
};

const addFortune = (body) => {
  axios
    .post("http://localhost:4000/api/add-fortune", body)
    .then(updateFortunes);
};

const delCompliment = (id) => {
  axios
    .delete(`http://localhost:4000/api/del-compliment/${id}`)
    .then(updateCompliments);
};

const delFortune = (id) => {
    axios
    .delete(`http://localhost:4000/api/del-fortune/${id}`)
    .then(updateFortunes)
}

const editCompliment = (id, newText) => {
    axios
    .put(`http://localhost:4000/api/update-compliment/${id}`, {newText})
    .then(updateCompliments)
}

const editFortune = (id, newText) => {
    axios
    .put(`http://localhost:4000/api/update-fortune/${id}`, {newText})
    .then(updateFortunes)
}

function addComplementHandler(e) {
  e.preventDefault();
  const compBody = {
    value: e.target[0].value,
  };
  const input = document.getElementById("add-compliment-input");
  input.value = "";
  addCompliment(compBody);
}

function addFortuneHandler(e) {
  e.preventDefault();
  const fortuneBody = {
    value: e.target[0].value,
  };
  const input = document.getElementById("add-fortune-input");
  input.value = "";
  addFortune(fortuneBody);
}

function deleteComplimentHandler(e) {
  e.preventDefault();
  const id = Number(e.target[0].value) - 1;
  const input = document.getElementById("del-compliment-input");
  input.value = "";
  delCompliment(String(id));
}

function deleteFortuneHander(e) {
  e.preventDefault();
  const id = Number(e.target[0].value) - 1;
  const input = document.getElementById("del-fortune-input");
  input.value = "";
  delFortune(String(id));
}

function editComplimentHandler(e) {
    e.preventDefault()
    const id = Number(e.target[0].value - 1)
    const newText = e.target[1].value
    const numberInput = document.getElementById("update-comp-number-input")
    const textInput = document.getElementById("update-comp-text-input")
    numberInput.value = ""
    textInput.value = ""
    editCompliment(id, newText)
}

function editFortuneHandler(e) {
    e.preventDefault()
    const id = Number(e.target[0].value - 1)
    const newText = e.target[1].value
    const numberInput = document.getElementById("update-fortune-number-input")
    const textInput = document.getElementById("update-fortune-text-input")
    numberInput.value = ""
    textInput.value = ""
    editFortune(id, newText)
}

function updateCompliments(res) {
  compliments.replaceChildren();
  getAllCompliments();
}

function updateFortunes(res) {
  fortunes.replaceChildren();
  getAllFortunes();
}

complimentBtn.addEventListener("click", getCompliment);
fortuneBtn.addEventListener("click", getFortune);
addComplimentForm.addEventListener("submit", addComplementHandler);
addFortuneForm.addEventListener("submit", addFortuneHandler);
delComplimentForm.addEventListener("submit", deleteComplimentHandler);
delFortuneForm.addEventListener("submit", deleteFortuneHander);
updateComplimentForm.addEventListener("submit", editComplimentHandler)
updateFortuneForm.addEventListener("submit", editFortuneHandler)

getAllCompliments();
getAllFortunes();
