import express from 'express';
import session from 'express-session';
import mongoose from 'mongoose';
import passport from 'passport';
import userController from '../controllers/userController.js';
import authController from '../controllers/authController.js';

app.post("/register", userController.addUser, userController.redirectView);


app.post('/login', passport.authenticate('local', {
  successRedirect: '/',
  failureRedirect: '/login?error=true'
}));