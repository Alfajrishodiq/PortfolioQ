const texts = ["Web Developer", "Graphic Design", "Freelancer"];
let index = 0;
let currentText = '';
let isDeleting = false;
let isEnd = false;

function typeEffect() {
    const subtitleElement = document.querySelector(".typing-subtitle");
    
    if (isDeleting) {
        currentText = texts[index].substring(0, currentText.length - 1);
    } else {
        currentText = texts[index].substring(0, currentText.length + 1);
    }

    subtitleElement.textContent = currentText;

    if (!isDeleting && currentText === texts[index]) {
        isEnd = true;
        setTimeout(() => {
            isDeleting = true;
            typeEffect();
        }, 1500); // Delay before starting to delete
    } else if (isDeleting && currentText === '') {
        isDeleting = false;
        index = (index + 1) % texts.length; // Switch to the next text
        setTimeout(() => {
            typeEffect();
        }, 500); // Delay before starting to type
    } else {
        setTimeout(() => {
            typeEffect();
        }, isDeleting ? 100 : 150); // Speed of typing/deleting
    }
}

window.onload = () => {
    typeEffect(); // Start the typing effect
};
