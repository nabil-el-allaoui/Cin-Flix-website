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

// setInterval(function () {
//     counter++;
//     if (counter === 6) {
//         counter = 1;
//     }
//     document.getElementById('radio' + counter).checked = true;
// }, 3000)

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
    localStorage.setItem("check", dark.checked);
    if (dark.checked === false) {
        lighMode();
        moonButton.style.display = "block";
        sunButton.style.display = "none";
    }
    else {
        darkMode();
        moonButton.style.display = "none";
        sunButton.style.display = "block";
    }
})

var checked = JSON.parse(localStorage.getItem("check"));


if (checked === true) {
    dark.checked = true;
    darkMode();
    moonButton.style.display = "none";
    sunButton.style.display = "block";
}


function home() {
    let moviesTobestocked = document.querySelectorAll(".movie");
    moviesTobestocked.forEach((e, index) => {
        let movie = e.outerHTML;
        let heart = e.querySelector("svg");
        heart.addEventListener("click", () => {
            e.querySelector("svg").style.fill = "red";
            localStorage.setItem("form" + index, movie);
        })
    });

}

function Load() {
    for (i = 0; i < 10; i++) {
        if (localStorage.getItem("form" + i) !== null) {
            document.getElementById('fav').innerHTML += localStorage.getItem("form" + i);
        }
    }

    var movies = document.querySelectorAll(".movie");
    movies.forEach((e) => {
        e.querySelector("svg").style.fill = "red";
    })

    // let movieTobepasted = document.querySelector(".favorites").innerHTML;
    // movieTobepasted += localStorage.getItem("form");

    let movie_fav = document.querySelectorAll(".movie");
    movie_fav.forEach((e, index) => {
        let heart = e.querySelector("svg");
        heart.addEventListener("click", () => {
            heart.style.fill = "none";
            let j = -1;
            for (i = 0; i < 10; i++) {
                if (localStorage.getItem("form" + i) !== null) {
                    j++;
                }
                if (j === index) {
                    localStorage.removeItem("form" + i);
                }
            }
        })
    })
}












