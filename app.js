import express from 'express';

const app = express();

app.use(express.urlencoded({extended:true}));

app.set('view engine', 'ejs');

app.use(express.static('public'));

const PORT = 3000;
const contacts = [];

//pages
app.get('/', (req, res) => 
{
    // Send our home page as a response to the client
    res.render('home');
});

app.post('/submit', (req, res) =>
{
    console.log(req.body);
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

    //validation
    if (contact.fname.trim() === "") 
    {   res.send("Invalid First Name!");
        return;
    }

    if (contact.lname.trim() === "") 
    {   res.send("Invalid Last Name!");
        return;
    }

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
    
    contacts.push(contact);
    console.log("New contact added");

    res.render('confirmation', { contacts });
});    

app.get('/admin/contacts', (req, res) =>
{
    res.render('admin', {contacts});
});


//PORT
app.listen(PORT, () => 
{
    console.log(`Server is running at http://localhost:${PORT}`);
});


console.log('hello world');
