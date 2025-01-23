document.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('product-container');

    fetch('https://fakestoreapi.com/products')
        .then(response => response.json())
        .then(products => {
            products.forEach(product => {
                const productCard = document.createElement('div');
                productCard.classList.add('product-card');

                productCard.innerHTML = `
                    <img src="${product.image}" alt="${product.title}">
                    <h2>${product.title}</h2>
                    <p>${product.description}</p>
                    <p>Category: ${product.category}</p>
                    <p>Price: $${product.price}</p>
                `;

                container.appendChild(productCard);
            });
        })
});
