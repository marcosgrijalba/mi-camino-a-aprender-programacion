// Seleccionar un píxel
var pixels = document.querySelectorAll('.pixel');
var formulario = document.querySelector('.formulario');
var overlay = document.querySelector('.overlay');
var confirmacion = document.querySelector('.confirmacion');
var seleccionado = null;

for (var i = 0; i < pixels.length; i++) {
	pixels[i].addEventListener('click', function() {
		if (seleccionado !== null) {
			seleccionado.classList.remove('selected');
		}

		if (!this.classList.contains('vendido')) {
			this.classList.add('selected');
			seleccionado = this;

			// Mostrar el formulario
			formulario.style.display = 'block';
			overlay.style.display = 'block';
		}
	});
}

// Cerrar el formulario
var cerrarFormulario = document.querySelector('.cerrar-formulario');

cerrarFormulario.addEventListener('click', function(event) {
	event.preventDefault();
	formulario.style.display = 'none';
	overlay.style.display = 'none';
});

// Enviar el formulario
var enviarFormulario = document.querySelector('.enviar-formulario');

enviarFormulario.addEventListener('click', function(event) {
	event.preventDefault();

	// Obtener los datos del formulario
	var nombre = document.querySelector('.nombre').value;
	var email = document.querySelector('.email').value;

	if (nombre !== '' && email !== '') {
		// Actualizar el pixel seleccionado
		seleccionado.classList.add
