document.addEventListener("DOMContentLoaded", function () {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    const cartContainer = document.querySelector(".sidecart");
    const cartItemsContainer = document.querySelector("#cart-items");
    const cartTotalElement = document.querySelector("#cart-total");
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
        console.log('Producto agregado:', { title, price, image });
        const item = cart.find(item => item.title === title);
        if (item) {
            item.quantity++;
        } else {
            cart.push({ title, price, quantity: 1, image });
        }
        saveCart();
        renderCart();

        // Mostrar Toastify
        Toastify({
            text: "Producto agregado exitosamente al carrito",
            duration: 3000,
            close: true,
            gravity: "top",
            position: "right", 
            backgroundColor: "#4CAF50", 
        }).showToast();
    };

    // Función para eliminar producto del carrito
    function removeFromCart(title) {
        cart = cart.filter(item => item.title !== title);
        saveCart();
        renderCart();
    };

    // Función para actualizar la cantidad de productos en el carrito
    window.updateQuantity = function (title, quantity) {
        const item = cart.find(item => item.title === title);
        //Operador ternario
        item ? (item.quantity += quantity, item.quantity <= 0 ? cart = cart.filter(i => i.title !== title) : null) : null;


        // Guardar el carrito actualizado en localStorage
        saveCart();

        // Renderizar el resumen del carrito nuevamente
        renderCart();
    };

    // Guardar el carrito en localStorage
    function saveCart() {
        localStorage.setItem("cart", JSON.stringify(cart));
    };

    // Botón para redirigir a la página de checkout, si no tiene ningún producto, mostrará una alerta de error
    finalizeCartButton.addEventListener("click", () => {
        cart = JSON.parse(localStorage.getItem("cart")) || [];  // Volver a obtener el carrito actualizado
        if (cart.length > 0) {
            window.location.href = "checkout.html";
        } else {
            Swal.fire({
                position: "center",
                icon: "error",
                title: "No tienes ningún producto en el carrito",
                showConfirmButton: false,
                timer: 1500
            });
        }
    });

    // Función para escapar comillas en los títulos de los productos
    function escapeQuotes(str) {
        return str.replace(/'/g, "\\'").replace(/"/g, '\\"');
    };


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
                        <h4>${escapeQuotes(item.title)}</h4>
                        <p>$${item.price.toFixed(2)}</p>
                        <div class="quantity">
                            <button onclick="updateQuantity('${escapeQuotes(item.title)}', 1)">+</button>
                            <span>${item.quantity}</span>
                            <button onclick="updateQuantity('${escapeQuotes(item.title)}', -1)">-</button>
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
