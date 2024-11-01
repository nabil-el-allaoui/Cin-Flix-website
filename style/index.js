var counter = 1;
function myfunction() {
    counter++;
    if (counter === 6) {
        counter = 1;
    }
    document.getElementById('radio' + counter).checked = true;
}

function prevfunction() {
    counter--;
    if (counter === 0) {
        counter = 5;
    }
    document.getElementById('radio' + counter).checked = true;
}

setInterval(function () {
    counter++;
    if (counter === 6) {
        counter = 1;
    }
    document.getElementById('radio' + counter).checked = true;
}, 3000)

function searchclick() {
    document.querySelector('.slider').style.display = "none";
}


function search() {
    let searchText = document.querySelector('.search-bar').value.toUpperCase();
    let movies = document.querySelectorAll('.movie');
    let movieTitle = document.getElementsByTagName('h3');

    for (i = 0; i < movieTitle.length; i++) {
        if (movieTitle[i].innerHTML.toUpperCase().indexOf(searchText) >= 0) {
            movies[i].style.display = "";
        } else {
            movies[i].style.display = "none";
        }
    }
}

let dark = document.getElementById('dark');
var main = document.querySelector(':root');
let sunButton = document.querySelector(".sun-light");
let moonButton = document.getElementById('dark-button');
function lighMode() {
    document.body.style.setProperty('--mainColor', '#FBF6F6');
    document.body.style.setProperty('--secondaryColor', '#F5E4E4');
    document.body.style.setProperty('--thirdColor', '#DADADA');
    document.body.style.setProperty('--basicColor2', 'black');
    document.body.style.setProperty('--borderColor', 'gray');
    document.body.style.setProperty('--bodyColor', 'white');
}
function darkMode() {
    document.body.style.setProperty('--mainColor', 'black')
    document.body.style.setProperty('--secondaryColor', 'black');
    document.body.style.setProperty('--thirdColor', 'black');
    document.body.style.setProperty('--basicColor2', 'white');
    document.body.style.setProperty('--borderColor', 'white');
    document.body.style.setProperty('--bodyColor', 'black');
}

dark.addEventListener("click", (e) => {
    if (dark.checked === false) {
        lighMode();
        moonButton.style.display = "block";
        sunButton.style.display = "none";
    }
    else {
        localStorage.setItem("checked", dark.checked)
        var checked = JSON.parse(localStorage.getItem("checked"));
        console.log(dark.checked);
        if(dark.checked === true) {
            darkMode();
        }
        darkMode();
        moonButton.style.display = "none";
        sunButton.style.display = "block";
    }
})
