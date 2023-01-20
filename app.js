const imageContainer = document.querySelector('.image-container');
const rightButton = document.querySelector('#right');
const leftButton = document.querySelector('#left');
const imageHTML = document.querySelector('img');

let images = [];

images[0] = 'images/photo1.jpeg';
images[1] = 'images/photo2.jpg';
images[2] = 'https://images.freeimages.com/images/large-previews/de9/cat-laying-on-chair-1640758.jpg';
images[3] = 'https://images.freeimages.com/images/large-previews/785/red-bird-in-the-sunshine-1641857.jpg';

imageHTML.src = images[0];

let id = 0;

rightButton.addEventListener('click', () => {

    // increases id by 1 with each click
    id++;

    // checks if the id is on the last image
    if (id > images.length - 1) {
        id = 0;
    }

    imageHTML.src = images[id];

});

leftButton.addEventListener('click', () => {

    // decreases id by 1 with each click
    id--;

    // makes sure that id doesn't go below index 0
    if (id < 0) {
        id = images.length - 1; 
    }

    imageHTML.src = images[id];
     
});









