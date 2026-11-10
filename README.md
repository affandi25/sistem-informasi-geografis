# Sistem Informasi Geografis (SIG) Dinamika Perubahan Jaringan 4G/5G Jawa Tengah

> **SISTEM INFORMASI GEOGRAFIS DINAMIKA PERUBAHAN KETERSEDIAAN JARINGAN 4G/5G TINGKAT DESA/KELURAHAN DI PROVINSI JAWA TENGAH TAHUN 2024–2025**

Portal visualisasi spasial tematik berbasis Web GIS untuk memetakan perubahan ketersediaan sinyal seluler generasi 4G/LTE dan 5G di 8.333 desa/kelurahan pada 35 Kabupaten/Kota se-Provinsi Jawa Tengah.

---

## 📌 Identitas Penelitian & Penulis
- **Peneliti**: Muhammad Yusuf Affandi
- **Institusi**: Program Studi Teknik Informatika, Fakultas Teknik dan Informatika, Universitas PGRI Semarang (UPGRIS)
- **Korespondensi**: [m.yusufaffandi76@gmail.com](mailto:m.yusufaffandi76@gmail.com)
- **Sumber Data**: Badan Pusat Statistik (BPS) Provinsi Jawa Tengah (*Publikasi 2024 & 2025*)
- **Perangkat Lunak SIG**: Quantum GIS (QGIS) & qgis2web OpenLayers

---

## 🚀 Fitur Utama Web GIS

1. **Peta Perubahan Tunggal (*Single Change Map*)**:
   - Visualisasi kartografis interaktif berbasis OpenLayers yang mengelompokkan 35 kabupaten/kota ke dalam 3 klasifikasi warna:
     - 🟢 **Peningkatan ($\Delta > 0$)**: 15 Daerah (Cilacap, Banjarnegara, Banyumas, Pemalang, dll).
     - ⚪ **Tetap / Stagnan ($\Delta = 0$)**: 11 Daerah (6 Kota Otonom 100% jenuh: Semarang, Surakarta, Salatiga, Magelang, Pekalongan, Tegal + 5 Kabupaten stabil).
     - 🔴 **Penurunan ($\Delta < 0$)**: 9 Kabupaten akibat pengaruh kontur alam perbukitan (Kendal, Temanggung, Blora, Rembang, dll).
2. **Tabel Data Rekapitulasi 35 Kabupaten/Kota**:
   - Dilengkapi fitur pencarian instan (*live search*), filter status tipologi, dan ekspor data tabular ke format **CSV**.
3. **Spatial Inspector Modal**:
   - Dialog interaktif saat baris kabupaten/kota diklik untuk menampilkan metrik desa 2024 vs 2025 serta catatan analisis topografi wilayah.
4. **Studi Kasus Empiris Kabupaten Kendal**:
   - Pembuktian ilmiah penurunan 18 desa 4G disertai lonjakan sinyal pita sempit 2.5G/EDGE (dari 0 ke 20 desa) akibat perambatan sinyal terhalang kontur perbukitan.
5. **Dokumentasi Metodologi & Kajian Pustaka**:
   - Penyajian landasan teori SIG, formula matematis perubahan $\Delta$, serta Diagram Alir Analisis (Gambar 1).

---

## 📂 Struktur Direktori

```text
├── blueprints/                      # Dokumentasi perancangan dan spesifikasi teknis
│   ├── 01-arsitektur-dan-roadmap.md
│   ├── 02-desain-dan-tema-teknologi.md
│   ├── 03-pemetaan-konten-halaman.md
│   └── 04-panduan-integrasi-qgis2web.md
├── home-repair-website-template/    # Direktori sumber aplikasi web
│   ├── index.html                   # Beranda portal (Hero, KPI Metrik, Peta Tematik, Tabel Data)
│   ├── about.html                   # Latar Belakang, Kajian Pustaka, Dataset & Flowchart SIG
│   ├── analisis.html                # Pembahasan Mendalam 3 Tipologi & Studi Kasus Kendal
│   ├── contact.html                 # Rekomendasi Kebijakan, Profil Peneliti & Korespondensi
│   ├── 404.html                     # Halaman status penanganan rute
│   ├── css/
│   │   ├── bootstrap.min.css
│   │   └── style.css                # Desain tema Telecom Blue, Dark Navy & Craft Floor
│   ├── js/
│   │   └── main.js                  # Logika interaktif filter, pencarian, CSV, & modal inspector
│   ├── img/                         # Aset gambar ilmiah, diagram alir, dan latar grid kartografi
│   └── peta/                        # Aplikasi Web GIS interaktif hasil ekspor qgis2web OpenLayers
│       ├── index.html
│       ├── layers/
│       ├── styles/
│       └── resources/
└── README.md
```

---

## 💻 Cara Menjalankan Secara Lokal

Website ini dibangun menggunakan arsitektur web modern statis tanpa memerlukan konfigurasi database server yang rumit:

1. **Clone Repositori**:
   ```bash
   git clone https://github.com/affandi25/sistem-informasi-geografis.git
   cd sistem-informasi-geografis
   ```
2. **Buka dengan Web Server Lokal**:
   - Menggunakan VS Code Live Server: Klik kanan pada `home-repair-website-template/index.html` lalu pilih **Open with Live Server**.
   - Menggunakan Python:
     ```bash
     cd home-repair-website-template
     python -m http.server 8000
     ```
     Kemudian buka peramban web pada alamat `http://localhost:8000`.
   - Atau langsung buka file `home-repair-website-template/index.html` di peramban web modern Anda.

---

## 📜 Sitasi Ilmiah

Jika Anda menggunakan data, visualisasi, atau kode dari repositori ini untuk keperluan penelitian atau akademik, silakan mencantumkan sitasi berikut:

```bibtex
@article{affandi2026sig,
  title   = {Sistem Informasi Geografis Dinamika Perubahan Ketersediaan Jaringan 4G/5G Tingkat Desa/Kelurahan di Provinsi Jawa Tengah Tahun 2024--2025},
  author  = {Affandi, Muhammad Yusuf},
  journal = {Program Studi Teknik Informatika, Fakultas Teknik dan Informatika, Universitas PGRI Semarang},
  year    = {2026}
}
```

---
*Dikembangkan oleh **Muhammad Yusuf Affandi** &bull; Universitas PGRI Semarang (UPGRIS)*

