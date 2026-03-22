const express = require('express');
const router = express.Router();
require('dotenv').config();

const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = require('twilio')(accountSid, authToken);


const sendSMS = async (to, body, res) => {
    try {
        const msg = await client.messages.create({
            from: process.env.TWILIO_PHONE_NUMBER,
            to,
            body
        });
        res.status(200).json({ success: true, sid: msg.sid });
    } catch (error) {
        console.error('Error sending SMS:', error);
        res.status(500).json({ success: false, error: error.message });
    }
};


router.post('/sms/assigned', async (req, res) => {
    const { to } = req.body;
    if (!to) return res.status(400).json({ error: 'Phone number is required.' });

    const message = "✅ Your order has been assigned to a delivery personnel.";
    sendSMS(to, message, res);
});


router.post('/sms/accepted', async (req, res) => {
    const { to } = req.body;
    if (!to) return res.status(400).json({ error: 'Phone number is required.' });

    const message = "✅ Your order has been accepted by the restaurant.";
    sendSMS(to, message, res);
});


router.post('/sms/payment', async (req, res) => {
    const { to } = req.body;
    if (!to) return res.status(400).json({ error: 'Phone number is required.' });

    const message = "✅ Payment successful! Thank you for your order.";
    sendSMS(to, message, res);
});

module.exports = router;
//use the till
