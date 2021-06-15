const mongoose =require('mongoose');
const schema = mongoose.Schema;

const userSchema = new schema({
    name :{type : String , required : true},
    email :{type : String , required : true},
    password :{type : String , required : true},
    setPreference :{type :Boolean , required : true},
    Preferences:{type :Array ,required :true}
})

const Users = mongoose.model('Users',userSchema , 'Users');
module.exports = Users;