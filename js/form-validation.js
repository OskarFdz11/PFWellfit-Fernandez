// Validación de formulario con Bootstrap y SweetAlert
(function () {
  'use strict'

  // Seleccionar todos los formularios con la clase "needs-validation"
  var forms = document.querySelectorAll('.needs-validation');

  // Recorrer todos los formularios y aplicar la validación
  Array.prototype.slice.call(forms).forEach(function (form) {
    form.addEventListener('submit', function (event) {

      // Obtener el carrito actualizado desde localStorage en cada envío
      var cart = JSON.parse(localStorage.getItem("cart")) || [];

      // Primero, validar el formulario de Bootstrap
      if (!form.checkValidity()) {
        event.preventDefault();
        event.stopPropagation();

        // Añadir la clase "was-validated" para mostrar los mensajes de error de Bootstrap
        form.classList.add('was-validated');
        return; // Detener si el formulario no es válido
      }

      // Si el formulario es válido, comprobar si el carrito está vacío
      if (cart.length === 0) {
        event.preventDefault();  // Evitar el envío del formulario si el carrito está vacío
        event.stopPropagation();

        // Mostrar SweetAlert si el carrito está vacío
        Swal.fire({
          position: 'center',
          icon: 'error',
          title: 'Tu carrito está vacío',
          text: 'No puedes proceder con la compra sin productos en el carrito.',
          confirmButtonText: 'Ir a la tienda',
          background: '#1e1e1e',
          color: '#fff',  
          iconColor: '#f27474',
          confirmButtonColor: '#3085d6',
        }).then((result) => {
          if (result.isConfirmed) {
            window.location.href = '../pages/tienda.html'; // Redirigir a la tienda
          }
        });
        return; // No continuar con la compra
      }

      // Si el formulario es válido y el carrito tiene productos, proceder con la compra
      event.preventDefault(); // Evitar el comportamiento por defecto del formulario
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Compra realizada exitosamente!',
        showConfirmButton: true
      }).then(() => {
        localStorage.clear(); // Limpiar el carrito después de la compra
        window.location.href = '../pages/thanks.html'; // Redirigir a página de agradecimiento
      });
    }, false);
  });

  document.querySelector('#boton-tienda').addEventListener("click", () => {
    window.location.href = '../pages/tienda.html'
  });  

})();
