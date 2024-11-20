const express = require("express");
const app = express();
const bodyParser = require("body-parser")
const morgan = require("morgan");
const { db, addNewUser } = require("./db.cjs")
const cors = require("cors")

//middleware
const errorHandler = (err, req, res, next) => {
  if(!err.status){
    err.status = 500;
  }
  res.status(err.status).send(err.message)
}


app.use(bodyParser.json());
app.use(morgan("tiny"));

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "http://localhost:5174");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});


//routes
//register route
app.post("/registerPage", (req, res) => {
  const { userName, password } = req.body
  if(userName && password){
    addNewUser(req.body)
    res.status(201).send("user added")
  }
  else {
    res.status(500).send("error, input username & password")
  }
  console.log(req.body)
})
// check login details

app.post("/loginPage", (req, res) => {
  const { userName, password } = req.body
  const matchedUserName = db.find(user => user.userName === userName);
  const matchedPassword = db.find(user => user.password === password);

  if(matchedUserName && matchedPassword){
    res.status(200).send("You are logged in")
  }
  else {
    res.status(404).send("username or password doesnt match try again")
  }
})

//see the db
app.get("/secretPage", (req, res) => {
  res.status(200).send(db);
  
})







app.use(errorHandler)
app.listen(8000, () => {
  console.log("server listening to port 8000")
})