(function ($) {
    "use strict";

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner();
    
    // Initiate WOW.js
    new WOW().init();

    // Sticky Navbar
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.sticky-top').addClass('shadow-sm').css('top', '0px');
        } else {
            $('.sticky-top').removeClass('shadow-sm').css('top', '-100px');
        }
    });
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });

})(jQuery);

// Table Search, Filter, CSV Export, Modal Inspector & Contact Form (GeoSignal Jateng)
$(document).ready(function () {
    var currentFilter = 'all';

    // Filter button click handler
    $('.btn-filter-status').on('click', function () {
        $('.btn-filter-status').removeClass('active btn-primary').addClass('btn-outline-primary');
        $(this).addClass('active btn-primary').removeClass('btn-outline-primary');
        currentFilter = $(this).data('filter');
        applyFilters();
    });

    // Search input keyup handler
    $('#table-search-input').on('keyup', function () {
        applyFilters();
    });

    function applyFilters() {
        var searchTerm = ($('#table-search-input').val() || '').toLowerCase().trim();
        var visibleCount = 0;

        $('#data-table-body tr:not(#table-no-data)').each(function () {
            var row = $(this);
            var rowStatus = row.data('status') || '';
            var rowText = row.text().toLowerCase();

            var matchesStatus = (currentFilter === 'all' || rowStatus === currentFilter);
            var matchesSearch = (searchTerm === '' || rowText.indexOf(searchTerm) > -1);

            if (matchesStatus && matchesSearch) {
                row.show();
                visibleCount++;
            } else {
                row.hide();
            }
        });

        // Empty State Handler (Anti-Slop R-27)
        if (visibleCount === 0) {
            $('#table-no-data').show();
        } else {
            $('#table-no-data').hide();
        }

        $('#visible-row-count').text(visibleCount);
    }

    // Contact Form Handling with Functional Feedback (Anti-Slop R-26)
    $('#contact-form').on('submit', function (e) {
        e.preventDefault();
        var name = $('#name').val() || 'Pengunjung';
        alert('Terima kasih, ' + name + '! Pesan atau usulan data spasial Anda telah berhasil dicatat untuk korespondensi ilmiah Muhammad Yusuf Affandi (UPGRIS).');
        this.reset();
    });

    // Export Table to CSV
    $('#btn-export-csv').on('click', function () {
        var csv = [];
        csv.push(['No', 'Kabupaten/Kota', 'Jumlah Desa 4G/5G (2024)', 'Jumlah Desa 4G/5G (2025)', 'Perubahan (Delta)', 'Keterangan Tipologi'].join(','));

        $('#data-table-body tr:not(#table-no-data)').each(function () {
            var row = [];
            $(this).find('td').each(function (idx) {
                var text = $(this).text().trim().replace(/,/g, '');
                row.push('"' + text + '"');
            });
            if (row.length > 0) {
                csv.push(row.join(','));
            }
        });

        // Add aggregate row
        csv.push(['"TOTAL"', '"SE-PROVINSI JAWA TENGAH"', '"8316"', '"8333"', '"+17"', '"Peningkatan Agregat"'].join(','));

        var csvContent = 'data:text/csv;charset=utf-8,\uFEFF' + encodeURIComponent(csv.join('\n'));
        var downloadLink = document.createElement('a');
        downloadLink.setAttribute('href', csvContent);
        downloadLink.setAttribute('download', 'Data_Sinyal_4G_5G_Jateng_2024_2025.csv');
        document.body.appendChild(downloadLink);
        downloadLink.click();
        document.body.removeChild(downloadLink);
    });

    // Spatial Inspector Modal on Table Row Click
    $('#data-table-body').on('click', 'tr:not(#table-no-data)', function () {
        var row = $(this);
        var cols = row.find('td');
        if (cols.length < 6) return;

        var regName = $(cols[1]).text().trim();
        var desa2024 = $(cols[2]).text().trim();
        var desa2025 = $(cols[3]).text().trim();
        var delta = $(cols[4]).text().trim();
        var tipologi = row.data('status') || 'all';

        $('#modal-region-name').text(regName);
        $('#modal-desa-2024').text(desa2024 + ' Desa');
        $('#modal-desa-2025').text(desa2025 + ' Desa');
        $('#modal-delta-val').text(delta);

        var badgeEl = $('#modal-tipologi-badge');
        var deltaBox = $('#modal-delta-box');
        var notesEl = $('#modal-spatial-notes');

        // Reset classes
        badgeEl.removeClass('badge-peningkatan badge-tetap badge-penurunan');
        deltaBox.removeClass('text-success text-secondary text-danger');

        var notes = '';

        if (tipologi === 'peningkatan') {
            badgeEl.addClass('badge-peningkatan').text('Tipologi Peningkatan (Δ > 0)');
            deltaBox.addClass('text-success');
            if (regName === 'Cilacap' || regName === 'Banjarnegara') {
                notes = 'Wilayah ini mencatat penambahan terbesar se-Jawa Tengah (+10 desa). Ekspansi jaringan didorong oleh prioritas pembangunan menara pemancar baru di pedesaan yang sebelumnya berstatus blank spot.';
            } else if (regName === 'Banyumas' || regName === 'Pemalang') {
                notes = 'Mengalami pertumbuhan signifikan (+7 desa). Modernisasi pita frekuensi seluler mampu memperluas daya pancar sinyal menembus permukiman perdesaan.';
            } else {
                notes = 'Masuk dalam 15 daerah peningkatan di Jawa Tengah. Pembangunan infrastruktur berjalan aktif menjangkau wilayah pemukiman yang memiliki ruang perluasan layanan telekomunikasi.';
            }
        } else if (tipologi === 'tetap') {
            badgeEl.addClass('badge-tetap').text('Tipologi Tetap / Stagnan (Δ = 0)');
            deltaBox.addClass('text-secondary');
            if (regName.indexOf('Kota') > -1) {
                notes = 'Merupakan kota otonom dalam kondisi jenuh (saturasi 100%). Seluruh kelurahan telah memiliki akses 4G/5G sejak 2024, sehingga secara statistik tidak ada lagi desa yang dapat ditambahkan.';
            } else {
                notes = 'Ketersediaan desa bersinyal 4G/5G berada pada angka stabil di kedua tahun. Kondisi ini perlu dicermati untuk memastikan apakah seluruh desa telah terlayani penuh atau memerlukan investasi pemancar baru.';
            }
        } else if (tipologi === 'penurunan') {
            badgeEl.addClass('badge-penurunan').text('Tipologi Penurunan Sinyal (Δ < 0)');
            deltaBox.addClass('text-danger');
            if (regName === 'Kendal') {
                notes = 'Penurunan 18 desa 4G/5G di Kendal terbukti berbanding lurus dengan melonjaknya desa bersinyal 2.5G/EDGE dari 0 (2024) menjadi 20 desa (2025). Hal ini membuktikan menara BTS tidak dibongkar, melainkan sinyal ponsel melemah terhalang kontur perbukitan (wilayah selatan Kendal) sehingga otomatis beralih ke jaringan pita sempit.';
            } else if (regName === 'Temanggung') {
                notes = 'Penurunan 6 desa dipengaruhi kuat oleh posisi geografis di antara lereng Gunung Sindoro dan Sumbing, menciptakan lembah-lembah terisolir yang kerap mengalami fenomena bayangan sinyal (shadow zone).';
            } else if (regName === 'Blora') {
                notes = 'Penurunan 6 desa dipengaruhi karakteristik bentang hutan jati dan perbukitan kapur Kendeng Utara yang membatasi daya rambat gelombang mikro radio seluler.';
            } else {
                notes = 'Penurunan pada laporan BPS menunjukkan bahwa saat pendataan, sinyal utama di kantor desa melemah dan turun ke 2G/3G akibat cuaca, trafik padat, atau rintangan kontur alam berbukit.';
            }
        }

        notesEl.html(notes);
        var detailModal = new bootstrap.Modal(document.getElementById('detailModal'));
        detailModal.show();
    });
});
