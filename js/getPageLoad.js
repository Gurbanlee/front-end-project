var myVar;

function getLoader() {
    myVar = setTimeout(showPage, 3000);
}

function showPage() {
    document.getElementById("loader").style.display = "none";
    document.querySelector(".header").style.display = "block";
}