    // LOADER 
    
var myVar;
function myFunction() {
    myVar = setTimeout(showPage, 3000);
}

function showPage() {
    document.getElementById("load").style.display = "none";
    document.getElementById("mainbod").style.display = "block";
} 

    
    // TRANSPARENT NAVBAR
    
jQuery(document).on("scroll", function () {
    if ($(document).scrollTop() > 120) {
        $(".navbar").css("background-color","var(--nav-bg-color)");
        $(".disappear").css("opacity","1");
    } else {
        $(".navbar").css("background","none");
        $(".disappear").css("opacity","0");
    }
});   

    // SMOOTH SCROLL
    
$(document).ready(function(){
    $("a").on('click', function(event) {
        if (this.hash !== "") {
            event.preventDefault();
            var hash = this.hash;
            
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function(){
                window.location.hash = hash;
            });
        } 
    });
});    

    // COUNTDOWN

var countDownDate = new Date("Jul 22, 2020 00:00:00").getTime();
var x = setInterval(function() {
    var now = new Date().getTime();
    var distance = countDownDate - now;
    var days = Math.floor((distance % (1000 * 60 * 60 * 24 * 31)) / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    document.getElementById("demo").innerHTML =  days + "D " + hours + "h " + minutes + "m " + seconds + "s "; 
    if (distance < 0) {
        clearInterval(x);
        document.getElementById("demo").innerHTML = "Let's Roll ;)";
    }
}, 1000);
$(document).ready(function(){
    if($(window).width() < 1000) {
        $(".thisguy").removeClass("text-primary");
        $(".eventhead").removeClass("none");
        $(".nme").removeClass("text-white");
    } else {
        $(".nme").addClass("text-white");
        $(document).ready(function(){
            $(".thisguy").click(function(){
                $(".eventhead").slideToggle();
            });
        });
    }
});
setInterval(function(){
    $("#demo").css('background-color', 'var(--primary-color)');
    setTimeout(function(){
        $("#demo").css('background-color', 'var(--secondary-color)');
    }, 500)
}, 1000);
    
    // SIDE-NAV
    
function openNav() {
    document.getElementById("sidenav").style.width = "100%";
}

function closeNav() {
    document.getElementById("sidenav").style.width = "0";
}
    