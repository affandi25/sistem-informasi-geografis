# Blueprint 01: Arsitektur & Roadmap Perombakan Web GIS

## 1. Identitas & Metadata Penelitian
- **Judul Riset**: Sistem Informasi Geografis Dinamika Perubahan Ketersediaan Jaringan 4G/5G Tingkat Desa/Kelurahan di Provinsi Jawa Tengah Tahun 2024–2025
- **Penulis**: Muhammad Yusuf Affandi
- **Institusi**: Program Studi Teknik Informatika, Fakultas Teknik dan Informatika, Universitas PGRI Semarang (UPGRIS)
- **Korespondensi**: `m.yusufaffandi76@gmail.com`
- **Tipe Website**: Web GIS Portal Riset Geospasial & Publikasi Data Telekomunikasi
- **Nama Branding Web**: **GeoSignal Jateng** (*SIG Ketersediaan Jaringan 4G/5G Jawa Tengah*)
- **Domain Kajian**: 35 Kabupaten/Kota, 8.333 Desa/Kelurahan, Provinsi Jawa Tengah

---

## 2. Struktur Direktori Website

```text
home-repair-website-template/
├── blueprints/                      <-- Dokumentasi Blueprint & Spesifikasi Perombakan (.md)
│   ├── 01-arsitektur-dan-roadmap.md
│   ├── 02-desain-dan-tema-teknologi.md
│   ├── 03-pemetaan-konten-halaman.md
│   └── 04-panduan-integrasi-qgis2web.md
│
├── home-repair-website-template/
│   ├── css/
│   │   ├── bootstrap.min.css
│   │   └── style.css                <-- Tema: Telecom Blue, Dark Navy & Tri-Color Legenda
│   ├── js/
│   │   └── main.js                  <-- Inisialisasi filter tabel, counter animasi, Leaflet embed
│   ├── img/
│   │   ├── hero-tower-bts.jpg       <-- Banner Hero: Menara BTS Telekomunikasi dengan lanskap
│   │   ├── peta-perubahan-jateng.png<-- Peta Tematik QGIS Gambar 2 (High-Res)
│   │   ├── flowchart-analisis.png   <-- Flowchart Metodologi Gambar 1
│   │   └── author-yusuf.jpg         <-- Foto Peneliti (Muhammad Yusuf Affandi)
│   ├── peta/                        <-- Wadah hasil export qgis2web (Leaflet)
│   │   ├── index.html               <-- Web Map interaktif hasil olah QGIS
│   │   ├── data/                    <-- GeoJSON batas 35 Kab/Kota & atribut selisih
│   │   └── css/, js/, images/
│   │
│   ├── index.html                   <-- Portal Utama (Hero BTS, Metrik Ringkas, Peta Tematik, Tabel 35 Kab/Kota)
│   ├── about.html                   <-- Latar Belakang, Kajian Teoritis, & Metodologi Flowchart QGIS
│   ├── analisis.html (service.html) <-- Pembahasan Mendalam 3 Tipologi Wilayah (Meningkat, Tetap, Menurun)
│   ├── contact.html                 <-- Profil Peneliti UPGRIS, Saran Kebijakan, & Kontak Korespondensi
│   └── 404.html                     <-- Halaman Error Not Found bertema Web GIS
```

---

## 3. Struktur Navigasi & Information Architecture (IA)

1. **Header / Navbar Global**:
   - Brand Logo: Ikon Menara Pemancar BTS (`fa-broadcast-tower`) + Teks: **GeoSignal** `<span class="text-primary">Jateng</span>`
   - Menu Navigasi:
     - `Beranda` (`index.html`)
     - `Peta Dinamika` (`index.html#peta-section`)
     - `Tabel Data` (`index.html#tabel-section`)
     - `Metodologi & Data` (`about.html`)
     - `Analisis Tipologi` (`service.html` / `analisis.html`)
     - `Peneliti & Rekomendasi` (`contact.html`)
   - Tombol Aksi Cepat (CTA): `[ <i class="fa fa-map-marked-alt"></i> Eksplorasi Peta ]` mengarah langsung ke kontainer peta interaktif.

2. **Footer Global**:
   - Kolom 1: Ringkasan Platform GeoSignal Jateng, afiliasi Program Studi Teknik Informatika UPGRIS Semarang.
   - Kolom 2: Tautan Cepat halaman riset dan sumber data BPS Jawa Tengah 2024–2025.
   - Kolom 3: Tipologi Kategori Sinyal (Peningkatan: 15 Wilayah, Tetap: 11 Wilayah, Penurunan: 9 Wilayah).
   - Kolom 4: Kontak korespondensi peneliti (`m.yusufaffandi76@gmail.com`).

---

## 4. Roadmap Tahapan Pengerjaan

| Tahap | Fokus Pekerjaan | Detail Tindakan | Output yang Dihasilkan | Status |
| :---: | :--- | :--- | :--- | :---: |
| **Fase 1** | **Blueprint & Konseptual** | Penyesuaian seluruh berkas blueprint dengan artikel riset M. Yusuf Affandi. | 4 berkas Blueprint ter-update & disepakati. | **Selesai** |
| **Fase 2** | **Asset & Style Engine** | Penyiapan banner Tower BTS, integrasi palet warna Telecom Blue + Tri-Color Legenda di `style.css`. | `style.css` terkonfigurasi, aset banner & gambar siap. | **Selesai** |
| **Fase 3** | **Perombakan Beranda (`index.html`)** | Pembangunan Hero Banner Tower BTS (judul terpusat), KPI Counter Stat (+17 Desa, 15 Hijau, 11 Abu, 9 Merah), Embed Peta QGIS (Gbr 2), dan Tabel Dinamis 35 Kab/Kota (filter, live search, CSV, dan Spatial Inspector Modal). | `index.html` operasional penuh. | **Selesai** |
| **Fase 4** | **Halaman Riset & Metodologi (`about.html`)** | Integrasi Bab Latar Belakang, Kajian Teoritis SIG & Formula $\Delta$, serta visual Flowchart Gambar 1 asli. | `about.html` lengkap memuat landasan ilmiah. | **Selesai** |
| **Fase 5** | **Halaman Pembahasan Tipologi (`analisis.html`)** | Pemaparan komparatif 3 Tipologi Wilayah, analisis khusus anomali Kendal (lonjakan EDGE 20 desa), dan mitigasi kontur. | `analisis.html` lengkap dan mendalam. | **Selesai** |
| **Fase 6** | **Halaman Rekomendasi & Peneliti (`contact.html`)** | Pemaparan 2 poin saran kebijakan Pemda/Operator + Peneliti selanjutnya, profil Muhammad Yusuf Affandi, dan kartu kontak. | `contact.html` siap tayang. | **Selesai** |
| **Fase 7** | **Quality Assurance & Ergonomi UI** | Merampingkan navbar dan topbar, validasi responsivitas mobile, pengecekan link navigasi. | Website 100% responsif, rapi, dan siap dipresentasikan. | **Selesai** |
