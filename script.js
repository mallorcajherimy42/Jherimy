document.addEventListener("DOMContentLoaded", function () {
  const contactBtn = document.querySelector(".contact");
  const contactForm = document.querySelector(".contact-form");

  // Scroll to contact form when the "Contact me" link is clicked
  contactBtn.addEventListener("click", function (event) {
    event.preventDefault(); // Prevent default link behavior
    contactForm.scrollIntoView({ behavior: "smooth" }); // Scroll to contact form smoothly
  });
});
