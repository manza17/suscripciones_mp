const express = require('express');
const router = express.Router();
const SuscripcionControllers = require('./../controllers/suscripcion.controllers');
const ctrl = new SuscripcionControllers();

router.get('/suscripcion/id/:id',ctrl.getSuscripcion);
router.post('/suscripcion',ctrl.createSuscriptionLink);
router.put('/suscripcion/id/:id',ctrl.updateSuscripcion);
router.post('/webhook',ctrl.webhook);
module.exports = router;
