let latestButton = document.getElementById("latestProjectButton");

let christmasButton = document.getElementById("christmasProjectButton");
let plusLate = document.getElementById("plusLatest");

let latestSection = document.getElementById("latest");
let christmasSection = document.getElementById("christmas");

function unhideLatest(event) {
    if (latestSection.hidden === true) {
      latestSection.hidden = false;
      plusLate.innerHTML = "-";

    } else {
        latestSection.hidden = true;
        plusLate.innerHTML = "+";
    }
}

latestButton.addEventListener('click', unhideLatest );

function unhideChristmas() {
    if (christmasSection.hidden === true) {
        christmasSection.hidden = false;
        plusChristmas.innerHTML = "-";
    } else {
        christmasSection.hidden = true;
        plusChristmas.innerHTML = "+";
    }
}

christmasButton.addEventListener('click', unhideChristmas);