// Función para renderizar las tarjetas de los productos en la página de tienda

document.addEventListener("DOMContentLoaded", function() {
 

    const shopProductsContainer = document.querySelector("#shop-items");

    // Función para generar las tarjetas de los productos
    function renderShopItems(products) {
        products.forEach(item => {
            const itemCard = document.createElement("div");
            itemCard.className = "col-12 col-md-6 col-lg-4 d-flex";

            //Plantilla de bootstrap para definir la estructura y estilos de las tarjetas, es la misma que la que usé para los posts del blog pero con algunas modificaciones
            itemCard.innerHTML = `
                <article class="d-flex">
                    <div class="card border border-dark" style="--bs-card-border-radius: 0; --bs-card-inner-border-radius: 0;">
                        <figure class="card-img-top m-0 overflow-hidden bsb-overlay-hover">
                            <a href="${item.link}">
                                <img class="img-fluid bsb-scale bsb-hover-scale-up" loading="lazy" src="${item.image}" alt="${item.alt}">
                            </a>
                            <figcaption>
                                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-eye text-white bsb-hover-fadeInLeft" viewBox="0 0 16 16">
                                    <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z"/>
                                    <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z"/>
                                </svg>
                                <h4 class="h6 text-white bsb-hover-fadeInRight mt-2">Ver más</h4>
                            </figcaption>
                        </figure>
                        <div class="article-body card-body border-0 p-4">
                            <div class="entry-header mb-3">
                                <h2 class="card-title entry-title h4 mb-0">
                                    <a class="link-dark link-opacity-100 link-opacity-75-hover text-decoration-none" href="${item.link}">${item.title}</a>
                                </h2>
                            </div>
                            <p class="card-text entry-summar m-0 p-0">
                                ${item.description}
                            </p>
                             <p class="card-text fw-bold">$${item.price.toFixed(2)}</p>
                            <button class="btn btn-dark" onclick="addToCart('${item.title}', ${item.price}, '${item.image}', '${item.alt}')">Agregar al carrito</button>
                        </div>
                    </div>
                </article>
            `;
            shopProductsContainer.appendChild(itemCard);
        });
    }

    renderShopItems();
});
