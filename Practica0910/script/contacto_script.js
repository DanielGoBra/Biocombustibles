// Formulario de Contacto
document.addEventListener('DOMContentLoaded', () => {
    const contactForm = document.getElementById('contactForm');

    contactForm.addEventListener('submit', (event) => {
        event.preventDefault();

        // Obtener los valores de los campos
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;
        const project = document.getElementById('project').value;

        let hasError = false;

        // Eliminar todos los mensajes de error antes de validar
        removeAllErrors();

        // Validación de los campos
        if (!name) {
            showError('name', 'Por favor, ingrese su nombre');
            hasError = true;
        }

        if (!email) {
            showError('email', 'Por favor, ingrese su correo electrónico');
            hasError = true;
        } else if (!isValidEmail(email)) {
            showError('email', 'Por favor, ingrese un correo electrónico válido');
            hasError = true;
        }

        if (!project) {
            showError('project', 'Por favor, ingrese el tipo de granja');
            hasError = true;
        }

        if (!message) {
            showError('message', 'Por favor, ingrese su mensaje');
            hasError = true;
        }

        // Si no hay errores, mostrar el indicador de carga y enviar el formulario
        if (!hasError) {
            const loadingIndicator = document.createElement('div');
            loadingIndicator.innerText = 'Enviando...';
            loadingIndicator.id = 'loadingIndicator';
            document.body.appendChild(loadingIndicator);

            // Simular envío de formulario con un retardo de 2 segundos
            setTimeout(() => {
                document.body.removeChild(loadingIndicator); // Eliminar animación de carga
                alert('¡Gracias por contactarnos! Nos comunicaremos contigo pronto.');
                contactForm.reset(); // Limpiar el formulario
            }, 2000);
        }
    });

    // Escuchar eventos de entrada en los campos para eliminar errores en tiempo real
    contactForm.addEventListener('input', (event) => {
        const field = event.target;
        const errorElement = field.parentElement.querySelector('.error-message');
        if (errorElement) {
            errorElement.remove();
            field.style.borderColor = '';
        }
    });
});

// Función para mostrar errores
function showError(fieldId, errorMessage) {
    const field = document.getElementById(fieldId);
    const errorElement = document.createElement('div');
    errorElement.className = 'error-message';
    errorElement.innerText = errorMessage;
    field.parentElement.appendChild(errorElement);
    field.style.borderColor = 'red';
}

// Función para eliminar todos los errores de los campos
function removeAllErrors() {
    const errorMessages = document.querySelectorAll('.error-message');
    errorMessages.forEach(error => error.remove());
    const fields = document.querySelectorAll('#contactForm input, #contactForm textarea');
    fields.forEach(field => field.style.borderColor = '');
}

// Función para validar el formato de correo electrónico
function isValidEmail(email) {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
}

// Configuración del gráfico usando Chart.js
const ctx = document.getElementById('myChart').getContext('2d');
const myChart = new Chart(ctx, {
    type: 'bar', // Tipo de gráfico
    data: {
        labels: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio'],
        datasets: [{
            label: 'Producción de Biocombustibles',
            data: [30, 20, 50, 40, 60, 70], // Datos de ejemplo
            backgroundColor: [
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)'
            ],
            borderColor: [
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});



  