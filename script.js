var a = ["images/desktop-image-hero-1.jpg", "images/desktop-image-hero-2.jpg", "images/desktop-image-hero-3.jpg"]
var div = document.getElementById("resimlidiv");

var sayi = 0;
function foto() {
    sayi = (sayi + 1) % a.length;
    div.style.backgroundImage = "url(" + a[sayi] + ")";   
}

document.getElementById("oklar").addEventListener("click", foto);