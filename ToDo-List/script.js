"use strict";
/*
1. add task by clicking add btn or enter
2. click checkmark -> checkmark icon turns dark gray and task text is crossed out
3. click edit -> new modal with editing task appear
4. click close -> delete task
5. when list is empty we have this info
6. can't enter empty task -> info about it appears under task list title

*/

let inputTaskEl, btnAdd, h2, listBox, p, handlers;
let btnAccept, btnCancel, modal, inputModal;
let currListItem = null;

function init() {
  inputTaskEl = document.querySelector(".task-input");
  btnAdd = document.getElementsByTagName("button")[0];
  h2 = document.querySelector(".task-box h2");
  listBox = document.querySelector(".list-box");

  p = document.createElement("p");
  p.classList.add("task-text--empty", "task-text", "hidden");
  h2.insertAdjacentElement("afterend", p);

  btnAccept = document.querySelector(".btn--accept");
  btnCancel = document.querySelector(".btn--cancel");
  modal = document.querySelector(".modal");
  inputModal = document.querySelector(".input-modal");

  /*
There is multiple of these buttons for every task there is one
so querySelector chose always the first element
btnCheck = document.querySelector(".icon--check");


Something like this also won't work because we dynamically add new list items
and buttons only apply to initial html file

    checkBtns = document.querySelectorAll(".icon--check");
    checkBtns.forEach((btn) => {
    btn.addEventListener("click", (e) => {
        btn.style.color = "grey";
        const listItem = e.target.closest(".list-item");
        const taskText = listItem.querySelector(".task-text");
        taskText.style.textDecoration = "line-through";
    });
    });
    */

  handlers = {
    "icon--check": () => {
      const taskText = currListItem.querySelector(".task-text");
      const isCompleted = currListItem.classList.toggle("completed");
      taskText.style.textDecoration = isCompleted ? "line-through" : "none";
      target.style.color = isCompleted ? "grey" : "";
    },
    "icon--close": () => {
      listBox.removeChild(currListItem);
      isEmpty();
    },
    edit: () => {
      resetInputModal();
      toggleModal();
    },
  };
  // we will use delgation to attach single event listener to a parent element like listBox
  listBox.addEventListener("click", handleListBoxClick);
  btnAdd.addEventListener("click", addTask);
  document.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      addTask();
    }
  });

  btnAccept.addEventListener("click", updateTaskText);
  btnCancel.addEventListener("click", toggleModal);
}

function addTask() {
  const task = inputTaskEl.value;

  if (task === "") {
    showMessage();
    return;
  }
  hideMessage();
  const newListItemHTML = `<li class="list-item">
            <p class="task-text">${task}</p>
            <div class="icons">
              <ion-icon name="checkmark" class="icon--check icon"></ion-icon>
              <a class="edit icon">EDIT</a>
              <ion-icon name="close" class="icon--close icon"></ion-icon>
            </div>
          </li>`;

  // temp div to keep inner html
  const tempDiv = document.createElement("div");
  tempDiv.innerHTML = newListItemHTML;

  listBox.appendChild(tempDiv.firstElementChild);
  inputTaskEl.value = "";
}

function handleListBoxClick(e) {
  // we can use if else or switch to make it but...
  // I want to make it look fancy so I'll use mapping and create
  // object handlers that contains name of the class: function that make sth happens
  // aftern I'll loop over this object and call the corresponding function :)
  // THAT'S MARVELOUS
  const target = e.target;
  currListItem = target.closest(".list-item");

  //   The for...of loop iterates over each key-value pair
  for (const [className, handler] of Object.entries(handlers)) {
    if (target.classList.contains(className)) {
      handler();
      return;
    }
  }
}

function updateTaskText() {
  const textEl = currListItem.querySelector(".task-text");
  const newText = inputModal.value;
  if (newText.length) {
    textEl.textContent = newText;
    toggleModal();
  }
}

function showMessage() {
  p.textContent = "Please enter task description";
  p.classList.remove("hidden");
}

function hideMessage() {
  p.classList.add("hidden");
}

function isEmpty() {
  if (!listBox.children.length) {
    p.textContent = "There are no tasks to do";
    p.classList.remove("hidden");
  }
}

function resetInputModal() {
  inputModal.value = "";
}

function toggleModal() {
  modal.classList.toggle("hidden");
}

init();
