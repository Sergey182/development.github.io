$(document).ready(function () {
    $('.burger-btn').on('click', function (e) {
        e.preventDefault();
        let headerNav = $('.header__nav');
        $('.burger-btn').toggleClass('burger-btn--active');
        headerNav.toggleClass('header__nav--active');
        headerNav.click(function () {
            $('.burger-btn').removeClass('burger-btn--active');
            $('.header__nav').removeClass('header__nav--active');
        });
    });

// scroll

    $("#menu").on("click", "a", function (event) {
        event.preventDefault();
        let id = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1500);
    })});

function testWebP(callback) {

var webP = new Image();
webP.onload = webP.onerror = function () {
callback(webP.height == 2);
};
webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
}

testWebP(function (support) {

if (support == true) {
document.querySelector('body').classList.add('webp');
}else{
document.querySelector('body').classList.add('no-webp');
}
});



