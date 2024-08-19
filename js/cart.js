// Script cart.js

document.addEventListener("DOMContentLoaded", function() {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    const cartContainer = document.querySelector(".sidecart");
    const cartItemsContainer = document.querySelector("#cart-items");
    const cartTotalElement = document.querySelector("#cart-total");
    const toggleCartButtons = document.querySelectorAll(".toggle-cart-btn");

    // Función para alternar la visibilidad del carrito
    function toggleCart() {
        cartContainer.classList.toggle("open");
        toggleCartButtons.forEach(button => {
            button.classList.toggle("hidden", cartContainer.classList.contains("open"));
        });
    }
    // Ocultar el botón de carrito y cerrarlo al hacer clic fuera

    document.addEventListener("click", function(event) {
        if (!cartContainer.contains(event.target) && !event.target.closest('.toggle-cart-btn') && cartContainer.classList.contains("open")) {
            toggleCart();
        }
    });

    // Agregar evento para los botones de alternar carrito
    toggleCartButtons.forEach(button => {
        button.addEventListener("click", toggleCart);
    });

    // Función para agregar producto al carrito
    window.addToCart = function(title, price, image, alt) {
        const item = cart.find(item => item.title === title);
        if (item) {
            item.quantity++;
        } else {
            cart.push({ title, price, quantity: 1, image, alt });
        }
        saveCart();
        renderCart();
    };

    // Función para eliminar producto del carrito
    function removeFromCart(title) {
        cart = cart.filter(item => item.title !== title);
        saveCart();
        renderCart();
    }

    // Función para actualizar la cantidad de un producto
    window.updateQuantity = function(title, quantity) {
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
    }

    // Renderizar el carrito
    function renderCart() {
        cartItemsContainer.innerHTML = '';
        let total = 0;
        cart.forEach(item => {
            total += item.price * item.quantity;

            const cartItem = document.createElement("div");
            cartItem.className = "cart-item";
            cartItem.innerHTML = `
                <img src="${item.image}" alt="${item.alt}">
                <div class="details">
                    <h4>${item.title}</h4>
                    <p>$${item.price.toFixed(2)}</p>
                </div>
                <div class="quantity">
                    <button onclick="updateQuantity('${item.title}', 1)">+</button>
                    <span>${item.quantity}</span>
                    <button onclick="updateQuantity('${item.title}', -1)">-</button>
                </div>
            `;

            cartItemsContainer.appendChild(cartItem);
        });

        cartTotalElement.textContent = total.toFixed(2);
    }

    // Inicializar el carrito al cargar la página
    renderCart();
});
