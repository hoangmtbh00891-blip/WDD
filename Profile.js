// Nếu chưa có username → chuyển về login.html
if (!localStorage.getItem("username")) {
    window.location.href = "login.html";
}

document.addEventListener("DOMContentLoaded", function () {
    // Lấy thông tin từ localStorage
    const username = localStorage.getItem("username");

    // Hiển thị thông tin
    if (fullname) document.getElementById("fullname")?.textContent = fullname;
    if (email) document.getElementById("email")?.textContent = email;
    if (username) document.getElementById("username")?.textContent = username;
    if (avatarUrl) document.getElementById("profileImage")?.src = avatarUrl;

    // Nút đăng xuất
    const logoutBtn = document.getElementById("logoutBtn");
    if (logoutBtn) {
        logoutBtn.addEventListener("click", function (e) {
            e.preventDefault();

            // Xóa thông tin đăng nhập
            localStorage.removeItem("username");


            alert("Bạn đã đăng xuất!");
            window.location.href = "login.html";
        });
    }
});
