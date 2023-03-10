import React from 'react'

export default function Header() {
  return (
    <div className="header">
    <div className="logo">
        <img src="../images/Union.png" alt="" />
        <img src="../images/lendsqr.png" alt="" />
    </div>
    <div className="searchBar">
        <input placeholder="Search for anything"/>
        <div className="icon"></div>
    </div>
    <div className="doc">Docs</div>
    <div className="notificaion">Icon</div>
    <div className="profile">
        <img src="" alt="" className="profile__image"/>
        <div className="profile__name">Adedeji</div>
        <div className="profile__dropdown-icon">icon</div>
    </div>
</div>
  )
}
