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

    // Function to open modal with clicked image
    function openModal(event) {
        modalImage.src = event.target.src; // Set the clicked image as the source for the modal image
        modalImage.alt = event.target.alt; // Set the alt text for the modal image
        modal.style.display = 'grid'; // Display the modal
    }

    // Function to close modal
    function closeModal() {
        modal.style.display = 'none'; // Hide the modal
    }

    // Attach click event to all images with IDs starting with 'picture'
    document.querySelectorAll('img[id^="picture"]').forEach(img => {
        img.addEventListener('click', openModal);
    });

    // Close modal on button click
    closeButton.addEventListener('click', closeModal);
});

