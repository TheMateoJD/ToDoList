let tasks = [
  {
    id: 0,
    done: 1,
    thing: "buy bread",
  },
  {
    id: 1,
    done: 0,
    thing: "learn react",
  },
  {
    id: 2,
    done: 1,
    thing: "repair shitbox e39",
  },
];

let list = document.querySelector(".list");
let newtask = document.querySelector(".addbtn");

function createList() {
  for (let i = 0; i < tasks.length; i++) {
    let id = tasks[i].id;
    let ifdone = tasks[i].done;
    let thing = tasks[i].thing;
    let markup = `
        <div class="el">
          <div class="cc">
            <button class="done" id=${ifdone}>✓</button>
            <div class="content" id="${id}">${thing}</div> 
          </div>
          <button class="remov">X</button>
        </div>`;

    list.insertAdjacentHTML("beforeend", markup);
  }
}

function getNewTaskText() {
  let xd = newtask.addEventListener("click", function () {
    let contains = document.querySelector(".newtask").value;
    let newid = tasks.length;
    addtask = { id: newid, done: 0, thing: contains };
    console.log(addtask);
    tasks.push(addtask);
    console.log(tasks);
    document.querySelector(".newtask").value = "";
    clearlist();
    createList();
  });
}

getNewTaskText();

function clearlist() {
  list.innerHTML = "";
}

// next step is to clear inputbox
// tworzenie initial list z tego co jest w tasks = []
// local storage moze?
// zaznaczanie z lewej zeby dzialało
// kasowanie z prawej zeby działało
///test git
