
const anneeSpan = document.getElementById("annee");
if (anneeSpan) {
  anneeSpan.textContent = new Date().getFullYear();
}


const btnTheme = document.getElementById("theme-btn");
btnTheme?.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});

