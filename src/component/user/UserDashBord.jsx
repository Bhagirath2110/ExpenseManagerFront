import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Bar } from 'react-chartjs-2';
import {
  ArcElement,
  BarElement,
  CategoryScale,
  Chart,
  LinearScale,
} from "chart.js";
Chart.register(CategoryScale);
Chart.register(ArcElement);
Chart.register(LinearScale);
Chart.register(BarElement);


export const UserDashBoard = () => {
  // const [income, setincome] = useState();
  // const [expense, setExpense] = useState();
  // const getIncome = async () => {
  //   const res = await axios.get(
  //     'http://localhost:4000/transactions/income'
  //   );
  //   setincome(res.data.data);
  // };

  // const getExpense = async () => {
  //   const res = await axios.get(
  //     'http://localhost:4000/transactions/expense'
  //   );
  //   setExpense(res.data.data);
  // };

  // useEffect(() => {
  //   getIncome();
  //   getExpense();
  // }, []);

  // const PieChartDemo = () => {
    const [Category, setCategory] = useState([]);
const [categorydata, setcategoryData] = useState(null);

const getAllcategoryData = async () => {
  try {
    const response = await axios.get("http://localhost:4000/transactions/transaction");
    const responseData = response.data.data
    const catResponse = responseData.map(transaction =>transaction.category.categoryName);
    console.log("cat response:",catResponse)
    console.log("Response data:", responseData.map(transaction =>transaction.category.categoryName));
    console.log("response amount:", responseData.map((transaction) => transaction.amount));
    if (responseData && responseData.length > 0) {
      const transformedData = {
        labels: catResponse,
        datasets: [
          {
            label: "Amount",
            data: responseData.map((transaction) => transaction.amount),
            backgroundColor: [
              "rgba(255, 99, 132, 0.6)",
              "rgba(54, 162, 235, 0.6)",
              "rgba(255, 206, 86, 0.6)",
            ],
            borderWidth: 1,
          },
        ],

        
      };
      
      setcategoryData(transformedData);
      setCategory(responseData);
    }
    
  } catch (error) {
    console.log("Error fetching category:", error);
    alert("Error fetching category");
  }
};

useEffect(() => {
  getAllcategoryData();
}, []);
  
  //   const [data, setdata] = useState({
  //     //labels: courses.map((course) => course.name),
  //     labels: [],
  //     datasets: [],
  //   });

  const course =[
    {
      id:1,
      label:"medical",
      amount:15000
    },
    {
      id:2,
      label:"food",
      amount:20000
    },
    {
      id:3,
      label:"travel",
      amount:30000
    },
    {
      id:4,
      label:"rent",
      amount:40000
    },
    {
      id:5,
      label:"other",
      amount:50000
    }
  ];

  const [data, setdata] = useState({
    labels: course.map((course) => course.label),
    datasets: [
      {
        label: "Courses",
        data: course.map((course) => course.amount),
        backgroundColor: [
          "rgba(255, 99, 132, 0.6)",
          "rgba(54, 162, 235, 0.6)",
          "rgba(255, 206, 86, 0.6)",
          "rgba(75, 192, 192, 0.6)",
          "rgba(153, 102, 255, 0.6)",
          "rgba(255, 159, 64, 0.6)",
        ],
        borderWidth: 1,
      },
    ],
  });
  
  
  return (
    <>
      <div className="content">
        <div className="container-fluid">
          <div className="row">
          <div className="col-md-8">
              <div className="card ">
                <div className="card-header ">
                  <h4 className="card-title">Expense Chart</h4>
                  <p className="card-category">24 Hours performance</p>
                  
                </div>
                <div className="card-body ">
                  <Bar data={data}/>
                  {/* <div id="chartHours" className="ct-chart" /> */}
                </div>
                {/* <div className="card-footer ">
                  <div className="legend">
                    <i className="fa fa-circle text-info" /> Open
                    <i className="fa fa-circle text-danger" /> Click
                    <i className="fa fa-circle text-warning" /> Click Second Time
                  </div>
                  <hr />
                  <div className="stats">
                    <i className="fa fa-history" /> Updated 3 minutes ago
                  </div>
                </div> */}
              </div>
            </div>
            <div className="col-md-4">
              <div className="card ">
                <div className="card-header ">
                  <h4 className="card-title">Email Statistics</h4>
                  <p className="card-category">Last Campaign Performance</p>
                </div>
                <div className="card-body ">
                  <div
                    id="chartPreferences"
                    className="ct-chart ct-perfect-fourth"
                  />
                  <div className="legend">
                    <i className="fa fa-circle text-info" /> Open
                    <i className="fa fa-circle text-danger" /> Bounce
                    <i className="fa fa-circle text-warning" /> Unsubscribe
                  </div>
                  <hr />
                  <div className="stats">
                    <i className="fa fa-clock-o" /> Campaign sent 2 days ago
                  </div>
                </div>
              </div>
            </div>
            
          </div>
          {/* <div className="row">
            <div className="col-md-6">
              <div className="card ">
                <div className="card-header ">
                  <h4 className="card-title">2017 Sales</h4>
                  <p className="card-category">All products including Taxes</p>
                </div>
                <div className="card-body ">
                  <div id="chartActivity" className="ct-chart" />
                </div>
                <div className="card-footer ">
                  <div className="legend">
                    <i className="fa fa-circle text-info" /> Tesla Model S
                    <i className="fa fa-circle text-danger" /> BMW 5 Series
                  </div>
                  <hr />
                  <div className="stats">
                    <i className="fa fa-check" /> Data information certified
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="card  card-tasks">
                <div className="card-header ">
                  <h4 className="card-title">Tasks</h4>
                  <p className="card-category">Backend development</p>
                </div>
                <div className="card-body ">
                  <div className="table-full-width">
                    <table className="table">
                      <tbody>
                        <tr>
                          <td>
                            <div className="form-check">
                              <label className="form-check-label">
                                <input
                                  className="form-check-input"
                                  type="checkbox"
                                  defaultValue=""
                                />
                                <span className="form-check-sign" />
                              </label>
                            </div>
                          </td>
                          <td>
                            Sign contract for "What are conference organizers afraid
                            of?"
                          </td>
                          <td className="td-actions text-right">
                            <button
                              type="button"
                              rel="tooltip"
                              title="Edit Task"
                              className="btn btn-info btn-simple btn-link"
                            >
                              <i className="fa fa-edit" />
                            </button>
                            <button
                              type="button"
                              rel="tooltip"
                              title="Remove"
                              className="btn btn-danger btn-simple btn-link"
                            >
                              <i className="fa fa-times" />
                            </button>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <div className="form-check">
                              <label className="form-check-label">
                                <input
                                  className="form-check-input"
                                  type="checkbox"
                                  defaultValue=""
                                  defaultChecked=""
                                />
                                <span className="form-check-sign" />
                              </label>
                            </div>
                          </td>
                          <td>
                            Lines From Great Russian Literature? Or E-mails From My
                            Boss?
                          </td>
                          <td className="td-actions text-right">
                            <button
                              type="button"
                              rel="tooltip"
                              title="Edit Task"
                              className="btn btn-info btn-simple btn-link"
                            >
                              <i className="fa fa-edit" />
                            </button>
                            <button
                              type="button"
                              rel="tooltip"
                              title="Remove"
                              className="btn btn-danger btn-simple btn-link"
                            >
                              <i className="fa fa-times" />
                            </button>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <div className="form-check">
                              <label className="form-check-label">
                                <input
                                  className="form-check-input"
                                  type="checkbox"
                                  defaultValue=""
                                  defaultChecked=""
                                />
                                <span className="form-check-sign" />
                              </label>
                            </div>
                          </td>
                          <td>
                            Flooded: One year later, assessing what was lost and
                            what was found when a ravaging rain swept through metro
                            Detroit
                          </td>
                          <td className="td-actions text-right">
                            <button
                              type="button"
                              rel="tooltip"
                              title="Edit Task"
                              className="btn btn-info btn-simple btn-link"
                            >
                              <i className="fa fa-edit" />
                            </button>
                            <button
                              type="button"
                              rel="tooltip"
                              title="Remove"
                              className="btn btn-danger btn-simple btn-link"
                            >
                              <i className="fa fa-times" />
                            </button>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <div className="form-check">
                              <label className="form-check-label">
                                <input
                                  className="form-check-input"
                                  type="checkbox"
                                  defaultChecked=""
                                />
                                <span className="form-check-sign" />
                              </label>
                            </div>
                          </td>
                          <td>
                            Create 4 Invisible User Experiences you Never Knew About
                          </td>
                          <td className="td-actions text-right">
                            <button
                              type="button"
                              rel="tooltip"
                              title="Edit Task"
                              className="btn btn-info btn-simple btn-link"
                            >
                              <i className="fa fa-edit" />
                            </button>
                            <button
                              type="button"
                              rel="tooltip"
                              title="Remove"
                              className="btn btn-danger btn-simple btn-link"
                            >
                              <i className="fa fa-times" />
                            </button>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <div className="form-check">
                              <label className="form-check-label">
                                <input
                                  className="form-check-input"
                                  type="checkbox"
                                  defaultValue=""
                                />
                                <span className="form-check-sign" />
                              </label>
                            </div>
                          </td>
                          <td>Read "Following makes Medium better"</td>
                          <td className="td-actions text-right">
                            <button
                              type="button"
                              rel="tooltip"
                              title="Edit Task"
                              className="btn btn-info btn-simple btn-link"
                            >
                              <i className="fa fa-edit" />
                            </button>
                            <button
                              type="button"
                              rel="tooltip"
                              title="Remove"
                              className="btn btn-danger btn-simple btn-link"
                            >
                              <i className="fa fa-times" />
                            </button>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <div className="form-check">
                              <label className="form-check-label">
                                <input
                                  className="form-check-input"
                                  type="checkbox"
                                  defaultValue=""
                                  disabled=""
                                />
                                <span className="form-check-sign" />
                              </label>
                            </div>
                          </td>
                          <td>Unfollow 5 enemies from twitter</td>
                          <td className="td-actions text-right">
                            <button
                              type="button"
                              rel="tooltip"
                              title="Edit Task"
                              className="btn btn-info btn-simple btn-link"
                            >
                              <i className="fa fa-edit" />
                            </button>
                            <button
                              type="button"
                              rel="tooltip"
                              title="Remove"
                              className="btn btn-danger btn-simple btn-link"
                            >
                              <i className="fa fa-times" />
                            </button>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
                <div className="card-footer ">
                  <hr />
                  <div className="stats">
                    <i className="now-ui-icons loader_refresh spin" /> Updated 3
                    minutes ago
                  </div>
                </div>
              </div>
            </div>
          </div> */}
        </div>
      </div>
      <footer className="footer">
        <div className="container-fluid">
          <nav>
            <ul className="footer-menu">
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">Company</a>
              </li>
              <li>
                <a href="#">Portfolio</a>
              </li>
              <li>
                <a href="#">Blog</a>
              </li>
            </ul>
            <p className="copyright text-center">
              ©<a href="http://www.creative-tim.com">Creative Tim</a>, made with
              love for a better web
            </p>
          </nav>
        </div>
      </footer>
    </>

  )
};