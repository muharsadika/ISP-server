const { Jabatan } = require('../models');

exports.getAllJabatans = async (req, res) => {
    try {
        const jabatans = await Jabatan.findAll();
        res.json(jabatans);
    } catch (error) {
        res.status(500).send(error.message);
    }
};

exports.getByIdJabatan = async (req, res) => {
    try {
        const { id } = req.params;
        const jabatan = await Jabatan.findByPk(id);
        if (jabatan) {
            res.json(jabatan);
        } else {
            res.status(404).send('Jabatan not found');
        }
    } catch (error) {
        res.status(500).send(error.message);
    }
};

exports.createJabatan = async (req, res) => {
    try {
        const { id_department, nama_jabatan } = req.body;
        const jabatan = await Jabatan.create({ id_department, nama_jabatan });
        res.status(201).json(jabatan);
    } catch (error) {
        res.status(500).send(error.message);
    }
};

exports.updateJabatan = async (req, res) => {
    try {
        const { id } = req.params;
        const { id_department, nama_jabatan } = req.body;
        const jabatan = await Jabatan.findByPk(id);
        if (jabatan) {
            jabatan.id_department = id_department;
            jabatan.nama_jabatan = nama_jabatan;
            await jabatan.save();
            res.json(jabatan);
        } else {
            res.status(404).send('Jabatan not found');
        }
    } catch (error) {
        res.status(500).send(error.message);
    }
};

exports.deleteJabatan = async (req, res) => {
    try {
        const { id } = req.params;
        const jabatan = await Jabatan.findByPk(id);
        if (jabatan) {
            await jabatan.destroy();
            res.status(204).send();
        } else {
            res.status(404).send('Jabatan not found');
        }
    } catch (error) {
        res.status(500).send(error.message);
    }
};