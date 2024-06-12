'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        return queryInterface.bulkInsert('Karyawans', [
            {
                name: 'Habib Rahmat',
                id_jabatan: 1,
                age: 26,
                gender: 'L',
                tanggal_lahir: '1994-06-22',
                alamat: 'Jl. Alhambra',
                createdAt: new Date(),
                updatedAt: new Date(),
            },
        ]);
    },

    async down(queryInterface, Sequelize) {
        return queryInterface.bulkDelete('Karyawans', null, {});
    },
};
