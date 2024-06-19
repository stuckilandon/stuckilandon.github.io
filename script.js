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

document.addEventListener('DOMContentLoaded', function () {
    const modal = document.querySelector('.viewer');
    const modalImage = modal.querySelector('img');
    const closeButton = document.querySelector('.close-viewer');

    function openModal(event) {
        modalImage.src = event.target.src; 
        modalImage.alt = event.target.alt; 
        modal.style.display = 'grid'; 
    }


    function closeModal() {
        modal.style.display = 'none'; 
    }


    document.querySelectorAll('img[id^="picture"]').forEach(img => {
        img.addEventListener('click', openModal);
    });

    closeButton.addEventListener('click', closeModal);
});

