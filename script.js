document.getElementById('whatsappForm').addEventListener('submit', function(event) {
    event.preventDefault();

    var placa = document.getElementById('placa').value;
    var dni = document.getElementById('dni').value;

    var message = `Hola, aquí están los datos:\nPlaca: ${placa}\nDNI: ${dni}`;
    var phoneNumber = '51939802395'; // Reemplaza con el número de teléfono deseado, sin espacios ni caracteres especiales.

    var whatsappUrl = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(message)}`;

    window.open(whatsappUrl, '_blank');
});