    // DARK MODE
    
const toggleSwitch = document.querySelector('.theme-switch input[type="checkbox"]');

function switchTheme(e) {
    if (e.target.checked) {
        document.documentElement.setAttribute('data-theme', 'dark');
    }
    else {
        document.documentElement.setAttribute('data-theme', 'light');
    }    
}
    
    // SAVE PREFERENCE TO LOCAL STORAGE

toggleSwitch.addEventListener('change', switchTheme, false);
function switchTheme(e) {
    if (e.target.checked) {
        document.documentElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
    }
    else {
        document.documentElement.setAttribute('data-theme', 'light');
        localStorage.setItem('theme', 'light');
    }    
}
    
    // CHECK LOCAL STORAGE FOR PREFERENCE
    
const currentTheme = localStorage.getItem('theme') ? localStorage.getItem('theme') : null;

    if (currentTheme) {
        document.documentElement.setAttribute('data-theme', currentTheme);

    if (currentTheme === 'dark') {
        toggleSwitch.checked = true;
        document.getElementById("skill-img").style.filter = "invert(100)";
    }
}

    // LOADER 
    
var myVar;
function myFunction() {
    myVar = setTimeout(showPage, 3000);
    myVar = setTimeout(makePage, 2000);
    myVar = setTimeout(removeLoader, 3500);
}

function showPage() {
    document.getElementById("load").style.opacity = "0";
    document.getElementById("mainbod").style.opacity = "1";
    document.getElementById("mainbod").style.display = "block";
} 

function removeLoader() {
    document.getElementById("load").style.dislplay = "none";
}     