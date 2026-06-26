const hero = document.querySelector(".hero");
const light = document.getElementById("heroLight");
const grid = document.querySelector(".hero-grid");
const cards = document.querySelectorAll(".card");

hero.addEventListener("mousemove",(e)=>{

    const rect = hero.getBoundingClientRect();

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    light.style.left = x + "px";
    light.style.top = y + "px";

    grid.style.setProperty("--x", x+"px");
    grid.style.setProperty("--y", y+"px");

cards.forEach(card=> {
    card.addEventListener("click", () => {
        if(card.classList.contains("active")){
            cards.forEach(c => {
                c.classList.remove("active", "inactive");
            });
            return
        }

        cards.forEach(c => {
            c.classList.remove("active", "inactive");
        });

        card.classList.add("active");

        cards.forEach(c => {
            if(c !== card) {
                c.classList.add("inactive");
            }
        });
    });
});