import express from "express";
const app = express();

app.use(express.static('public'));

const PORT = 3000;

app.post('/submit', (req, res) =>
{
    res.send(`<h1>Submitted! ${req.body.fname}</h1>`);
});
