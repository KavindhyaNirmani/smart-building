import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/Login/Login.js";
import { auth } from "./firebase";
import "./App.css";
import AdminPage1 from "./components/AdminPage1/AdminPage1";
import RealAdmin from "./components/RealAdmin/RealAdmin.js";
import LoadingPage from "./components/LoadingPage/loadingpage.js";
import InputControl from "./components/InputControl/InputControl.js";
import DashBoard from "./components/Dashboard/DashBoard.js";
import UserTable from "./components/UserTable/UserTable.js";



function App() {
  const [userName, setUserName] = useState("");

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        setUserName(user.displayName);
      } else setUserName("");
    });
  }, []);

  return (
    <div className="App">
      <Router>
        <Routes>
          {/* Make Login the default page by rendering it when the path is / */}
          <Route path="/" element={<LoadingPage />} />
          <Route path="/loadingpage" element={<LoadingPage />} />
          <Route path="/admin" element={<AdminPage1 />} />
          <Route path="/login" element={<Login />} />
          <Route path="/realAdmin" element={<RealAdmin />} />
          <Route path="/inputcontrol" element={<InputControl />} />
          <Route path="/dashboard" element={<DashBoard />} />
          <Route path="/usertable" element={<UserTable />} />
        
          
        </Routes>
      </Router>
    </div>
  );
}


export default App;
