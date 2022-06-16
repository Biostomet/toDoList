let list = (document.getElementById("infoButton").onclick = function () {
  let toAdd = document.getElementById("infoList");

  if (toAdd.value.length < 3) {
    document.getElementById("error").textContent =
      "Veuillez mettre au moins 3 caractères";
  } else if (toAdd.value.length > 35) {
    document.getElementById("error").textContent =
      "Veuillez mettre moins de 35 caractères";
  } else {
    console.log("Tout est ok pour envoyer");
    document.getElementById("error").textContent = "";
    document.getElementById(
      "addBox"
    ).innerHTML += `<div id="deleteList" class="d-flex justify-content-between align-items-center task">
    <li class="my-1 mx-2">${toAdd.value}</li>
    <button id="deleteButton" type="button" class="btn btn-danger my-1 mx-2 ddelete="deleteList">
      Delete
    </button>
  </div>`;
  }
  toAdd.value = "";
});

let supprimer = (document.getElementById("deleteButton").onclick =
  function () {});
