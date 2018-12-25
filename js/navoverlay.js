console.log("Begin");

let navButton = document.getElementById("navButtonOverlay");
let line1 = document.getElementById("line1");
let line2 = document.getElementById("line2");
console.log(navButton);
let nav = false;
let nonNavs = document.querySelectorAll(".nonNav");
let mainContent = document.querySelectorAll(".mainContent")[0];

//Mouse Over Listener

navButton.addEventListener("click", navButtonClick);

function navButtonClick() {
    if(nav === false) {
        line1.setAttribute("x1", "0.33");
        line1.setAttribute("y1", "0.33");
        line1.setAttribute("x2", "44.9");
        line1.setAttribute("y2", "44.9");

        line2.setAttribute("x1", "44.9");
        line2.setAttribute("y2", "44.9");
        line2.setAttribute("x2", "0.33");
        line2.setAttribute("y1", "0.33");
        let container = document.querySelectorAll(".container")[0];
        container.classList.remove('container');
        container.classList.add('containerNav');
        if (mainContent !== undefined) {
            console.log("this is one of the portfolio pages");
        }
            for(let i=0; i<nonNavs.length; i++) {
                nonNavs[i].classList.add("goodbye");
            }


        nav = true;
    }
    else {
        line1.removeAttribute('x1');
        line1.setAttribute("y1", "20.48");
        line1.setAttribute("x2", "63.03");
        line1.setAttribute("y2", "20.48");

        line2.removeAttribute('x1');
        line2.setAttribute("y1", "0.47");
        line2.setAttribute("x2", "63.03");
        line2.setAttribute("y2", "0.47");
        let container = document.getElementsByClassName("containerNav")[0];
        container.classList.remove('containerNav');
        container.classList.add('container');
        if (mainContent !== undefined) {
            console.log("this is one of the portfolio pages");
            for(let i=0; i<nonNavs.length; i++) {
                nonNavs[i].classList.remove("goodbye");
            }
            
        }

        nav = false;
    }

    

    console.log("click");
}
