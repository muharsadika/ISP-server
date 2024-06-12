'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        return queryInterface.bulkInsert('Jabatans', [
            {
                id_department: 4,
                nama_jabatan: 'FullStack Developer',
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                id_department: 4,
                nama_jabatan: 'BackEnd Developer',
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                id_department: 4,
                nama_jabatan: 'FrontEnd Developer',
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                id_department: 2,
                nama_jabatan: 'HRD',
                createdAt: new Date(),
                updatedAt: new Date(),
            },
        ]);
    },

    async down(queryInterface, Sequelize) {
        return queryInterface.bulkDelete('Jabatans', null, {});
    },
};
