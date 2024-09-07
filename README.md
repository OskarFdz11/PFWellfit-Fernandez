# The Wellfit Society - Proyecto con Carrito de Compras

**The Wellfit Society** es un blog de fitness, originalmente desarrollado como parte de un curso de Desarrollo Web. Este proyecto ha sido ampliado con nuevas funcionalidades de ecommerce, utilizando tecnologías avanzadas para manejar la interacción del usuario con los productos y el carrito de compras.

## Funcionalidades Agregadas

### 1. Carrito de Compras Lateral
Un carrito de compras que se despliega desde el lateral derecho de la pantalla. Este carrito permite a los usuarios agregar productos, actualizar cantidades y eliminar productos de manera intuitiva. Los productos se mantienen almacenados en el **LocalStorage**, lo que permite que los datos persistan incluso cuando se recarga la página.

### 2. Generación Dinámica de Tarjetas de Productos
Los productos se generan dinámicamente a partir de una API utilizando **JavaScript**. Esto permite que las tarjetas de producto se creen de manera eficiente y escalable, con información detallada como imagen, descripción y precio. Se hace uso de la API `fakestoreapi.com` para consumir datos en tiempo real.

### 3. Manejo de Estado con LocalStorage
El carrito de compras utiliza **LocalStorage** para guardar los productos seleccionados. Esto asegura que los productos en el carrito se mantengan guardados hasta que el usuario decida finalizar la compra o vaciar el carrito.

### 4. Página de Producto Individual
Cada producto tiene su propia página individual, donde se muestran los detalles completos del producto, como la imagen, la descripción y el precio. Esta página también permite al usuario agregar el producto directamente al carrito desde allí.

### 5. Validación de Formulario en el Checkout
La página de checkout incluye un formulario que utiliza la validación de **Bootstrap** y **SweetAlert** para manejar errores y confirmar compras. El formulario no permite que se complete la compra si el carrito está vacío o si hay errores en la información proporcionada.

### 6. Toastify y SweetAlert para Notificaciones
Se utilizan librerías como **Toastify** para mostrar notificaciones al agregar productos al carrito, y **SweetAlert** para mostrar alertas y mensajes de éxito al usuario de manera amigable y moderna.

### 7. Consumo de Datos Asincrónico
Se utilizan operaciones asincrónicas con `fetch()` para obtener los datos de los productos desde la API `fakestoreapi.com`. Esto permite obtener productos y mostrarlos dinámicamente en las páginas de la tienda y de los productos individuales.

### 8. Estilos con Sass y Bootstrap
Los estilos del proyecto están organizados utilizando **SASS** para una mejor mantenibilidad. Además, se incluyen componentes de **Bootstrap** para facilitar el diseño responsivo y mejorar la experiencia de usuario.

### 9. Git y GitHub para Control de Versiones y Hosting
El proyecto está gestionado mediante **Git** para el control de versiones, y el repositorio está alojado en **GitHub**. Esto facilita la colaboración, seguimiento de cambios y el despliegue.

## Scripts Utilizados

- **products.js**: Contiene la lógica para consumir la API `fakestoreapi.com` y obtener la información de los productos. También es responsable de renderizar dinámicamente las tarjetas de producto en la página de la tienda.
- **shop.js**: Genera las tarjetas de productos de manera dinámica y las inserta en el DOM. Utiliza los datos obtenidos de `products.js`.
- **cart.js**: Maneja todas las funcionalidades relacionadas con el carrito de compras, como agregar productos, actualizar cantidades, eliminar productos y calcular el total. Además, utiliza **LocalStorage** para persistir el estado del carrito.
- **product.js**: Este script maneja la página de cada producto individual, obteniendo los detalles desde la API y permitiendo agregar el producto al carrito desde su página correspondiente.
- **checkout.js**: Renderiza el resumen del carrito en la página de checkout. También permite a los usuarios aumentar o disminuir las cantidades de los productos desde esta página.
- **form-validation.js**: Maneja la validación del formulario de checkout, asegurándose de que los campos estén completos y que el carrito no esté vacío antes de procesar la compra.

## Tecnologías Utilizadas

- **HTML**: Estructura del sitio.
- **CSS y SASS**: Estilos y diseño responsivo.
- **Bootstrap**: Componentes y diseño responsivo.
- **JavaScript**: Manejo del DOM, lógica del carrito y operaciones asincrónicas.
- **LocalStorage**: Persistencia de datos del carrito.
- **Toastify y SweetAlert**: Notificaciones amigables para el usuario.
- **Fetch API**: Consumo de datos desde la API.
- **Git y GitHub**: Control de versiones y hosting.

