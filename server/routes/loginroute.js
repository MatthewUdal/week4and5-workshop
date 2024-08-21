const express = require('express');
const fs = require('fs');
const path = require('path');
const User = require('../models/User');
const router = express.Router();

router.post('/', (req, res) => {
    if (!req.body) {
        return res.sendStatus(400);
    }

    fs.readFile(path.join(__dirname, '..', 'data', 'user.json'), 'utf8', (err, data) => {
        if (err) {
            console.error('Error reading user data:', err);
            return res.sendStatus(500);
        }

        const users = JSON.parse(data).map(user => new User(user.userID, user.username, user.birthdate, user.age, user.email, user.pwd, user.valid));

        const customer = {
            email: req.body.email,
            upwd: req.body.upwd,
            valid: false
        };

        console.log(customer);

        const userFound = users.find(user => user.email === customer.email && user.pwd === customer.upwd);
        if (userFound) {
            customer.valid = true;

            const { pwd, ...userWithoutPassword } = userFound;

            return res.send({
                valid: customer.valid,
                user: userWithoutPassword
            });
        }

        res.send(customer);
    });
});

module.exports = router;
