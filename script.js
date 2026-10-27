const form = document.getElementById("contact-form");
const status = document.getElementById("form-status");
const year = document.getElementById("year");

if (year) year.textContent = String(new Date().getFullYear());

form?.addEventListener("submit", (event) => {
  event.preventDefault();

  const name = document.getElementById("nama")?.value.trim();
  if (!name || !status) return;

  // This static learning page has no backend: do not send or store form data.
  status.textContent = `Terima kasih, ${name}. Ini hanya demo; data tidak dikirim atau disimpan.`;
  form.reset();
});
