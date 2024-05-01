import logo from "./logo.svg";
import "./App.css";
import { Sidebar } from "./component/Sidebar";
import { Navbar } from "./component/Navbar";
import { Route, Routes } from "react-router-dom";
import { Login } from "./component/Login";
import { UserDashBoard } from "./component/user/UserDashBord";
import { Expenses } from "./component/Expenses";
import { AddExpense } from "./component/AddExpense";
import { Signup } from "./component/Signup";
import React from "react";
import { Customer } from "./component/Customer";
import { HomePage } from "./component/HomePage";
import { UserProfile } from "./component/user/UserProfile";


function App() {
  const path = window.location.pathname;

  return (
    <body>
      <div className="warpper">
        {path === "/" || path === "/login" || path === "" ? null : <Sidebar />}
        <div className="wrapper">
          {path === "/" || path === "/login" || path === "" ? null : (

          <Navbar />

          )}

          <Routes>
            <Route path="/" element={<HomePage />}></Route>
            <Route path="/login" element={<Login />}></Route>
            <Route path="/signup" element={<Signup />}></Route>

          </Routes>
          <div className="main-panel">

            

            <Routes>

              <Route
                path="/user/dashbord"
                element={<UserDashBoard />}
              ></Route>
              <Route path="/user/expenses" element={<Expenses />}></Route>
              <Route path="/user/expenses/add" element={<AddExpense />}></Route>
              <Route path="/user/profile" element={<UserProfile />}></Route>
              {/* <Route path="/user/allexpense" element={<AllExpense />}/> */}
              {/* <Routes path="/user/expense/add/other" element={<Customer />}></Routes> */}
            </Routes>

          </div>
        </div>
      </div>

    
    </body >
  );
}

export default App;
