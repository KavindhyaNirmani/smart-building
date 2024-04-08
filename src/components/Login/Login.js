import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import img from "../assest/login.png"; // Assuming the image is in the same directory as this component
import InputControl from "../InputControl/InputControl";
import { auth } from "../../firebase";

import styles from "./Login.module.css";

function Login() {
  const navigate = useNavigate();
  const [values, setValues] = useState({
    email: "",
    pass: "",
  });
  const [errorMsg, setErrorMsg] = useState("");
  const [submitButtonDisabled, setSubmitButtonDisabled] = useState(false);

  const handleSubmission = () => {
    if (!values.email || !values.pass) {
      setErrorMsg("Fill all fields");
      return;
    }
    setErrorMsg("");

    setSubmitButtonDisabled(true);
    signInWithEmailAndPassword(auth, values.email, values.pass)
      .then(async (res) => {
        setSubmitButtonDisabled(false);
        navigate("/realAdmin"); // Redirect to AdminPage1 after successful login
      })
      .catch((err) => {
        setSubmitButtonDisabled(false);
        setErrorMsg(err.message);
      });
      
  };

  
  return (
    <div className="admin-page">
      <header className="header"> </header>
    
    
    <div className={styles.container}>
    <div> {/* Add this div for the image */}
      <img src={img}  className={styles.loginimage}/>
      </div>
    
       <div className={styles.innerBox}>
        <h1 className={styles.heading}>Login</h1>

        <InputControl
          label="Email"
          onChange={(event) =>
            setValues((prev) => ({ ...prev, email: event.target.value }))
          }
          placeholder="Enter email address"
        />
        <InputControl
          label="Password"
          onChange={(event) =>
            setValues((prev) => ({ ...prev, pass: event.target.value }))
          }
          placeholder="Enter Password"
        />

        <div className={styles.footer}>
          <b className={styles.error}>{errorMsg}</b>
          <button disabled={submitButtonDisabled} onClick={handleSubmission}>
            Login
          </button>
          <p className={styles.forgetPassword}>
            <span>
              <Link to="/signup"></Link>
            </span>
          </p>
        </div>
    </div>
    </div>
    
    <footer className= {styles.footer1}>
    <p className={styles.footer11}> SMART  X  INDUSTRIES</p>
  </footer>
  </div>
  );
};

export default Login;
