# Blueprint 02: Desain Visual, Tema Telekomunikasi & Spesifikasi Banner Hero

## 1. Konsep Visual & Karakter Desain
Mengganti total visual template lama (*Home Repair*) menjadi portal **Geospasial Telekomunikasi & Riset Digital Modern**. Desain mengusung estetika *enterprise GIS*, berwibawa secara akademis, memiliki kontras tinggi untuk keterbacaan data, dan mengadopsi palet warna resmi dari legenda peta penelitian.

---

## 2. Palet Warna (Color System) & Semiotika Kartografis

Palet warna diadaptasi langsung dari sistem klasifikasi simbol peta QGIS pada Gambar 2 artikel:

| Token / Elemen | Warna | Kode Hex | Filosofi & Penerapan di Antarmuka |
| :--- | :--- | :--- | :--- |
| **Peningkatan ($\Delta > 0$)** | **Emerald Green** | `#10B981` | Mewakili 15 Kab/Kota dengan pertumbuhan desa bersinyal 4G/5G. Digunakan untuk badge, progress bar, border kartu peningkatan. |
| **Tetap ($\Delta = 0$)** | **Slate Grey** | `#94A3B8` | Mewakili 11 Kab/Kota tanpa perubahan jumlah (termasuk 6 kota saturasi 100%). Digunakan untuk status stagnan/netral. |
| **Penurunan ($\Delta < 0$)** | **Signal Crimson** | `#EF4444` | Mewakili 9 Kabupaten dengan penurunan tangkapan sinyal 4G/5G akibat topografi berbukit. Digunakan untuk alert evaluasi. |
| **Brand Primary** | **Electric Telecom Blue**| `#0066FF` | Identitas utama portal telekomunikasi, tombol primer, link aktif, dan aksen glow. |
| **Navy Dark Surface** | **Deep Space Navy** | `#0B132B` | Background Hero section, header card telemetri, dan footer. Memberikan kontras tinggi layaknya *control room dashboard*. |
| **Secondary Background** | **Soft Cloud White** | `#F8FAFC` | Latar belakang seksi tabel data dan artikel bacaan agar nyaman bagi mata pembaca. |
| **Text Primary** | **Slate Charcoal** | `#1E293B` | Warna teks utama agar kontras dan mudah dibaca pada latar terang. |

---

## 3. Spesifikasi Hero Banner (Tower BTS)

Sesuai instruksi khusus pengguna: **"Hero berisikan gambar / banner tower BTS"**.

### A. Konsep Visual Banner Hero
- **Aset Gambar**: Menara pemancar telekomunikasi (Base Transceiver Station / BTS) berskala makro dengan struktur kisi baja (*lattice tower*), antena sektoral nirkabel, dan latar belakang langit dinamis (perpaduan senja modern atau langit biru bergradasi perbukitan).
- **Teknik Tampilan**:
  - Foto BTS beresolusi tinggi ditempatkan sebagai latar belakang hero (*background-image cover*) atau gambar ilustrasi berbingkai modern dengan efek *ambient drop-shadow* dan *glassmorphism border*.
  - Dilengkapi *overlay gradient* (`linear-gradient(to right, rgba(11, 19, 43, 0.95) 0%, rgba(15, 23, 42, 0.8) 50%, rgba(30, 58, 138, 0.6) 100%)`) agar teks judul, badge riset, dan tombol aksi tetap terbaca dengan kontras sempurna (rasio kontras WCAG AAA).

### B. Komposisi Tata Letak Hero (Centered / Tengah)
Sesuai permintaan khusus: **"Hero cukup judul artikelnya saja di posisi tengah"**.
- **Perataan**: `text-center` (di tengah secara horizontal dan vertikal).
- **Latar Belakang**: Gambar Banner Menara BTS telekomunikasi dengan *overlay gradient* elegan semi-gelap (`rgba(11, 19, 43, 0.75)` hingga `rgba(15, 23, 42, 0.85)`).
- **Elemen Teks**:
  - *Pill Badge*: `<span class="badge bg-primary px-3 py-2 rounded-pill"><i class="fa fa-broadcast-tower me-2"></i>SISTEM INFORMASI GEOGRAFIS</span>`
  - *Headline Utama*:
    # SISTEM INFORMASI GEOGRAFIS DINAMIKA PERUBAHAN KETERSEDIAAN JARINGAN 4G/5G TINGKAT DESA/KELURAHAN DI PROVINSI JAWA TENGAH TAHUN 2024–2025
  - *Kredit Penulis (Opsional Sub-text Ringkas)*:
    Muhammad Yusuf Affandi &bull; Program Studi Teknik Informatika, Universitas PGRI Semarang
  - *Tombol Aksi Cepat (Centered CTA)*:
    `[ <i class="fa fa-map-marked-alt me-2"></i>Eksplorasi Peta Perubahan ]` &bull; `[ <i class="fa fa-table me-2"></i>Tabel Rekap Data ]`

---

## 4. Tipografi & Ikonografi

### A. Tipografi
- **Headings (`h1` - `h6`)**: `Poppins`, sans-serif (berat `600` dan `700`) — mencerminkan karakter teknologi modern, terstruktur, dan tegas.
- **Body & Paragraf**: `Roboto`, sans-serif (berat `400` dan `500`) — standar keterbacaan tinggi untuk jurnal ilmiah dan tabel data.
- **Angka Metrik**: Tabular Numbers (`font-variant-numeric: tabular-nums`) agar angka-angka statistik tersusun rapi.

### B. Pemetaan Ikon Baru (FontAwesome 5 & Bootstrap Icons)

| Objek Konteks | Kelas Ikon | Makna Visual |
| :--- | :--- | :--- |
| **Tower BTS** | `fa fa-broadcast-tower` | Menara pemancar & infrastruktur seluler |
| **Sinyal 4G/5G** | `fa fa-signal` / `fa fa-wifi` | Kualitas dan jangkauan koneksi internet |
| **Peta Spasial** | `fa fa-map-marked-alt` | Analisis geospasial QGIS & batas wilayah |
| **Wilayah Perbukitan** | `fa fa-mountain` | Kendala kontur topografi & blind spot |
| **Pusat Perkotaan** | `fa fa-city` | Area jenuh sinyal 100% |
| **Data BPS** | `fa fa-database` | Data sekunder BPS Provinsi Jawa Tengah |
| **Formulasi Selisih** | `fa fa-calculator` | Perhitungan $\Delta = Desa_{2025} - Desa_{2024}$ |
| **Rekomendasi Kebijakan** | `fa fa-lightbulb` | Solusi *microcell* & audit krisis sinyal |
