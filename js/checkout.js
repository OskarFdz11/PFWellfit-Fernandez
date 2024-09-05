// Script funciones de checkout

document.addEventListener('DOMContentLoaded', function () {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    const cartSummary = document.getElementById("cart-summary");

    function renderCartSummary() {
        cartSummary.innerHTML = '';  // Limpiar el contenido previo
        let total = 0;

        cart.forEach(item => {
            const listItem = document.createElement("li");
            listItem.classList.add("list-group-item", "d-flex", "justify-content-between", "lh-sm");
            listItem.innerHTML = `
                <div>
                    <h6 class="my-0">${item.title}</h6>
                    <small class="text-muted">${item.description}</small>
                </div>
                <span class="text-muted">$${(item.price * item.quantity).toFixed(2)}</span>
            `;
            cartSummary.appendChild(listItem);
            total += item.price * item.quantity;
        });

        const totalItem = document.createElement("li");
        totalItem.classList.add("list-group-item", "d-flex", "justify-content-between");
        totalItem.innerHTML = `
            <span>Total (USD)</span>
            <strong>$${total.toFixed(2)}</strong>
        `;
        cartSummary.appendChild(totalItem);
    }

    // Renderizar carrito al cargar la página
    renderCartSummary();

    // Mostrar alerta al finalizar compra
    const checkoutForm = document.getElementById("checkout-form");
    checkoutForm.addEventListener("submit", function (event) {
        event.preventDefault();
        Swal.fire({
            position: "center",
            icon: "success",
            title: "Compra realizada exitosamente!",
            showConfirmButton: true
        });
        localStorage.removeItem("cart"); // Limpia el carrito después de la compra
    });
});

