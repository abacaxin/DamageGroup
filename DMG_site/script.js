const cards = document.querySelectorAll(".card");

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