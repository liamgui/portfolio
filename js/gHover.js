let centerG = document.querySelectorAll(".centerG svg")[0];
let gradient1 = document.querySelectorAll(".gradient1")[0];
function hover() {
    gradient1.classList.add("hover");
    console.log(centerG);
}

function unhover() {
    gradient1.classList.remove("hover");
}

centerG.addEventListener("mouseover", hover);
centerG.addEventListener("mouseout", unhover);