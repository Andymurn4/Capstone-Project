import React, { useState } from "react";
import { Input, Menu } from "semantic-ui-react";
import { Link } from "react-router-dom";

function Navbar() {
  const pathname = window.location.pathname;
  const path = pathname === "/" ? "home" : pathname.substr(1);
  const [activeItem, setActiveItem] = useState(path);
  const handleItemClick = (e, { name }) => setActiveItem(name);
  return (
    <Menu pointing size="massive">
      <Menu.Item
        name="home"
        active={activeItem === "home"}
        onClick={handleItemClick}
        as={Link}
        to="/"
      />
      <Menu.Item
        name="about"
        active={activeItem === "about"}
        onClick={handleItemClick}
        as={Link}
        to="/about"
      />

      <Menu.Menu position="right">
        <Menu.Item
          name="login"
          active={activeItem === "login"}
          onClick={handleItemClick}
          as={Link}
          to="/login"
        />
        <Menu.Item
          name="register"
          active={activeItem === "register"}
          onClick={handleItemClick}
          as={Link}
          to="/register"
        />
      </Menu.Menu>
    </Menu>
  );
}

export default Navbar;

// NAVBAR FOR WHEN LOGGED IN
/*
<Menu pointing size="massive">
      <Menu.Item
        name="username"
        active={activeItem === "username"}
        onClick={handleItemClick}
        as={Link}
        to="/"
      />
      <Menu.Item
        name="about"
        active={activeItem === "about"}
        onClick={handleItemClick}
        as={Link}
        to="/about"
      />

      <Menu.Menu position="right">   
        <Menu.Item
          name="cart"
          active={activeItem === "cart"}
          onClick={handleItemClick}
          as={Link}
          to="/cart"
        />
         <Menu.Item
          name="listing"
          active={activeItem === "listing"}
          onClick={handleItemClick}
          as={Link}
          to="/listing"
        />
        <Menu.Item
          name="logout"
          active={activeItem === "logout"}
          onClick={logout}
        />
      </Menu.Menu>
    </Menu>



*/
