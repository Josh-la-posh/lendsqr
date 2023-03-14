import React from "react";

export default function Header() {
  return (
    <div className="header">
      <div className="logo">
        <img src="../images/Union.png" alt="" className="logo-1" />
        <img src="../images/lendsqr.png" alt="" className="logo-2" />
      </div>
      <div className="header__right-content">
        <div className="header__searchBar">
          <input
            placeholder="Search for anything"
            className="header__searchBar-input"
          />
          <span className="header__searchBar-icon">
            <img src="../images/search.png" alt="" />
          </span>
        </div>
        <div className="header__profile">
          <div className="header__doc">Docs</div>
          <span className="header__notificaion">
            <img src="../images/notification.png" alt="" />
          </span>
          <img
            src="../images/image 4.png"
            alt=""
            className="header__profile-image"
          />
          <div className="header__profile-name">Adedeji</div>
          <span className="header__profile-dropdown-icon">
            <img src="../images/arrow-down.png" alt="" />
          </span>
        </div>
      </div>
    </div>
  );
}
