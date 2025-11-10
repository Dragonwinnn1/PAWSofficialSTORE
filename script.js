// Struktur data produk dengan kategori dan detail lebih lengkap
const daftarProdukLengkap = [
    // NEW DROP & SALE
    { id: 1, nama: "Urban Mischief Tee", harga: 249000, gambar: "distro-kaos-01.jpg", kategori: "new-drop,sale", spesifikasi: "Cotton Combed 30s, Sablon Plastisol, Regular Fit.", deskripsi: "Kaos perdana dari koleksi 'Concrete Jungle'. Desain minimalis namun penuh makna." },
    // SALE
    { id: 2, nama: "Black & White Anarchy Hoodie", harga: 489000, gambar: "distro-kaos-02.jpg", kategori: "sale", spesifikasi: "Fleece Tebal 280gsm, Sablon Discharge, Oversize Fit.", deskripsi: "Hoodie tebal dengan artwork kontras, cocok untuk cuaca dingin perkotaan. SALE HINGGA AKHIR BULAN!" },
    // NEW DROP
    { id: 3, nama: "CARGO PANTS BLACK V3", harga: 399000, gambar: "distro-celana-03.jpg", kategori: "new-drop", spesifikasi: "Material Twill Premium, 6 Pocket Design, Slim Tapered.", deskripsi: "Celana kargo versi ketiga, perbaikan dari segi material dan potongan. Wajib punya!" },
    // SALE
    { id: 4, nama: "WINDBREAKER V2 Limited", harga: 650000, gambar: "distro-jaket-04.jpg", kategori: "sale", spesifikasi: "Parachute Waterproof, Mesh Lining, Adjustable Hoodie.", deskripsi: "Jaket anti air dan angin. Stok terbatas, diskon 20% khusus minggu ini!" },
    // NEW DROP
    { id: 5, nama: "SNAPBACK ORIGINAL Logo", harga: 199000, gambar: "distro-topi-05.jpg", kategori: "new-drop", spesifikasi: "Polyester Drill, Bordir 3D, Adjustable Strap.", deskripsi: "Topi klasik dengan logo ikonik PAWS. Sempurnakan penampilan jalanan Anda." },
    // SALE
    { id: 6, nama: "CREWNECK GOTHIC", harga: 379000, gambar: "distro-crewneck-06.jpg", kategori: "sale", spesifikasi: "Cotton Fleece, Print DTF, Relaxed Fit.", deskripsi: "Crewneck dengan sentuhan font gothic yang edgy. Diskon khusus untuk pembeli pertama." },
    // NEW DROP
    { id: 7, nama: "WASHED DENIM JACKET", harga: 729000, gambar: "distro-denim-07.jpg", kategori: "new-drop", spesifikasi: "Denim 14oz Washed, Jahitan Rantai, Hardware Kuningan.", deskripsi: "Jaket denim dengan efek washed yang unik. Kualitas berani, harga pantas." },
    // NEW DROP & SALE
    { id: 8, nama: "STRIPED LONG SLEEVE V2", harga: 299000, gambar: "distro-lenganpanjang-08.jpg", kategori: "new-drop,sale", spesifikasi: "Cotton Rib Knit, Long Sleeve, Slim Fit.", deskripsi: "Kaos lengan panjang bergaris, desain abadi yang selalu relevan." }
];

