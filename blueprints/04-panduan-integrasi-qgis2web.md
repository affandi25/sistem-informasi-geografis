# Blueprint 04: Panduan Integrasi Hasil Olah QGIS & qgis2web ke Website

Dokumen panduan teknis untuk mengintegrasikan data spasial dan peta tematik dari QGIS Desktop ke dalam wadah Web GIS `peta/`.

---

## 1. Spesifikasi Data & Layer QGIS

Untuk mereplikasi peta penelitian Gambar 2 pada web ini, layer yang dipersiapkan di QGIS Desktop adalah:
1. **Layer Spasial**: Poligon batas administrasi 35 Kabupaten/Kota di Provinsi Jawa Tengah (`batas_kabkota_jateng.shp`).
2. **Layer Non-Spasial**: Tabel hasil perhitungan selisih data BPS 2024 & 2025 (`tabel_selisih_sinyal.csv`):
   - Kolom atribut: `KAB_KOTA`, `DESA_2024`, `DESA_2025`, `DELTA`, `TIPOLOGI` (Peningkatan / Tetap / Penurunan).
3. **Proses Table Join**:
   - Klik kanan layer SHP &rarr; **Properties** &rarr; **Joins** &rarr; Gabungkan berdasarkan nama Kabupaten/Kota.
4. **Simbologi Kategori (Symbology - Categorized)**:
   - Field nilai: `TIPOLOGI` atau `DELTA`
   - **Peningkatan ($\Delta > 0$)**: Warna `#10B981` (Hijau)
   - **Tetap ($\Delta = 0$)**: Warna `#94A3B8` (Abu-Abu)
   - **Penurunan ($\Delta < 0$)**: Warna `#EF4444` (Merah)

---

## 2. Prosedur Export dengan Plugin qgis2web (Leaflet)

1. Pastikan plugin `qgis2web` sudah terpasang di QGIS Desktop (**Plugins** &rarr; **Manage and Install Plugins**).
2. Buka menu **Web** &rarr; **qgis2web** &rarr; **Create web map**.
3. Pilih opsi **Leaflet** di bagian bawah jendela plugin.
4. Pengaturan yang disarankan:
   - **Layers and Groups**:
     - Centang *Popups* untuk field: `KAB_KOTA`, `DESA_2024`, `DESA_2025`, `DELTA`, dan `TIPOLOGI`.
     - Atur label header popup menjadi rapi (misal: "Jumlah Desa 2024", "Jumlah Desa 2025", "Perubahan (Δ)").
   - **Appearance**:
     - *Add layers list*: Collapsed (memungkinkan pengguna menyalakan/mematikan layer).
     - *Highlight on hover*: Aktifkan (agar poligon menyala saat kursor melintas).
     - *Template*: **Full screen** (karena akan ditampilkan di dalam frame web).
5. Klik tombol **Export** dan simpan hasilnya di direktori lokal.

---

## 3. Penempatan Berkas pada Folder Proyek Website

Setelah proses export selesai, pindahkan seluruh berkas hasil export ke dalam folder:
`home-repair-website-template/peta/`

Struktur folder `peta/`:
```text
peta/
├── index.html       <-- File peta utama dari qgis2web
├── data/            <-- Berkas GeoJSON poligon 35 Kab/Kota
├── css/             <-- Berkas CSS Leaflet dan kontrol
├── js/              <-- Script inisialisasi peta Leaflet & popup
└── images/          <-- Ikon dan marker navigasi peta
```

---

## 4. Mekanisme Dual-View Peta pada Website (`index.html`)

Untuk memastikan pengunjung tetap dapat melihat peta dengan sempurna baik saat offline maupun online:
1. **Mode 1: Peta Tematik QGIS Resolusi Tinggi (Gambar 2 Artikel)**:
   - Menampilkan visual peta tematik resmi hasil layouting QGIS yang dilengkapi legenda standar kartografi.
   - Dilengkapi tombol perbesar (*lightbox modal*) untuk telaah detail perbatasan kabupaten.
2. **Mode 2: Peta Interaktif Leaflet (`<iframe>`)**:
   - Ditautkan ke `peta/index.html` dengan kontainer rasio responsif:
     ```html
     <div class="ratio ratio-16x9 shadow-lg rounded-4 border overflow-hidden" style="min-height: 600px;">
         <iframe src="peta/index.html" title="Peta Interaktif Sinyal 4G/5G Jawa Tengah" frameborder="0" allowfullscreen></iframe>
     </div>
     ```
   - Pengguna dapat melakukan *zoom-in*, *pan*, dan klik pada poligon kabupaten untuk melihat rincian desa 2024 vs 2025 secara instan.
