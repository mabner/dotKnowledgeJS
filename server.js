require('dotenv').config();
require('./config/database');

const cors = require('cors');
const express = require('express'),
	swaggerUi = require('swagger-ui-express'),
	swaggerFile = require('./swagger.json');
const app = express();
const port = process.env.SERVER_PORT;
const router = require('./api/routes/index');

app.use(express.json());
app.use(cors());

app.use(router);
app.use('/doc', swaggerUi.serve, swaggerUi.setup(swaggerFile));

app.listen(port, () => console.log(`Server listening on port ${port}`));
