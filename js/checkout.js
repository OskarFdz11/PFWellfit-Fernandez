// Script funciones de checkout

document.addEventListener("DOMContentLoaded", () => {
    const checkoutItemsContainer = document.querySelector("#checkout-items");
    const checkoutTotalElement = document.querySelector("#checkout-total span");
    const completePurchaseButton = document.querySelector("#complete-purchase");

    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    let total = 0;

    cart.forEach(item => {
        total += item.price * item.quantity;

        const itemElement = document.createElement("div");
        itemElement.className = "checkout-item";
        itemElement.innerHTML = `
            <span>${item.quantity}x ${item.title}</span>
            <span>$${(item.price * item.quantity).toFixed(2)}</span>
        `;
        checkoutItemsContainer.appendChild(itemElement);
    });

    checkoutTotalElement.textContent = total.toFixed(2);

    completePurchaseButton.addEventListener("click", () => {
        fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            body: JSON.stringify({
                cart: cart,
                total: total,
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(response => response.json())
        .then(data => {
            console.log('Compra enviada:', data);
            Swal.fire({
                position: "center",
                icon: "success",
                title: "¡Compra realizada con éxito!",
                showConfirmButton: true,
            }).then(() => {
                localStorage.removeItem("cart");
                window.location.href = "index.html";
            });
        })
        .catch(error => console.error('Error:', error));
    });
    
});
