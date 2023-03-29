let latestButton = document.getElementById("latestProjectButton");

let christmasButton = document.getElementById("christmasProjectButton");


let latestSection = document.getElementById("latest");


function unhideLatest() {
    if (latestSection.hidden === true) {
      latestSection.hidden = false;
    } else {
        latestSection.hidden = true;
    }
}

latestButton.addEventListener('click', unhideLatest );

