const themeButton = document.getElementById("themeButton");

themeButton.addEventListener("click", function () {

    document.body.classList.toggle("light");

    if (document.body.classList.contains("light")) {

        themeButton.textContent = "☀️";

    } else {

        themeButton.textContent = "🌙";

    }

});


const helloButton = document.getElementById("helloButton");

const message = document.getElementById("message");


helloButton.addEventListener("click", function () {

    message.textContent =
        "🚀 Welcome to AI Vision! Keep learning, building and leading.";

});


const cards = document.querySelectorAll(
    ".about-card, .skill-card"
);


const observer = new IntersectionObserver(

    function (entries) {

        entries.forEach(function (entry) {

            if (entry.isIntersecting) {

                entry.target.style.opacity = "1";

                entry.target.style.transform =
                    "translateY(0)";

            }

        });

    },

    {
        threshold: 0.15
    }

);


cards.forEach(function (card) {

    card.style.opacity = "0";

    card.style.transform = "translateY(30px)";

    card.style.transition =
        "all 0.7s ease";

    observer.observe(card);

});
