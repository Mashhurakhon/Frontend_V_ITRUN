let html = document.querySelector("html");
let themeIcon = document.querySelector(".theme-icon");

themeIcon.addEventListener("click", () => {
    html.classList.toggle("dark");
    if(html.classList.contains("dark")) {
        themeIcon.classList.replace("fa-moon", "fa-sun")
    } else {
        themeIcon.classList.replace("fa-sun", "fa-moon")
    }
})