import express from 'express';
import mariadb from 'mariadb';
import validateForm from './services/validation.js';

//Define our database credentials
const pool = mariadb.createPool(
{
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    port: process.env.PORT
});

//Define function to connect to the DB
async function connect() {
    try {
        const conn = await pool.getConnection();
        console.log('Connected to the database!')
        return conn;
    } catch (err) {
        console.log(`Error connecting to the database ${err}`)
    }
}

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

app.post('/submit', async (req, res) =>
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
    const result = validateForm(contact);
    if (!result.isValid) 
    {
        console.log(result.errors);
        res.send(result.errors);
        return;
    }

    const conn = await connect();

    //add query
    const insertQuery = await conn.query(`insert into contacts (fname, lname, jtitle, company, url, email, message)
                                          values (?, ?, ?, ?, ?, ?, ?);`,
                                          [ contact.fname, contact.lname, contact.jtitle, contact.company, 
                                            contact.url, contact.email, contact.message ]
                                        );
    
    // contacts.push(contact);
    console.log("New contact added");

    res.render('confirmation', { contact });
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


// console.log('hello world');
