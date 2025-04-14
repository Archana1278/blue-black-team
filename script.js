document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// Select the form and pop-up message elements
const contactForm = document.getElementById('contactForm');
const popupMessage = document.getElementById('popupMessage');

// Add an event listener for form submission
contactForm.addEventListener('submit', function (event) {
  // Prevent the default form submission behavior
  event.preventDefault();

  // Simulate a successful message delivery (e.g., via API or backend)
  setTimeout(() => {
    // Show the pop-up message
    popupMessage.style.display = 'block';

    // Hide the pop-up message after 3 seconds
    setTimeout(() => {
      popupMessage.style.display = 'none';
    }, 3000);
  }, 500); // Simulate a slight delay for realism

  // Optionally, reset the form fields
  contactForm.reset();
});