import React from "react";
import "./Toolbar.css";
import Hamburger from "../Hamburger/Hamburger";
function Toolbar(props) {
  return (
    <header className="toolbar">
      <nav className="toolbar_navigation">
        <div className="toggle_toolbar_button">
          <Hamburger click={props.SideToggle} />
        </div>
        <div className="toolbar_logo">
          <a href="/">Logo</a>
        </div>
        <div className="spacer" />
        <div className="toolbar_navigation_items">
          <ul>
            <li>
              <a href="/products">Products</a>
            </li>
            <li>
              <a href="/cat">Cateogary</a>
            </li>
            <li>
              <a href="/carts">Cart</a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default Toolbar;
