function openNav() {
    document.getElementById("navbar").classList.toggle("start-0");
    document.body.classList.toggle("overflow_hidden");
    document.querySelector(".menu").classList.toggle("cross")
}

let mybutton = document.getElementById("top-button")

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        mybutton.style.display = "block"
    } else {
        mybutton.style.display = "none"
    }
};

function topfuncition() {
    window.scrollTo({ top: 0, behavior: "smooth" });
}

const Preload = document.getElementById("preload")
setTimeout(() => {
    document.body.classList.remove("overflow-hidden");
    Preload.classList.add("d-none")
}, "4300");

window.onscroll = function () { scrollFunction() };


