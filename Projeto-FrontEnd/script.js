// Alerta de boas-vindas (apenas na primeira visita)
if (!localStorage.getItem("visitado")) {
  alert("Bem-vindo ao portfólio da nossa equipe!");
  localStorage.setItem("visitado", "true");
}

// Alternar modo claro/escuro
function toggleDarkMode() {
  document.body.classList.toggle("bg-dark");
  document.body.classList.toggle("text-white");
  
  // Alterar fundo dos modais
  const modals = document.querySelectorAll(".modal-content");
  modals.forEach(modal => {
    modal.classList.toggle("bg-dark");
    modal.classList.toggle("text-white");
  });
}

// Mostrar/ocultar conteúdo específico
function toggleContent(id) {
  const element = document.getElementById(id);
  if (element.style.display === "none") {
    element.style.display = "block";
  } else {
    element.style.display = "none";
  }
}