// Data untuk konten ARTIKEL (Dummy Content)
const artikelContent = `
    <article class="artikel-item" style="max-width: 800px; margin: 0 auto; padding-top: 40px;">
        <h3 style="font-family: var(--font-heading); font-size: 2.5em; letter-spacing: 5px; color: var(--color-accent);">KENAPA STREETWEAR MASIH RELEVAN?</h3>
        <p style="color: #999; font-size: 14px; margin-bottom: 30px;">DIPOSTING 10 OKT 2024 OLEH PAWS STAFF</p>
        <p>Streetwear adalah lebih dari sekadar pakaian, ini adalah pernyataan identitas. Dari awal kemunculannya di skena skate dan hip-hop, streetwear telah berevolusi menjadi kekuatan dominan di dunia mode global. Kami di PAWS berkomitmen untuk menjaga semangat 'DIY' dan 'kualitas berani' tetap hidup dalam setiap desain.</p>
        <p>Tren terbaru menunjukkan pergeseran ke arah 'Utility Core' dan 'Gorpcore', namun fondasi seperti Oversize T-shirt, Cargo Pants, dan jaket fungsional tetap menjadi inti. Kenakan apa yang membuat Anda nyaman dan berani, itulah filosofi kami.</p>
        <img src="hero-distro.jpg" alt="Artikel Image" style="width: 100%; height: auto; margin: 30px 0; border: 2px solid var(--color-accent);">
        <h4 style="font-family: var(--font-body); font-size: 1.5em; color: var(--color-text-light);">Filosofi Desain PAWS</h4>
        <p>Setiap 'drop' koleksi kami selalu diawali dengan riset mendalam mengenai kultur jalanan di berbagai kota. Kami ingin produk PAWS tidak hanya terlihat bagus, tetapi juga memiliki cerita dan ketahanan untuk menemani aktivitas harian Anda yang intens.</p>
    </article>
`;


let keranjang = []; 
const kontainerProduk = document.getElementById('daftar-produk');
const koleksiTitle = document.getElementById('koleksi-title');
const checkoutBtn = document.getElementById('checkout-btn');

// --- PENGATURAN BACKGROUND HERO SECTION (Fokus Anda) ---
const heroSection = document.getElementById('hero');

/**
 * !!! PERHATIAN !!!
 * Ganti nama file gambar di array ini untuk mengubah background hero section.
 * Pastikan file gambar ada di folder yang sama dengan script.js.
 * Jika Anda hanya ingin 1 gambar, biarkan hanya 1 nama di array.
 */
const bgImages = [
    'hero-distro.jpg', 
    'hero-distro-2.jpg', 
    'hero-distro-3.jpg' // Ganti dengan nama file gambar Anda!
]; 

let currentBgIndex = 0;

function gantiBackground() {
    // Fungsi ini akan mengganti background hero ke gambar berikutnya dari array bgImages
    currentBgIndex = (currentBgIndex + 1) % bgImages.length;
    heroSection.style.backgroundImage = `url('${bgImages[currentBgIndex]}')`;
    console.log(`Background diubah menjadi: ${bgImages[currentBgIndex]}`);
}

// Opsional: Untuk mengaktifkan pergantian background otomatis setiap 10 detik,
// hapus tanda komentar (//) pada baris di bawah ini:
// setInterval(gantiBackground, 10000); 

// Inisialisasi background awal (mengambil dari array jika tidak ada di HTML)
if (heroSection.style.backgroundImage === "") {
    heroSection.style.backgroundImage = `url('${bgImages[0]}')`;
}
// --- AKHIR PENGATURAN BACKGROUND ---


// --- Fungsi Utama untuk Menampilkan Konten ---
function tampilkanProduk(filterKategori = 'all') {
    kontainerProduk.innerHTML = ''; // Kosongkan
    let produkUntukDitampilkan;

    if (filterKategori === 'artikel') {
        // Tampilkan konten artikel
        kontainerProduk.style.display = 'block'; // Non-grid
        kontainerProduk.innerHTML = artikelContent;
        koleksiTitle.textContent = 'ARTIKEL & OPINI';
        checkoutBtn.style.display = 'none';
        return;
    } else {
        // Tampilkan konten produk (grid)
        kontainerProduk.style.display = 'grid'; // Kembali ke grid
        checkoutBtn.style.display = keranjang.length > 0 ? 'inline-block' : 'none'; 
        
        if (filterKategori === 'new-drop') {
            produkUntukDitampilkan = daftarProdukLengkap.filter(p => p.kategori.includes('new-drop'));
            koleksiTitle.textContent = 'NEW DROP EXCLUSIVE';
        } else if (filterKategori === 'sale') {
            produkUntukDitampilkan = daftarProdukLengkap.filter(p => p.kategori.includes('sale'));
            koleksiTitle.textContent = 'SALE CORNER: UP TO 50%';
        } else {
            // Default: Tampilkan semua
            produkUntukDitampilkan = daftarProdukLengkap;
            koleksiTitle.textContent = 'ALL COLLECTION';
        }
    }
    
    produkUntukDitampilkan.forEach(produk => {
        const item = document.createElement('div');
        item.classList.add('produk-item');
        item.dataset.id = produk.id; // Tambahkan data-id untuk klik detail
        item.innerHTML = `
            <img src="${produk.gambar}" alt="${produk.nama}">
            <h3>${produk.nama}</h3>
            <p>Rp ${produk.harga.toLocaleString('id-ID')}</p>
            <button class="tambah-keranjang" data-id="${produk.id}">ADD TO CART</button>
        `;
        kontainerProduk.appendChild(item);
    });
    
    tambahEventListenerKeranjang(); 
    tambahEventListenerItemProduk(); // Listener untuk pop-up detail
}

