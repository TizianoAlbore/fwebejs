// inizio sessione passport + strat login
import express from 'express';
import User from '../database/models/user.js';
import passport from 'passport';
// import {localStrategy} from 'passport-local';
import bcrypt from 'bcrypt';
const app=express();




app.use(passport.initialize());
app.use(passport.session());



passport.serializeUser(function (user, done) {
	done(null, user.id);
});

passport.deserializeUser(function (id, done) {
	User.findById(id, function (err, user) {
		done(err, user);
	});
});

passport.use(new localStrategy(function (username, password, done) {
	User.findOne({ username: username }, function (err, user) {
		if (err) return done(err);
     if (!user) return done(null, false, { message: 'Incorrect username.' });
		

		bcrypt.compare(password, user.password, function (err, res) {
			if (err) return done(err);
      if (res === false) return done(null, false, { message: 'Incorrect password.' });
			return done(null, user);
		});
	});
}));

function isLoggedIn(req, res, next) {
	if (req.isAuthenticated()) return next();
	res.redirect('/login');
}

function isLoggedOut(req, res, next) {
	if (!req.isAuthenticated()) return next();
	res.redirect('/');
}

