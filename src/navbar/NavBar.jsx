import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div>
      <Link to="/">FirstPage</Link>
      <Link to="/secondPage">SecondPage</Link>
      <Link to="/thirdPage">ThirdPage</Link>
      <Link to="/fourthPage">FourthPage</Link>
    </div>
  );
};

export default NavBar;
