let tagDisp = document.getElementById("showTags");

var tagsUse = [];
//when you press the search button it adds what you searched for to the list of currently used tags.
//updates the visible thing that shows the tags
let updateTags = function(){
    var tempText = 'Tags: "' + tagsUse.join('" "') + '"';

    if(tempText.length > 100){
        tagDisp.textContent = tempText.substring(0, 99) + '" ...';

    }else{
        tagDisp.textContent = tempText;
    }

    FuncSearch();
    testCode();
    
}

//REMOVE ALL CURRENTLY USED TAGS - - - - - --  -- - - - - - - - - - 
let removeAllTags = function(){
    tagsUse = [];
    updateTags();
}
let clearer = document.getElementById("clearTags");
clearer.addEventListener("click", removeAllTags);
//REMOVE ALL CURRENTLY USED TAGS - - - - -- - - - --- - - - - - - - - 



var tagsChoose = ["Lazy", "Playful", "Scared", "Angry", "Grumpy", "Brave", "Loud", "Fat", "Curious"];
let tagHold = document.getElementById("putTags");

let addTagF = function(){
    let x = this.textContent;
    var found = 0;
    for(var i = 0; i < tagsUse.length; i++){
        if(tagsUse[i] == x){
            found = 1;
        }
    }
    if (found === 0 && x != ""){
        tagsUse.push(x);
    }
    updateTags();
    
}

for(var i = 0; i < tagsChoose.length; i++){
    let aTag = document.createElement("button");
    aTag.className += " aTag";
    aTag.textContent = tagsChoose[i];

    aTag.addEventListener("click", addTagF);
    tagHold.appendChild(aTag);
}




// ANIMALS ANIMALS ANIMALS AFNWAOFPWAKWPOKWAPOKWAPWAPGKWAP

const container = document.querySelectorAll("#dropDown");


let dropIt = function () {
    var children = this.children;
    var val = this.value;

    if (val == "0") {

        for (var i = 0; i < children.length; i++) {
            if (children[i].id != "skip"){
                children[i].className += " hide";
            }else{

                children[i].classList.remove("hide");
            }
            
        }
        this.value = "1";
    }
    else {

        for (var i = 0; i < children.length; i++) {
            if (children[i].id != "skip"){
                children[i].classList.remove("hide");
            }else{
                
                children[i].className += " hide";
            }

        }
        this.value = "0";
    }

}

for (var i = 0; i < container.length; i++) {
    container[i].addEventListener("click", dropIt)
}

// ANIMALS ANIMALS ANIMALS AFNWAOFPWAKWPOKWAPOKWAPWAPGKWAP ]


//Matching tags

let hideAll = function(){
    for (var i = 0; i < container.length; i++) {
        container[i].className += " hide";
    }
}

let FuncSearch = function(){
    if(tagsUse.join('" "') == ""){
        return;
    }

    hideAll();

    for (var i = 0; i < container.length; i++) {
        
        var childr = container[i].children;
        var childTags = childr[0].textContent.split(" "); 


        var failed = 0;
        for(var j = 0; j < tagsUse.length; j++){
            var macher = 0;
            for(var x = 0; x < childTags.length; x++){
                if (childTags[x] == tagsUse[j]){
                    macher = 1;
                }
            }
            if (macher == 0){
                failed = 1;
            }
        }

        if (failed == 0){
            container[i].classList.remove("hide");
        }

    }
    
    
}
hideAll();
let victor = ["Fat", "Angry", "Grumpy", "Curious", "Lazy", "Scared"];

let testCode = function(){
    console.log(tagsUse); 

    if(victor.length == tagsUse.length){

        var lemp = 0;

        for(var i = 0; i < victor.length; i++){
            if(victor[i] !== tagsUse[i]){
                lemp = 1;
            }
        }

        if(lemp === 0){
            console.log("Victory");
            
            
        }
    }
}