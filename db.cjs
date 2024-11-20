const bcrypt = require("bcrypt");
const saltRounds = 10;

let idCounter = 1;
const db = [{
  id: `${idCounter++}`,
  userName: "conor",
  password: "hello"
},
{
  id: `${idCounter++}`,
  userName: "hannah",
  password: "mini"
},
{
  id: `${idCounter++}`,
  userName: "mini",
  password: "hannah"
},
];

const addNewUser = async (user, saltRounds) => {
      const salt = await bcrypt.genSalt(saltRounds);
      const hash =  await bcrypt.hash(user.password, salt);
    
   
  
user.id = `${idCounter++}`;
user.password = hash;
db.push(user);
console.log("user added with password encryption")
}

const verifyEncryptedPasswords = async(userName, password) => {
 
  const matchedUser  = await db.find((user) => {
    if(user.userName === userName){
    return user;
  }});
  const matchedPassword = await bcrypt.compare(password, matchedUser.password)

}


module.exports = {
  db,
  addNewUser
}