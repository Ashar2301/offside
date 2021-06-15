const router =require('express').Router();
const { response } = require('express');
let users = require('../models/users.model');

router.route('/').get((req,res)=>{
    const email = req.query.email;
    
    users.find({email : email })
    .then((response) => res.json(response))
    .catch(err => res.status(400).json('Error: ' + err));
  
  })

  router.route('/').post((req,res)=>{
    const name = req.body.name;
    const email = req.body.email;
    const password = req.body.password;
    const setPreference = req.body.setPreference;
    const Preferences = req.body.Preferences;
    var newUser = new users({name,email,password,setPreference,Preferences})
   // var query ={email : req.body.email}
  // users.findOneAndReplace(query , newUser)
  // .then((response)=>res.json(response))
  // .catch(err =>res.status(400).json('error: ' + err))

  users.findOneAndDelete({email : email})
  .then((response)=> {
    res.json(response);
    newUser.save()
    .then(() => res.json('User added!'))
    .catch(err => res.status(400).json('Error: ' + err))
  })
  .catch(err =>res.status(400).json('error : ' + err));

  })

  
module.exports = router;