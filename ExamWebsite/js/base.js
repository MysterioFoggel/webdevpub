

let stink = document.getElementById("sus");
var hig = 0;
let increaseW = function(){
    hig += 20;
    
    if(hig <= 1500){
        stink.style.height = hig.toString() + "px";
        
    }else{
        stink.style.height = "1500px";
        //stink.style.fontSize = "15px";
        clearInterval(increaseW);
    }

}

window.setInterval(increaseW, 1);


