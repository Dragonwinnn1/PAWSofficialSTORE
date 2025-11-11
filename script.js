// Struktur data produk dengan kategori, detail, dan STOK
const daftarProdukLengkap = [
    // Tambahkan properti 'stok' ke setiap item
    { id: 1, nama: "Urban Mischief Tee", harga: 249000, gambar: "https://github.com/Dragonwinnn1/PAWSofficialSTORE/blob/main/WSA.jpg?raw=true", kategori: "new-drop,sale,kaos", spesifikasi: "Cotton Combed 30s, Sablon Plastisol, Regular Fit.", deskripsi: "Kaos perdana dari koleksi 'Concrete Jungle'. Desain minimalis namun penuh makna.", stok: 15 },
    { id: 2, nama: "Black & White Anarchy Hoodie", harga: 489000, gambar: "distro-kaos-02.jpg", kategori: "sale,kaos", spesifikasi: "Fleece Tebal 280gsm, Sablon Discharge, Oversize Fit.", deskripsi: "Hoodie tebal dengan artwork kontras, cocok untuk cuaca dingin perkotaan. SALE HINGGA AKHIR BULAN!", stok: 8 },
    { id: 3, nama: "CARGO PANTS BLACK V3", harga: 399000, gambar: "https://github.com/Dragonwinnn1/PAWSofficialSTORE/blob/main/WSA1.jpg?raw=true", kategori: "new-drop,celana", spesifikasi: "Material Twill Premium, 6 Pocket Design, Slim Tapered.", deskripsi: "Celana kargo versi ketiga, perbaikan dari segi material dan potongan. Wajib punya!", stok: 22 },
    { id: 4, nama: "WINDBREAKER V2 Limited", harga: 650000, gambar: "distro-jaket-04.jpg", kategori: "sale,jaket", spesifikasi: "Parachute Waterproof, Mesh Lining, Adjustable Hoodie.", deskripsi: "Jaket anti air dan angin. Stok terbatas, diskon 20% khusus minggu ini!", stok: 5 },
    { id: 5, nama: "SNAPBACK ORIGINAL Logo", harga: 199000, gambar: "distro-topi-05.jpg", kategori: "new-drop,aksesoris", spesifikasi: "Polyester Drill, Bordir 3D, Adjustable Strap.", deskripsi: "Topi klasik dengan logo ikonik PAWS. Sempurnakan penampilan jalanan Anda.", stok: 30 },
    { id: 6, nama: "CREWNECK GOTHIC", harga: 379000, gambar: "distro-crewneck-06.jpg", kategori: "sale,kaos", spesifikasi: "Cotton Fleece, Print DTF, Relaxed Fit.", deskripsi: "Crewneck dengan sentuhan font gothic yang edgy. Diskon khusus untuk pembeli pertama.", stok: 12 },
    { id: 7, nama: "WASHED DENIM JACKET", harga: 729000, gambar: "distro-denim-07.jpg", kategori: "new-drop,jaket", spesifikasi: "Denim 14oz Washed, Jahitan Rantai, Hardware Kuningan.", deskripsi: "Jaket denim dengan efek washed yang unik. Kualitas berani, harga pantas.", stok: 7 },
    { id: 8, nama: "STRIPED LONG SLEEVE V2", harga: 299000, gambar: "distro-lenganpanjang-08.jpg", kategori: "new-drop,sale,kaos", spesifikasi: "Cotton Rib Knit, Long Sleeve, Slim Fit.", deskripsi: "Kaos lengan panjang bergaris, desain abadi yang selalu relevan.", stok: 18 }
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


// Menggunakan array of objects untuk keranjang agar bisa melacak kuantitas
let keranjang = []; 
const kontainerProduk = document.getElementById('daftar-produk');
const koleksiTitle = document.getElementById('koleksi-title');
const filterBar = document.getElementById('filter-bar'); 
const filterHargaSelect = document.getElementById('filter-harga'); 
const filterKategoriSelect = document.getElementById('filter-kategori'); 

// --- PENGATURAN BACKGROUND HERO SECTION ---
const heroSection = document.getElementById('hero');

// GANTI BACKGROUND DI SINI: Cukup ganti link/nama filenya di array ini
const bgImages = [
    'hero-distro.jpg', 
    'https://example.com/link-background-anda-1.jpg', // Contoh link eksternal
    'https://example.com/link-background-anda-2.jpg' 
]; 

let currentBgIndex = 0;

function gantiBackground() {
    currentBgIndex = (currentBgIndex + 1) % bgImages.length;
    heroSection.style.backgroundImage = `url('${bgImages[currentBgIndex]}')`;
    console.log(`Background diubah menjadi: ${bgImages[currentBgIndex]}`);
}

// Inisialisasi background awal
if (heroSection.style.backgroundImage === "") {
    heroSection.style.backgroundImage = `url('${bgImages[0]}')`;
}
// --- AKHIR PENGATURAN BACKGROUND ---


// --- Fungsi Utama untuk Menampilkan Konten ---
function tampilkanProduk(filterKategoriAwal = 'new-drop') {
    kontainerProduk.innerHTML = ''; // Kosongkan
    
    // Tentukan nilai filter dari dropdown
    const filterHargaMin = parseInt(filterHargaSelect ? filterHargaSelect.value : 0) || 0;
    const filterKategoriLain = filterKategoriSelect ? filterKategoriSelect.value : 'all';
    
    // Sembunyikan/Tampilkan Filter Bar
    if (filterKategoriAwal === 'artikel') {
        kontainerProduk.style.display = 'block'; // Non-grid
        kontainerProduk.innerHTML = artikelContent;
        koleksiTitle.textContent = 'ARTIKEL & OPINI';
        if(filterBar) filterBar.style.display = 'none'; 
        return;
    } 
    
    if(filterBar) filterBar.style.display = 'flex'; // Tampilkan Filter Bar
    kontainerProduk.style.display = 'grid'; // Kembali ke grid
    
    // 1. Filter Kategori Awal (NEW DROP/SALE/ALL)
    let produkUntukDitampilkan;
    if (filterKategoriAwal === 'new-drop') {
        // HANYA produk yang memiliki kategori 'new-drop'
        produkUntukDitampilkan = daftarProdukLengkap.filter(p => p.kategori.includes('new-drop'));
        koleksiTitle.textContent = 'NEW DROP EXCLUSIVE';
    } else if (filterKategoriAwal === 'sale') {
        // HANYA produk yang memiliki kategori 'sale'
        produkUntukDitampilkan = daftarProdukLengkap.filter(p => p.kategori.includes('sale'));
        koleksiTitle.textContent = 'SALE CORNER: UP TO 50%';
    } else {
        // Default: Tampilkan semua
        produkUntukDitampilkan = daftarProdukLengkap;
        koleksiTitle.textContent = 'ALL COLLECTION';
    }
    
    // 2. Terapkan Filter Tambahan (Harga Min dan Kategori Select)
    produkUntukDitampilkan = produkUntukDitampilkan.filter(produk => {
        const passHarga = produk.harga >= filterHargaMin;
        const passKategori = filterKategoriLain === 'all' || produk.kategori.includes(filterKategoriLain);
        return passHarga && passKategori;
    });

    // Tampilkan produk ke DOM
    if (produkUntukDitampilkan.length === 0) {
        kontainerProduk.innerHTML = '<p style="text-align: center; padding: 50px;">Tidak ada produk yang sesuai dengan filter Anda.</p>';
    } else {
        produkUntukDitampilkan.forEach(produk => {
            // Cek kuantitas produk ini di keranjang. Default 0.
            const itemKeranjang = keranjang.find(item => item.id == produk.id);
            const qtyAwal = itemKeranjang ? itemKeranjang.qty : 0;
            const stokSaatIni = produk.stok - qtyAwal; // Stok sisa
            
            // Cek apakah tombol + harus di-disable jika stok habis
            const isStokHabis = stokSaatIni <= 0;

            const item = document.createElement('div');
            item.classList.add('produk-item');
            item.dataset.id = produk.id; 
            item.innerHTML = `
                <img src="${produk.gambar}" alt="${produk.nama}">
                <h3>${produk.nama}</h3>
                <p>Rp ${produk.harga.toLocaleString('id-ID')}</p>
                <p class="stok-display">Stok Sisa: <span style="color: ${isStokHabis ? 'var(--color-accent)' : '#25D366'}; font-weight: 700;">${stokSaatIni}</span></p>
                <div class="qty-control" data-id="${produk.id}">
                    <button class="qty-btn" data-action="minus" ${qtyAwal === 0 ? 'disabled' : ''}>-</button>
                    <span class="qty-display" id="qty-display-${produk.id}">${qtyAwal}</span>
                    <button class="qty-btn" data-action="plus" ${isStokHabis ? 'disabled' : ''}>+</button>
                </div>
            `;
            kontainerProduk.appendChild(item);
        });
        tambahEventListenerQty();
        tambahEventListenerItemProduk(); // Listener untuk pop-up detail
    }
}

// --- Fungsi Keranjang & Checkout ---

/**
 * Mengubah kuantitas item di keranjang.
 */
function ubahKuantitasKeranjang(idProduk, action) {
    const produkDipilih = daftarProdukLengkap.find(p => p.id == idProduk);
    if (!produkDipilih) return;
    
    const index = keranjang.findIndex(item => item.id == idProduk);
    let currentQty = index !== -1 ? keranjang[index].qty : 0;
    
    if (action === 'plus') {
        // Cek Stok sebelum menambah
        if (currentQty < produkDipilih.stok) {
            currentQty++;
        } else {
            alert(`Stok produk ${produkDipilih.nama} hanya tersisa ${produkDipilih.stok}!`);
            return;
        }
    } else if (action === 'minus' && currentQty > 0) {
        currentQty--;
    } else {
        return; 
    }

    if (currentQty > 0) {
        if (index === -1) {
            // Tambahkan item baru
            keranjang.push({ ...produkDipilih, qty: currentQty });
        } else {
            // Update kuantitas item yang sudah ada
            keranjang[index].qty = currentQty;
        }
    } else {
        // Hapus item jika kuantitasnya 0
        if (index !== -1) {
            keranjang.splice(index, 1);
        }
    }
    
    // Refresh tampilan produk (untuk update stok display)
    tampilkanProduk(koleksiTitle.textContent.includes('NEW DROP') ? 'new-drop' : (koleksiTitle.textContent.includes('SALE') ? 'sale' : 'all'));
    updateKeranjangUI();
}

function tambahEventListenerQty() {
    const qtyControls = document.querySelectorAll('.qty-control');
    qtyControls.forEach(control => {
        // Hapus listener lama jika ada
        const plusBtn = control.querySelector('[data-action="plus"]');
        const minusBtn = control.querySelector('[data-action="minus"]');

        if (plusBtn) plusBtn.onclick = null;
        if (minusBtn) minusBtn.onclick = null;

        control.querySelectorAll('.qty-btn').forEach(button => {
            button.onclick = (e) => {
                e.stopPropagation(); 
                const id = control.getAttribute('data-id');
                const action = button.getAttribute('data-action');
                ubahKuantitasKeranjang(id, action);
                // Update modal cart jika terbuka
                const cartModal = document.getElementById('cart-modal');
                if(cartModal && cartModal.style.display === "block") {
                    tampilkanDetailKeranjang();
                }
            };
        });
    });
}


function updateKeranjangUI() {
    const keranjangBtn = document.getElementById('keranjang-btn');
    const totalItem = keranjang.reduce((sum, item) => sum + item.qty, 0);
    keranjangBtn.textContent = `CART (${totalItem})`;
}


function buatTeksPesanan() {
    if (keranjang.length === 0) return "Keranjang Anda kosong.";
    
    let totalHarga = 0;
    let teks = "🛒 PESANAN BARU - PAWS STREETWEAR 🛒\n\n";
    teks += "--- Daftar Item ---\n";
    
    keranjang.forEach(item => {
        const subTotal = item.qty * item.harga;
        totalHarga += subTotal;
        teks += `${item.qty}x ${item.nama} (Subtotal: Rp ${subTotal.toLocaleString('id-ID')})\n`;
    });
    
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
    if (keranjang.length === 0) {
        alert("Keranjang Anda kosong, tidak bisa melakukan checkout.");
        return;
    }
    
    const teksPesanan = buatTeksPesanan();
    const encodedTeks = encodeURIComponent(teksPesanan);
    
    const platform = prompt("Pilih platform untuk order:\n1. WhatsApp\n2. Telegram\n3. Copy Text (untuk IG/Lainnya)\n\nKetik angka 1, 2, atau 3:");
    
    switch (platform) {
        case '1':
            // GANTI DENGAN NOMOR WHATSAPP ANDA
            window.open(`https://wa.me/6281234567890?text=${encodedTeks}`, '_blank');
            break;
        case '2':
            // GANTI DENGAN USERNAME TELEGRAM ANDA
            window.open(`https://t.me/username_telegram_anda?text=${encodedTeks}`, '_blank');
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

// --- Fungsi Modal Keranjang (Cart) ---
const cartModal = document.getElementById('cart-modal');
const cartList = document.getElementById('cart-list');
const cartTotal = document.getElementById('cart-total-price');
const closeCartModal = document.getElementById('close-cart-modal');
const checkoutModalBtn = document.getElementById('checkout-btn-modal');


function tampilkanDetailKeranjang() {
    if(!cartModal) return; 
    
    cartList.innerHTML = '';
    let totalHarga = 0;
    
    if (keranjang.length === 0) {
        cartList.innerHTML = '<p style="text-align: center; padding: 20px;">Keranjang Anda masih kosong.</p>';
        cartTotal.textContent = 'Rp 0';
        checkoutModalBtn.style.display = 'none';
    } else {
        checkoutModalBtn.style.display = 'block';
        keranjang.forEach((item) => {
            const subTotal = item.qty * item.harga;
            totalHarga += subTotal;
            
            const produkAsli = daftarProdukLengkap.find(p => p.id === item.id);
            const isStokHabis = item.qty >= produkAsli.stok; // Stok habis jika qty mencapai batas stok

            const listItem = document.createElement('li');
            listItem.classList.add('cart-item');
            listItem.innerHTML = `
                <div class="cart-item-info">
                    <img src="${item.gambar}" alt="${item.nama}">
                    <div class="cart-item-details">
                        <h4>${item.nama}</h4>
                        <p>Rp ${item.harga.toLocaleString('id-ID')}</p>
                    </div>
                </div>
                <div class="qty-control" data-id="${item.id}" style="width: 150px; margin-right: 20px; border: none;">
                    <button class="qty-btn" data-action="minus" style="padding: 5px 10px; font-size: 14px;" ${item.qty === 1 ? 'disabled' : ''}>-</button>
                    <span class="qty-display" style="font-size: 14px;">${item.qty}</span>
                    <button class="qty-btn" data-action="plus" style="padding: 5px 10px; font-size: 14px;" ${isStokHabis ? 'disabled' : ''}>+</button>
                </div>
                <button class="remove-item-btn" data-id="${item.id}">&times; Hapus</button>
            `;
            cartList.appendChild(listItem);
        });
        
        cartTotal.textContent = `Rp ${totalHarga.toLocaleString('id-ID')}`;
        
        // Tambahkan event listener untuk kontrol kuantitas dan hapus di modal keranjang
        cartList.querySelectorAll('.qty-control').forEach(control => {
            control.querySelectorAll('.qty-btn').forEach(button => {
                button.onclick = (e) => {
                    const id = control.getAttribute('data-id');
                    const action = button.getAttribute('data-action');
                    ubahKuantitasKeranjang(id, action);
                    tampilkanDetailKeranjang(); // Refresh tampilan modal
                };
            });
        });
        
        cartList.querySelectorAll('.remove-item-btn').forEach(button => {
            button.onclick = () => {
                const id = button.getAttribute('data-id');
                // Hapus item dari keranjang dengan mencari index dan splice
                const indexToRemove = keranjang.findIndex(item => item.id == id);
                if (indexToRemove !== -1) {
                    keranjang.splice(indexToRemove, 1);
                }
                updateKeranjangUI();
                tampilkanDetailKeranjang(); // Refresh tampilan modal
            };
        });
    }
    
    cartModal.style.display = "block";
}


if(closeCartModal) {
    closeCartModal.onclick = function() {
        cartModal.style.display = "none";
    }
}

if(checkoutModalBtn) {
    checkoutModalBtn.addEventListener('click', () => {
        handleCheckout();
        cartModal.style.display = "none";
    });
}


// --- Fungsi Modal Detail Produk (pop-up item) ---
const modal = document.getElementById('product-modal');
const modalBody = document.getElementById('modal-body');
const spanClose = document.querySelector('#product-modal .close-button');

function tampilkanDetailProduk(id) {
    const produk = daftarProdukLengkap.find(p => p.id == id);
    if (!produk) return;
    
    // Cek kuantitas saat ini di keranjang
    const itemKeranjang = keranjang.find(item => item.id == id);
    const qtySaatIni = itemKeranjang ? itemKeranjang.qty : 0;
    const stokSaatIni = produk.stok - qtySaatIni;
    const isStokHabis = stokSaatIni <= 0;
    
    modalBody.innerHTML = `
        <img src="${produk.gambar}" alt="${produk.nama}">
        <h3>${produk.nama}</h3>
        <p style="color: var(--color-accent); font-size: 1.8em; font-weight: 700;">Rp ${produk.harga.toLocaleString('id-ID')}</p>
        <p class="stok-display"><strong>Stok Sisa:</strong> <span style="color: ${isStokHabis ? 'var(--color-accent)' : '#25D366'}; font-weight: 700;">${stokSaatIni}</span></p>
        <p><strong>Deskripsi:</strong> ${produk.deskripsi}</p>
        <p><strong>Spesifikasi:</strong> ${produk.spesifikasi}</p>
        <div class="qty-control" data-id="${produk.id}" style="margin-top: 20px;">
            <button class="qty-btn" data-action="minus" style="flex-grow: 1;" ${qtySaatIni === 0 ? 'disabled' : ''}>HAPUS 1 (-)</button>
            <span class="qty-display" id="qty-display-modal-${produk.id}" style="flex-grow: 1;">${qtySaatIni}</span>
            <button class="qty-btn" data-action="plus" style="flex-grow: 1;" ${isStokHabis ? 'disabled' : ''}>TAMBAH 1 (+)</button>
        </div>
    `;
    modal.style.display = "block";
    
    // Tambahkan event listener untuk kontrol kuantitas di dalam modal
    const modalQtyControl = modalBody.querySelector('.qty-control');
    modalQtyControl.querySelectorAll('.qty-btn').forEach(button => {
        button.onclick = (e) => {
            e.stopPropagation();
            const action = button.getAttribute('data-action');
            ubahKuantitasKeranjangModal(produk.id, action);
        };
    });
}

// Fungsi khusus untuk update qty di modal detail produk
function ubahKuantitasKeranjangModal(idProduk, action) {
    // Logika ini sama dengan ubahKuantitasKeranjang, tapi ini khusus untuk update tampilan modal detail
    const produkDipilih = daftarProdukLengkap.find(p => p.id == idProduk);
    if (!produkDipilih) return;
    
    const index = keranjang.findIndex(item => item.id == idProduk);
    let currentQty = index !== -1 ? keranjang[index].qty : 0;
    
    if (action === 'plus') {
        if (currentQty < produkDipilih.stok) {
            currentQty++;
        } else {
            alert(`Stok produk ${produkDipilih.nama} hanya tersisa ${produkDipilih.stok}!`);
            return;
        }
    } else if (action === 'minus' && currentQty > 0) {
        currentQty--;
    } else {
        return;
    }
    
    if (currentQty > 0) {
        if (index === -1) {
            keranjang.push({ ...produkDipilih, qty: currentQty });
        } else {
            keranjang[index].qty = currentQty;
        }
    } else {
        if (index !== -1) {
            keranjang.splice(index, 1);
        }
    }

    // Update tampilan kuantitas di modal
    const stokSaatIni = produkDipilih.stok - currentQty;
    const isStokHabis = stokSaatIni <= 0;

    document.getElementById(`qty-display-modal-${idProduk}`).textContent = currentQty;
    
    // Update tombol disable/enable di modal
    const modalQtyControl = modalBody.querySelector('.qty-control');
    modalQtyControl.querySelector('[data-action="minus"]').disabled = currentQty === 0;
    modalQtyControl.querySelector('[data-action="plus"]').disabled = isStokHabis;
    modalBody.querySelector('.stok-display').innerHTML = `<strong>Stok Sisa:</strong> <span style="color: ${isStokHabis ? 'var(--color-accent)' : '#25D366'}; font-weight: 700;">${stokSaatIni}</span>`;


    updateKeranjangUI();
    // Refresh tampilan produk di belakang modal (untuk update stok display)
    tampilkanProduk(koleksiTitle.textContent.includes('NEW DROP') ? 'new-drop' : (koleksiTitle.textContent.includes('SALE') ? 'sale' : 'all')); 
}


spanClose.onclick = function() {
    modal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
    if (cartModal && event.target == cartModal) {
        cartModal.style.display = "none";
    }
}

// --- Fungsi Pop-up Banner Awal (sama) ---
const initialPopup = document.getElementById('initial-popup');
const closePopupBtn = document.querySelector('#initial-popup .close-button-popup');
const enterSiteBtn = document.getElementById('enter-site-btn');

function tampilkanPopupAwal() {
    if (!sessionStorage.getItem('popupShown')) {
        document.querySelector('main').style.filter = 'blur(5px)';
        initialPopup.style.display = 'block';
    } else {
        tampilkanProduk('new-drop'); 
    }
}

function sembunyikanPopupAwal() {
    initialPopup.style.display = 'none';
    sessionStorage.setItem('popupShown', 'true'); 
    document.querySelector('main').style.filter = 'none';
    tampilkanProduk('new-drop'); 
}

closePopupBtn.onclick = sembunyikanPopupAwal;
enterSiteBtn.onclick = sembunyikanPopupAwal;


// --- Event Listeners Umum ---

function tambahEventListenerItemProduk() {
    const itemProduk = document.querySelectorAll('.produk-item');
    itemProduk.forEach(item => {
        item.onclick = (e) => {
            // Pastikan klik tidak berasal dari tombol kuantitas
            if (!e.target.closest('.qty-control')) {
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
    tampilkanDetailKeranjang(); // Langsung tampilkan modal keranjang
});

// Event Listener Filter Harga dan Kategori
if (filterHargaSelect) {
    filterHargaSelect.addEventListener('change', () => {
        let currentFilter = 'all';
        if (koleksiTitle.textContent.includes('NEW DROP')) {
            currentFilter = 'new-drop';
        } else if (koleksiTitle.textContent.includes('SALE')) {
            currentFilter = 'sale';
        }
        tampilkanProduk(currentFilter);
    });
}

if (filterKategoriSelect) {
    filterKategoriSelect.addEventListener('change', () => {
        let currentFilter = 'all';
        if (koleksiTitle.textContent.includes('NEW DROP')) {
            currentFilter = 'new-drop';
        } else if (koleksiTitle.textContent.includes('SALE')) {
            currentFilter = 'sale';
        }
        tampilkanProduk(currentFilter);
    });
}


// Jalankan fungsi utama saat halaman dimuat
document.addEventListener('DOMContentLoaded', () => {
    updateKeranjangUI();
    tampilkanPopupAwal(); 
    
    // Inisialisasi background awal
    if (heroSection.style.backgroundImage === "") {
        heroSection.style.backgroundImage = `url('${bgImages[0]}')`;
    }
});
