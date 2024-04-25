const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
require('dotenv').config();

const app = express();

// Enable CORS for all origins
app.use(cors());

// Parse incoming JSON data
app.use(bodyParser.json());

// Use a router for todo endpoints
const authRouter = require('./routes/auth')
const categoryRouter = require('./routes/categories');
const productRouter = require('./routes/product')
const { verify } = require('./middleware/auth');

app.use('/auth', authRouter)
app.use('/categories', verify ,categoryRouter)
app.use('/products', verify, productRouter)


// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server listening on port ${port}`));
