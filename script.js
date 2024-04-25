document.addEventListener("DOMContentLoaded", function () {
  const contactBtn = document.querySelector(".contact");
  const contactForm = document.querySelector(".contact-form");
  const servicesLinkHeader = document.querySelector(
    ".navbar a[href='#services']"
  );

  // Scroll to contact form when the "Contact me" link is clicked
  contactBtn.addEventListener("click", function (event) {
    event.preventDefault(); // Prevent default link behavior
    contactForm.scrollIntoView({ behavior: "smooth" }); // Scroll to contact form smoothly
  });

  // Scroll to services section when the "Services" link in the header is clicked
  servicesLinkHeader.addEventListener("click", function (event) {
    event.preventDefault(); // Prevent default link behavior
    const servicesSection = document.querySelector(".Services");
    servicesSection.scrollIntoView({ behavior: "smooth" }); // Scroll to services section smoothly
  });
});
