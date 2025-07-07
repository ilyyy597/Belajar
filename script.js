// Ini adalah file JavaScript Anda
console.log("Website Anda berhasil dimuat!");

// Anda bisa menambahkan interaktivitas di sini, contoh:
document.addEventListener('DOMContentLoaded', () => {
    const header = document.querySelector('header h1');
    header.addEventListener('mouseover', () => {
        header.style.color = 'lightblue';
    });
    header.addEventListener('mouseout', () => {
        header.style.color = 'white';
    });
});
