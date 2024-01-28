# Kalkulembu

## Apa Itu Kalkulembu?
Kalkulembu adalah sebuah aplikasi Android yang dapat digunakan untuk _monitoring_ sapi di peternakan. Kalkulembu dikembangkan dalam rangka Capstone Project DTETI FT UGM tahun 2023.

## Fitur-Fitur pada Web App Kalkulembu

### Monitoring sapi di peternakan
- Melihat data sapi di tiap peternakan:
  - Banyak sapi
  - Nama sapi
  - Foto sapi
  - Bobot sapi
  - Kondisi kesehatan sapi
  - Jenis kelamin sapi
- Melihat grafik pertumbuhan setiap sapi melalui bobot badannya.

### Manajemen akun dan profil pengguna
- Log in/log out akun pengguna
- Mengedit data profil pengguna: foto profil, nama, nomor telepon
- Berganti ke peternakan lain yang dimiliki pengguna

## Lain-lain
- Jenis rilis: _Preview_
- Tanggal rilis: 17 November 2023 (aplikasi di-_build_ kembali untuk keperluan dokumentasi pada tanggal 28 Januari 2024)
- Versi: 1.0.0 (versi Capstone Expo)
- Platform: Google Chrome
- Tech stack: 
![React JS](https://img.shields.io/badge/-ReactJs-61DAFB?logo=react&logoColor=white&style=for-the-badge)
- Referensi ke _backend_:
  - [Repo GitHub](https://github.com/Capstone-B-14/kalkulembu-be-main)
  - [Vercel](https://kalkulembu-be-main.vercel.app/)

## Menjalankan Aplikasi
### _User account credentials_
Karena limitasi aplikasi saat Capstone Expo, pengguna hanya dapat masuk ke dua akun _placeholder_:
- Akun peternak
  - Email: farmer@example.com
  - Password: 12345678
- Akun admin
  - Email: admin@example.com
  - Password: 12345678

### Menjalankan _Local Development Server_ Menggunakan Web Browser Google Chrome
_Prerequisites_:
- Node.js + npm [(Tutorial)](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm/)

Langkah-langkah:
1. _Clone_ repository ini ke komputer lokal Anda.
2. Buka terminal di folder _root_ dari hasil _clone_ di komputer Anda, kemudian jalankan ```npm install```
3. Setelah langkah 2 selesai, jalankan ```npm run dev```
4. Apabila server berhasil maka akan muncul pesan ```Server started on http://localhost:3000```
5. Aplikasi akan terbuka.

## _Troubleshooting_
#### Apakah aplikasi ini tidak dapat dijalankan di komputer Anda?
Biasanya, masalah ini disebabkan oleh _package_ yang belum ter-_install_ ataupun belum ter-_update_. Jalankan ```npm install``` di terminal Anda untuk meng-_install_ dan meng-_update_ aplikasi.


Tim B_14