import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar__container">
        <div className="title"><FontAwesomeIcon icon={duotone("briefcase")} />Switch Organization</div>
        <div className="pageTitle">Dashboard</div>
        <div className="subtitle__container">
          <div className="subtitle">customers</div>
          <ul className="links">
            <li className="link">Users</li>
            <li className="link">Guarantors</li>
            <li className="link">Loans</li>
            <li className="link">Decision Models</li>
            <li className="link">Savings</li>
            <li className="link">Loan Requests</li>
            <li className="link">WhiteList</li>
            <li className="link">Karma</li>
          </ul>
        </div>

        <div className="subtitle__container">
          <div className="subtitle">Businessses</div>
          <ul className="links">
            <li className="link">Organization</li>
            <li className="link">Loan Products</li>
            <li className="link">Savings Products</li>
            <li className="link">Fees and Charges</li>
            <li className="link">Transactions</li>
            <li className="link">Services</li>
            <li className="link">Service Account</li>
            <li className="link">Settlements</li>
            <li className="link">Repotts</li>
          </ul>
        </div>

        <div className="subtitle__container">
          <div className="subtitle">Settinhs</div>
          <ul className="links">
            <li className="link">Preferences</li>
            <li className="link">Fees and Pricing</li>
            <li className="link">Audit Logs</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
