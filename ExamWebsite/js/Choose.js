let animFunc = function () {


    let theHead = document.getElementById("animalHome");

    let Hens = document.getElementById("HHens");
    let Goats = document.getElementById("HGoats");
    let Horses = document.getElementById("HHorses");
    let Cat = document.getElementById("HCat");
    let Bunny = document.getElementById("HBunny");
    let Puppy = document.getElementById("HPuppy");

    let removeTags = function () {
        Hens.className = "holdHens hide";
        Goats.className = "holdGoats hide";
        Horses.className = "holdHorses hide";
        Cat.className = "holdCat hide";
        Bunny.className = "holdBunny hide";
        Puppy.className = "holdPuppy hide";
        theHead.remove();
    }

    let HeBut = document.getElementById("BHe");
    let GoBut = document.getElementById("BGo");
    let HoBut = document.getElementById("BHo");
    let CaBut = document.getElementById("BCa");
    let BuBut = document.getElementById("BBu");
    let PuBut = document.getElementById("BPu");

    let showHens = function () {
        removeTags();
        Hens.className = "holdHens";
    }
    let showGoats = function () {
        removeTags();
        Goats.className = "holdGoats";
    }
    let showHorses = function () {
        removeTags();
        Horses.className = "holdHorses";
    }
    let showCat = function () {
        removeTags();
        Cat.className = "holdCat";
    }
    let showBunny = function () {
        removeTags();
        Bunny.className = "holdBunny";
    }

    let showPuppy = function () {
        removeTags();
        Puppy.className = "holdPuppy";
    }

    HeBut.addEventListener("click", showHens);
    GoBut.addEventListener("click", showGoats);
    HoBut.addEventListener("click", showHorses);
    CaBut.addEventListener("click", showCat);
    BuBut.addEventListener("click", showBunny);
    PuBut.addEventListener("click", showPuppy);
}
animFunc()

let theMessage = document.getElementById("ALKNWPAVNEJA");
let blackbox = document.getElementById("bBox");

let xMark = document.getElementById("xSpot");

let viewPoster = function(){
    blackbox.className -= "hide";
    console.log("popo");
}

let stopViewPoster = function(){
    blackbox.className = "hide";
}

xMark.addEventListener("click", stopViewPoster);

theMessage.addEventListener("click", viewPoster);

//COOLLAPSEWA WANANGWAOGNWAOGWAONGOIWANG                  w3schools.com/howto/howto_js_collapsible.asp
var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.maxHeight){
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    }
  });
}

//COLLAPSE OJFJWAOGKWAPJGOWAPJGOIWAMGOWAMGWAOGMPOWAOGMWAPGMPWAGMWAGMWAOGAWGMWAIGJOAWFJWA


//VVVVVVVV -- slideshow VVVVVVVVV https://www.w3schools.com/howto/howto_js_slideshow.asp 

var slideIndex = [1,1,1];
var slideId = ["mySlides1", "mySlides2", "mySlides3"]
showSlides(1, 0);
showSlides(1, 1);
showSlides(1, 2);

function plusSlides(n, no) {
  showSlides(slideIndex[no] += n, no);
}

function showSlides(n, no) {
  var i;
  var x = document.getElementsByClassName(slideId[no]);
  console.log(x);
  if (n > x.length) {slideIndex[no] = 1}    
  if (n < 1) {slideIndex[no] = x.length}
  for (i = 0; i < x.length; i++) {
     x[i].style.display = "none";  
  }
  x[slideIndex[no]-1].style.display = "block";  
}

//WGMAGPWAGWA }
