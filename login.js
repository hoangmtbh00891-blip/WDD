document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("form");
    const usernameInput = form.querySelector('input[type="text"]');
    const passwordInput = form.querySelector('input[type="password"]');

    const defaultAvatar = "img/Clone_Avatar.jpg"; // avatar mặc định

    form.addEventListener("submit", function (e) {
        e.preventDefault();

        const inputUsername = usernameInput.value.trim();
        const inputPassword = passwordInput.value.trim();

        const savedUsername = localStorage.getItem("username");
        const savedPassword = localStorage.getItem("password");

        if (!savedUsername || !savedPassword) {
            alert("Chưa có tài khoản, vui lòng đăng ký trước!");
            return;
        }

        if (inputUsername === savedUsername && inputPassword === savedPassword) {
            alert("Đăng nhập thành công!");

            // Lưu avatar (nếu muốn random có thể thay bằng hàm getAvatar)
            localStorage.getItem("avatar", defaultAvatar);

            // --- Chuyển sang profile.html ---
            window.location.href = "profile.html";
        } else {
            alert("Sai tên đăng nhập hoặc mật khẩu!");
        }
    });
});
