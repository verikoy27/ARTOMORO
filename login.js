// Reset Sesi Login
sessionStorage.removeItem("kunciAkses");

// Fungsi Slider Form
function myMenuFunction() {
    var i = document.getElementById("navMenu");
    if (i.className === "nav-menu") {
        i.className += " responsive";
    } else {
        i.className = "nav-menu";
    }
}

var a = document.getElementById("loginBtn");
var b = document.getElementById("registerBtn");
var x = document.getElementById("login");
var y = document.getElementById("register");

function login() {
    x.style.left = "4px";
    y.style.right = "-520px";
    a.className = "btn white-btn";
    b.className = "btn";
    x.style.opacity = 1;
    y.style.opacity = 0;
}

function register() {
    x.style.left = "-510px";
    y.style.right = "5px";
    a.className = "btn";
    b.className = "btn white-btn";
    x.style.opacity = 0;
    y.style.opacity = 1;
}

// --- FUNGSI LOGIN (Masuk Sistem) ---
function prosesLogin() {
    // Tambahan .trim() agar kalau tidak sengaja ter-copy spasi, tetap aman
    var userLogin = document.getElementById("login-user").value.trim();
    var passLogin = document.getElementById("login-pass").value.trim();

    if (userLogin === "" || passLogin === "") {
        tampilkanAlert("Akses ditolak! Mohon lengkapi ID Teknisi dan Password Anda terlebih dahulu.");
        return;
    }

    var usernameBenar = "admin_medik";
    var sandiRahasia = "QXNldEBNZWRpazIwMjYh"; // Ini adalah Aset@Medik2026!

    if (userLogin === usernameBenar && btoa(passLogin) === sandiRahasia) {
        sessionStorage.setItem("kunciAkses", "diizinkan");
        window.location.href = "dashboard.html";
    } else {
        tampilkanAlert("Username atau Password salah! Silakan coba lagi.");
    }
}

// Fungsi Register
function kirimKeWA() {
    var namaDepan = document.getElementById("reg-depan").value;
    var namaBelakang = document.getElementById("reg-belakang").value;
    var idTeknisi = document.getElementById("reg-id").value;

    if (namaDepan === "" || namaBelakang === "" || idTeknisi === "") {
        tampilkanAlert("Mohon isi Nama Depan, Nama Belakang, dan ID Teknisi Anda secara lengkap sebelum mendaftar.");
        return;
    }

    var pesan = "Halo Admin E-MEDIK, saya staf elektromedik baru yang ingin mendaftar akses portal.%0A%0A" +
                "*Nama Lengkap:* " + namaDepan + " " + namaBelakang + "%0A" +
                "*ID Teknisi / Email:* " + idTeknisi + "%0A%0A" +
                "Mohon bantuannya untuk dibuatkan password akun saya. Terima kasih.";

    var nomorWA = "6289614035927"; 
    var urlWA = "https://wa.me/" + nomorWA + "?text=" + pesan;

    window.open(urlWA, "_blank");
}

// Fungsi Notifikasi Popup
function tampilkanAlert(pesan) {
    document.getElementById("alertMessage").innerText = pesan;
    document.getElementById("customAlert").style.display = "flex";
}

function tutupAlert() {
    document.getElementById("customAlert").style.display = "none";
}