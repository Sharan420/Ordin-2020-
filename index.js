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
        $(".disappear").css("top","0");
    } else {
        $(".navbar").css("background","none");
        $(".disappear").css("top","-200");
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

var myfunc = setInterval(function() {
    var countDownDate = new Date("Jul 22, 2020 00:00:00").getTime();
    var now = new Date().getTime();
    var timeleft = countDownDate - now;
    var distance = countDownDate - now;
    var days = Math.floor(timeleft / (1000 * 60 * 60 * 24));
    var hours = Math.floor((timeleft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((timeleft % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((timeleft % (1000 * 60)) / 1000);
    document.getElementById("days").innerHTML = days + "d "
    document.getElementById("hours").innerHTML = hours + "h " 
    document.getElementById("mins").innerHTML = minutes + "m " 
    document.getElementById("secs").innerHTML = seconds + "s"
    if (timeleft < 0) {
        clearInterval(myfunc);
        document.getElementById("days").innerHTML = ""
        document.getElementById("hours").innerHTML = "" 
        document.getElementById("mins").innerHTML = ""
        document.getElementById("secs").innerHTML = ""
        document.getElementById("end").innerHTML = "Let's roll ;)";
    }
}, 1000);

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
    