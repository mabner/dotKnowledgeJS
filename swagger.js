const swaggerAutogen = require('swagger-autogen')();

const outputFile = './swagger.json';
const endpointsFiles = ['./api/routes/index.js'];

const doc = {
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
	host: 'localhost:3000',
	basePath: '/',
	schemes: ['http', 'https'],
	consumes: ['application/json'],
	produces: ['application/json'],
	servers: [
		{
			url: 'http://localhost:3000',
		},
	],
};

swaggerAutogen(outputFile, endpointsFiles, doc);
