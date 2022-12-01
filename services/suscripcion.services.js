const axios = require("axios");

class SucripcionService {
    constructor() { }

    async findSuscripcion(id){
        const url = `https://api.mercadopago.com/preapproval/${id}`;

        const subscription = await axios.get(url, {
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${process.env.ACCESS_TOKEN}`
            }
        });

        return subscription.data;
    }

    async createSuscription(body) {
        const url = "https://api.mercadopago.com/preapproval";

        const bodyMp = {
            reason: body.title,
            auto_recurring: {
                frequency: 1,
                frequency_type: "months",
                transaction_amount: body.precio,
                currency_id: "ARS",
                start_date: new Date(body.fecha_inicio).toISOString(),
                end_date: new Date(body.fecha_fin).toISOString()
            },
            back_url: "https://google.com.ar",
            payer_email: "test_user_46945293@testuser.com"
        };

        const subscription = await axios.post(url, bodyMp, {
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${process.env.ACCESS_TOKEN}`
            }
        });

        return subscription.data;
    }

    async updateSuscription(id, precio) {
        const url = `https://api.mercadopago.com/preapproval/${id}`;

        const bodyMp = {
            auto_recurring: {
                transaction_amount: precio,
            }
        };

        const subscription = await axios.put(url, bodyMp, {
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${process.env.ACCESS_TOKEN}`
            }
        });

        return subscription.data;
    }
}

module.exports = SucripcionService;