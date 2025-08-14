
document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("form");

    form.addEventListener("submit", function (e) {
        e.preventDefault();

        const fullname = document.getElementById("fullname").value.trim();
        const email = document.getElementById("email").value.trim();
        const username = document.getElementById("username").value.trim();
        const password = document.getElementById("password").value.trim();
        const confirmPassword = document.getElementById("confirm-password").value.trim();

        if (!fullname || !email || !username || !password || !confirmPassword) {
            alert("Vui lòng nhập đầy đủ thông tin!");
            return;
        }

        if (password !== confirmPassword) {
            alert("Mật khẩu xác nhận không khớp!");
            return;
        }

        // Lưu vào localStorage
        localStorage.setItem("username", username);
        localStorage.setItem("password", password);

        alert("Đăng ký thành công! Chuyển sang trang đăng nhập.");
        window.location.href = "login.html";
    });
});
