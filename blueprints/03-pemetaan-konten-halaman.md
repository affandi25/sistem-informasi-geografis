# Blueprint 03: Pemetaan Konten Halaman Berdasarkan Artikel Riset

Dokumen ini memetakan seluruh isi, data, dan narasi dari artikel ilmiah **Muhammad Yusuf Affandi (UPGRIS)** secara terperinci ke dalam setiap komponen halaman website.

---

## 1. Halaman Beranda (`index.html`) — *Executive Dashboard & Peta Interaktif*

Halaman ini berfungsi sebagai portal utama yang menyajikan ringkasan eksekutif, peta perubahan, dan tabel data interaktif.

### A. Topbar & Header
- **Teks Informasi**: *"Publikasi Riset Geospasial: Dinamika Jaringan 4G/5G Desa/Kelurahan Jawa Tengah (2024–2025)"*
- **Afiliasi**: Program Studi Teknik Informatika, Universitas PGRI Semarang (UPGRIS)
- **Akses Langsung**: Tombol tautan ke Peta Tematik & Tabel 35 Kabupaten/Kota.

### B. Hero Section (Banner Menara BTS - Centered Layout)
- **Gambar Background / Visual**: Foto menara pemancar BTS telekomunikasi dengan efek *dark translucent gradient overlay* untuk keterbacaan optimal.
- **Tata Letak**: **Centered (Posisi Tengah)** sesuai permintaan pengguna.
- **Badge Atas**: `<span class="badge bg-primary px-3 py-2 rounded-pill"><i class="fa fa-broadcast-tower me-2"></i>SISTEM INFORMASI GEOGRAFIS</span>`
- **Headline Utama (Tengah)**:
  # SISTEM INFORMASI GEOGRAFIS DINAMIKA PERUBAHAN KETERSEDIAAN JARINGAN 4G/5G TINGKAT DESA/KELURAHAN DI PROVINSI JAWA TENGAH TAHUN 2024–2025
- **Sub-teks Ringkas**:
  Muhammad Yusuf Affandi &bull; Program Studi Teknik Informatika, Universitas PGRI Semarang (UPGRIS)
- **Tombol Navigasi Cepat (Centered CTA)**:
  - `[ <i class="fa fa-map-marked-alt me-2"></i>Buka Peta Perubahan ]` -> lompat ke `#peta-section`
  - `[ <i class="fa fa-table me-2"></i>Lihat Rekap Data 35 Wilayah ]` -> lompat ke `#tabel-section`

### C. Statistik Counter (Facts Section)
Menampilkan 4 kartu indikator utama berbasis data riil artikel:
1. **8.333 Desa**: Total Desa/Kelurahan bersinyal 4G/5G tahun 2025.
2. **+17 Desa**: Pertumbuhan bersih agregat se-Provinsi Jawa Tengah.
3. **15 Kab/Kota**: Wilayah dengan ekspansi jaringan baru (Dipimpin Cilacap & Banjarnegara `+10`).
4. **6 Kota 100%**: Kota otonom dengan cakupan sinyal 4G/5G penuh dan jenuh (Semarang, Solo, Salatiga, Magelang, Pekalongan, Tegal).

### D. Kontainer Peta Tematik Geospasial (`#peta-section`)
- **Judul Bagian**: Peta Dinamika Perubahan Sinyal 4G/5G Jawa Tengah
- **Keterangan Metodologis**: Menampilkan visualisasi peta tematik perubahan hasil olah QGIS (*Single Change Map*) yang efektif menyajikan 3 kondisi spasial tanpa redundansi visual.
- **Visual Peta**:
  - Tampilan Gambar 2 Peta Tematik QGIS resolusi tinggi dengan kemampuan *zoom preview*.
  - Wadah iframe responsif untuk integrasi interaktif `peta/index.html` (Leaflet hasil qgis2web).
