function checkoutWhatsApp() {
  const keranjang = JSON.parse(localStorage.getItem("keranjang")) || [];
  if (keranjang.length === 0) {
    alert("Keranjang masih kosong!");
    return;
  }

  let pesan = "Halo! Saya mau pesan:\n";
  keranjang.forEach((item) => {
    pesan += `- ${item.nama} x${
      item.jumlah
    } (Rp${item.harga.toLocaleString()})\n`;
  });

  const total = keranjang.reduce(
    (sum, item) => sum + item.harga * item.jumlah,
    0
  );
  const item = { nama, ukuran, harga, gambar, jumlah: 1 };

  pesan += `\nTotal: Rp${total.toLocaleString()}`;

  const encoded = encodeURIComponent(pesan);
  const nomorTujuan = "6281234567890"; // ganti dengan nomor WA kamu
  const url = `https://wa.me/${nomorTujuan}?text=${encoded}`;
  window.open(url, "_blank");
}
function checkoutSimulasi() {
  alert("Terima kasih! Transaksi berhasil.");
  localStorage.removeItem("keranjang");
  updateJumlahKeranjang(); // Reset angka di header
  document.getElementById("keranjang-box").innerHTML =
    "<p>Keranjang kosong.</p>";
}
function tambahKeKeranjang(produk) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  let existing = cart.find(
    (item) => item.id === produk.id && item.ukuran === produk.ukuran
  );

  if (existing) {
    existing.quantity += 1;
  } else {
    produk.quantity = 1;
    cart.push(produk);
  }

  localStorage.setItem("cart", JSON.stringify(cart));
  updateCartCount(); // ⬅ update angka setelah nambah
}
const item = {
  nama: "Kue Coklat Lumer",
  ukuran: ukuran,
  harga: harga,
  jumlah: 1,
  gambar: "Img_1.jpg", // tambahkan path gambar produk
};
keranjang.forEach((item, index) => {
  const produk = document.createElement("div");
  produk.classList.add("keranjang-item");
  produk.innerHTML = `
    <img src="${item.gambar}" alt="${item.nama}" class="gambar-produk"/>
    <div class="detail">
      <h4>${item.nama}</h4>
      <p>Ukuran: ${item.ukuran}</p>
      <p>Harga: Rp ${item.harga.toLocaleString()}</p>
      <p>Jumlah: ${item.jumlah}</p>
    </div>
    <div class="aksi">
      <button onclick="kurangi(${index})">-</button>
      <button onclick="tambah(${index})">+</button>
      <button onclick="hapus(${index})">🗑️</button>
    </div>
  `;
  container.appendChild(produk);
});
