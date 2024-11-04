//Activcion del acordeon

const desplegables =document.querySelectorAll(".desplegable")

desplegables.forEach(desplegable => {
    desplegable.addEventListener("click", () =>{
        desplegable.classList.toggle("active");
    });
});