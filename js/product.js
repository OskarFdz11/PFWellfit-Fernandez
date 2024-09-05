// Funcion fetch para renderizar los datos de la página del producto
document.addEventListener("DOMContentLoaded", () => {
    // Obtener el ID del producto desde la URL
    const params = new URLSearchParams(window.location.search);
    const productId = params.get('id');

    // Función para obtener los detalles del producto
    async function fetchProductDetails() {
        try {
            const response = await fetch(`https://fakestoreapi.com/products/${productId}`);
            const product = await response.json();

            // Renderizar los detalles del producto
            document.querySelector('#product-title').textContent = product.title;
            document.querySelector('#product-image').src = product.image;
            document.querySelector('#product-description').textContent = product.description;
            document.querySelector('#product-price').textContent = `$${product.price}`;

           // Enlazar el botón "Agregar al carrito" a la función addToCart
           const addToCartButton = document.querySelector("#add-to-cart-btn");
           addToCartButton.addEventListener("click", () => {
               addToCart(product.title, product.price, product.image, product.title);
           });
        } catch (error) {
            console.error('Error fetching product details:', error);
        }
    }

    // Llamar a la función para obtener los detalles del producto
    fetchProductDetails();
});
