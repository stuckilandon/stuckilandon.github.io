document.addEventListener('DOMContentLoaded', function() {
    const header = document.querySelector('header');
    const menubutton = document.getElementById("menu-button");
    
    menubutton.addEventListener('click', function() {
        const links = document.querySelector("#main-links ul");
        const computedStyle = window.getComputedStyle(links);

        if (computedStyle.display === "none" || computedStyle.display === "") {
            header.classList.remove("collapsed");
            header.classList.add("expanded");
            links.classList.add("flex");
        } else {
            header.classList.remove("expanded");
            header.classList.add("collapsed");
            links.classList.remove("flex");
        }
    });

    // Close modal on outside click
    window.onclick = function(event) {
        const modal = document.getElementById("checkoutModal");
        if (event.target == modal) {
            modal.style.display = "none";
        }
    };
});

// Dynamic Shop Settings
const shopItems = [
    {
        title: "Handcrafted Leather Notebook Set",
        image: "leatherbook.png",
        description: "Elevate your writing experience with our exquisite Handcrafted Leather Notebook Set. Made from premium quality leather, each item in this set exudes elegance and durability, perfect for those who appreciate the finer things in life.",
        design: [
            "Elegant Design: The notebook features a beautifully embossed Celtic knot design, symbolizing eternity and interconnectedness, adding a touch of sophistication to your stationery collection.",
            "Premium Quality: Crafted from high-grade leather, this set promises longevity and a rich, tactile experience that only improves with age.",
            "Versatile Accessories: The set includes a leather cover for your notebook, a pen holder, and additional pouches, ensuring all your writing essentials are stylishly organized.",
            "Elastic Closure: The notebook comes with a sturdy elastic band to keep your notes secure, making it perfect for travel and everyday use."
        ],
        perfectFor: [
            "Gifting: An ideal gift for writers, artists, or anyone who loves to jot down thoughts and ideas.",
            "Personal Use: Enhance your daily journaling, note-taking, or sketching with a touch of luxury."
        ],
        dimensions: [
            "Notebook: 8\" x 6\"",
            "Pen Holder: 2\" x 6\"",
            "Additional Pouches: Various sizes to fit pens, small accessories, and more."
        ],
        price: "$40.99"
    },
    {
        title: "Handcrafted Leather Key Chain",
        image: "keychain.png",
        description: "Keep your keys organized and stylish with our handcrafted leather key chain. Made from premium leather and featuring a durable metal ring, this key chain is both functional and elegant. Its compact design ensures it fits comfortably in your pocket or bag, making it a perfect accessory for everyday use.",
        design: [
            "Elegant Design: The key chain features a sleek and stylish design that complements any set of keys.",
            "Premium Quality Leather: Made from high-grade leather, ensuring durability and a luxurious feel.",
            "Durable Metal Ring: Equipped with a sturdy metal ring to securely hold your keys.",
            "Compact and Functional: Designed for easy carrying and practical use."
        ],
        dimensions: [
            "Length: 4\"",
            "Width: 1\""
        ],
        price: "$9.99"
    },
    {
        title: "Wooden Wedding Ring Holder",
        image: "ringengraving.png",
        description: "Safeguard your precious wedding rings with our beautifully crafted wooden holder, engraved with intricate designs. This holder not only protects your rings but also adds a touch of rustic charm to your home decor. Ideal for weddings, anniversaries, or as a unique gift, it’s a keepsake that will be cherished for years.",
        design: [
            "Intricate Engraved Design: Features beautiful engravings that add a personal touch.",
            "High-Quality Wood: Made from premium wood, ensuring durability and elegance.",
            "Elegant and Rustic: Combines rustic charm with sophisticated design.",
            "Perfect for Gifting: An ideal gift for weddings, anniversaries, or special occasions."
        ],
        dimensions: [
            "Diameter: 3\"",
            "Height: 1.5\""
        ],
        price: "$25.99"
    },
    {
        title: "Sleek Metal Bottle",
        image: "bottle.png",
        description: "Stay hydrated in style with our sleek metal bottle. Crafted from high-quality stainless steel, this bottle is designed to keep your beverages at the perfect temperature for hours. Its modern design and durable construction make it an essential accessory for those on the go.",
        design: [
            "High-Quality Stainless Steel: Ensures durability and a sleek appearance.",
            "Insulated: Keeps beverages cold or hot for extended periods.",
            "Sleek and Modern Design: Combines functionality with a stylish look.",
            "Durable and Long-Lasting: Built to withstand daily use."
        ],
        dimensions: [
            "Height: 10\"",
            "Capacity: 500ml"
        ],
        price: "$19.99"
    },
    {
        title: "Engraved Glasses Case",
        image: "glassescase.png",
        description: "Keep your eyewear stylishly protected with our Elegant Engraved Glasses Case. This meticulously crafted case combines functionality with a touch of personalization, making it a perfect accessory for anyone who values both form and function..",
        design: [,
            "Timeless Design: The sleek, modern design of the case is enhanced with elegant engravings, adding a personalized touch that makes each case unique.",
            "Premium Quality: Made from high-quality materials, this glasses case offers durability and a luxurious feel, ensuring your eyewear is safeguarded in style.",
            "Secure Protection: The sturdy construction and soft interior lining provide maximum protection for your glasses, preventing scratches and damage",
            "Personalized Engravings: Choose from a variety of engraving options to add initials, names, or special messages, making it an ideal gift for loved ones or a special treat for yoursel",
            "Compact and Portable: Designed to be lightweight and compact, this case easily fits into your bag or pocket, making it perfect for on-the-go protection.",
        ],
        dimensions: [
            "Length: 6.5\"",
            "Width: 2.5\"",
            "Height: 1.5\""
        ],
        price: "$14.99"
    }
];

