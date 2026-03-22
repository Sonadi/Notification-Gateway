require('dotenv').config();

const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;

const client = require('twilio')(accountSid, authToken);

const sendSMS = async (body) => {
    let msgOptions = {
        from: process.env.TWILIO_PHONE_NUMBER, // Your Twilio number
        to: process.env.TO_NUMBER,             // Recipient number in +947... format
        body
    };
    try {
        const message = await client.messages.create(msgOptions);
        console.log("Message sent:", message.sid);
    } catch (error) {
        console.error("Error sending SMS:", error);
    }
};

sendSMS('Testing from Twilio account');
//