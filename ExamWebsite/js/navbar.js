// This is a hack, please let me know if this breaks in some setting // William
// This is a hack, please let me know if this breaks in some setting // William


function addNavBar() {

    // The buttons to exist in the navbar, what they should say as text is the key
    // The value is the corresponding html file to swap to on click.
    /*
    let navigation = {
        "Home": "",
        "Test1": "",
        "Test2": "test2.html",
    };
    */
    let ChildContent = {
        "Animals": {
            "Link":"test1.html",
            "0":"All animals sorted after their species"
        },
        "Search": {
            "Link":"test2.html",
            "0":"Search for different animals using traits"
        },
        "About": {
            "Link":"about.html",
            "0":"About the page, what do you expect?"
        }

    };

    let myFunction = function(){
        let HomeSign = document.getElementById("theHome");

        let hoverPage = document.createElement("div");
        hoverPage.className = "navChild";
        hoverPage.id = "navTemp";
        this.appendChild(hoverPage);
        var textTemp = this.textContent;
        for (var stuff in ChildContent[textTemp]){
            if(stuff == "Link"){
                return;
            }
            var temp = document.createElement("p");

            temp.textContent = ChildContent[textTemp][stuff];
            temp.className += " tempHover";
            hoverPage.appendChild(temp);
        }
        
    }
    let mySecondFunction = function(){
        let hoverPage = document.getElementById("navTemp");
        hoverPage.parentNode.removeChild(hoverPage);
    }

    let navbar = document.getElementById("myNavbar");

    for (let key in ChildContent) {
        let value = ChildContent[key]["Link"];
        let element = document.createElement("a");
        element.textContent = key;
        element.href = value;
        let path = location.pathname;

        // The special case where you navigate to the folder containing the website "examination_webdev/"
        // which defaults to index.html
        if(key == "Home"){
           element.id = "Homeid";
        }else{
            element.id = "otherId";
        }

        
        console.log(path);
        if (path.endsWith("/") && value == "index.html" && key != "Home") {
            element.className += " active"
        } else if(key != "Home"){
            // all other cases end in .html
            element.className += location.pathname.includes(value) ? " active" : "";
        }

        if (key != "Home"){
            element.addEventListener("mouseover", myFunction);
        element.addEventListener("mouseout", mySecondFunction);
        }
        
        navbar.appendChild(element);
    }

    
}


window.addEventListener('DOMContentLoaded', addNavBar, false);
