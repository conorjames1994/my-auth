import { NavLink } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";

export const SecretPage = () => {
 const [db, setDB] = useState([]);

  useEffect(() => {
    const getDB = async () => {
     const data = await fetch("http://localhost:8000/secretPage");
     const JSONdata = await data.json();
     setDB(JSONdata)
    };
   getDB();
  }, [])

  return(
    <div>
      <NavLink to="/">Home Page</NavLink>
      <h3> Secret Page </h3>
      <h2>When authenticated extra stuff will be revealed, login to access !</h2>
        
        <div>
          {db.map((user) => {
          return (
            <div key={user.id}>
              <h3>ID-{user.id}</h3>
              <h3>Username- {user.userName}</h3>
              <h3 >Password- {user.password}</h3>
              <br />
            </div>
            
          )
          })}
        </div>
    </div>
    
  )
}