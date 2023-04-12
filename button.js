let latestButton = document.getElementById("latestProjectButton");

let christmasButton = document.getElementById("christmasProjectButton");
let plusLate = document.getElementById("plusLatest");

let latestSection = document.getElementById("latest");
let christmasSection = document.getElementById("christmas");
const mediaQuery = window.matchMedia('(max-width: 768px)');
const mediaQuery2 = window.matchMedia('(min-width: 767px)');

function unhideLatest(event) {

    if (mediaQuery.matches) {

        if (latestSection.hidden === true) {
            latestSection.hidden = false;
            plusLate.innerHTML = "-";

        } else {
            latestSection.hidden = true;
            plusLate.innerHTML = "+";
        }
    } else {


        document.getElementById('latest-desktop').style.display = "block";
        document.getElementById('christmas-desktop').style.display = 'none';

        christmasButton.style.background = "#56ff8a";
        latestButton.style.background = '#3daa5e';

    }

}

latestButton.addEventListener('click', unhideLatest);

function unhideChristmas() {


    if (mediaQuery.matches) {

        if (christmasSection.hidden === true) {
            christmasSection.hidden = false;
            plusChristmas.innerHTML = "-";
        } else {
            christmasSection.hidden = true;
            plusChristmas.innerHTML = "+";
        }

    } else {

        document.getElementById('christmas-desktop').style.display = "block";
        document.getElementById('latest-desktop').style.display = 'none';
        latestButton.style.background = "#56ff8a";
        christmasButton.style.background = '#3daa5e';

    }
}

christmasButton.addEventListener('click', unhideChristmas);


function getRidOfThings() {
    if (mediaQuery.matches) {
        document.getElementById('christmas-desktop').style.display = 'none';
        document.getElementById('latest-desktop').style.display = 'none';
    } else {
        latestSection.style.display = 'none';
        christmasSection.style.display = 'none';
    }
}

window.addEventListener('resize', getRidOfThings);




