const express = require("express");
const cors = require('cors');
const mongoose =require('mongoose');
const app = express();
const port =5000;

 require('dotenv').config();

app.use(cors());
 app.use(express.json());

 mongoose.set('useFindAndModify', false);
const uri = 'mongodb+srv://MongoUser:password1234@cluster0.dab7m.mongodb.net/Football?retryWrites=true&w=majority';
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true , useUnifiedTopology: true  }
);

const connection = mongoose.connection;
connection.once('open', () => {
  console.log("MongoDB database connection established successfully");
})

// const titleRouter = require('./routes/topics');
// const commentRouter = require('./routes/comments');
const userRouter = require('./routes/users');
const homeRouter = require('./routes/home')
const userPageRouter = require('./routes/userPage');
// app.use('/topics', titleRouter);
// app.use('/discussion',commentRouter );
app.use('/',userRouter);
app.use('/home',homeRouter);
app.use('/getUser',userPageRouter);

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});

/*
    db.items.insert({name : "Ashar", age : 20 , dob : 2000})
    db.items.insertMany([{name : "Mom", age : 40 , dob : 2000},{name : "Dad", age : 50 , dob : 2000},{name : "Ashar", age : 20 , dob : 2000}])

*/