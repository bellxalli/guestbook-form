//import and initiate express
import express from "express";
const app = express();

//serve static files from the 'public' directory 
app.use(express.static('public'));
app.use(express.urlencoded({extended: true}));

//port number for server to listen
const PORT = 3000;

//storage for data
let contacts = [];

//default route for home page
app.get('/', (req, res) => 
{
    //send out home page as a response to the client
    res.sendFile(`${import.meta.dirname}/views/home.html`);
});

//page user is sent to after submit
app.post('/submit', (req, res) =>
{
    console.log(req.body);
    contacts.push(req.body);

    res.send(`<h1>Submitted ${req.body.fname}!</h1>
             <button onclick = "history.back()">Back</button>`); 
});

//admin page (view data input on form)
app.get('/admin/contacts', (req, res) =>
{
    res.send(contacts);
})

//telling server to listen to specified port
app.listen(PORT, () =>
{
    console.log(`Server is running at http://localhost:${PORT}`);
});