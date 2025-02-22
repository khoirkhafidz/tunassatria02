function toggleContent1() {
    document.getElementById('visi').style.display = 'block';  // Menampilkan konten "Visi dan Misi"
    document.getElementById('pengurus').style.display = 'none';   // Menyembunyikan "Struktur Kepengurusan"

    document.querySelectorAll('.tab-button')[0].classList.add('active');   // Mengaktifkan tombol pertama
    document.querySelectorAll('.tab-button')[1].classList.remove('active'); // Menonaktifkan tombol kedua
}
function toggleContent2() {
    document.getElementById('visi').style.display = 'none';   // Menyembunyikan "Visi dan Misi"
    document.getElementById('pengurus').style.display = 'block';  // Menampilkan "Struktur Kepengurusan"

    document.querySelectorAll('.tab-button')[0].classList.remove('active'); // Menonaktifkan tombol pertama
    document.querySelectorAll('.tab-button')[1].classList.add('active');   // Mengaktifkan tombol kedua
}
function toggleMenu() {
    let nav = document.querySelector(".navlist");
    nav.classList.toggle("show");
    console.log("Hamburger diklik!"); // Debugging
}
