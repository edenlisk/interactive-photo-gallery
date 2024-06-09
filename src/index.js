require('./style.css');
const { galleryData } = require('./app/utils');

const galleryContainer = document.querySelector('.gallery-container ');
galleryData.forEach((data) => {
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

const modal = document.getElementById("modal");
const modalImg = document.getElementById("modalImage");
const closeBtn = document.getElementById("close");

const openModalButtons = document.querySelectorAll('.gallery-item button');
openModalButtons.forEach((button, index) => {
    button.addEventListener('click', () => {
        modalImg.src = galleryData[index].imageSource;
        modalImg.alt = galleryData[index].title.join(' ');
        modal.style.display = "flex";
        modalImg.style.width = "420px";
        modalImg.style.height = "100vh";
        modalImg.style.borderRadius = "4px";
    });
});

closeBtn.addEventListener('click', () => {
    modal.style.display = "none";
});

window.addEventListener('click', (event) => {
    if (event.target === modal) {
        modal.style.display = "none";
    }
});
