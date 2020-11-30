import "./Header.scss";
import React from 'react';
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <div className="header">
      <div className="header__container">
        <Link to="/">
          <span> Comics Boom</span>
        </Link>
      </div>
    </div>
  );
};