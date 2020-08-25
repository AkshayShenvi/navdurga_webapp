const { request } = require('http');

const router = require('express').Router(); 
const user = require('../models/users');

router.post('/register', async (req, res) => {
    
    const newUser = new user({
        username : req.body.username,
        password: req.body.password
    });

    try{
        const addUser = await newUser.save(); 
        res.status(200).send(addUser); 
    }catch(err){
        res.status(400).send(err);
    }

});

module.exports = router;