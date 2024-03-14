import React from "react";
import "./UserTable.css";
import logo from "../assest/logo.png";
import profileIcon from "../assest/profile.png";
import { FaCirclePlus } from "react-icons/fa6";
import { MdKeyboardArrowLeft } from "react-icons/md";

const UserTable = () => {
  return (
    //Header
    <div className="usertable">
      <header className="header"></header>
      <div className="header-content">
        <div>
          <img src={logo} className="logo" alt="Company Logo" />
          <img src={profileIcon} className="profile-icon" alt="Profile Icon" />
        </div>
        <div>
          <button className="logout-button">Logout</button>
        </div>
      </div>
      {/* Content goese here */}
      <div className="content">
        <div className="top">
          <button type="button">
            Add User <FaCirclePlus />{" "}
          </button>
        </div>
        <div className="middle">
          <table>
            <thead>
              <tr>
                <th>Column 1</th>
                <th>Column 2</th>
                <th>Column 3</th>
                <th>Column 4</th>
                <th>Column 5</th>
              </tr>
            </thead>
            <tbody>
              {Array(6)
                .fill()
                .map((_, i) => (
                  <tr key={i}>
                    <td>Data</td>
                    <td>Data</td>
                    <td>Data</td>
                    <td>Data</td>
                    <td>Data</td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
        <div className="end">
          <MdKeyboardArrowLeft />
          <p className="back">back</p>
        </div>
      </div>
      {/* Footer */}
      <footer className="footer">
        <p>Footer content goes here.</p>
      </footer>
    </div>
  );
};

export default UserTable;
