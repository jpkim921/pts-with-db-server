import React from "react";

export const Navbar = props => {
  return (
    <div>
      {props.name ? <button>{props.name}</button> : <button>Login</button>}
    </div>
  );
};
