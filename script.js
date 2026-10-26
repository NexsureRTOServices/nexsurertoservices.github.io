const BUSINESS = {
  whatsapp: "919199095566",
  phone: "+919199095566",
  email: "nexsurertoservices@gmail.com",
  serviceArea: "Navi Mumbai / Thane"
};

const menuButton = document.getElementById("menuButton");
const mainNav = document.getElementById("mainNav");
menuButton.addEventListener("click", () => {
  const open = mainNav.classList.toggle("open");
  menuButton.setAttribute("aria-expanded", String(open));
  menuButton.textContent = open ? "✕" : "☰";
});
mainNav.querySelectorAll("a").forEach(a => a.addEventListener("click", () => {
  mainNav.classList.remove("open");
  menuButton.setAttribute("aria-expanded", "false");
  menuButton.textContent = "☰";
}));

const tel = BUSINESS.phone.replace(/[^+\d]/g, "");
document.querySelectorAll(".phone-link").forEach(a => a.href = `tel:${tel}`);
document.querySelectorAll(".phone-text").forEach(a => a.textContent = BUSINESS.phone);
document.querySelectorAll(".whatsapp-link").forEach(a => {
  a.href = `https://wa.me/${BUSINESS.whatsapp}?text=${encodeURIComponent("Hello Nexsure RTO Services, I need RTO assistance.")}`;
});
const emailText = document.getElementById("emailText");
emailText.textContent = BUSINESS.email;
emailText.href = `mailto:${BUSINESS.email}`;
document.getElementById("serviceAreaText").textContent = BUSINESS.serviceArea;
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
  if (!name || !/^\d{10}$/.test(mobile) || !service) {
    status.textContent = "Please enter your name, a valid 10-digit mobile number, and select a service.";
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
