// Variables
let secretNumber = 6;

// Event listener para el botón "Adivinar"
document.getElementById('guessButton').addEventListener('click', function() {
    let userNumber = parseInt(document.getElementById('userInput').value);
    let resultElement = document.getElementById('result');
    let resultImage = document.getElementById('resultImage');

    if (userNumber === secretNumber) {
        resultElement.textContent = '¡Adivinaste el número correcto!';
        resultImage.src = 'ruta/a/la/imagen.jpg'; // Reemplaza con la ruta correcta
        resultImage.style.display = 'block';
    } else {
        if (userNumber === 1 || userNumber === 2 || userNumber === 10) {
            resultElement.textContent = '¡Estás muy lejos! Intenta nuevamente.';
        } else if (userNumber === 3 || userNumber === 9) {
            resultElement.textContent = '¡Estás lejos! Intenta nuevamente.';
        } else if (userNumber === 4 || userNumber === 8) {
            resultElement.textContent = 'Estás algo cerca. ¡Sigue intentando!';
        } else if (userNumber === 5 || userNumber === 7) {
            resultElement.textContent = '¡Te estás acercando! Intenta nuevamente.';
        }
        resultImage.style.display = 'none';
    }
});