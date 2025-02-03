let tasks = [];
let list = document.querySelector(".list");
let newtask = document.querySelector(".addbtn");
let resbtn = document.querySelector(".reset");
let btnenter = document.querySelector(".newtask");

//przycisk resetu całej listy
resbtn.addEventListener("click", function () {
  // ustawienie pustej lokalnej pamieci
  stor = [];
  localStorage.setItem("stor", JSON.stringify(stor));
  //wyczyszczenie listy tasks
  tasks = [];
  //wywołanie utworzenia listy która jest pusta
  createList();
});

//sprawdzenie pamieci lokalnej
function checklocal() {
  let check = localStorage.getItem("stor");
  // jesli nie ma obiektu to go tworzy
  if (check === null) {
    let stor = [];
    localStorage.setItem("stor", JSON.stringify(stor));
    console.log("tworze pusta liste");
  } else {
    //jesli jest to go odczytuje i zapisuje
    stor = localStorage.getItem("stor");
    console.log("odczytano liste");
    tasks = JSON.parse(stor);
    //wywołuje ta liste od razu
    createList();
  }
  // i czeka na przycisk nowy task???
  getNewTaskText();
  //numerator id
}

//odczytanie tego obiektu
// zawołanie funkcji zeby utworzyła liste z tego obiektu

//tworzenie listy ze wszystkich elementów tasks = [...]
function createList() {
  list.innerHTML = "";
  for (let i = 0; i < tasks.length; i++) {
    let id = tasks[i].id;
    let ifdone = tasks[i].done;
    let pclass = "";
    if (ifdone === 1) {
      pclass = "donedone";
    } else {
      pclass = "done";
    }
    let thing = tasks[i].thing;
    // dodac klase odpowiednią po jak skoncze dodawac funkcje
    let markup = `
        <div class="el">
          <div class="cc">
            <button class="${pclass}" id=${id}>✓</button>
            <div class="content" id="${id}">${thing}</div> 
          </div>
          <button class="remov">X</button>
        </div>`;

    list.insertAdjacentHTML("beforeend", markup);
  }
  doneCheck();
}

// tworzenie nowego elementu listy
let xd = newtask.addEventListener("click", function () {
  getNewTaskText();
});
btnenter.addEventListener("keypress", (ev) => {
  let keyCode = event.keyCode;
  if (keyCode === 13) {
    getNewTaskText();
  }
});

function getNewTaskText() {
  let contains = document.querySelector(".newtask").value;
  if (contains === "") {
    //wraca jesli pole tekstowe jest puste a kliknie sie enter
    return;
  }
  //sprawdza jakie ID nadać
  let newid = tasks.length;
  //tworzy nowy obiekt tymczasowy i go pushuje do macierzy tasks
  addtask = { id: newid, done: 0, thing: contains };
  tasks.push(addtask);
  //czyści pole inputu
  document.querySelector(".newtask").value = "";
  // woła funkcje zeby utworzyło liste od nowa
  createList();
  //dodaje nowy element do local storage nadpisując liste
  localStorage.setItem("stor", JSON.stringify(tasks));
}

// przypisanie do kliknietego przycisku klasy "widocznego" znaczka
function doneCheck() {
  let checkmarks = document.querySelectorAll(".done");
  checkmarks.forEach((node) =>
    node.addEventListener("click", function () {
      this.classList.add("donedone");
      this.classList.remove("done");
      console.log(node.id);
      tasks[node.id].done = 1;
      console.log(tasks);
      localStorage.setItem("stor", JSON.stringify(tasks));
    })
  );
}

checklocal();

// dodatkowe notatki roadmap

// dataset a nie id
// id unikalne w nieskonczonosc a nie lenght
// kasowanie z lewej na koniec

// zmaina kolejnosci??
