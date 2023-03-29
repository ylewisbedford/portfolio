let latestButton = document.getElementById("latestProjectButton");

let christmasButton = document.getElementById("christmasProjectButton");


let latestSection = document.getElementById("latest");


function unhideLatest() {
    latestSection.hidden = false;
}

latestButton.addEventListener('click', unhideLatest );



