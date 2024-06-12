'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.bulkInsert(
            'Departments',
            [
                {
                    nama_department: 'Business Development',
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    nama_department: 'Finance',
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    nama_department: 'General Affairs',
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    nama_department: 'IT Development',
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
            ],
            {}
        );
    },

    async down(queryInterface, Sequelize) {
        await queryInterface.bulkDelete('Departments', null, {});
    },
};
