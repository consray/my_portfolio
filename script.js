document.addEventListener("DOMContentLoaded", function () {
    const yearElement = document.getElementById("year");
    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }

    // Contact form functionality
    const contactForm = document.getElementById("contact-form");
    if (contactForm) {
        contactForm.addEventListener("submit", function (event) {
            event.preventDefault(); // Prevent default form submission
            
            const name = document.getElementById("name").value.trim();
            const email = document.getElementById("email").value.trim();
            const message = document.getElementById("message").value.trim();
            const statusMessage = document.getElementById("status-message");
            
            if (name === "" || email === "" || message === "") {
                statusMessage.textContent = "Please fill in all fields.";
                statusMessage.style.color = "red";
                return;
            }
            
            // Simulating form submission (can be replaced with actual backend integration)
            setTimeout(() => {
                statusMessage.textContent = "Thank you for your message, " + name + "! I will get back to you soon.";
                statusMessage.style.color = "green";
                contactForm.reset(); // Clear the form
            }, 1000);
        });
    }
});
