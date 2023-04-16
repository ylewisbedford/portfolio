let latestButton = document.getElementById("latestProjectButton");

let christmasButton = document.getElementById("christmasProjectButton");
let plusLate = document.getElementById("plusLatest");

let latestSection = document.getElementById("latest");
let christmasSection = document.getElementById("christmas");
const mediaQuery = window.matchMedia('(max-width: 768px)');
const mediaQuery2 = window.matchMedia('(min-width: 767px)');

function unhideLatest(event) {

    if (mediaQuery.matches) {

        if (latestSection.style.display === 'none') {
            latestSection.style.display = 'block';
            plusLate.innerHTML = "-";

        } else {
            latestSection.style.display = 'none';
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

        if (christmasSection.style.display === 'none') {
            christmasSection.style.display = 'block';
            plusChristmas.innerHTML = "-";
        } else {
            christmasSection.style.display = 'none';
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

// Removes any open items when moving from desktop to mobile or vice versa
function getRidOfThings() {
    if (mediaQuery.matches) {
        document.getElementById('christmas-desktop').style.display = 'none';
        document.getElementById('latest-desktop').style.display = 'none';
        latestButton.style.background = '#56ff8a';
        christmasButton.style.background = '#56ff8a';
    } else {
        latestSection.style.display = 'none';
        christmasSection.style.display = 'none';
        document.getElementById('latest-desktop').style.display = 'block';
        latestButton.style.background = '#3daa5e';



    }
}

window.addEventListener('resize', getRidOfThings);

// cookie banner

(() => {
    const getCookie = (name) => {
        const value = " " + document.cookie;
        console.log("value", `==${value}==`);
        const parts = value.split(" " + name + "=");
        return parts.length < 2 ? undefined : parts.pop().split(";").shift();
    };

    const setCookie = function (name, value, expiryDays, domain, path, secure) {
        const exdate = new Date();
        exdate.setHours(
            exdate.getHours() +
            (typeof expiryDays !== "number" ? 365 : expiryDays) * 24
        );
        document.cookie =
            name +
            "=" +
            value +
            ";expires=" +
            exdate.toUTCString() +
            ";path=" +
            (path || "/") +
            (domain ? ";domain=" + domain : "") +
            (secure ? ";secure" : "");
    };

    const $cookiesBanner = document.querySelector(".cookies-eu-banner");
    const $cookiesBannerButton = $cookiesBanner.querySelector("button");
    const cookieName = "cookiesBanner";
    const hasCookie = getCookie(cookieName);

    if (!hasCookie) {
        $cookiesBanner.classList.remove("hidden");
    }

    $cookiesBannerButton.addEventListener("click", () => {
        setCookie(cookieName, "closed");
        $cookiesBanner.remove();
    });
})();

