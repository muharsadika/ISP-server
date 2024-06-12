'use strict';
module.exports = (sequelize, DataTypes) => {
    const Karyawan = sequelize.define(
        'Karyawan',
        {
            name: DataTypes.STRING,
            id_jabatan: DataTypes.INTEGER,
            age: DataTypes.INTEGER,
            gender: DataTypes.CHAR,
            tanggal_lahir: DataTypes.DATE,
            alamat: DataTypes.TEXT,
        },
        {}
    );
    Karyawan.associate = function (models) {
        Karyawan.belongsTo(models.Jabatan, { foreignKey: 'id_jabatan' });
    };
    return Karyawan;
};
