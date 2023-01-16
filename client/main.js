const complimentBtn = document.getElementById("complimentButton");
const fortuneBtn = document.getElementById("fortuneButton");

const centerMessage = document.getElementById("center-message");
const compliments = document.getElementById("compliments");
const fortunes = document.getElementById("fortunes");

const addComplimentForm = document.getElementById("add-compliment");
const addFortuneForm = document.getElementById("add-fortune");
const delComplimentForm = document.getElementById("del-compliment");
const delFortuneForm = document.getElementById("del-fortune");
const updateComplimentForm = document.getElementById("update-compliment");
const updateFortuneForm = document.getElementById("update-fortune");

const baseURL = "http://localhost:4000/api";


const getAll = () => axios.get(`${baseURL}/get-all`).then(displayLists);
const getRandom = (e) => axios.get(`${baseURL}/get-random/${e.srcElement.id}`).then(displayRandom);
const add = (body) => axios.post(`${baseURL}/add`, body).then(updateLists);
const remove = (id, type) => axios.delete(`${baseURL}/delete/${id}&${type}`).then(updateLists);
const edit = (id, newText, type) => axios.put(`${baseURL}/update/${id}`, { newText, type }).then(updateLists);

function addHandler(e) {
  e.preventDefault();
  const form = e.srcElement.id;
  let type;
  let input;
  if (form === "add-compliment") {
    type = "compliments";
    input = document.getElementById("add-compliment-input");
  } else if (form === "add-fortune") {
    type = "fortunes";
    input = document.getElementById("add-fortune-input");
  }
  const body = {
    type: type,
    value: e.target[0].value,
  };
  input.value = "";
  add(body);
}

function deleteHandler(e) {
  e.preventDefault();
  const form = e.srcElement.id;
  const id = Number(e.target[0].value) - 1;

  if (form === "del-compliment") {
    const input = document.getElementById("del-compliment-input");
    input.value = "";
    remove(id, "compliments ");
  } else if (form === "del-fortune") {
    const input = document.getElementById("del-fortune-input");
    input.value = "";
    remove(id, "fortunes");
  }
}

function editHandler(e) {
  e.preventDefault();
  const form = e.srcElement.id;
  const id = Number(e.target[0].value) - 1;
  const newText = e.target[1].value;

  if (form === "update-compliment") {
    const numberInput = document.getElementById("update-comp-number-input");
    const textInput = document.getElementById("update-comp-text-input");
    numberInput.value = "";
    textInput.value = "";
    edit(id, newText, "compliment");
  } else if (form === "update-fortune") {
    const numberInput = document.getElementById("update-fortune-number-input");
    const textInput = document.getElementById("update-fortune-text-input");
    numberInput.value = "";
    textInput.value = "";
    edit(id, newText, "fortune");
  }
}

function updateLists(res) {
    compliments.replaceChildren()
    fortunes.replaceChildren()
    getAll()

}

function displayLists(res) {
  const comps = res.data[0].data;
  const forts = res.data[1].data;
  comps.forEach((comp) => {
    const liElement = document.createElement("li");
    liElement.textContent = comp;
    compliments.appendChild(liElement);
  });
  forts.forEach((fort) => {
    const liElement = document.createElement("li");
    liElement.textContent = fort
    fortunes.appendChild(liElement)
  });
}

function displayRandom(res) {
  centerMessage.textContent = res.data;
}

complimentBtn.addEventListener("click", getRandom);
fortuneBtn.addEventListener("click", getRandom);
addComplimentForm.addEventListener("submit", addHandler);
addFortuneForm.addEventListener("submit", addHandler);
delComplimentForm.addEventListener("submit", deleteHandler);
delFortuneForm.addEventListener("submit", deleteHandler);
updateComplimentForm.addEventListener("submit", editHandler);
updateFortuneForm.addEventListener("submit", editHandler);

getAll();
