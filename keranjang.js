function tambahKeKeranjang(id, nama, harga, gambar) {
  let keranjang = JSON.parse(localStorage.getItem("keranjang")) || [];

  const index = keranjang.findIndex((item) => item.id === id);
  if (index !== -1) {
    keranjang[index].jumlah += 1;
  } else {
    keranjang.push({ id, nama, harga, gambar, jumlah: 1 });
  }

  localStorage.setItem("keranjang", JSON.stringify(keranjang));
  alert("Produk ditambahkan ke keranjang!");
}

function tampilkanKeranjang() {
  const keranjang = JSON.parse(localStorage.getItem("keranjang")) || [];
  const box = document.getElementById("keranjang-box");
  box.innerHTML = "";

  if (keranjang.length === 0) {
    box.innerHTML = "<p>Keranjang kosong.</p>";
    return;
  }

  let total = 0;

  keranjang.forEach((item, index) => {
    total += item.harga * item.jumlah;
    box.innerHTML += `
      <div class="item-keranjang">
        <img src="${item.gambar}" alt="${item.nama}" />
        <div class="info-item">
          <h3>${item.nama}</h3>
          <p>Rp ${item.harga.toLocaleString()}</p>
          <div class="jumlah">
            <button onclick="ubahJumlah(${index}, -1)">−</button>
            <span>${item.jumlah}</span>
            <button onclick="ubahJumlah(${index}, 1)">+</button>
          </div>
          <button onclick="hapusProduk(${index})" class="hapus-btn">Hapus</button>
        </div>
      </div>
    `;
  });

  box.innerHTML += `
    <div class="total-belanja">
      <h3>Total: Rp ${total.toLocaleString()}</h3>
      <a href="#" class="btn">Checkout</a>
    </div>`;
}

function ubahJumlah(index, delta) {
  let keranjang = JSON.parse(localStorage.getItem("keranjang")) || [];

  keranjang[index].jumlah += delta;

  if (keranjang[index].jumlah <= 0) {
    keranjang.splice(index, 1);
  }

  localStorage.setItem("keranjang", JSON.stringify(keranjang));
  tampilkanKeranjang();
}

function hapusProduk(index) {
  let keranjang = JSON.parse(localStorage.getItem("keranjang")) || [];
  keranjang.splice(index, 1);
  localStorage.setItem("keranjang", JSON.stringify(keranjang));
  tampilkanKeranjang();
}
function updateJumlahKeranjang() {
  const keranjang = JSON.parse(localStorage.getItem("keranjang")) || [];
  const totalJumlah = keranjang.reduce((sum, item) => sum + item.jumlah, 0);
  const elemen = document.getElementById("keranjang-jumlah");
  if (elemen) {
    elemen.textContent = totalJumlah;
  }
}
function tambahKeKeranjang(id, nama, harga, gambar) {
  let keranjang = JSON.parse(localStorage.getItem("keranjang")) || [];

  const index = keranjang.findIndex((item) => item.id === id);
  if (index !== -1) {
    keranjang[index].jumlah += 1;
  } else {
    keranjang.push({ id, nama, harga, gambar, jumlah: 1 });
  }

  localStorage.setItem("keranjang", JSON.stringify(keranjang));
  alert("Produk ditambahkan ke keranjang!");

  updateJumlahKeranjang(); // ✅ Panggil ini setelah tambah
}
function updateJumlahKeranjang() {
  const keranjang = JSON.parse(localStorage.getItem("keranjang")) || [];
  const totalJumlah = keranjang.reduce((sum, item) => sum + item.jumlah, 0);
  const elemen = document.getElementById("keranjang-jumlah");
  if (elemen) {
    elemen.textContent = totalJumlah;
  }
}
