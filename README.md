# Aplikasi Manajemen Data Karyawan, Jabatan, dan Department

Aplikasi ini menggunakan Node.js dengan Express sebagai framework web dan Sequelize sebagai ORM untuk mengelola data Karyawan, Jabatan, dan Department dalam sebuah database relasional.

## Instalasi

Pastikan Anda telah menginstal Node.js dan memiliki akses ke database yang akan digunakan (misalnya MySQL, PostgreSQL).

1. Clone repositori ini: ```git clone https://github.com/muharsadika/ISP-server.git```

2. Masuk ke direktori aplikasi: ```cd ISP-server```

3. Install semua dependencies: ```npm install```

4. Konfigurasi database: 
```
{
  "development": {
    "username": "postgres",
    "password": "password",
    "database": "db_immobi",
    "host": "127.0.0.1",
    "dialect": "postgres"
  },
  "test": {
    "username": "root",
    "password": null,
    "database": "database_test",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "production": {
    "username": "root",
    "password": null,
    "database": "database_production",
    "host": "127.0.0.1",
    "dialect": "mysql"
  }
}
```

-   Buat file `.env` di root direktori aplikasi dan tambahkan konfigurasi database Anda:

    ```
    DB_HOST=hostname_database
    DB_USER=username_database
    DB_PASSWORD=password_database
    DB_NAME=nama_database
    ```

5. Jalankan migrasi database (untuk membuat skema tabel):

6. Jalankan aplikasi:

Aplikasi akan berjalan di `http://localhost:3000` secara default.

## Endpoint API

### Karyawan

-   **GET /api/karyawan/**: Mendapatkan daftar semua karyawan.
-   **GET /api/karyawan/:id**: Mendapatkan detail karyawan berdasarkan ID.
-   **POST /api/karyawan/**: Membuat karyawan baru.
-   **PUT /api/karyawan/:id**: Memperbarui informasi karyawan berdasarkan ID.
-   **DELETE /api/karyawan/:id**: Menghapus karyawan berdasarkan ID.

### Jabatan

-   **GET /api/jabatan/**: Mendapatkan daftar semua jabatan.
-   **GET /api/jabatan/:id**: Mendapatkan detail jabatan berdasarkan ID.
-   **POST /api/jabatan/**: Membuat jabatan baru.
-   **PUT /api/jabatan/:id**: Memperbarui informasi jabatan berdasarkan ID.
-   **DELETE /api/jabatan/:id**: Menghapus jabatan berdasarkan ID.

### Department

-   **GET /api/department/**: Mendapatkan daftar semua department.
-   **GET /api/department/:id**: Mendapatkan detail department berdasarkan ID.
-   **POST /api/department/**: Membuat department baru.
-   **PUT /api/department/:id**: Memperbarui informasi department berdasarkan ID.
-   **DELETE /api/department/:id**: Menghapus department berdasarkan ID.