- **Legenda Resmi Peta**:
  - 🟩 **Hijau (Peningkatan, $\Delta > 0$)**: 15 Kabupaten/Kota (42,86%)
  - ⬜ **Abu-Abu (Tetap, $\Delta = 0$)**: 11 Kabupaten/Kota (31,43%)
  - 🟥 **Merah (Penurunan, $\Delta < 0$)**: 9 Kabupaten (25,71%)

### E. Tabel Interaktif Rekapitulasi 35 Kabupaten/Kota (`#tabel-section`)
Menampilkan data lengkap dari **Tabel 1** artikel:
- **Fitur Interaktif**:
  - Tombol Filter Cepat: `[Semua (35)]`, `[Peningkatan (15)]`, `[Tetap (11)]`, `[Penurunan (9)]`.
  - Kolom Pencarian Instan: Pengunjung dapat mengetik nama daerah (misal: "Kendal", "Cilacap", "Semarang").
- **Struktur Kolom Tabel**:
  1. No
  2. Kabupaten / Kota
  3. Jumlah Desa 4G/5G (2024)
  4. Jumlah Desa 4G/5G (2025)
  5. Selisih Perubahan ($\Delta$)
  6. Keterangan / Status Tipologi (Badge Berwarna)

### F. Ringkasan 3 Tipologi Wilayah (Features Highlight)
3 kartu informasi ringkas:
1. **Tipologi 1: Peningkatan (Hijau)**: Konsentrasi perluasan terbesar di Jawa Tengah bagian barat & selatan (Cilacap `+10`, Banjarnegara `+10`, Banyumas `+7`, Pemalang `+7`).
2. **Tipologi 2: Tetap/Stagnan (Abu-Abu)**: Saturasi penuh pada 6 kota besar (100% desa terlayani) dan stabilitas infrastruktur pada 5 kabupaten.
3. **Tipologi 3: Penurunan (Merah)**: Penurunan tangkapan sinyal akibat kontur perbukitan (Kendal `-18`, Temanggung `-6`, Blora `-6`). Disertai catatan: *bukan pembongkaran BTS, melainkan sinyal melemah dan beralih ke 2.5G/EDGE*.

---

## 2. Halaman Metodologi & Alur SIG (`about.html`)

Halaman ini menyajikan Bab Latar Belakang, Kajian Pustaka, dan Prosedur Analisis Spasial:

1. **Latar Belakang Penelitian**:
   - Peran krusial 4G/5G dalam ekonomi digital, pendidikan, dan layanan publik.
   - Tantangan bentang alam dan topografi perbukitan di Jawa Tengah (Adrianto & Herlambang, 2022).
   - Kesenjangan infrastruktur antara kota dan desa (Ambadar et al., 2023).
2. **Kajian Teoritis & Perumusan Perubahan**:
   - Pemanfaatan SIG dalam perencanaan jaringan seluler nirkabel (Pangestu & Sumarno, 2023).
   - Rumus matematis deteksi perubahan:
     $$\Delta Desa_{4G/5G} = Desa_{2025} - Desa_{2024}$$
   - Konsep klasifikasi 3 warna tunggal guna menghindari redundansi kartografis.
3. **Data Spasial & Non-Spasial**:
   - Data Spasial: Peta digital batas administrasi 35 Kab/Kota Jawa Tengah (`.shp`).
   - Data Non-Spasial: Data tabular sekunder BPS Provinsi Jawa Tengah tahun 2024 dan 2025 variabel penerimaan sinyal 4G/5G/LTE.
4. **Diagram Alir (Flowchart) Analisis SIG (Gambar 1)**:
   - Diagram langkah kerja: Mulai &rarr; Pengumpulan Data &rarr; Persiapan SHP & Perhitungan Selisih &rarr; Table Join di QGIS &rarr; Visualisasi Layout Tematik &rarr; Selesai.

---

## 3. Halaman Pembahasan 3 Tipologi Spasial (`service.html` / `analisis.html`)

