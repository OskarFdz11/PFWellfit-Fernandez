document.addEventListener('DOMContentLoaded', function () {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    const cartSummary = document.getElementById("cart-summary");
    const cartCount = document.querySelector(".badge");  // Contador de productos

    // Función para renderizar el resumen del carrito en el checkout
    function renderCartSummary() {
        cartSummary.innerHTML = '';  // Limpiar el contenido previo
        let total = 0;
        let totalQuantity = 0;

        cart.forEach(item => {
            const listItem = document.createElement("li");
            listItem.classList.add("list-group-item", "d-flex", "justify-content-between", "lh-sm");

            listItem.innerHTML = `
                <div class="d-flex align-items-center">
                    <img src="${item.image}" alt="${item.title}" style="width: 50px; height: 50px; object-fit: cover; margin-right: 10px;">
                    <div>
                        <h6 class="my-0">${item.title}</h6>
                        <small class="text-muted">${item.description}</small>
                    </div>
                </div>
                <div class="d-flex align-items-center">
                    <button class="btn btn-sm btn-outline-secondary" onclick="updateQuantity('${item.title}', -1)">-</button>
                    <span class="mx-2">${item.quantity}</span>
                    <button class="btn btn-sm btn-outline-secondary" onclick="updateQuantity('${item.title}', 1)">+</button>
                    <span class="text-muted ml-3">$${(item.price * item.quantity).toFixed(2)}</span>
                </div>
            `;
            cartSummary.appendChild(listItem);

            total += item.price * item.quantity;
            totalQuantity += item.quantity;
        });

        const totalItem = document.createElement("li");
        totalItem.classList.add("list-group-item", "d-flex", "justify-content-between");
        totalItem.innerHTML = `
            <span>Total (USD)</span>
            <strong>$${total.toFixed(2)}</strong>
        `;
        cartSummary.appendChild(totalItem);

        // Actualizar el contador de productos en el badge
        if (cartCount) cartCount.textContent = totalQuantity;
    }

    // Función para actualizar la cantidad de productos en el carrito desde la página de checkout
    window.updateQuantity = function (title, quantity) {
        const item = cart.find(item => item.title === title);
        if (item) {
            item.quantity += quantity;
            if (item.quantity <= 0) {
                // Si la cantidad es 0 o menor, eliminar el producto del carrito
                cart = cart.filter(i => i.title !== title);
            }
        }

        // Guardar el carrito actualizado en localStorage
        localStorage.setItem("cart", JSON.stringify(cart));

        // Renderizar el resumen del carrito nuevamente
        renderCartSummary();
    };

    // Renderizar carrito al cargar la página de checkout
    renderCartSummary();
});
