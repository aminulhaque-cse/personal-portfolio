/* =========================
   Dark / Light Mode
========================= */

let themeButton = document.getElementById("theme-button");

themeButton.addEventListener("click", function () {

    document.body.classList.toggle("light-mode");

    if (document.body.classList.contains("light-mode")) {

        themeButton.textContent = "☀️";

    } else {

        themeButton.textContent = "🌙";

    }

});


/* =========================
   Mobile Menu
========================= */

let menuButton = document.getElementById("menu-button");

let navLinks = document.querySelector(".nav-links");


menuButton.addEventListener("click", function () {

    navLinks.classList.toggle("active");

});


/* Close Menu After Clicking Link */

let navItems = document.querySelectorAll(".nav-links a");

navItems.forEach(function (link) {

    link.addEventListener("click", function () {

        navLinks.classList.remove("active");

    });

});


/* =========================
   Typing Animation
========================= */

let typingText = document.getElementById("typing-text");

let texts = [
    "Student Of CSE",
    "Web Developer",
    "JavaScript Learner",
    "Future Software Engineer"
];

let textIndex = 0;

let charIndex = 0;

let isDeleting = false;


function typeEffect() {

    let currentText = texts[textIndex];


    if (isDeleting === false) {

        typingText.textContent =
            currentText.substring(0, charIndex + 1);

        charIndex++;


        if (charIndex === currentText.length) {

            isDeleting = true;

            setTimeout(typeEffect, 1500);

            return;

        }

    } else {

        typingText.textContent =
            currentText.substring(0, charIndex - 1);

        charIndex--;


        if (charIndex === 0) {

            isDeleting = false;

            textIndex++;

            if (textIndex === texts.length) {

                textIndex = 0;

            }

        }

    }


    setTimeout(
        typeEffect,
        isDeleting ? 50 : 100
    );

}


typeEffect();


/* =========================
   Student Object
========================= */

let student = {

    name: "MD. AMINUL HAQUE",

    university: "Uttara University",

    department: "CSE",

    age: 24

};


console.log(student);


/* =========================
   Skills Array
========================= */

let skills = [
    "HTML",
    "CSS",
    "JavaScript",
    "Git",
    "GitHub"
];


console.log(skills);


/* =========================
   Back To Top
========================= */

let backToTop =
    document.getElementById("back-to-top");


window.addEventListener("scroll", function () {

    if (window.scrollY > 300) {

        backToTop.style.display = "flex";

    } else {

        backToTop.style.display = "none";

    }

});


backToTop.addEventListener("click", function () {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

});


/* =========================
   Project Details
========================= */

function showDetails(project) {

    if (project === "calculator") {

        alert(

            "Calculator\n\n" +

            "A simple calculator built with HTML, CSS and JavaScript.\n\n" +

            "Features:\n" +

            "• Addition\n" +

            "• Subtraction\n" +

            "• Multiplication\n" +

            "• Division"

        );

    }

}
