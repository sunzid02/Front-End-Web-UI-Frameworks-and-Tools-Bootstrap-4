$(document).ready(function () {
    // $('[data-toggle="tooltip"]').tooltip();
    // $("#option1").button('toggle');
    $("#mycarousel").carousel({
        interval: 2000
    });

    $("#carouselButton").click(function () {

        if ($('#carouselButton').children('span').hasClass('fa-pause')) {
            $('#mycarousel').carousel('pause');

            $('#carouselButton').children('span').removeClass('fa-pause');
            $('#carouselButton').children('span').addClass('fa-play');
        }
        else if ($('#carouselButton').children('span').hasClass('fa-play')) {
            $('#mycarousel').carousel('cycle');

            $('#carouselButton').children('span').removeClass('fa-play');
            $('#carouselButton').children('span').addClass('fa-pause');
        }
    });


    // reserve table modal show
    $("#reserveTableButton").click(function () {
        $('#reserveTableModal').modal('show');
    });

    // reserve table modal show
    $("#loginBtnMdl").click(function () {
        $('#loginModal').modal('show');
    });



});