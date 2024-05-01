import React from 'react';
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';

export const Login = () =>{

  const navigate = useNavigate();

  const {register,handleSubmit} = useForm();

  const submitHandler = async (data) => {

    try{
      const res =await axios.post("http://localhost:4000/users/user/login",data);
      console.log(data)

      if(res.status === 200){
        alert('login sucessful');
        sessionStorage.setItem("id",res.data.data._id)
        navigate('/user/Dashbord');
      }

      }
    catch(err){

      console.log('login error:',err)

    }
  }



  return (
    <>
    <div className="container position-sticky z-index-sticky top-0">
      <div className="row">
        <div className="col-12"></div>
      </div>
    </div>
    <main className="main-content  mt-0">
      <section>
        <div className="page-header min-vh-100">
          <div className="container">
            <div className="row">
              <div className="col-xl-4 col-lg-5 col-md-7 d-flex flex-column mx-lg-0 mx-auto">
                <div className="card card-plain">
                  <div className="card-header pb-0 text-start">
                    <h4 className="font-weight-bolder">Sign In</h4>
                    <p className="mb-0">
                      Enter your email and password to sign in
                    </p>
                  </div>
                  <div className="card-body">
                    <form role="form" onSubmit={handleSubmit(submitHandler)} >
                      <div className="mb-3">
                        <input
                          type="email"
                          className="form-control form-control-lg"
                          {...register('email')}
                          aria-label="Email"
                        />
                      </div>
                      <div className="mb-3">
                        <input
                          type="password"
                          className="form-control form-control-lg"
                          {...register('password')}
                          aria-label="Password"
                        />
                      </div>
                      <div className="form-check form-switch">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          id="rememberMe"
                        />
                        <label className="form-check-label" htmlFor="rememberMe">
                          Remember me
                        </label>
                      </div>
                      <div className="text-center">
                        <button
                          type="submit"
                          className="btn btn-lg btn-primary btn-lg w-100 mt-4 mb-0"
                        >
                          Sign in
                        </button>
                      </div>
                    </form>
                  </div>
                  <div className="card-footer text-center pt-0 px-lg-2 px-1">
                    <p className="mb-4 text-sm mx-auto">
                      Don't have an account?
                      <Link
                        to="/signup"
                        className="text-primary text-gradient font-weight-bold"
                      >
                        Sign up
                      </Link>
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-6 d-lg-flex d-none h-100 my-auto pe-0 position-absolute top-0 end-0 text-center justify-content-center flex-column">
                <div
                  className="position-relative bg-gradient-primary h-100 m-3 px-7 border-radius-lg d-flex flex-column justify-content-center overflow-hidden"
                  style={{
                    backgroundImage:
                      'url("https://raw.githubusercontent.com/creativetimofficial/public-assets/master/argon-dashboard-pro/assets/img/signin-ill.jpg")',
                    backgroundSize: "cover"
                  }}
                >
                  <span className="mask bg-gradient-primary opacity-6" />
                  <h4 className="mt-5 text-white font-weight-bolder position-relative">
                    "Attention is the new currency"
                  </h4>
                  <p className="text-white position-relative">
                    The more effortless the writing looks, the more effort the
                    writer actually put into the process.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  </>
  
)
}