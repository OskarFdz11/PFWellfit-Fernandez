// Script cart

document.addEventListener("DOMContentLoaded", function () {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    const cartContainer = document.querySelector(".sidecart");
    const cartItemsContainer = document.getElementById("cart-items");
    const cartTotalElement = document.getElementById("cart-total");
    const toggleCartButton = document.querySelector(".toggle-cart-btn");
    const closeCartButton = document.querySelector(".close-cart-btn");
    const finalizeCartButton = document.querySelector('#finalize-cart');

    // Función para alternar la visibilidad del carrito
    function toggleCart() {
        cartContainer.classList.toggle("open");
        if (cartContainer.classList.contains("open")) {
            toggleCartButton.classList.add("hidden"); // Oculta el botón de carrito cuando está abierto
        } else {
            toggleCartButton.classList.remove("hidden"); // Muestra el botón de carrito cuando está cerrado
        }
    };

    // Función para cerrar el carrito
    function closeCart() {
        cartContainer.classList.remove("open");
        toggleCartButton.classList.remove("hidden");
    };

    // Agregar evento para el botón de alternar carrito
    toggleCartButton.addEventListener("click", toggleCart);
    closeCartButton.addEventListener("click", closeCart);

    // Función para agregar producto al carrito
    window.addToCart = function (title, price, image) {
        const item = cart.find(item => item.title === title);
        if (item) {
            item.quantity++;
        } else {
            cart.push({ title, price, quantity: 1, image });
        }
        saveCart();
        renderCart();
    };

    // Función para eliminar producto del carrito
    function removeFromCart(title) {
        cart = cart.filter(item => item.title !== title);
        saveCart();
        renderCart();
    };

    // Función para actualizar la cantidad de un producto
    window.updateQuantity = function (title, quantity) {
        const item = cart.find(item => item.title === title);
        if (item) {
            item.quantity += quantity;
            if (item.quantity <= 0) {
                removeFromCart(title);
            }
        }
        saveCart();
        renderCart();
    };

    // Guardar el carrito en localStorage
    function saveCart() {
        localStorage.setItem("cart", JSON.stringify(cart));
    };

    // Mostrar sweet alert de confirmación de pedido al hacer clic en el botón de finalizar, si no tiene ninguno, mostrará una alerta de error

    finalizeCartButton.addEventListener("click", () => {

        cart = JSON.parse(localStorage.getItem("cart")) || [];
        console.log("Updated Cart Length:", cart.length);

        if (cart.length === 0) {

            Swal.fire({
                position: "center",
                icon: "error",
                title: "No tienes ningún producto en el carrito",
                showConfirmButton: false,
                timer: 1500
            });

        } else {
            Swal.fire({
                position: "center",
                icon: "success",
                title: "¡Su pedido se ha confirmado exitosamente!",
                showConfirmButton: false,
                timer: 1500
            });

        };
    });
          

    // Renderizar el carrito
    function renderCart() {
        cartItemsContainer.innerHTML = '';
        let total = 0;
        cart.forEach(item => {
            total += item.price * item.quantity;

            const cartItem = document.createElement("div");
            cartItem.className = "cart-item";
            cartItem.innerHTML = `
                <div class="cart-item">
                    <img src="${item.image}" alt="${item.alt}">
                    <div class="details">
                        <h4>${item.title}</h4>
                        <p>$${item.price.toFixed(2)}</p>
                        <div class="quantity">
                            <button onclick="updateQuantity('${item.title}', 1)">+</button>
                            <span>${item.quantity}</span>
                            <button onclick="updateQuantity('${item.title}', -1)">-</button>
                        </div>
                    </div>
                </div>
            `;

            cartItemsContainer.appendChild(cartItem);
        });

        cartTotalElement.textContent = total.toFixed(2);
    };

    // Inicializar el carrito al cargar la página
    renderCart();
});