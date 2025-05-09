const textArray = ["Programmer. ", "UX Desinger. ", "Pentester. ", "Embedded Developer. "];
const fonts = ["Xanh Mono", "Courier Prime"]
let currentIndex = 0;
let charIndex = 0;
let isDeleting = false;
const speed = 100; 
const outputElement = document.getElementById("typewriterHeading");

function typeWriter() {
  const currentText = textArray[currentIndex];
  
  if (isDeleting) {
    outputElement.innerHTML = currentText.substring(0, charIndex);
    charIndex--;

    if (charIndex === 0) {
      isDeleting = false;
      currentIndex = (currentIndex + 1) % textArray.length; 
      outputElement.style.fontFamily = fonts[currentIndex];
    }
  } else {
    outputElement.innerHTML = currentText.substring(0, charIndex);
    charIndex++;

    if (charIndex === currentText.length) {
      isDeleting = true;
      setTimeout(typeWriter, 1000); 
      return;
    }
  }

  setTimeout(typeWriter, speed); 
}

typeWriter(); 

let backToTopBtn = document.getElementById("backToTopBtn");

window.onscroll = function() {
  if (document.body.scrollTop > 900 || document.documentElement.scrollTop > 900) {
    backToTopBtn.style.opacity = "0.75";
  } else {
    backToTopBtn.style.opacity = "0";
  }
};

backToTopBtn.addEventListener("click", function() {
  window.scrollTo({
    top: 0,
    behavior: "smooth" 
  });
});