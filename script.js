// Data produk (sesuaikan dengan nama file gambar Anda!)
const daftarProduk = [
    { id: 1, nama: "Urban Mischief", harga: 249000, gambar: "file:///C:/Users/YTC%20COMPUTER/Downloads/WSA.jpg" },
    { id: 2, nama: "Black & White Anarchy", harga: 489000, gambar: "file:///C:/Users/YTC%20COMPUTER/Downloads/WSA1.jpg" },
    { id: 3, nama: "CARGO PANTS BLACK", harga: 399000, gambar: "distro-celana-03.jpg" },
    { id: 4, nama: "WINDBREAKER V2", harga: 650000, gambar: "distro-jaket-04.jpg" },
    { id: 5, nama: "SNAPBACK ORIGINAL", harga: 199000, gambar: "distro-topi-05.jpg" },
    { id: 6, nama: "CREWNECK GOTHIC", harga: 379000, gambar: "distro-crewneck-06.jpg" },
    { id: 7, nama: "WASHED DENIM JACKET", harga: 729000, gambar: "distro-denim-07.jpg" },
    { id: 8, nama: "STRIPED LONG SLEEVE", harga: 299000, gambar: "distro-lenganpanjang-08.jpg" }
];

let keranjang = []; 

function tampilkanProduk() {
    const kontainer = document.getElementById('daftar-produk');
    kontainer.innerHTML = ''; 

    daftarProduk.forEach(produk => {
        const item = document.createElement('div');
        item.classList.add('produk-item');
        item.innerHTML = `
            <img src="${produk.gambar}" alt="${produk.nama}">
            <h3>${produk.nama}</h3>
            <p>Rp ${produk.harga.toLocaleString('id-ID')}</p>
            <button class="tambah-keranjang" data-id="${produk.id}">ADD TO CART</button>
        `;
        kontainer.appendChild(item);
    });
    
    tambahEventListenerKeranjang(); 
}

function tambahKeKeranjang(idProduk) {
    const produkDipilih = daftarProduk.find(p => p.id == idProduk);
    if (produkDipilih) {
        keranjang.push(produkDipilih);
        updateKeranjangUI();
        // Menggunakan console.log atau notifikasi yang lebih "kasar" ala distro
        console.log(`[ADDED]: ${produkDipilih.nama}`); 
        alert(`[ADDED]: ${produkDipilih.nama}`);
    }
}

function updateKeranjangUI() {
    const keranjangBtn = document.getElementById('keranjang-btn');
    keranjangBtn.textContent = `CART (${keranjang.length})`;
}

function tambahEventListenerKeranjang() {
    const tombolKeranjang = document.querySelectorAll('.tambah-keranjang');
    tombolKeranjang.forEach(button => {
        button.addEventListener('click', (e) => {
            e.stopPropagation();
            const id = e.target.getAttribute('data-id');
            tambahKeKeranjang(id);
        });
    });
}

// Jalankan fungsi utama saat halaman dimuat
document.addEventListener('DOMContentLoaded', () => {
    tampilkanProduk(); 
    updateKeranjangUI();
});