// --- Fungsi Keranjang & Checkout ---
function tambahKeKeranjang(idProduk) {
    const produkDipilih = daftarProdukLengkap.find(p => p.id == idProduk);
    if (produkDipilih) {
        keranjang.push(produkDipilih);
        updateKeranjangUI();
        console.log(`[ADDED]: ${produkDipilih.nama}`); 
        
        if (checkoutBtn.style.display === 'none') {
            checkoutBtn.style.display = 'inline-block';
        }
    }
}

function updateKeranjangUI() {
    const keranjangBtn = document.getElementById('keranjang-btn');
    keranjangBtn.textContent = `CART (${keranjang.length})`;
    
    if (keranjang.length === 0 && koleksiTitle.textContent !== 'ARTIKEL & OPINI') {
        checkoutBtn.style.display = 'none';
    }
}

function buatTeksPesanan() {
    if (keranjang.length === 0) return "Keranjang Anda kosong.";
    
    let totalHarga = 0;
    let teks = "🛒 PESANAN BARU - PAWS STREETWEAR 🛒\n\n";
    teks += "--- Daftar Item ---\n";
    
    // Hitung item yang sama
    const summary = {};
    keranjang.forEach(item => {
        if (!summary[item.nama]) {
            summary[item.nama] = { count: 0, harga: item.harga };
        }
        summary[item.nama].count++;
        totalHarga += item.harga;
    });
    
    for (const nama in summary) {
        const item = summary[nama];
        teks += `${item.count}x ${nama} (Rp ${item.harga.toLocaleString('id-ID')})\n`;
    }
    
    teks += "\n---------------------\n";
    teks += `TOTAL HARGA: Rp ${totalHarga.toLocaleString('id-ID')}\n`;
    teks += "---------------------\n\n";
    teks += "Mohon lengkapi data pemesanan:\n";
    teks += "- NAMA LENGKAP: \n";
    teks += "- ALAMAT LENGKAP: \n";
    teks += "- NO. HP: \n";
    teks += "- METODE PEMBAYARAN: (BCA/Mandiri/Dana)\n\n";
    teks += "Terima kasih telah berbelanja di PAWS!";
    
    return teks;
}

function handleCheckout() {
    const teksPesanan = buatTeksPesanan();
    const encodedTeks = encodeURIComponent(teksPesanan);
    
    const platform = prompt("Pilih platform untuk order:\n1. WhatsApp\n2. Telegram\n3. Copy Text (untuk IG/Lainnya)\n\nKetik angka 1, 2, atau 3:");
    
    switch (platform) {
        case '1':
            // GANTI DENGAN NOMOR WHATSAPP ANDA (Contoh: 6281234567890)
            window.open(`https://wa.me/6281234567890?text=${encodedTeks}`, '_blank');
            break;
        case '2':
            // GANTI DENGAN USERNAME TELEGRAM ANDA (Contoh: @paws_official)
            window.open(`https://t.me/share/url?url=PAWS_ORDER&text=${encodedTeks}`, '_blank');
            break;
        case '3':
            navigator.clipboard.writeText(teksPesanan)
                .then(() => alert("Teks pesanan berhasil disalin ke clipboard! Siap ditempel di IG/Platform lain."))
                .catch(err => console.error('Gagal menyalin teks: ', err));
            break;
        default:
            alert("Pilihan tidak valid.");
            break;
    }
}

