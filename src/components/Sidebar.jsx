import React from "react";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar__container">
        <div className="title"><img src="../../images/nav-icon-13.svg" alt="" /> Switch Organization <img src="../../images/down-arrow.svg" alt="" /></div>
        <div className="pageTitle"><img src="../../images/home.svg" alt="" /> Dashboard</div>
        <div className="subtitle__container">
          <div className="subtitle">customers</div>
          <ul className="links">
            <li className="link active"><img src="../../images/nav-icon-4.svg" alt="" /> Users</li>
            <li className="link"><img src="../../images/nav-icon-5.svg" alt="" /> Guarantors</li>
            <li className="link"><img src="../../images/nav-icon-6.svg" alt="" /> Loans</li>
            <li className="link"><img src="../../images/nav-icon-7.svg" alt="" /> Decision Models</li>
            <li className="link"><img src="../../images/nav-icon-8.svg" alt="" /> Savings</li>
            <li className="link"><img src="../../images/nav-icon-9.svg" alt="" /> Loan Requests</li>
            <li className="link"><img src="../../images/nav-icon-10.svg" alt="" /> WhiteList</li>
            <li className="link"><img src="../../images/nav-icon-11.svg" alt="" /> Karma</li>
          </ul>
        </div>

        <div className="subtitle__container">
          <div className="subtitle">Businessses</div>
          <ul className="links">
            <li className="link"><img src="../../images/nav-icon-13.svg" alt="" /> Organization</li>
            <li className="link"><img src="../../images/nav-icon-14.svg" alt="" /> Loan Products</li>
            <li className="link"><img src="../../images/nav-icon-15.svg" alt="" /> Savings Products</li>
            <li className="link"><img src="../../images/nav-icon-16.svg" alt="" /> Fees and Charges</li>
            <li className="link"><img src="../../images/nav-icon-17.svg" alt="" /> Transactions</li>
            <li className="link"><img src="../../images/nav-icon-18.svg" alt="" /> Services</li>
            <li className="link"><img src="../../images/nav-icon-19.svg" alt="" /> Service Account</li>
            <li className="link"><img src="../../images/nav-icon-20.svg" alt="" /> Settlements</li>
            <li className="link"><img src="../../images/nav-icon-21.svg" alt="" /> Repotts</li>
          </ul>
        </div>

        <div className="subtitle__container">
          <div className="subtitle">Settinhs</div>
          <ul className="links">
            <li className="link"><img src="../../images/nav-icon-23.svg" alt="" /> Preferences</li>
            <li className="link"><img src="../../images/nav-icon-24.svg" alt="" /> Fees and Pricing</li>
            <li className="link"><img src="../../images/nav-icon-25.svg" alt="" /> Audit Logs</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
