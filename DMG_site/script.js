const hero = document.querySelector(".hero");
const light = document.getElementById("heroLight");
const grid = document.querySelector(".hero-grid");

hero.addEventListener("mousemove",(e)=>{

    const rect = hero.getBoundingClientRect();

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    light.style.left = x + "px";
    light.style.top = y + "px";

    grid.style.setProperty("--x", x+"px");
    grid.style.setProperty("--y", y+"px");

});