require('dotenv').config();
require('./config/database');

const express = require('express');
const app = express();
const port = process.env.SERVER_PORT;

app.use(express.json());

const articlesRouter = require('./api/routes/articles');
app.use('/articles', articlesRouter);


app.listen(port, () => console.log(`Server listening on port ${port}`));
