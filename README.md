# TRPL C PAGI - Website Politeknik Negeri Batam

Ini adalah website resmi untuk kelas TRPL C PAGI angkatan 2024 di Politeknik Negeri Batam, program Teknologi Rekayasa Perangkat Lunak. Website ini menampilkan informasi tentang program studi, anggota kelas, project, dan lokasi kampus.

## Ringkasan Bagian

- **Home**: Pengenalan kelas TRPL C PAGI dengan bagian hero yang menampilkan foto kelas dan pesan sambutan.
- **Tentang (Prodi & Jurusan)**: Informasi tentang program Teknologi Rekayasa Perangkat Lunak dan jurusan Informatika, termasuk kurikulum, kompetensi lulusan, visi, misi, dan prospek karir.
- **Anggota**: Profil ketua kelas dan anggota dengan foto, kutipan, dan tautan media sosial.
- **Project Kami**: Sorotan project yang telah dikerjakan oleh kelas, termasuk aplikasi web, mobile, dan AI.
- **Lokasi Kampus**: Informasi dan peta kampus Politeknik Negeri Batam.
- **Footer**: Tautan cepat, informasi kontak, dan ikon media sosial.

## Fitur

- Navigasi responsif dengan header tetap dan sidebar yang dapat dibuka/tutup pada layar kecil.
- Scroll halus untuk tautan anchor internal.
- Animasi elemen saat scroll dan saat halaman dimuat menggunakan GSAP dan Animate.css.
- Popup interaktif menggunakan SweetAlert2 untuk pesan sambutan dan update project.
- Efek hover pada tombol, kartu anggota dan project, serta ikon media sosial.

## Teknologi yang Digunakan

- HTML5
- CSS3 dengan framework Tailwind CSS dan gaya kustom
- JavaScript dengan:
  - GSAP (GreenSock Animation Platform) untuk animasi
  - SweetAlert2 untuk popup alert
  - FontAwesome untuk ikon

## Struktur File

- `index.html` - File HTML utama yang berisi struktur dan konten website.
- `css/` - Folder stylesheet termasuk override Tailwind dan animasi kustom.
  - `style.css`
  - `animations.css`
- `js/` - Folder JavaScript untuk interaktivitas dan animasi.
  - `main.js` - Mengatur popup sambutan, scroll halus, dan bayangan header.
  - `sidebar.js` - Mengelola toggle menu sidebar.
  - `gsap-animations.js` - Mengimplementasikan animasi saat scroll dan animasi mengambang.
- `images/` - Berisi foto kelas, anggota, dan visual lainnya.
- `logos/` - Gambar logo dan ikon media sosial.

## Cara Menjalankan

Buka file `index.html` di browser modern untuk melihat website ini.

---

© 2024 TRPL C PAGI - Politeknik Negeri Batam. Hak cipta dilindungi.
