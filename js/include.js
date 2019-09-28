$(document).ready(function () {
    $(".header").load("header.html", setActiveMenu);
    $(".wine-foot").load("footer.html");
});

function setActiveMenu() {
    let path = window.location.pathname;
    if (window.location.pathname.startsWith('/'))
        path = path.substr(1);
    $('#inv-menu > li').removeClass('active');
    $(`a[href='${path}']`).closest('li').addClass('active');
}