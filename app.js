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
     // Get form data from request body
     const contact = {
        fname: req.body.fname,
        lname: req.body.lname,
        jtitle: req.body.jtitle,
        company: req.body.company,
        url: req.body.url,
        email: req.body.email,
        message: req.body.message,
        timestamp: new Date()
    };

    if (contact.fname.trim() === "") 
    {   res.send("Invalid First Name!");
        return;
    }

    if (contact.lname.trim() === "") 
    {   res.send("Invalid Last Name!");
        return;
    }

    // if (!["Meetup", "Job Fair", "Collegue", "Friend", "Other"].includes(contact.meeting)) 
    // {   res.send("Invalid meeting!");
    //     return;
    // }

    // if(["Other"].includes(contact.meeting) && contact.other.trim() === "")
    // {
    //     res.send("Invalid! Please enter other meeting!");
    //     return;
    // }

    if(contact.email.trim() === "")
    {
        res.send("Invalid email!");
        return;
    }

    if(contact.jtitle.trim() === "")
    {
        res.send("Invalid job title");
        return;
    }

    if(contact.url.trim() === "")
    {
        res.send("Invalid url");
    }

    if(contact.company.trim() === "")
    {
        res.send("Invalid company");
        return;
    }

    if(contact.message.trim() === "")
    {
        res.send("Invalid message");
        return;
    }
    console.log("New contact added");


    // res.send(`${confirmation}
    //          <button onclick = "history.back()">Back</button>`); 

    res.render('confirmation', { contact });
});

//admin page (view data input on form)
app.get('/admin/contacts', (req, res) =>
{
    // res.send(contacts);
    res.send(`${contacts}
        <button onclick = "history.back()">Back</button>`);
})

//telling server to listen to specified port
app.listen(PORT, () =>
{
    console.log(`Server is running at http://localhost:${PORT}`);
});