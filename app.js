const imageContainer = document.querySelector('.image-container');
const rightButton = document.querySelector('#right');
const leftButton = document.querySelector('#left');
const imageHTML = document.querySelector('img');

let images = [];

images[0] = 'images/photo1.jpeg';
images[1] = 'images/photo2.jpg';
images[2] = 'https://images.freeimages.com/images/large-previews/de9/cat-laying-on-chair-1640758.jpg';
images[3] = 'https://images.freeimages.com/images/large-previews/785/red-bird-in-the-sunshine-1641857.jpg';



let i = 0;

rightButton.addEventListener('click', () => {

    if (i < images.length) {
        i++;
        imageHTML.src = images[i];
    }

});

leftButton.addEventListener('click', () => {

    if (i === images.length || i < images.length){
        i--;
        imageHTML.src = images[i];
    }
});









