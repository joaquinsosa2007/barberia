// CONFIGURACIÓN: reemplazá el número por tu WhatsApp con código de país, sin +, espacios ni guiones.
// Ejemplo Argentina: 5493811234567
const WHATSAPP_NUMBER = "5493863575936";

const form = document.getElementById("bookingForm");
const dateInput = document.getElementById("date");
const today = new Date();
const localToday = new Date(today.getTime() - today.getTimezoneOffset() * 60000).toISOString().split("T")[0];
dateInput.min = localToday;

document.getElementById("year").textContent = new Date().getFullYear();

const waLink = document.getElementById("whatsappLink");
waLink.href = `https://wa.me/${WHATSAPP_NUMBER}`;
waLink.addEventListener("click", (event) => {
  if (WHATSAPP_NUMBER.includes("X")) {
    event.preventDefault();
    alert("Primero configurá tu número de WhatsApp en script.js.");
  }
});

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const error = document.getElementById("formError");
  error.textContent = "";

  if (WHATSAPP_NUMBER.includes("X")) {
    error.textContent = "Falta configurar tu número de WhatsApp en script.js antes de recibir reservas.";
    return;
  }

  const data = new FormData(form);
  const message = [
    "¡Hola! Quiero solicitar un turno en INFINITY STYLE.",
    "",
    `Nombre: ${data.get("name")}`,
    `Servicio: ${data.get("service")}`,
    `Fecha preferida: ${data.get("date")}`,
    `Horario preferido: ${data.get("time")}`,
    `Teléfono: ${data.get("phone")}`,
    `Dirección: ${data.get("address")}`,
    `Detalles: ${data.get("details") || "Sin detalles adicionales"}`,
    "",
    "Sé que la atención es exclusivamente a domicilio. Quedo pendiente de la confirmación."
  ].join("\n");

  window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`, "_blank", "noopener");
});

const menuToggle = document.getElementById("menuToggle");
const nav = document.getElementById("mainNav");
menuToggle.addEventListener("click", () => {
  const isOpen = nav.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(isOpen));
});
nav.querySelectorAll("a").forEach(link => link.addEventListener("click", () => {
  nav.classList.remove("open");
  menuToggle.setAttribute("aria-expanded", "false");
}));
