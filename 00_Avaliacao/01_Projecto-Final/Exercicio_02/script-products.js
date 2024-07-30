let cart = [];

        // Function to fetch products from the API
        async function loadProducts() {
            try {
                const response = await fetch('https://fakestoreapi.com/products');
                const products = await response.json();
                displayProducts(products);
            } catch (error) {
                console.error('Error fetching products:', error);
            }
        }

        // Function to display products on the page
        function displayProducts(products) {
            const productGrid = document.getElementById('productGrid');
            products.forEach(product => {
                const productCard = document.createElement('div');
                productCard.className = 'product';

                const img = document.createElement('img');
                img.src = product.image;
                img.alt = product.title;

                const name = document.createElement('h2');
                name.textContent = product.title;

                const button = document.createElement('button');
                button.textContent = 'Add to cart';
                button.onclick = () => addToCart(product);

                productCard.appendChild(img);
                productCard.appendChild(name);
                productCard.appendChild(button);

                productGrid.appendChild(productCard);
            });
        }

        // Function to add a product to the cart
        function addToCart(product) {
            const existingProduct = cart.find(item => item.product.id === product.id);
            if (existingProduct) {
                existingProduct.quantity += 1;
            } else {
                cart.push({ product, quantity: 1 });
            }
            renderCart();
        }

        // Function to render the cart
        function renderCart() {
            const cartList = document.getElementById('cartList');
            cartList.innerHTML = '';

            cart.forEach(item => {
                const listItem = document.createElement('li');
                listItem.innerHTML = `
                    <span>${item.product.title} (x${item.quantity})</span>
                    <button onclick="removeFromCart(${item.product.id})">Remove</button>
                `;
                cartList.appendChild(listItem);
            });
        }

        // Function to remove a product from the cart
        function removeFromCart(productId) {
            cart = cart.filter(item => item.product.id !== productId);
            renderCart();
        }

        // Function to toggle the cart details visibility
        function toggleCartDetails() {
            const cartDetails = document.getElementById('cartDetails');
            cartDetails.style.display = cartDetails.style.display === 'none' ? 'block' : 'none';
        }

        // Event listener for the cart button
        document.getElementById('cartButton').addEventListener('click', toggleCartDetails);

        // Load products when the page loads
        window.onload = loadProducts;