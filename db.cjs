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

const addNewUser = (user) => {
user.id = `${idCounter++}`
db.push(user);
console.log("user added")
}

module.exports = {
  db,
  addNewUser
}