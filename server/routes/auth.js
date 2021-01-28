const User = require('../models/User')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const router = require('express').Router()
var cors = require('cors')


// const AuthController = require('../controllers/AuthController')

var whitelist = ['http://localhost:3000'];
var corsOptions = {
  origin: function(origin, callback){
    var originIsWhitelisted = whitelist.indexOf(origin) !== -1;
    callback(null, originIsWhitelisted);
  }
};


// router.post('/register',cors(corsOptions), AuthController.register)
router.post('/register', cors(corsOptions), (req, res, next) => {
  const { username, email, password } = req.body
  const rounds = process.env.BCRYPT_ROUNDS || 10;
  console.log("body",req.body)
  if (username && email && password) {
      const salt = bcrypt.genSaltSync(parseInt(rounds));
      const hash = bcrypt.hashSync(password, salt);
      const user = new User({
          username, 
          email, 
          password: hash
      })
      console.log(user)
      user.save()
      res.status(201).json(user)
  } else {
      res.status(409).json({ error: "unrecognized field" }) 
  }
})

// router.post('/login', AuthController.login)

module.exports = router