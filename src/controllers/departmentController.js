const { Department } = require('../models');

exports.getAllDepartments = async (req, res) => {
    try {
        const departments = await Department.findAll();
        res.json(departments);
    } catch (error) {
        res.status(500).send(error.message);
    }
};

exports.getByIdDepartment = async (req, res) => {
    try {
        const { id } = req.params;
        const department = await Department.findByPk(id);
        if (department) {
            res.json(department);
        } else {
            res.status(404).send('Department not found');
        }
    } catch (error) {
        res.status(500).send(error.message);
    }
};

exports.createDepartment = async (req, res) => {
    try {
        const { nama_department } = req.body;
        const department = await Department.create({ nama_department });
        res.status(201).json(department);
    } catch (error) {
        res.status(500).send(error.message);
    }
};

exports.updateDepartment = async (req, res) => {
    try {
        const { id } = req.params;
        const { nama_department } = req.body;
        const department = await Department.findByPk(id);
        if (department) {
            department.nama_department = nama_department;
            await department.save();
            res.json(department);
        } else {
            res.status(404).send('Department not found');
        }
    } catch (error) {
        res.status(500).send(error.message);
    }
};

exports.deleteDepartment = async (req, res) => {
    try {
        const { id } = req.params;
        const department = await Department.findByPk(id);
        if (department) {
            await department.destroy();
            res.status(204).send();
        } else {
            res.status(404).send('Department not found');
        }
    } catch (error) {
        res.status(500).send(error.message);
    }
};