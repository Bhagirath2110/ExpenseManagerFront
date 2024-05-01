import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';

export const Sidebar = ({ onLinkSelect }) => {

  const [selectedLink, setSelectedLink] = useState('');

  const userLink = [

    {
      name: 'Dashboard',
      link: '/user/dashboard',
      icon: 'nc-icon nc-chart-pie-35',
    },
    {
      name: 'Transactions',
      link: '/user/expenses',
      icon: 'nc-icon nc-money-coins',
    },
    // {
    //   name: 'Category',
    //   link: '/user/category',
    //   icon: 'nc-icon nc-layers-3',
    // },
    {
      name: 'AddExpense',
      link: '/user/expenses/add'
    },
    // {
    //   name: 'Goal',
    //   link: '/user/goal'
    // },
  ];

  const handleLinkClick = (name) => {
    setSelectedLink(name);
    onLinkSelect(name);
  };

  return (
    <aside>
      <div className="sidebar" data-image="../assets/img/sidebar-5.jpg">
        {/*
  Tip 1: You can change the color of the sidebar using: data-color="purple | blue | green | orange | red"

  Tip 2: you can also add an image using data-image tag
    */}
        <div className="sidebar-wrapper">
          <div className="logo">
            <a className="simple-text">
              Expense Manager
            </a>
          </div>
          <ul className="nav">
            <li
              className="nav-item active">
              <Link className="nav-link" to="/user/dashbord">
                <i className="nc-icon nc-chart-pie-35" />
                <p>Dashboard</p>
              </Link>
            </li>
            <li>
              <Link className="nav-link" to="user/expenses">
                <i className="nc-icon nc-circle-09" />
                <p>Expense</p>
              </Link>
            </li>
            <li>
              <Link className="nav-link" to="user/expenses/add">
                <i className="nc-icon nc-notes" />
                <p>Add Expense</p>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </aside>


  );
};

