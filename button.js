let latestButton = document.getElementById("latestProjectButton");

let christmasButton = document.getElementById("christmasProjectButton");


let latestSection = document.getElementById("latest");
let christmasSection = document.getElementById("christmas");

function unhideLatest() {
    if (latestSection.hidden === true) {
      latestSection.hidden = false;
    } else {
        latestSection.hidden = true;
    }
}

latestButton.addEventListener('click', unhideLatest );

function unhideChristmas() {
    if (christmasSection.hidden === true) {
        christmasSection.hidden = false;
    } else {
        christmasSection.hidden = true;
    }
}

christmasButton.addEventListener('click', unhideChristmas);