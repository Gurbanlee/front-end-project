window.addEventListener('load', windowYuklendi);

function windowYuklendi() {

    window.addEventListener('scroll', function (melumat) {
        var navTop = document.querySelector('section.wine-nav');

        if (window.scrollY >= 120) {
            navTop.classList.add('nav-top-sabit');
        }
        else {
            navTop.classList.remove('nav-top-sabit');
        }

        console.log(window.window.scrollY);
    });
}