Halaman pembahasan mendalam mengenai dinamika dan kondisi faktual lapangan:

1. **Analisis Tipologi 1: Daerah Peningkatan (15 Kab/Kota - 42,9%)**:
   - Pembahasan daerah yang masih memiliki ruang ekspansi jaringan telekomunikasi.
   - Peringkat penambahan terbesar: Cilacap (+10), Banjarnegara (+10), Banyumas (+7), Pemalang (+7).
   - Penambahan skala kecil-menengah: Boyolali (+4), Wonosobo (+3), Batang (+3), Purworejo (+2), Magelang (+2), Wonogiri (+2), Karanganyar (+2), Demak (+2), Pekalongan (+2), Purbalingga (+1), Tegal (+1).
2. **Analisis Tipologi 2: Daerah Tetap (11 Kab/Kota - 31,4%)**:
   - Karakteristik 6 kota otonom (Kota Magelang, Surakarta, Salatiga, Semarang, Pekalongan, Tegal) yang sudah 100% *saturated*.
   - Karakteristik 5 kabupaten stagnan (Pati, Kudus, Jepara, Kab. Semarang, Brebes) yang memerlukan evaluasi investasi jaringan baru.
3. **Analisis Tipologi 3: Daerah Penurunan & Fenomena Topografi (9 Kab/Kota - 25,7%)**:
   - Pembahasan daerah penurunan: Kendal (-18), Temanggung (-6), Blora (-6), Rembang (-4), Kebumen (-3), Klaten (-1), Sukoharjo (-1), Sragen (-1), Grobogan (-1).
   - **Studi Kasus Kendal (Bukti Empiris Perbukitan)**:
     - Penurunan 18 desa 4G/5G (dari 281 menjadi 263 desa) terbukti berbanding lurus dengan melonjaknya desa yang hanya menerima sinyal lambat (2.5G/EDGE) dari **0 desa (2024)** menjadi **20 desa (2025)**.
     - Penjelasan teknis: Sinyal di kantor desa terhalang kontur alam berbukit dan padatnya trafik pengguna sehingga ponsel otomatis *fallback* ke jaringan pita sempit 2G/EDGE.

---

## 4. Halaman Rekomendasi, Tim Peneliti & Kontak (`contact.html`)

Halaman ini menyajikan simpulan, saran aksi bagi pemangku kepentingan, dan profil peneliti:

1. **Simpulan Ilmiah**:
   - Sintesis temuan 3 tipologi se-Jawa Tengah (15 naik, 11 tetap, 9 turun).
   - Bukti efektivitas visualisasi peta perubahan satu lembar tanpa pemborosan kartografi.
2. **Rekomendasi Kebijakan & Teknis**:
   - **Untuk Pemda & Operator Telekomunikasi**: Prioritas penanganan daerah merah (Kendal, Temanggung, Blora) melalui audit krisis sinyal dan instalasi menara penguat mikro (*microcell / repeater*) untuk menembus halangan kontur alam.
   - **Untuk Riset SIG Selanjutnya**: Pemanfaatan pemodelan elevasi digital (*Digital Elevation Model / DEM*) dan koordinat fisik menara BTS guna pemetaan jangkauan seluler 3 Dimensi.
3. **Profil Penulis / Peneliti**:
   - **Nama**: Muhammad Yusuf Affandi
   - **Program Studi**: Teknik Informatika, Fakultas Teknik dan Informatika
   - **Institusi**: Universitas PGRI Semarang (UPGRIS)
   - **Alamat Kampus**: Jl. Sidodadi Timur, Dokter Cipto No. 24, Semarang
   - **Email / Korespondensi**: `m.yusufaffandi76@gmail.com`
4. **Formulir Kontak / Korespondensi**:
   - Formulir pesan dan pertanyaan untuk diskusi ilmiah atau usulan kolaborasi data telekomunikasi.
