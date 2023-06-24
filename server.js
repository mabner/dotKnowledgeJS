require('dotenv').config();
require('./config/database');

const express = require('express'),
	swaggerUi = require('swagger-ui-express'),
	swaggerFile = require('./swagger.json');
const app = express();
const port = process.env.SERVER_PORT;
const indexRoute = require('./api/routes/index');
const articlesRouter = require('./api/routes/articles');
const categoriesRoutes = require('./api/routes/categories');

app.use(express.json());
app.use('/', indexRoute);
app.use('/articles', articlesRouter);
app.use('/categories', categoriesRoutes);
app.use('/swagger', swaggerUi.serve, swaggerUi.setup(swaggerFile));

app.listen(port, () => console.log(`Server listening on port ${port}`));
