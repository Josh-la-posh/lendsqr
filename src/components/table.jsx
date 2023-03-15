import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Pagination from "rc-pagination";
import moment from "moment";
import { URL } from "../url";
import { DropdownForm } from "./Dropdown";
import { PopupForm } from "./Dropdown";

export default function Table() {
  const [data, setData] = useState([]);
  const [perPage, setPerPage] = useState(9);
  const [size, setSize] = useState(perPage);
  const [current, setCurrent] = useState(1);
  const [isDropdown, setIsDropDown] = useState(null);
  const [isOptionOpen, setIsOptionOpen] = useState(null);

  const headers = [
    "organization",
    "username",
    "email",
    "phone number",
    "date joined",
    "status",
  ];

  const PerPageChange = (value) => {
    setSize(value);
    const newPerPage = Math.ceil(data.length / value);
    if (current > newPerPage) {
      setCurrent(newPerPage);
    }
  };

  const getData = (current, pageSize) => {
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
          <img
            src="../../images/down-arrow.svg"
            style={{ transform: "rotate(90deg)" }}
            alt=""
          />
        </button>
      );
    }
    if (type === "next") {
      return (
        <button>
          <img
            src="../../images/down-arrow.svg"
            style={{ transform: "rotate(-90deg)" }}
            alt=""
          />
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

  function dropdownHandler(index) {
    if (isDropdown === index) {
      setIsDropDown(null);
    } else {
      setIsDropDown(index);
    }
  }

  function optionOpenHandler(id) {
    if (isOptionOpen === id) {
      setIsOptionOpen(null);
    } else {
      setIsOptionOpen(id);
    }
  }

  useEffect(() => {
    getDataFromApi();
    console.log(data);
  }, []);

  return (
    <div className="mainContent">
      <div className="tableContainer">
        <table>
          <thead>
            <tr>
              {headers.map((header, index) => {
                return (
                  <th key={index}>
                    <span className="table__header">
                      {header}{" "}
                      <span
                        className="img"
                        onClick={() => dropdownHandler(index)}
                      >
                        <img src="../../images/vector.png" alt="" />{" "}
                        {isDropdown === index && <DropdownForm />}
                      </span>
                    </span>
                  </th>
                );
              })}
            </tr>
          </thead>
          <tbody>
            {data &&
              getData(current, size).map(
                ({ id, orgName, email, phoneNumber, userName, createdAt }) => {
                  return (
                    <tr key={id}>
                      <td style={{ textTransform: "capitalize" }}>
                        <Link to={`/user/${id}`}>{orgName}</Link>
                      </td>
                      <td>{userName}</td>
                      <td>{email}</td>
                      <td>{phoneNumber}</td>
                      <td>{moment(createdAt).format("MMM D, YYYY h:mm a")}</td>
                      <td>
                        <div className="status">
                          <span className="active">Active</span>{" "}
                          <span
                            className="img"
                            onClick={() => optionOpenHandler(id)}
                          >
                            <img src="../../images/3dot.png" alt="" />{" "}
                            {isOptionOpen === id && <PopupForm />}
                          </span>
                        </div>
                      </td>
                    </tr>
                  );
                }
              )}
          </tbody>
        </table>
      </div>
      <Pagination
        className="pagination-data"
        showTotal={(total, range) => `Showing ${range[1]} out of ${total}` }
        onChange={PaginationChange}
        total={data.length}
        current={current}
        pageSize={size}
        showSizeChanger={false}
        itemRender={PrevNextArrow}
        onShowSizeChange={PerPageChange}
      />
    </div>
  );
}
