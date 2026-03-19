function showPopup() {
    document.getElementById("popup").classList.add("active");
    document.getElementById("overlay").classList.add("active");
}

function hidePopup() {
    document.getElementById("popup").classList.remove("active");
    document.getElementById("overlay").classList.remove("active");
}