const express = require('express');
const router = express.Router;

const users = [{name: 'John', email:'john@mail.com'}]


router.get('/', (req, res) => {
    res.send('Express App');
});

router.get('/users', (req, res) => {
    res.json({ ok: true, users});
});

//Get SpecificUser
router.get('/user/:name', (req,res) => {
    const { name } = req.params;
    const user = users.filter((user) => user.name === name)[0];
    res.json({ ok: true, user });
});

//Add User
router.post('/adduser', (req, res) => {
    const { name, email } = req.body;
    if (name && email) {
        users.push({name, email});
        res.json({ ok: true, users});
    };
});

module.exports = router;