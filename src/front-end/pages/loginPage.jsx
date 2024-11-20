import { NavLink } from "react-router-dom";
import { useState } from "react";
export const LoginPage = () => {
  const [loggedIn, setLoggedIn] =useState(false);
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');

  const passwordHandler = (e) => {
  setPassword(e.target.value)
  }
  const userNameHandler = (e) => {
    setUserName(e.target.value)
  }

  const onSubmit = (e) => {
    e.preventDefault();
  
    if(userName && password){
       const userSubmit = {
      userName,
      password
    }
    
    const submitUser = async () => {
      const response = await fetch('http://localhost:8000/loginPage', {
      method: 'POST',
      headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
      },
      body: JSON.stringify(userSubmit)
  })
 
 if(response.status === 200){
  setLoggedIn(true);
  setPassword('');
    
  alert("successfull log in !")
 } else {
  setPassword('');
    setUserName('');
  alert("username or password invalid")
 }
  };

   submitUser();

    }

    else {
     console.log("Not submitted")
     setPassword('');
    setUserName('')
    }
    
  }

 

// api post calls need to go in here, one to post login details, one to register login details.

if(loggedIn === true){
  return (
  <div>
    <NavLink to="/">Home Page</NavLink>
    <br />
    <NavLink
  to="secretPage"
  style={({ isActive, isPending, isTransitioning }) => {
    return {
      fontWeight: isActive ? "bold" : "",
      color: isPending ? "red" : "black",
      viewTransitionName: isTransitioning ? "slide" : "",
    };
  }}
>
  Secret Page
</NavLink>

    <h1>{`Welcome to your home page ${userName}`}</h1>
  </div>

  )
}


  return (
    <div>
      <NavLink to="/">Home Page</NavLink>

      <h1>Login page</h1>
      <NavLink to="/registerPage">Not registered? This way.</NavLink>
      <form action="" onSubmit={onSubmit}>
        <input type="text" placeholder="Username" value={userName} onChange={userNameHandler}/>
        <input type="text" placeholder="password" value={password} onChange={passwordHandler}/>
        <button type="submit" >Submit</button>
      </form>

    </div>
    
  )
}