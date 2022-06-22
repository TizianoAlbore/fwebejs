// nuovo utente
import User from '../database/models/user.js';



export default {
  addUser: function (req, res, next) {
    console.log(req.body);
    const newUser = new User({
      username: req.body.username,
      password: req.body.password,
      
    });
    
    
    newUser.save()
    .then(user => {
      res.locals.user = user;
      res.locals.redirect = "/";
      next();
    });
  },
  
  redirectView: function (req, res, next) {
    let redirectPath = res.locals.redirect;
    if (redirectPath) res.redirect(redirectPath);
    else next();
  }
}

  
