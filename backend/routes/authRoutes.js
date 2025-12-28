
// https://dev.to/cerbos/authentication-and-authorization-in-nodejs-applications-12fk

const dotenv = require("dotenv");
require('dotenv').config(); 

const jwt = require('jsonwebtoken'); 
const bcrypt = require('bcryptjs');
const express = require('express');
const router = express.Router({mergeParams: true});

const users = [ ]; // in-memory database to keep things basic for this tutorial

// router.get("/protected", authenticateToken(["admin"]), (req, res) => {
//   res.status(200).json({ message: `Welcome Admin ${req.user.username}!` });
// });

router.post('/signup', (req, res) => {

  const { username, password, role } = req.body;

  if (!Array.isArray(role)) {
    return res.status(400).json({ message: "Role must be an array" });
  }

  const userExists = users.find(user =>user.username === username);
  if (userExists) {
    return res.status(400).json({
      message: 'User already exists'
    });
  }

  const hashedPassword = bcrypt.hashSync(password, 8);

  users.push({
    username,
    password: hashedPassword,
    role
  });

  console.log (users);

  res.status(201).json({
    message: 'User registered successfully'
  });
});


// Login route 
router.post('/login', (req, res) => {
  
  console.log ("POST /api/login");
  console.log  ('secret', process.env.JWT_SECRET);

  console.log (req.body);

  const {
    username,
    password
  } = req.body;

  console.log (`username ${username} password ${password}`)
  const user = users.find(user => user.username === username);

  if (!user) {
    return res.status(404).json({
      message: 'User not found'
    });
  }

  const isPasswordValid = bcrypt.compareSync(password, user.password);
  if (!isPasswordValid) {
    return res.status(401).json({
      message: 'Invalid credentials'
    });
  }

  console.log  ('secret', process.env.JWT_SECRET);

  const token = jwt.sign({
    username: user.username,
    role: user.role
  },
  process.env.JWT_SECRET, {
    expiresIn: '1h',
  });

  res.status(200).json({
    token
  });
 
})

function authenticateToken(allowedRoles) {
  return (req, res, next) => {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];

    if (!token) {
      return res.status(401).json({
        message: 'No token provided'
      });
    }

    jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
      if (err) {
        return res.status(403).json({
          message: 'Invalid token'
        });
      }

      if (!allowedRoles.includes(user.role)) {
        return res.status(403).json({
          message: 'You do not have the correct role'
        });
      }

      req.user = user;
      next();
    });
  };
}
module.exports = router