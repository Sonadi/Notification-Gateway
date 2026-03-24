const express = require('express');
const router = express.Router();

// 🔔 Order Assigned
router.post('/assigned', (req, res) => {
    const io = req.app.get("io");

    const message = "✅ Your order has been assigned to a delivery personnel.";

    io.emit("notification", {
        type: "ORDER_ASSIGNED",
        message: message
    });

    res.json({ success: true, message });
});

// 🔔 Order Accepted
router.post('/accepted', (req, res) => {
    const io = req.app.get("io");

    const message = "✅ Your order has been accepted by the restaurant.";

    io.emit("notification", {
        type: "ORDER_ACCEPTED",
        message: message
    });

    res.json({ success: true, message });
});

// 🔔 Payment Success
router.post('/payment', (req, res) => {
    const io = req.app.get("io");

    const message = "✅ Payment successful! Thank you for your order.";

    io.emit("notification", {
        type: "PAYMENT_SUCCESS",
        message: message
    });

    res.json({ success: true, message });
});

module.exports = router;