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