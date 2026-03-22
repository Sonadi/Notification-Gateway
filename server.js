const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors'); // import cors package
const notificationRoutes = require('./routes/notificationRoutes');

const app = express();

app.use(cors()); // Allow all origins by default
app.use(bodyParser.json());

app.use('/api/notifications', notificationRoutes);

const PORT = process.env.PORT || 5056;
const server = app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server running on port ${PORT}`);
});

server.setTimeout(50000); // Set timeout to 50 seconds

