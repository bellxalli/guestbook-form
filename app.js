import express from "express";
const app = express();

app.use(express.static('public'));
app.use(express.urlencoded({extended: true}));

const PORT = 3000;

app.get('/', (req, res) => 
{
    //send out home page as a response to the client
    res.sendFile(`${import.meta.dirname}/views/home.html`);
});

app.post('/submit', (req, res) =>
{
    console.log(req.body);
    res.send(`<h1>Submitted ${req.body.fname}!</h1>`);
});

app.listen(PORT, () =>
{
    console.log(`Server is running at http://localhost:${PORT}`);
});