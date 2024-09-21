document.addEventListener("DOMContentLoaded", function() {
  const btnSi = document.getElementById("btnSi");
  const btnNo = document.getElementById("btnNo");
  const HIDDEN1 = document.getElementById("hidden1");
  const HIDDEN2 = document.getElementById("hidden2");
  const SHOW = document.getElementById("show");
  const redirectLink = document.getElementById("redirectLink");

  btnSi.addEventListener("click", () => {
      HIDDEN1.style.display = "none"; // Oculta la pregunta
      HIDDEN2.style.display = "none"; // Oculta los botones
      SHOW.style.display = "block"; // Muestra el mensaje

      setTimeout(() => {
          redirectLink.style.display = "block"; // Muestra el enlace
          redirectLink.click(); // Simula el clic en el enlace
      }, 1000); // Espera 3 segundos antes de redirigir
  });

  btnNo.addEventListener("mouseover", () => {
      const posX = Math.floor(Math.random() * 75);
      const posY = Math.floor(Math.random() * 75);
      btnNo.style.left = `${posX}%`;
      btnNo.style.top = `${posY}%`;
  });
});
