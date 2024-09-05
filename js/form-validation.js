// Validación de formulario con Bootstrap y SweetAlert
(function () {
  'use strict'

  // Seleccionar todos los formularios con la clase "needs-validation"
  var forms = document.querySelectorAll('.needs-validation')

  // Recorrer todos los formularios y aplicar la validación
  Array.prototype.slice.call(forms).forEach(function (form) {
    form.addEventListener('submit', function (event) {
      // Si el formulario no es válido, evitar su envío y mostrar la validación de Bootstrap
      if (!form.checkValidity()) {
        event.preventDefault()
        event.stopPropagation()
      } else {
        // Si el formulario es válido, ejecutar el SweetAlert
        event.preventDefault(); // Evitar el comportamiento por defecto del formulario

        Swal.fire({
          position: "center",
          icon: "success",
          title: "Compra realizada exitosamente!",
          showConfirmButton: true
        }).then(() => {
          localStorage.clear(); // Limpiar el carrito
          window.location.href = "../pages/thanks.html"; // Redirigir a página de agradecimiento
        });
      }

      // Añadir la clase "was-validated" a todos los formularios, para activar la validación visual de Bootstrap
      form.classList.add('was-validated')
    }, false)
  })
})()
