import React from "react";
import { NavLink } from "react-router-dom";

export const HomePage = () => {
  return (
    <div>
      <h1>HomePage</h1>
      
      <NavLink
  to="loginPage"
  style={({ isActive, isPending, isTransitioning }) => {
    return {
      fontWeight: isActive ? "bold" : "",
      color: isPending ? "red" : "black",
      viewTransitionName: isTransitioning ? "slide" : "",
    };
  }}
>
  Log in
</NavLink>
<br />

       
    </div>
  )
}