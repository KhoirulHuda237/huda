function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
  }
  
  document.addEventListener('DOMContentLoaded', function () {
    const productList = document.getElementById('product-list');
    const cartList = document.getElementById('cart-list');
    const totalAmount = document.getElementById('total');

    let cartItems = [];

    productList.addEventListener('click', function (e) {
        if (e.target.classList.contains('product')) {
            const productId = e.target.dataset.id;
            const productName = e.target.innerText.split(' - ')[0];
            const productPrice = parseFloat(e.target.dataset.price);

            const existingItem = cartItems.find(item => item.id === productId);

            if (existingItem) {
                existingItem.quantity++;
            } else {
                cartItems.push({
                    id: productId,
                    name: productName,
                    price: productPrice,
                    quantity: 1
                });
            }

            renderCart();
        }
    });

    function renderCart() {
        cartList.innerHTML = '';
        let total = 0;

        cartItems.forEach(item => {
            const listItem = document.createElement('li');
            listItem.className = 'cart-item';
            listItem.innerHTML = `
                <span>${item.name} x ${item.quantity}</span>
                <span>$${item.price * item.quantity}</span>
            `;
            cartList.appendChild(listItem);

            total += item.price * item.quantity;
        });

        totalAmount.innerText = total.toFixed(2);
    }
});
