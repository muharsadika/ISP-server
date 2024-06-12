const express = require('express');
const router = express.Router();
const jabatanController = require('../controllers/jabatanController');

router.get('/', jabatanController.getAllJabatans);
router.get('/:id', jabatanController.getByIdJabatan);
router.post('/', jabatanController.createJabatan);
router.put('/:id', jabatanController.updateJabatan);
router.delete('/:id', jabatanController.deleteJabatan);

module.exports = router;
