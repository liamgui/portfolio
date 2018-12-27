    var slideIndex = 1;
    let activeStored = parseInt(localStorage.getItem("active"));
    console.log(activeStored + " activeStored " + activeStored + activeStored);
    if(!isNaN(activeStored)){ slideIndex = activeStored}
        console.log(slideIndex + " n");

    
    showSlides(slideIndex);

    function plusSlides(n) {
        showSlides(slideIndex += n);
    }

    function currentSlide(n) {
        showSlides(slideIndex = n);
    }

    function showSlides(n) {
        var i;
        var slides = document.getElementsByClassName("mySlides");
        var dots = document.getElementsByClassName("dot");
        console.log(activeStored + " n");
        console.log(n + " n");
        if (n > slides.length) { slideIndex = 1 }
        console.log(n + " n");
        if (n < 1) { slideIndex = slides.length }
        for (i = 0; i < slides.length; i++) {
            // slides[i].styles.display = "none";
            slides[i].classList.remove("activeSlider");
        }
        for (i = 0; i < dots.length; i++) {
            dots[i].className = dots[i].className.replace(" active", "");
        }
        // slides[slideIndex - 1].styles.display = "block";
        slides[slideIndex - 1].classList.add("activeSlider");
        let active = slides[slideIndex - 1].id;
        console.log(active);
        localStorage.setItem("active", active);
        // console.log(activeStored);
        dots[slideIndex - 1].className += " active";
    }

    let prev = document.querySelectorAll(".prev")[0];
    let next = document.querySelectorAll(".next")[0];

    prev.addEventListener("click", function() { plusSlides(-1) });
    next.addEventListener("click", function() { plusSlides(1) });

    let dot1 = document.getElementById("dot1");
    let dot2 = document.getElementById("dot2");
    let dot3 = document.getElementById("dot3");
    let dot4 = document.getElementById("dot4");
    let dot5 = document.getElementById("dot5");
    let dot6 = document.getElementById("dot6");
    let dot7 = document.getElementById("dot7");

    dot1.addEventListener("click", function() { currentSlide(1) });
    dot2.addEventListener("click", function() { currentSlide(2) });
    dot3.addEventListener("click", function() { currentSlide(3) });
    dot4.addEventListener("click", function() { currentSlide(4) });
    dot5.addEventListener("click", function() { currentSlide(5) });
    dot6.addEventListener("click", function() { currentSlide(6) });
    dot7.addEventListener("click", function() { currentSlide(7) });



let backButton = document.querySelectorAll("#backButton svg")[0];
// console.log(backButton);
function goBack() {
    showSlides(slideIndex);

}



// backButton.addEventListener("click", goBack);
window.addEventListener("load", goBack);