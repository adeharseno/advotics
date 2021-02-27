import React from "react";
import { Link } from 'react-router-dom';

import "./sidebar.css";
import Burger from "../../../assets/images/burger.png";
import Cart from "../../../assets/images/cart.png";

function Sidebar() {
  return (
    <div className="sidebar">
      <ul>
            <li>
              <Link to="">
                <img 
                    src={Burger} 
                    alt="Burger"
                    style={{ width: "34px" }}
                    />
              </Link>
            </li>
            <li className="active">
              <Link to="">
                <img 
                    src={Cart} 
                    alt="Cart"
                    style={{ width: "34px" }}
                    />
              </Link>
            </li>
      </ul>
    </div>
  );
}

export default Sidebar;
