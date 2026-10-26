/* Replace these four values with your actual business details. */
const BUSINESS = {
  whatsapp: "919199095566", // country code + number, digits only
  phone: "+919199095566",
  email: "nexsurertoservices@gmail.com",
  serviceArea: "Navi Mumbai/ Thane"
};

const menuButton = document.getElementById("menuButton");
const mainNav = document.getElementById("mainNav");
menuButton.addEventListener("click", () => {
  const isOpen = mainNav.classList.toggle("open");
  menuButton.setAttribute("aria-expanded", String(isOpen));
  menuButton.textContent = isOpen ? "✕" : "☰";
});
mainNav.querySelectorAll("a").forEach(link => link.addEventListener("click", () => {
  mainNav.classList.remove("open");
  menuButton.setAttribute("aria-expanded", "false");
  menuButton.textContent = "☰";
}));

const cleanPhone = BUSINESS.phone.replace(/[^\d+]/g, "");
document.querySelectorAll(".phone-link").forEach(link => link.href = `tel:${cleanPhone}`);
document.querySelectorAll(".phone-text").forEach(link => link.textContent = BUSINESS.phone);
document.querySelectorAll(".whatsapp-link").forEach(link => {
  link.href = `https://wa.me/${BUSINESS.whatsapp}?text=${encodeURIComponent("Hello Nexsure RTO Services, I need RTO assistance.")}`;
});
const emailText = document.getElementById("emailText");
emailText.textContent = BUSINESS.email;
emailText.href = `mailto:${BUSINESS.email}`;
document.querySelector(".contact-items p:nth-child(3)").innerHTML = `<strong>Service area:</strong> ${BUSINESS.serviceArea}`;
document.getElementById("year").textContent = new Date().getFullYear();

const form = document.getElementById("enquiryForm");
const status = document.getElementById("formStatus");
form.addEventListener("submit", event => {
  event.preventDefault();
  const name = document.getElementById("name").value.trim();
  const mobile = document.getElementById("mobile").value.replace(/\D/g, "");
  const vehicle = document.getElementById("vehicle").value.trim().toUpperCase();
  const service = document.getElementById("service").value;
  const requirement = document.getElementById("message").value.trim();

  if (!name || !service || !/^\d{10}$/.test(mobile)) {
    status.textContent = "Please enter your name, a valid 10-digit mobile number, and select a service.";
    return;
  }
  if (/X/i.test(BUSINESS.whatsapp)) {
    status.textContent = "Website owner: add the WhatsApp number in script.js before using this form.";
    return;
  }
  status.textContent = "";
  const text = [
    "Hello Nexsure RTO Services, I need assistance.",
    `Name: ${name}`,
    `Mobile: ${mobile}`,
    `Vehicle No.: ${vehicle || "Not provided"}`,
    `Service: ${service}`,
    `Requirement: ${requirement || "Please contact me with details."}`
  ].join("\n");
  window.open(`https://wa.me/${BUSINESS.whatsapp}?text=${encodeURIComponent(text)}`, "_blank", "noopener");
});
