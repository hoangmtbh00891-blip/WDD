document.addEventListener("DOMContentLoaded", () => {
    // --- Thêm sản phẩm vào giỏ hàng (dành cho trang sản phẩm) ---
    const addButtons = document.querySelectorAll(".add-to-cart");
    addButtons.forEach(button => {
        button.addEventListener("click", () => {
            const productDiv = button.closest(".product");
            const name = productDiv.querySelector("h3").textContent;
            const price = productDiv.querySelector(".price").childNodes[0].textContent.trim();
            const img = productDiv.querySelector("img").src;

            // Lấy giỏ hàng hiện tại hoặc tạo mới
            let cart = JSON.parse(localStorage.getItem("cart")) || [];

            // Kiểm tra sản phẩm đã có trong giỏ chưa
            const existing = cart.find(item => item.name === name);
            if (existing) {
                existing.quantity += 1;
            } else {
                cart.push({ name, price, img, quantity: 1 });
            }

            localStorage.setItem("cart", JSON.stringify(cart));
            alert(`${name} đã được thêm vào giỏ hàng!`);
        });
    });

    // --- Hiển thị giỏ hàng (dành cho cart.html) ---
    const cartContainer = document.getElementById("cart-container");
    const totalPriceEl = document.getElementById("total-price");

    if (!cartContainer) return; // nếu không phải trang cart.html thì dừng

    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    function renderCart() {
        cartContainer.innerHTML = "";

        if (cart.length === 0) {
            cartContainer.innerHTML = "<p>Giỏ hàng trống!</p>";
            if (totalPriceEl) totalPriceEl.textContent = "0 VND";
            return;
        }

        let total = 0;

        cart.forEach((item, index) => {
            const productDiv = document.createElement("div");
            productDiv.className = "cart-product";

            const priceNumber = parseInt(item.price.replace(/\D/g, ""));

            total += priceNumber * item.quantity;

            productDiv.innerHTML = `
                <img src="${item.img}" alt="${item.name}">
                <h3>${item.name}</h3>
                <p class="price">${priceNumber.toLocaleString()} VND</p>
                <div class="quantity">
                    <button class="decrease">-</button>
                    <span>${item.quantity}</span>
                    <button class="increase">+</button>
                </div>
                <p>Thành tiền: <span class="subtotal">${(priceNumber*item.quantity).toLocaleString()} VND</span></p>
            `;

            // Tăng số lượng
            productDiv.querySelector(".increase").addEventListener("click", () => {
                item.quantity++;
                localStorage.setItem("cart", JSON.stringify(cart));
                renderCart();
            });

            // Giảm số lượng
            productDiv.querySelector(".decrease").addEventListener("click", () => {
                if (item.quantity > 1) {
                    item.quantity--;
                } else {
                    cart.splice(index, 1);
                }
                localStorage.setItem("cart", JSON.stringify(cart));
                renderCart();
            });

            cartContainer.appendChild(productDiv);
        });

        if (totalPriceEl) totalPriceEl.textContent = total.toLocaleString() + " VND";
    }

    renderCart();
});
