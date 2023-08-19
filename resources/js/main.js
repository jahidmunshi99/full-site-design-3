const navBar = document.querySelector("nav");
const humbargetbtn = document.querySelector("#humbarger");
const mainMenu = document.querySelector("#main-menu");

// Stricky Navbar
window.onscroll = () =>{
    if(document.documentElement.scrollTop>20){
        navBar.classList.add("sticky");        
        }
        else{
            navBar.classList.remove("sticky")
    }
}

// Humburger Menu
humbargetbtn.addEventListener('click', ()=>{
    mainMenu.classList.toggle("active");
    // humbargetbtn.classList.toggle("active");
})


