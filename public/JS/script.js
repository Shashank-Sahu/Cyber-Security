let windowScroll = 0;

document.addEventListener("scroll", () => {
    windowScroll = window.scrollY;
    if (windowScroll > 100)
        document.querySelector(".navbar").classList.add("navbar-scrolled");
    else
        document.querySelector(".navbar").classList.remove("navbar-scrolled");
});