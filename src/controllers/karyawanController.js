const { Karyawan } = require('../models');
const { Jabatan } = require('../models');

exports.getAllKaryawans = async (req, res) => {
    try {
        const karyawans = await Karyawan.findAll({
            include: [{ model: Jabatan, attributes: ['nama_jabatan'] }],
        });
        const karyawansWithJabatan = karyawans.map((karyawan) => {
            const karyawasData = karyawan.toJSON();
            const { Jabatan, ...karyawanData } = karyawasData;
            return {
                ...karyawanData,
                nama_jabatan: Jabatan.nama_jabatan,
            };
        });
        res.json(karyawansWithJabatan);
    } catch (error) {
        res.status(500).send(error.message);
    }
};

exports.getByIdKaryawan = async (req, res) => {
    try {
        const { id } = req.params;
        const karyawan = await Karyawan.findByPk(id, {
            include: [{ model: Jabatan, attributes: ['nama_jabatan'] }],
        });
        if (karyawan) {
            const karyawanData = karyawan.toJSON();
            const { Jabatan, ...rest } = karyawanData;
            const karyawanWithJabatan = {
                ...rest,
                nama_jabatan: Jabatan.nama_jabatan,
            };

            res.json(karyawanWithJabatan);
        } else {
            res.status(404).send('Karyawan not found');
        }
    } catch (error) {
        res.status(500).send(error.message);
    }
};

exports.createKaryawan = async (req, res) => {
    try {
        const { name, id_jabatan, age, gender, tanggal_lahir, alamat } =
            req.body;
        const karyawan = await Karyawan.create({
            name,
            id_jabatan,
            age,
            gender,
            tanggal_lahir,
            alamat,
        });
        res.status(201).json(karyawan);
    } catch (error) {
        res.status(500).send(error.message);
    }
};

exports.updateKaryawan = async (req, res) => {
    try {
        const { id } = req.params;
        const { name, id_jabatan, age, gender, tanggal_lahir, alamat } =
            req.body;
        const karyawan = await Karyawan.findByPk(id);
        if (karyawan) {
            karyawan.name = name;
            karyawan.id_jabatan = id_jabatan;
            karyawan.age = age;
            karyawan.gender = gender;
            karyawan.tanggal_lahir = tanggal_lahir;
            karyawan.alamat = alamat;
            await karyawan.save();
            res.json(karyawan);
        } else {
            res.status(404).send('Karyawan not found');
        }
    } catch (error) {
        res.status(500).send(error.message);
    }
};

exports.deleteKaryawan = async (req, res) => {
    try {
        const { id } = req.params;
        const karyawan = await Karyawan.findByPk(id);
        if (karyawan) {
            await karyawan.destroy();
            res.status(204).send();
        } else {
            res.status(404).send('Karyawan not found');
        }
    } catch (error) {
        res.status(500).send(error.message);
    }
};
