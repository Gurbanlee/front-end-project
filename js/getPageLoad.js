var myVar;

function getLoader() {
    myVar = setTimeout(showPage, 1000);
}

function showPage() {
    document.getElementById("loader").style.display = "none";
    document.querySelector(".header").style.display = "block";
}