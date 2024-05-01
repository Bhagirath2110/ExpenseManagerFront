// import React from 'react'
// import axios from "axios";
// import { useEffect, useState } from "react";
// import { DataGrid } from '@mui/x-data-grid';

// export const Expenses = () => {
  
//   const columns =() =>[
//     {
//       field:"_id",
//       headerName:"UserId",
//       Width:130,

//     },

//     {
//       field:"name",
//       headerName:"Name",
//       width:150

//     },
//     {
//       field:"amount",
//       headerName:"Amount",
//       width:180,

//     },
//     {
//       field:"action",
//       headerName:"Action",
//       width:250,
//       renderCell:(params)=>{
//         return(
//           <div>
//               {/* {params.row._id} */}
//               <button   style={{marginRight:"5px"}}>DELETE</button>
//               <button style={{marginRight:"5px"}}>Edit</button>
//           </div>
//         )
//       }
//     }

//   ]

//   // const [users, setusers] = useState([]);
//   // const getAllData = async () => {
//   //   const res = await axios.get("http://localhost:4000/transactions/transaction");
//   //   setusers(res.data.data);
//   //   console.log(res.data.data)
//   // };
//   // useEffect(() => {
//   //   getAllData();
//   // }, []);

//   const [user, setUser] = useState([]);

   

//     const getAllUsers = async () => {
//       try {
//         const res = await axios.get("http://localhost:4000/transactions/transaction");
//         setUser(res.data.data);
        
//       } catch (err) {
//         console.log(err);
//       }
//     };

//     useEffect(() => {
//       getAllUsers();
//     }, []);
 
 
//     return (
//     <>
//       <div className="content">
//         <div className="container-fluid">
//         <DataGrid
//         rows={user}
//         columns={columns}
//         getRowId={(row) => row._id}
//         initialState={{
//           pagination: { paginationModel: { pageSize: 5 } },
//         }}
//       ></DataGrid>
        
//         </div>
//       </div>
//     </>
//   )
// }

// export default Expenses;


import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link } from 'react-router-dom';


export const Expenses = () => {
  const [expenses, setExpenses] = useState();
  const [srNo, setSrNo] = useState([]);

  useEffect(() => {
    

    getExpenses();
  }, []);

  const deleteExpense = async(id) => {
    // do i need to add +id in the below line or can use url route from backend for expense deletion
    try{ 
      const res = await axios.delete("http://localhost:4000/transactions/transaction/"+id)
      toast.success("deleted successfully");
      getExpenses();
    }
    catch(err){
      toast.error("error deleting expense")
    }
  }

  const updateExpense = async (id, updatedData) => {
    try {
      const res = await axios.put(`http://localhost:4000/transactions/transaction/${id}`, updatedData);
      toast.success("Updated successfully");
      getExpenses();
    } catch (err) {
      toast.error("Error updating expense");
    }
  };


  const getExpenses = async () => {
    // const id = localStorage.getItem("id")
    // if(id!==undefined || id !== null)
    
    try {
      const res = await axios.get('http://localhost:4000/transactions/transaction');

      const categoryName = res.data.data.map(transaction => transaction.category.categoryName);
      console.log('Category names:', categoryName);
      console.log(res.data.data);
      
      setExpenses(res.data.data);
      
      toast.success('Received data from server')
    } catch (e) {
      toast.error('No expenses found something wrong');
    }
 
  };

  return (
    <div className="content">
    <ToastContainer position="bottom-right" autoClose={1000} />
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-12">
            <div className="card strpied-tabled-with-hover">
              <div className="card-header">
                <h4 className="card-title">Expenses</h4>
                <p className="card-category">Here is all the expenses in table</p>
              </div>
              <div className="card-body table-full-width table-responsive">
                <table className="table table-hover table-striped">
                  <thead>
                    <tr>
                      <th>Sr No.</th>
                      <th>ID</th>
                      <th>Amount</th>
                      <th>Category</th>
                      {/* <th>Payment Method</th> */}
                      {/* <th>Bill </th> */}
                      <th>Description</th>
                      <th>Action</th>

                    </tr>
                  </thead>
                  <tbody>
                    {expenses?.map((expense) => (
                      <tr key={expense._id}>
                        <td>{srNo}</td>
                        <td>{expense._id}</td>
              
                        <td>{expense.amount}</td>
                        <td>{expense.category.categoryName}</td>
                        {/* <td>{expense.paymentMethod}</td> */}

                        {/* <td><a href="{expense.billUrl}">image</a></td> */}
                        <td>{expense.description}</td>
                        <td> <button onClick= {()=>{deleteExpense(expense._id)}}>Delete</button>
                        <Link to={`/edit/${expense._id}`}><button onClick= {()=>{updateExpense(expense._id)}}>Edit</button></Link></td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};