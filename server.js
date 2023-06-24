require('dotenv').config();
require('./config/database');

const express = require('express'),
	swaggerJsdoc = require('swagger-jsdoc'),
	swaggerUi = require('swagger-ui-express');
const app = express();
const port = process.env.SERVER_PORT;

const indexRoute = require('./api/routes/index');
const articlesRouter = require('./api/routes/articles');

app.use(express.json());

app.use('/', indexRoute);
app.use('/articles', articlesRouter);

const options = {
	definition: {
		openapi: '3.1.0',
		info: {
			title: '.Knowledge API',
			version: 'v1',
			description: 'Preserving your knowledge for future reference.',
			license: {
				name: 'MIT',
				url: 'https://spdx.org/licenses/MIT.html',
			},
			contact: {
				name: 'Abner',
				url: 'https://marcosleite.dev',
			},
		},
		servers: [
			{
				url: 'http://localhost:3000',
			},
		],
	},
	apis: ['./routes/*.js'],
};

const specs = swaggerJsdoc(options);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs));

app.listen(port, () => console.log(`Server listening on port ${port}`));
