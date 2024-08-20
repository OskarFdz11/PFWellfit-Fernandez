The Wellfit Society - Proyecto con Carrito de Compras
Este proyecto es una extensión del proyecto anterior desarrollado en el curso de Desarrollo Web, un blog de fitness llamado The Wellfit Society. 
Este blog está construido con HTML puro, junto con estilos en CSS y Sass, y algunos elementos de Bootstrap para mejorar la presentación y la estructura del contenido.

Funcionalidades Agregadas
Como parte del curso de JavaScript, se han añadido nuevas funcionalidades para cumplir con las consignas de manejo del DOM, LocalStorage y JSON. Las funcionalidades añadidas incluyen:

Carrito de Compras Lateral:
Un carrito de compras que se despliega desde el lateral derecho de la pantalla. Este carrito permite agregar, actualizar y eliminar productos seleccionados por el usuario.
Generación Dinámica de Tarjetas de Productos:

Los productos del blog se generan dinámicamente a partir de un arreglo de objetos utilizando JavaScript, lo que permite que las tarjetas de producto se creen de manera eficiente y escalable en la página de la tienda.
Manejo de Estado con LocalStorage:

La aplicación utiliza LocalStorage para mantener persistentes los productos en el carrito incluso después de que se recargue la página. Los datos del carrito se almacenan en formato JSON.

Scripts Utilizados:

products.js: Contiene un arreglo de objetos que guarda la información de los productos disponibles en la tienda, como el título, imagen, descripción y precio.

shop.js: Este script es responsable de generar dinámicamente las tarjetas de productos en la página de la tienda, tomando los datos del arreglo en products.js.

cart.js: Este script maneja todas las funcionalidades básicas del carrito de compras, como agregar productos al carrito, actualizar cantidades, eliminar productos y calcular el total de la compra. 
También se encarga de la persistencia del estado del carrito utilizando LocalStorage.

Tecnologías Utilizadas
HTML: Para la estructura del blog.
CSS y Sass: Para los estilos y diseño responsivo.
Bootstrap: Para algunos elementos de diseño y estructura.
JavaScript: Para las funcionalidades dinámicas y manejo del DOM.
LocalStorage: Para persistir datos del carrito en el navegador.
