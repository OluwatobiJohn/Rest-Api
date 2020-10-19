const express = require('express');
const bodyParser = require('body-parser');


const app = express();
const port = process.env.PORT || 4041;

app.use(bodyParser.urlencoded({ extended: false}));
app.use(bodyParser.json()); 

const users = [{name: 'John', email:'john@mail.com'}]


app.get('/', (req, res) => {
    res.send('Your Express App');
});

app.get('/users', (req, res) => {
    res.json({ ok: true, users});
});
//Get User
app.get('/user/:name', (req,res) => {
    const { name } = req.params;
    const user = users.filter((user) => user.name === name)[0];
    res.json({ ok: true, user });
});

//Add User
app.post('/adduser', (req, res) => {
    const { name, email } = req.body;
    if (name && email) {
        users.push({name, email});
        res.json({ ok: true, users});
    };
});




app.listen(port, () => {
   console.log(`app is running on port ${port}`)
});