
let backButton = document.querySelectorAll("#backButton svg")[0];
// console.log(backButton);
function goBack() {
    let active = JSON.parse(localStorage.getItem("active"));
    showSlides(active);

}



// backButton.addEventListener("click", goBack);
window.addEventListener("load", goBack);