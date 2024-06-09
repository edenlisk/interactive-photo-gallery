const fennecFoxImg = require('./assets/images/fennecFox.png');
const humpbackWhaleImg = require('./assets/images/humpbackWhale.png');
const commonBrownBaboonImg = require('./assets/images/commonBrownBaboon.png');
const spottedDeerImg = require('./assets/images/spottedDeer.png');
require('./style.css');

const galleryData = [
    {
        imageSource: fennecFoxImg,
        title: ["FENNEC", "FOX"],
        location: "India",
    },
    {
        imageSource: humpbackWhaleImg,
        title: ["HUMPBACK", "WHALE"],
        location: "South Africa",
    },
    {
        imageSource: commonBrownBaboonImg,
        title: ["COMMON BROWN", "BABOON"],
        location: "South Africa",
    },
    {
        imageSource: spottedDeerImg,
        title: ["SPOTTED", "DEER"],
        location: "Amazon",
    },
]

const galleryContainer = document.querySelector('.gallery-container ');
galleryData.forEach((data, index) => {
    const galleryItem = document.createElement('div');
    galleryItem.className = 'gallery-item';
    galleryItem.innerHTML = `
        <img src="${data.imageSource}" alt="${data.title.join(' ')}">
        <div class="text-overlay">
            <h2 class="subject">${data.title[0]}</h2>
            <h2 class="subject">${data.title[1]}</h2>
            <p class="location">${data.location}</p>
            <button>Know More &rarr;</button>
        </div>
    `;
    galleryContainer.appendChild(galleryItem);
})
