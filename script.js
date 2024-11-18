function typewriterEffect(text, elementId, speed, loop = false) {
    let i = 0;
    const element = document.getElementById(elementId);

    function type() {
        if (i < text.length) {
            element.textContent += text.charAt(i);
            i++;
            setTimeout(type, speed);
        } else if (loop) {
            setTimeout(() => {
                element.textContent = ""; // Clear the text
                i = 0;
                type(); // Restart
            }, 1000); // Pause before restarting
        }
    }

    type();
}

// Example usage
const text = "I'm Mohamed Soliman";
typewriterEffect(text, "theName", 100, true);
