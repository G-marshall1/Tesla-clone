const main = document.querySelector(".main-1");

const menuEl = document.querySelector("#menu");
const cross = document.querySelector(".fa-xmark");
const blurs = document.querySelector(".blur");
const side = document.querySelector(".hiddenSide");

menuEl.addEventListener("click",() => {
    blurs.classList.add("active");
    side.classList.add("active");
})

cross.addEventListener("click", ()=> {
    blurs.classList.remove("active");
    side.classList.remove("active");
})