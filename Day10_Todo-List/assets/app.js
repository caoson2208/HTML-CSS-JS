const input = document.querySelector("input");
const button = document.querySelector("button");
const form = document.querySelector("form");
const todos = document.querySelector(".todos");

form.addEventListener("submit", e => {
  e.preventDefault();
  let value = input.value.trim();
  if (value) {
    addElementTodo({
      text: value,
    });
    saveTodoList();
  }

  input.value = "";
});

const addElementTodo = todo => {
  // {
  // Text
  // Status: completed
  // }
  var li = document.createElement("li");
  li.innerHTML = `<span>${todo.text}</span>
          <i class="far fa-trash-alt"></i>`;

  if (todo.status === "completed") {
    li.setAttribute("class", "completed");
  }

  li.addEventListener("click", function () {
    this.classList.toggle("completed");
    saveTodoList();
  });

  li.querySelector("i").addEventListener("click", function () {
    this.parentElement.remove();
    saveTodoList();
  });

  todos.appendChild(li);
};

const saveTodoList = () => {
  let todoList = document.querySelectorAll("li");
  let todoStorage = [];
  todoList.forEach(item => {
    let text = item.querySelector("span").innerText;
    let status = item.getAttribute("class");

    todoStorage.push({
      text,
      status,
    });
  });

  localStorage.setItem("todolist", JSON.stringify(todoStorage));
};

const init = () => {
  let data = JSON.parse(localStorage.getItem("todolist"));
  data.forEach(item => {
    console.log(item);
    addElementTodo(item);
  });
};

init();
