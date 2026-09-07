let cart = [];


// Add food to cart
function addToCart(name, price) {

    const existingItem = cart.find(item => item.name === name);

    if (existingItem) {
        existingItem.quantity++;
    } else {
        cart.push({
            name: name,
            price: price,
            quantity: 1
        });
    }

    displayCart();
}


// Display cart
function displayCart() {

    const cartItems = document.getElementById("cartItems");
    const totalElement = document.getElementById("total");

    cartItems.innerHTML = "";

    if (cart.length === 0) {
        cartItems.innerHTML = "<p>Your cart is empty.</p>";
        totalElement.textContent = "0";
        return;
    }

    let total = 0;

    cart.forEach((item, index) => {

        total += item.price * item.quantity;

        const cartItem = document.createElement("div");
        cartItem.classList.add("cart-item");

        cartItem.innerHTML = `
            <span>
                ${item.name} × ${item.quantity}
                - ₹${item.price * item.quantity}
            </span>

            <button
                class="remove-button"
                onclick="removeFromCart(${index})">
                Remove
            </button>
        `;

        cartItems.appendChild(cartItem);
    });

    totalElement.textContent = total;
}


// Remove food from cart
function removeFromCart(index) {

    cart.splice(index, 1);

    displayCart();
}


// Place order
function placeOrder() {

    if (cart.length === 0) {
        alert("Your cart is empty!");
        return;
    }

    alert("🎉 Order placed successfully!");

    cart = [];

    displayCart();
}


// Search food
document.getElementById("searchInput").addEventListener("input", function () {

    const searchValue = this.value.toLowerCase();

    const foods = document.querySelectorAll(".food");

    foods.forEach(function (food) {

        const foodName = food.querySelector("h3").textContent.toLowerCase();

        if (foodName.includes(searchValue)) {
            food.style.display = "block";
        } else {
            food.style.display = "none";
        }

    });

});  