const container = document.getElementById('shop-items-container');
const modal = document.getElementById("checkoutModal");
const modalContent = document.getElementById("modal-content");
const closeBtn = document.getElementsByClassName("close")[0];

shopItems.forEach((item, index) => {
    console.log(`Adding item ${index + 1}: ${item.title}`);

    const itemDiv = document.createElement('div');
    itemDiv.className = 'shop-item';

    const imgDiv = document.createElement('div');
    imgDiv.className = 'shop-img';
    const img = document.createElement('img');
    img.src = item.image;
    img.alt = item.title;
    imgDiv.appendChild(img);

    const textDiv = document.createElement('div');
    textDiv.className = 'shop-text';
    const title = document.createElement('h2');
    title.textContent = item.title;
    const description = document.createElement('p');
    description.textContent = item.description;

    const designList = document.createElement('ul');
    if (item.design && Array.isArray(item.design)) {
        item.design.forEach(designItem => {
            const li = document.createElement('li');
            li.innerHTML = `<strong>${designItem.split(": ")[0]}:</strong> ${designItem.split(": ")[1]}`;
            designList.appendChild(li);
        });
    }

    const perfectForList = document.createElement('ul');
    if (item.perfectFor && Array.isArray(item.perfectFor)) {
        item.perfectFor.forEach(forItem => {
            const li = document.createElement('li');
            li.textContent = forItem;
            perfectForList.appendChild(li);
        });
    }

    const dimensionsList = document.createElement('ul');
    if (item.dimensions && Array.isArray(item.dimensions)) {
        item.dimensions.forEach(dimension => {
            const li = document.createElement('li');
            li.textContent = dimension;
            dimensionsList.appendChild(li);
        });
    }

    const price = document.createElement('p');
    price.textContent = `Price: ${item.price}`;
    price.className = 'item-price';

    const checkoutBtn = document.createElement('button');
    checkoutBtn.textContent = "Checkout";
    checkoutBtn.className = 'checkout-btn';
    checkoutBtn.onclick = function() {
        showModal(item);
    };

    textDiv.appendChild(title);
    textDiv.appendChild(description);
    textDiv.appendChild(designList);
    textDiv.appendChild(document.createElement('p')).textContent = "Perfect For:";
    textDiv.appendChild(perfectForList);
    textDiv.appendChild(document.createElement('p')).textContent = "Dimensions:";
    textDiv.appendChild(dimensionsList);
    textDiv.appendChild(price);
    textDiv.appendChild(checkoutBtn);

    itemDiv.appendChild(imgDiv);
    itemDiv.appendChild(textDiv);
    container.appendChild(itemDiv);

});

function showModal(item) {
    const modalTitle = document.getElementById('modal-title');
    const modalPrice = document.getElementById('modal-price');
    const modalQty = document.getElementById('modal-qty');
    const modalCustomWords = document.getElementById('modal-custom-words');

    modalTitle.textContent = item.title;
    modalPrice.textContent = `Price: ${item.price} (EACH)`;
    modalQty.value = 1;
    modalCustomWords.value = '';

    modal.style.display = "block";
}

closeBtn.onclick = function() {
    modal.style.display = "none";
};


document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contact-form');
    
    contactForm.addEventListener('submit', function(event) {
        event.preventDefault();
        
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;
        
        // Haven't fully figured out what to do with the email, so for now it will just be stored
        // ^^ In the Console.
        console.log(`Email: ${email}`);
        console.log(`Message: ${message}`)
        
        
        alert('Form submitted successfully!');
    });
});

