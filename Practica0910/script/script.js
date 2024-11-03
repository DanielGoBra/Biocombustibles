document.getElementById('biofuelForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Previene el envío por defecto del formulario

    const name = document.getElementById('name').value;
    const fuelType = document.getElementById('fuelType').value;
    const quantity = document.getElementById('quantity').value;
    const date = document.getElementById('date').value;

    // lógica para almacenar los datos
    console.log('Datos registrados:', { name, fuelType, quantity, date });

    // Resetea el formulario
    this.reset();
    alert('Datos registrados correctamente.');
});
