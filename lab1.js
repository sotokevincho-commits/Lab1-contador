let contador = 0;
const numero = document.getElementById("numero");
const btnSumar = document.getElementById("btnSumar");
const btnRestar = document.getElementById("btnRestar");
function actualizarPantalla() {
    numero.textContent = contador;
    if (contador === 10) {
        numero.classList.add("limite");
    } else {
        numero.classList.remove("limite");
    }
}
btnSumar.addEventListener("click", function() {
    contador++; 
    actualizarPantalla();
});
btnRestar.addEventListener("click", function() {
    contador--; 
    actualizarPantalla();
});