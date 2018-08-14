import React from "react";
import { Link } from "react-router-dom";

import "./NavList.css";

function NavList({
  renderAboutPage,
  renderConnectPage,
  renderResume,
  renderBlog,
  renderPortfolio
}) {
  return (
    <div className="navigation-list">
      <Link to="/about" className="landing-button">
        {/**<Icon src={aboutMe} className="landing-icon" />**/}
        About me
      </Link>

      <Link to="/blog" className="landing-button">
        Blog
      </Link>

      <Link to="/portfolio" className="landing-button">
        Portfolio
      </Link>

      <Link to="/connect" className="landing-button">
        Connect with me
      </Link>
    </div>
  );
}

export default NavList;
