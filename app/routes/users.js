/* jshint unused:false */

'use strict';
var traceur = require('traceur');
var User = traceur.require(__dirname + '/../models/user.js');
// var Mongo = require('mongodb');

exports.register = (req, res)=>{
	User.register(req.body, user=>{
		req.session.userId = user._id;
		res.redirect('/'); //same page
	});
};

exports.login = (req, res)=>{
	User.login(req.body, user=>{
		req.session.userId = user._id;
		res.redirect('/'); //same page
	});
};

exports.lookup = (req, res, next)=>{
  User.findByUserId(req.session.userId, u=>{
    res.locals.user = u;
    next();
  });
};
