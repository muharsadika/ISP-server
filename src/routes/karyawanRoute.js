const express = require('express');
const router = express.Router();
const karyawanController = require('../controllers/karyawanController');

router.get('/', karyawanController.getAllKaryawans);
router.get('/:id', karyawanController.getByIdKaryawan);
router.post('/', karyawanController.createKaryawan);
router.put('/:id', karyawanController.updateKaryawan);
router.delete('/:id', karyawanController.deleteKaryawan);

module.exports = router;
