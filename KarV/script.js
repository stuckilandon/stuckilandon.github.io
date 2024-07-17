document.addEventListener('DOMContentLoaded', function() {
    const header = document.querySelector('header');
    const menubutton = document.getElementById("menu-button");
    
    menubutton.addEventListener('click', function() {
        console.log("button clicked");
        const links = document.querySelector("#main-links ul");
        const computedStyle = window.getComputedStyle(links);

        if (computedStyle.display === "none" || computedStyle.display === "") {
            console.log("Expanding header and showing links");
            header.classList.remove("collapsed");
            header.classList.add("expanded");
            links.classList.add("flex");
        } else {
            console.log("Collapsing header and hiding links");
            header.classList.remove("expanded");
            header.classList.add("collapsed");
            links.classList.remove("flex");
        }
    });
});
