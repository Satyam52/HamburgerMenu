import React from "react";
import "./SideDrawer.css";
function SideDrawer(props) {
  let side = "side-drawer";
  if (props.show) side = "side-drawer open";

  return (
    <nav className={side}>
      <ul>
        <li>
          <a href="/">Products</a>
        </li>
        <li>
          <a href="/">Users</a>
        </li>
        <li>
          <a href="/">Products</a>
        </li>
      </ul>
    </nav>
  );
}

export default SideDrawer;
