// Authentication provided by
// https://dev.to/cerbos/authentication-and-authorization-in-nodejs-applications-12fk

import express from 'express';
import {type User} from '../models/index.ts'
const authRoutes = express.Router({mergeParams: true});
 // @ts-ignore
import {login, signup, authenticateToken} from '../services/auth.ts'

// authRoutes.get("/protected", authenticateToken(["admin"]), (req, res) => {

//   const userName:string = req.(user as User).username; 
//   res.status(200).json({ message: `Welcome Admin ${req.user.username}!` });
// });

authRoutes.post('/signup', (req, res) => {
  signup (req, res);
});


// Login route 
authRoutes.post('/login', (req, res) => {
  login(req, res);
})

export {authRoutes};