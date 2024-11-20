const passport = require("passport");
const localStrategy = require("passport-local");
const {db} = require('../db.cjs');
const bcrypt = require("bcrypt");
const salt = 10;

passport.use(new localStrategy(
  function(userName, password, done){
   db.findByUsername(userName, (err, user) => {
    if(err) return done(err);

    if(!user) return done(null, false);

    if(user.password != password) return done(null, false);
    
    return done(null, user)
   })
  }
));

passport.serializeUser((id, done) => {
  done(null, user.id)
});

passport.deserializeUser((id, done) => {
  db.findById(id, function(err, user){
    if(err) return done(err);
    done(null, user)
  })
})