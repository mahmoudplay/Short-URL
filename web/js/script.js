<<<<<<< HEAD
function showPopup() {
    document.getElementById("popup").classList.add("active");
    document.getElementById("overlay").classList.add("active");
}

function hidePopup() {
    document.getElementById("popup").classList.remove("active");
    document.getElementById("overlay").classList.remove("active");
}
=======
function ValidLink(url) {
  const linkRegex =
    /(?:(?:https?|ftp|file):\/\/|www\.|ftp\.)(?:\([-A-Z0-9+&@#\/%=~_|$?!:,.]*\)|[-A-Z0-9+&@#\/%=~_|$?!:,.])*(?:\([-A-Z0-9+&@#\/%=~_|$?!:,.]*\)|[A-Z0-9+&@#\/%=~_|$])/gim;
  return linkRegex.test(url);
}

function showPopup() {
  var input = document.querySelector(".inputUrl input");
  if (!input.value || !ValidLink(input.value)) {
    document.getElementById("errorPopup").classList.add("active");
    document.getElementById("overlay").classList.add("active");
    return;
  }
  document.getElementById("popup").classList.add("active");
  document.getElementById("overlay").classList.add("active");
}

function hidePopup() {
  document.getElementById("popup").classList.remove("active");
  document.getElementById("overlay").classList.remove("active");
}

function hideError() {
  document.getElementById("errorPopup").classList.remove("active");
  document.getElementById("overlay").classList.remove("active");
}
document
  .querySelector(".inputUrl input")
  .addEventListener("keydown", function (e) {
    if (e.key === "Enter") showPopup();
  });
document.addEventListener("keydown", function (e) {
  if (e.key === "Escape") {
    hidePopup();
    hideError();
  }
});
>>>>>>> 6b68ef6 (add error popout (1.3.3))
