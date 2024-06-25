const menubutton = document.getElementById("menu-button");

menubutton.addEventListener('click', function() {
    console.log("button clicked");
    const links = document.querySelector(".links");
    const computedStyle = window.getComputedStyle(links);

    if (computedStyle.display === "none") {
        links.style.display = "flex";
    } else {
        links.style.display = "none";
    }
});