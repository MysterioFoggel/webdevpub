var startW = document.documentElement.clientWidth;

let poster = document.getElementById("secretPoster");
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
poster.addEventListener("click",viewPoster);

let postText = document.getElementById("posterText");

let puzzlePath = document.getElementById("rightPath");
let puzzleSolve = false;

let rightPatchF = function(){
    if(document.documentElement.clientWidth < 900){
        puzzleSolve = true;
        console.log(puzzleSolve);

        postText.textContent = "Look beneath the stars: \xa0 \xa0 \xa0 1  4  []";
        viewPoster();
        

    }
}

puzzlePath.addEventListener("click",rightPatchF);

