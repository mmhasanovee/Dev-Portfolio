//jQuery, detecting if scrolled is fired by the user.
$(document).scroll(function () {
    var y = $(this).scrollTop();
    if (y) {
        $('.totopbtn').fadeIn();
    } else {
        $('.totopbtn').fadeOut();
    }
});




//this function takes the user to the top page of the site.
function toTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

// for technical skills section animations
$(window).scroll(function () {
    $('.technical-skill').each(function () {
        var scrollTop = $(window).scrollTop(),
            elementOffset = $(this).offset().top,
            distance = (elementOffset - scrollTop),
            windowHeight = $(window).height(),
            breakPoint = windowHeight * 0.9;

        if (distance > breakPoint) {
            console.log('hidden');
            $('.technical-skill').fadeOut();

        } else if (distance < breakPoint) {
            console.log('disply');
            // $(this).addClass(".fillCircle");
            $('.technical-skill').fadeIn();


        }
    });
});

//for achievemnts section animation
$(window).scroll(function () {
    $('.inside').each(function () {
        var scrollTop = $(window).scrollTop(),
            elementOffset = $(this).offset().top,
            distance = (elementOffset - scrollTop),
            windowHeight = $(window).height(),
            breakPoint = windowHeight * 0.9;

        if (distance > breakPoint) {
            $(this).addClass("more-padding");
        } if (distance < breakPoint) {
            $(this).removeClass("more-padding");
        }
    });
});
//for achievments modal view

// Get the modal
var modal = document.getElementById("myModal");

// Get the image and insert it inside the modal - use its "alt" text as a caption
// var img1 = document.getElementById("img1");
// var img2 = document.getElementById("img2");
// var img3 = document.getElementById("img3");
// var img4 = document.getElementById("img4");
var modalImg = document.getElementById("img01");

// img1.onclick = function () {
//     modal.style.display = "block";
//     modalImg.src = this.src;
// }
var img = document.getElementsByClassName("modal-image");
for (var a = 0; a < img.length; a++) {
    img[a].onclick = function () {
        modal.style.display = "block";
        modalImg.src = this.src;
    }
}

// Get the <span> element that closes the modal
var span1 = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span1.onclick = function () {
    modal.style.display = "none";
}

//manipulating css variable which maintains the technical skill circle animation. here we catching the id and changing the value for circle rotation~

$('#html0').css('--rotation', '140deg');
$('#java0').css('--rotation', '170deg');
$('#js0').css('--rotation', '160deg');
$('#cplus0').css('--rotation', '140deg');
$('#apex0').css('--rotation', '130deg');
$('#python0').css('--rotation', '110deg');
$('#selenium0').css('--rotation', '160deg');
$('#c0').css('--rotation', '140deg');






