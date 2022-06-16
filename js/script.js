let list = (document.getElementById("infoButton").onclick = function () {
  let toAdd = document.getElementById("infoList");
  if (toAdd.value.length < 3) {
    document.getElementById("error").textContent =
      "Veuillez mettre au moins 3 caractères";
  } else {
    document.getElementById("error").textContent = "";
    document.getElementById(
      "addBox"
    ).innerHTML += `<li class="py-1">${toAdd.value}</li>`;
  }
  toAdd.value = "";
});
