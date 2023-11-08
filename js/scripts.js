
function setMidtolid() {
    const program = document.querySelector('input[name="animal"]:checked').value;

    document.getElementById("snake").setAttribute("class", "hidden");
    document.getElementById("turtle").setAttribute("class", "hidden");
    document.getElementById("insect").setAttribute("class", "hidden");
    document.getElementById("error").setAttribute("class", "hidden");



    if (program === "apps") {
        document.getElementById("snake").removeAttribute("class");
    } else if (program === "data") {
        document.getElementById("turtle").removeAttribute("class");
    } else if (program === "game") {
        document.getElementById("insect").removeAttribute("class");
    } else {
        document.getElementById("error").removeAttribute("class");
    }

}

function getMidtoLid() {
    const form = document.querySelector("form");
    form.onsubmit = function (event) {
        event.preventDefault();
        setMidtolid();
    }
}

window.onload = function () {
    getMidtoLid();
}
