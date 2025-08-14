document.getElementById("shopMenu").addEventListener("click", function(e) {
    e.preventDefault();
    document.getElementById("dropdownContent").classList.toggle("show");
});

window.addEventListener("click", function(e) {
    if (!e.target.closest(".dropdown")) {
        document.getElementById("dropdownContent").classList.remove("show");
    }
});
