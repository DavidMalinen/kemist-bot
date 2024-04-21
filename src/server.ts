require('dotenv').config();
import express from 'express';
import bodyParser from 'body-parser';
const port = process.env.PORT;
const app = express();

app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});