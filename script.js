// script.js

// Array of background images
const images = [
    'url("1.jpg")',
    'url("2.jpg")',
    'url("3.jpg")'
  ];
  
  let currentIndex = 0;
  const backgroundContainer = document.querySelector('.background-container');
  
  // Function to change the background image
  function changeBackgroundImage() {
    currentIndex = (currentIndex + 1) % images.length;
    backgroundContainer.style.backgroundImage = images[currentIndex];
  }
  
  // Initial background image
  backgroundContainer.style.backgroundImage = images[currentIndex];
  
  // Change background image every 5 seconds
  setInterval(changeBackgroundImage, 5000);