const api = "http://localhost:3000/"
const urlLabel = document.querySelector("#shortUrl");
const qr = document.querySelector("#qrCode")

function ValidLink(url){
  const linkRegex = /^(https?:\/\/)?(www\.)?[-A-Z0-9+&@#\/%=~_|$?!:,.]+\.[A-Z]{2,}(\/.*)?$/i;
  return linkRegex.test(url);
}

async function showPopup() {
  const input = document.querySelector(".inputUrl input");


  if (!input.value || !ValidLink(input.value)) {
    document.getElementById("errorPopup").classList.add("active");
    document.getElementById("overlay").classList.add("active");
    
  }else {
    
    const apiReq = await fetch(api, {
      method: 'POST',
      headers: {
      'Content-Type': 'application/json'
      },
      body: JSON.stringify({
          redirUrl: input.value,

      })
    });

    const shortedUrl = await apiReq.json();

    urlLabel.innerHTML = shortedUrl.shortedUrl;
    qr.src = shortedUrl.qrCode;

    document.getElementById("popup").classList.add("active");
    document.getElementById("overlay").classList.add("active");
  }

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


function copyShortedUrl() {
  navigator.clipboard.writeText(urlLabel.innerHTML)
    .then(() => {
      alert("Copied ✅");
    })
    .catch(err => {
      console.error("Error:", err);
    });
}