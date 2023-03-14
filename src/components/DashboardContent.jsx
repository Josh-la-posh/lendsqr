import React, { useEffect, useState } from "react";
import axios from "axios";
import Pagination from "rc-pagination";
import { URL } from "../url";
import Card from "./Card";
import { DropdownForm } from "./Dropdown";
import { PopupForm } from "./Dropdown";

export default function DashboardContent() {
  const [data, setData] = useState([]);
  const [perPage, setPerPage] = useState(9);
  const [size, setSize] = useState(perPage);
  const [current, setCurrent] = useState(1);
  const [isDropdown, setIsDropDown] = useState(false);

  const PerPageChange = (value) => {
    setSize(value);
    const newPerPage = Math.ceil(data.length / value);
    if (current > newPerPage) {
      setCurrent(newPerPage);
    }
  };

  const getData = (current, pageSize) => {
    // Normally you should get the data from the server
    return data.slice((current - 1) * pageSize, current * pageSize);
  };

  const PaginationChange = (page, pageSize) => {
    setCurrent(page);
    setSize(pageSize);
  };

  const PrevNextArrow = (current, type, originalElement) => {
    if (type === "prev") {
      return (
        <button>
          <i className="fa fa-angle-double-left"></i>
        </button>
      );
    }
    if (type === "next") {
      return (
        <button>
          <i className="fa fa-angle-double-right"></i>
        </button>
      );
    }
    return originalElement;
  };

  function getDataFromApi() {
    axios.get(`${URL}`).then(function (response) {
      setData(response.data);
    });
  }

  function dropdownHandler(id) {
    if (id) {
      setIsDropDown(!isDropdown);
    }
  }

  useEffect(() => {
    getDataFromApi();
    console.log(data);
  }, []);


  return (
    <div className="dashboard">
      <div className="pageTitle">Users</div>
      <div className="cardContainer">
        <Card name="user" amount="2,453" />
        <Card name="active users" amount="2,453" />
        <Card name="users with loans" amount="12,453" />
        <Card name="users with savings" amount="102,453" />
      </div>

      <div className="mainContent">
        <table>
          <thead>
            <tr>
              <th>
                <span>
                  organization <span className="img" onClick={(id)=>dropdownHandler(id)}><img src="../../images/vector.png" alt="" /> {isDropdown && <DropdownForm />}</span>
                </span>
              </th>
              <th>
                <span>
                  username <span className="img" onClick={dropdownHandler}><img src="../../images/vector.png" alt="" /> {isDropdown && <DropdownForm />}</span>
                </span>
              </th>
              <th>
                <span>
                  email <span className="img" onClick={dropdownHandler}><img src="../../images/vector.png" alt="" /> {isDropdown && <DropdownForm />}</span>
                </span>
              </th>
              <th>
                <span>
                  phone number <span className="img" onClick={dropdownHandler}><img src="../../images/vector.png" alt="" /> {isDropdown && <DropdownForm />}</span>
                </span>
              </th>
              <th>
                <span>
                  date joined <span className="img" onClick={dropdownHandler}><img src="../../images/vector.png" alt="" /> {isDropdown && <DropdownForm />}</span>
                </span>
              </th>
              <th>
                <span>
                  status <span className="img" onClick={dropdownHandler}><img src="../../images/vector.png" alt="" /> {isDropdown && <DropdownForm />}</span>
                </span>
              </th>
            </tr>
          </thead>
          <tbody>
            {data &&
              getData(current, size).map(
                ({ id, orgName, email, phoneNumber, userName }) => {
                  return (
                    <tr key={id}>
                      <td style={{textTransform: 'capitalize'}}>{orgName}</td>
                      <td>{userName}</td>
                      <td>{email}</td>
                      <td>{phoneNumber}</td>
                      <td>May 15, 2020 10:10 AM</td>
                      <td className="status">
                        <span>Inactive</span>{" "}
                        <span className="img"><img src="../../images/3dot.png" alt="" /> <PopupForm /></span>
                      </td>
                    </tr>
                  );
                }
              )}
          </tbody>
        </table>
        <Pagination
          className="pagination-data"
          showTotal={(total, range) =>
            `Showing ${range[0]}-${range[1]} out of ${total}`
          }
          onChange={PaginationChange}
          total={data.length}
          current={current}
          pageSize={size}
          showSizeChanger={false}
          itemRender={PrevNextArrow}
          onShowSizeChange={PerPageChange}
        />
      </div>
    </div>
  );
}
