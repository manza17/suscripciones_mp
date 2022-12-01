const SuscriptionService = require('./../services/suscripcion.services');
const suscriptionService = new SuscriptionService();

class SuscripcionController {
    constructor() {
    }

    async getSuscripcion(req, res, next) {
        try {
            const suscripcion = await suscriptionService.findSuscripcion(req.params.id);
            res.json(suscripcion)
        } catch (error) {
            next(error)
        }
    }

    async createSuscriptionLink(req, res, next) {
        try {
            const suscripcion = await suscriptionService.createSuscription(req.body);
            res.json(suscripcion);
        } catch (error) {
            console.log(error);
            next(error);
        }
    }

    async updateSuscripcion(req, res, next) {
        try {
            const { precio } = req.body;
            const { id } = req.params;
            const suscUpdate = await suscriptionService.updateSuscription(id, precio);
            res.json(suscUpdate);
        } catch (error) {
            console.log(error);
            next(error)
        }
    }

    async webhook(req, res, next){
        try {
            res.status(200).send();
            const body = req.body;
            console.log(body);
        } catch (error) {
            next(error)
        }
    }
}

module.exports = SuscripcionController;