// --- Fungsi Modal (Pop-up) Detail Produk ---
const modal = document.getElementById('product-modal');
const modalBody = document.getElementById('modal-body');
const spanClose = document.querySelector('#product-modal .close-button');

function tampilkanDetailProduk(id) {
    const produk = daftarProdukLengkap.find(p => p.id == id);
    if (!produk) return;
    
    modalBody.innerHTML = `
        <img src="${produk.gambar}" alt="${produk.nama}">
        <h3>${produk.nama}</h3>
        <p style="color: var(--color-accent); font-size: 1.8em; font-weight: 700;">Rp ${produk.harga.toLocaleString('id-ID')}</p>
        <p><strong>Deskripsi:</strong> ${produk.deskripsi}</p>
        <p><strong>Spesifikasi:</strong> ${produk.spesifikasi}</p>
        <button class="cta-button tambah-keranjang" data-id="${produk.id}" style="width: 100%; margin-top: 20px;">ADD TO CART</button>
    `;
    modal.style.display = "block";
    tambahEventListenerKeranjang(); 
}

spanClose.onclick = function() {
    modal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

// --- Fungsi Pop-up Banner Awal ---
const initialPopup = document.getElementById('initial-popup');
const closePopupBtn = document.querySelector('#initial-popup .close-button-popup');
const enterSiteBtn = document.getElementById('enter-site-btn');

function tampilkanPopupAwal() {
    if (!sessionStorage.getItem('popupShown')) {
        initialPopup.style.display = 'block';
    }
}

function sembunyikanPopupAwal() {
    initialPopup.style.display = 'none';
    sessionStorage.setItem('popupShown', 'true'); 
}

closePopupBtn.onclick = sembunyikanPopupAwal;
enterSiteBtn.onclick = sembunyikanPopupAwal;
window.onclick = function(event) {
    if (event.target == initialPopup) {
        sembunyikanPopupAwal();
    }
}


// --- Event Listeners Umum ---
function tambahEventListenerKeranjang() {
    const tombolKeranjang = document.querySelectorAll('.tambah-keranjang');
    tombolKeranjang.forEach(button => {
        button.onclick = (e) => { 
            e.stopPropagation();
            const id = e.target.getAttribute('data-id');
            tambahKeKeranjang(id);
        };
    });
}

function tambahEventListenerItemProduk() {
    const itemProduk = document.querySelectorAll('.produk-item');
    itemProduk.forEach(item => {
        item.onclick = (e) => {
            // Pastikan klik tidak berasal dari tombol 'ADD TO CART'
            if (!e.target.classList.contains('tambah-keranjang')) {
                const id = item.dataset.id;
                tampilkanDetailProduk(id);
            }
        };
    });
}

// Navigasi Menu
document.getElementById('menu-new-drop').addEventListener('click', (e) => {
    e.preventDefault();
    tampilkanProduk('new-drop');
});

document.getElementById('menu-sale').addEventListener('click', (e) => {
    e.preventDefault();
    tampilkanProduk('sale');
});

document.getElementById('menu-artikel').addEventListener('click', (e) => {
    e.preventDefault();
    tampilkanProduk('artikel');
});

document.getElementById('keranjang-btn').addEventListener('click', (e) => {
    e.preventDefault();
    tampilkanProduk('all'); 
    if (keranjang.length > 0) {
        alert(`Anda memiliki ${keranjang.length} item di keranjang. Silakan klik CHECKOUT & ORDER di bawah daftar produk.`);
    } else {
        alert("Keranjang Anda masih kosong. Ayo belanja!");
    }
});

checkoutBtn.addEventListener('click', handleCheckout);


// Jalankan fungsi utama saat halaman dimuat
document.addEventListener('DOMContentLoaded', () => {
    tampilkanProduk('new-drop'); // Tampilkan NEW DROP sebagai default
    updateKeranjangUI();
    tampilkanPopupAwal(); 
});
