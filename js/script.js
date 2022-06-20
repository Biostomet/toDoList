let list = (document.getElementById("infoButton").onclick = function () {
  let toAdd = document.getElementById("infoList");

  if (toAdd.value.length < 3) {
    document.getElementById("error").textContent =
      "Veuillez mettre au moins 3 caractères";
  } else if (toAdd.value.length > 35) {
    document.getElementById("error").textContent =
      "Veuillez mettre moins de 35 caractères";
  } else {
    document.getElementById("error").textContent = "";
    document.getElementById(
      "addBox"
    ).innerHTML += `<div id="deleteList" class="d-flex justify-content-between align-items-center border-bottom py-3 task">
    <li class="my-1 mx-2">${toAdd.value}</li>
    <button type="button" class="btn btn-danger my-1 mx-2 delete">
      Delete
    </button>
  </div>`;

    let currentTask = document.querySelectorAll(".delete");
    for (let i = 0; i < currentTask.length; i++) {
      currentTask[i].onclick = function () {
        this.parentNode.remove();
      };
    }

    let barrerTask = document.querySelectorAll("LI");
    for (let i = 0; i < barrerTask.length; i++) {
      barrerTask[i].onclick = function () {
        this.classList.toggle("completed");
      };
    }
  }
  toAdd.value = "";
});
