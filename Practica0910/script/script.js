// Formulario de Contacto
const contactForm = document.getElementById('contactForm');

contactForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    const project = document.getElementById('project').value;

    let hasError = false;

    
    removeAllErrors();

    if (!name) {
        showError('name', 'Por favor, ingrese su nombre');
        hasError = true;
    }

    if (!email) {
        showError('email', 'Por favor, ingrese su correo electrónico');
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

    if (!hasError) {
        const loadingIndicator = document.createElement('div');
        loadingIndicator.innerText = 'Enviando...';
        loadingIndicator.id = 'loadingIndicator';
        document.body.appendChild(loadingIndicator);

        setTimeout(() => {
            alert("Formulario enviado correctamente");
            document.body.removeChild(loadingIndicator); // Eliminar animación de carga
            alert('¡Gracias por contactarnos! Nos comunicaremos contigo pronto.');
            contactForm.reset(); // Limpiar el formulario
        }, 2000);
    }
});

function showError(fieldId, errorMessage) {
    const field = document.getElementById(fieldId);
    const errorElement = document.createElement('div');
    errorElement.className = 'error-message';
    errorElement.innerText = errorMessage;
    field.parentElement.appendChild(errorElement);
    field.style.borderColor = 'red';
}

function removeAllErrors() {
    const errorMessages = document.querySelectorAll('.error-message');
    errorMessages.forEach(error => error.remove());
    const fields = document.querySelectorAll('#contactForm input, #contactForm textarea');
    fields.forEach(field => field.style.borderColor = '');
}

function showSuccess(fieldId) {
    const field = document.getElementById(fieldId);
    field.style.borderColor = 'green';
    const successElement = document.createElement('div');
    successElement.className = 'success-message';
    successElement.innerHTML = '&#10004;';
    field.parentElement.appendChild(successElement);
}

contactForm.addEventListener('input', (event) => {
    const field = event.target;
    const fieldId = field.id;
}



)
  