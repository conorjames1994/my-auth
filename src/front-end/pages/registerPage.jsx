import { NavLink } from "react-router-dom";
import { useState } from "react";
export const RegisterPage = () => {

  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');

  const passwordHandler = (e) => {
  setPassword(e.target.value)
  }
  const userNameHandler = (e) => {
    setUserName(e.target.value)
  }

  

  const onRegister = (e) => {
    e.preventDefault();

    if(userName && password){
      const userRegister = {
     userName,
     password
   }
   const postUser = async () => {
    const response = await fetch('http://localhost:8000/registerPage', {
    method: 'POST',
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(userRegister)
})
alert("Successfull submission");
return response

};

postUser();

  }

  else {
    console.log("Not submitted")
   }
   setPassword('');
   setUserName('')
}

// api post calls need to go in here, one to post login details, one to register login details.
  return (
    <div>
      <NavLink to="/">Home Page</NavLink>
      <br />
      <NavLink to="/loginPage">Log in</NavLink>

      <h1>Not already Registered, Register here !</h1>
      <form action="" onSubmit={onRegister}>
        <input type="text" placeholder="Username" value={userName} onChange={userNameHandler}/>
        <input type="text" placeholder="password" value={password} onChange={passwordHandler}/>
        <button type="submit" >Submit</button>
      </form>
    </div>
    
  )
}