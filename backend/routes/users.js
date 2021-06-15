const router =require('express').Router();
let users = require('../models/users.model');
// let comments = require('../models/comments.model');
// let Title = require('../models/topics.model');

router.route('/').get((req,res)=>{
    const email = req.query.email;
    const password = req.query.password;
    console.log(req.query.email + "query")
    console.log(req.body.email + "body")
    users.find({email : email , password : password})
    .then((response) => res.json(response))
    .catch(err => res.status(400).json('Error: ' + err));

})

router.route('/google').post((req,res)=>{
  const name = req.body.name;
    const email = req.body.email;
    const password = req.body.password;
    const setPreference = false;
    const Preferences = [];
    var newUser = new users({name,email,password,setPreference,Preferences})
  users.find({email : email})
  .then((response) => {
    res.json(response)
    console.log(response)
    console.log(response.length)
    if(response.length <1){
      newUser.save()
    .then(() => res.json('User added!'))
    .catch(err => res.status(400).json('Error: ' + err))
    }
  })
  .catch(err => res.status(400).json('Error: ' + err));

})

router.route('/User').get((req,res)=>{
  const username = req.query.username;
  
  console.log(req.query.username + "query2")
//  console.log(req.body.username + "body")
  users.find({username : username })
  .then((response) => res.json(response))
  .catch(err => res.status(400).json('Error: ' + err));

})

router.route('/Signup').post((req,res)=>{
    const name = req.body.name;
    const email = req.body.email;
    const password = req.body.password;
    const setPreference = false;
    const Preferences = [];
    var newUser = new users({name,email,password,setPreference,Preferences})
  console.log(newUser)
    newUser.save()
    .then(() => res.json('User added!'))
    .catch(err => res.status(400).json('Error: ' + err))
})



module.exports = router;