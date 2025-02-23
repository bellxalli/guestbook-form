// Import the express module
import express from 'express';

// Create an instance of an Express application
const app = express();

// Middleware to parse form data
app.use(express.urlencoded({ extended: true }));

// Serve static files from the 'public' directory
app.use(express.static('public'));

// Add EJS as template engine
app.set('view engine', 'ejs');

// Define the port number where our server will listen
const PORT = 3000;

// Store orders in memory (this will reset when server restarts)
const contacts = [];



//default route for home page
app.get('/', (req, res) => 
{
    res.sendFile(`${import.meta.dirname}/views/home.html`);
});

// //page user is sent to after submit
// app.post('/submit', (req, res) =>
// {
//     console.log(req.body);
//     contacts.push(req.body);
//      // Get form data from request body
//      const contact = {
//         fname: req.body.fname,
//         lname: req.body.lname,
//         jtitle: req.body.jtitle,
//         company: req.body.company,
//         url: req.body.url,
//         email: req.body.email,
//         message: req.body.message,
//         timestamp: new Date()
//     };

//     if (contact.fname.trim() === "") 
//     {   res.send("Invalid First Name!");
//         return;
//     }

//     if (contact.lname.trim() === "") 
//     {   res.send("Invalid Last Name!");
//         return;
//     }

//     // if (!["Meetup", "Job Fair", "Collegue", "Friend", "Other"].includes(contact.meeting)) 
//     // {   res.send("Invalid meeting!");
//     //     return;
//     // }

//     // if(["Other"].includes(contact.meeting) && contact.other.trim() === "")
//     // {
//     //     res.send("Invalid! Please enter other meeting!");
//     //     return;
//     // }

//     if(contact.email.trim() === "")
//     {
//         res.send("Invalid email!");
//         return;
//     }

//     if(contact.jtitle.trim() === "")
//     {
//         res.send("Invalid job title");
//         return;
//     }

//     if(contact.url.trim() === "")
//     {
//         res.send("Invalid url");
//     }

//     if(contact.company.trim() === "")
//     {
//         res.send("Invalid company");
//         return;
//     }

//     if(contact.message.trim() === "")
//     {
//         res.send("Invalid message");
//         return;
//     }
//     console.log("New contact added");


//     // res.send(`${confirmation}
//     //          <button onclick = "history.back()">Back</button>`); 

//     res.render('confirmation', { contacts });
// });

// //admin page (view data input on form)
// app.get('/admin/contacts', (req, res) =>
// {
//     // res.send(contacts);
   
//     res.render('admin', { contacts });
//     // res.send(`${contacts}
//     //     <button onclick = "history.back()">Back</button>`);
// })

//telling server to listen to specified port
app.listen(PORT, () =>
{
    console.log(`Server is running at http://localhost:${PORT}`);
});