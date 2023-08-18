const humbargetbtn = document.querySelector("#humbarger");
const mainMenu = document.querySelector("#main-menu");

humbargetbtn.addEventListener('click', ()=>{
    mainMenu.classList.toggle("active");
    // humbargetbtn.classList.toggle("active");
})
