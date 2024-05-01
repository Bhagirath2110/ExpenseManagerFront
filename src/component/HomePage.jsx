import React from 'react'
import { Link } from 'react-router-dom'

export const HomePage = () => {
  return (
    <div>
    <div>
  {/* ======= Header ======= */}
  <header id="header" className="">
    <div className="container d-flex align-items-center justify-content-lg-between">
      <h1 style={{color:"#7a14c7"}} className="logo custom_log_sty  me-auto me-lg-0">
            Expense Manager
      </h1>
      {/* Uncomment below if you prefer to use an image logo */}
      {/* <a href="index.html" class="logo me-auto me-lg-0"><img src="assets/img/logo.png" alt="" class="img-fluid"></a>*/}
      <nav id="navbar" style={{left: "-47px"}} className="navbar order-last order-lg-0">
        <ul>
          <li>
            <a className="nav-link scrollto active" href="#hero">
              Home
            </a>
          </li>
          <li>
            <a className="nav-link scrollto" href="#about">
              About
            </a>
          </li>
          <li>
            <a className="nav-link scrollto" href="#services">
              Services
            </a>
          </li>
          <li>
            <a className="nav-link scrollto" >
              
            </a>
          </li>
          <li className="test">
          <a className="nav-link test" />
          </li>
          <li>
            <a className="nav-link scrollto" href="#contact">
              Contact
            </a>
          </li>
        </ul>
        <i className="bi bi-list mobile-nav-toggle" />
      </nav>
      {/* .navbar */}
      <Link to="/login" className="get-started-btn scrollto">
        Get Started
      </Link>
    </div>
  </header>
  {/* End Header */}
  {/* ======= Hero Section ======= */}
  {/* <section
    id="hero"
    className="d-flex align-items-center justify-content-center"
  >
    <div className="container" >
      <div
        className="row justify-content-center"
        
        data-aos-delay={150}
      >
        <div className="col-xl-6 col-lg-8">
          <h1>
            Powerful Digital Solutions With Gp<span>.</span>
          </h1>
          <h2>We are team of talented digital marketers</h2>
        </div>
      </div>
      <div
        className="row gy-4 mt-5 justify-content-center"
        
        data-aos-delay={250}
      >
        <div className="col-xl-2 col-md-4">
          <div className="icon-box">
            <i className="ri-store-line" />
            <h3>
              <a href="">Lorem Ipsum</a>
            </h3>
          </div>
        </div>
        <div className="col-xl-2 col-md-4">
          <div className="icon-box">
            <i className="ri-bar-chart-box-line" />
            <h3>
              <a href="">Dolor Sitema</a>
            </h3>
          </div>
        </div>
        <div className="col-xl-2 col-md-4">
          <div className="icon-box">
            <i className="ri-calendar-todo-line" />
            <h3>
              <a href="">Sedare Perspiciatis</a>
            </h3>
          </div>
        </div>
        <div className="col-xl-2 col-md-4">
          <div className="icon-box">
            <i className="ri-paint-brush-line" />
            <h3>
              <a href="">Magni Dolores</a>
            </h3>
          </div>
        </div>
        <div className="col-xl-2 col-md-4">
          <div className="icon-box">
            <i className="ri-database-2-line" />
            <h3>
              <a href="">Nemos Enimade</a>
            </h3>
          </div>
        </div>
      </div>
    </div>
  </section> */}
  {/* End Hero */}
  <main id="main">
  {/* ======= About Section ======= */}
  <section id="about" className="about">
    <div className="container" >
      <div className="row">
        <div
          className="col-lg-6 order-1 order-lg-2"
        
          
        >
          <img src="assets/img/about.jpg" className="img-fluid" alt="" />
        </div>
        <div
          className="col-lg-6 pt-4 pt-lg-0 order-2 order-lg-1 content"
          
          
        >
          <h3>
          "Financial Control Center: Empowering Your Finances with Our Expense Manager"
          </h3>
          <p className="fst-italic">
          Streamlining Financial Oversight: Introducing Our Cutting-Edge Expense Manager Solution
          </p>
          <ul>
            <li>
              <i className="ri-check-double-line" />Expense Tracking:it Allows users to record all their expenses efficiently, including details such as date, amount, category, and payment method.
            </li>
            <li>
              <i className="ri-check-double-line" />Budgeting Tools: Provides tools to set budget limits for different spending categories or overall expenses and monitors actual spending against these budgets.
            </li>
            <li>
              <i className="ri-check-double-line" />Category Management: Allows users to categorize expenses into different predefined or custom categories for better organization and analysis.
            </li>
          </ul>
          <p>
          The primary goal of an expense manager is to provide users with a clear understanding of where their money is going, enabling them to make informed financial decisions, optimize spending, and ultimately improve their financial health.
          </p>
        </div>
      </div>
    </div>
  </section>

  {/* ======= Features Section ======= */}
  <section id="features" className="features">
    <div className="container" >
      <div className="row">
        <div
          className="image col-lg-6"
          style={{ backgroundImage: 'url("assets/img/features.jpg")' }}
          
        />
        <div className="col-lg-6" >
          <div
            className="icon-box mt-5 mt-lg-0"
            
            data-aos-delay={150}
          >
            <i className="bx bx-receipt" />
            <h4>Expense record</h4>
            <p>
              Take a record of your expenses with ease.
            </p>
          </div>
          <div
            className="icon-box mt-5"
            
            data-aos-delay={150}
          >
            <i className="bx bx-cube-alt" />
            <h4>Show Expenses</h4>
            <p>
              You can check your expenses in real time.
            </p>
          </div>
          <div
            className="icon-box mt-5"
            
            data-aos-delay={150}
          >
            <i className="bx bx-images" />
            <h4>Expense analysis</h4>
            <p>
              you can see How much portion you spent on each category and show thier graphical representation at real time.
            </p>
          </div>
          {/* <div
            className="icon-box mt-5"
            
            data-aos-delay={150}
          >
            <i className="bx bx-shield" />
            <h4>Beatae veritatis</h4>
            <p>
              Expedita veritatis consequuntur nihil tempore laudantium vitae
              denat pacta
            </p>
          </div> */}
        </div>
      </div>
    </div>
  </section>
  {/* End Features Section */}
  {/* ======= Services Section ======= */}
  <section id="services" className="services">
    <div className="container" >
      <div className="section-title">
        <h2>Services</h2>
        <p>Check our Services</p>
      </div>
      <div className="row">
        <div
          className="col-lg-4 col-md-6 d-flex align-items-stretch"
          
          
        >
          <div className="icon-box">
            <div className="icon">
              <i className="bx bxl-dribbble" />
            </div>
            <h4>
              <a href="">Lorem Ipsum</a>
            </h4>
            <p>
              Voluptatum deleniti atque corrupti quos dolores et quas molestias
              excepturi
            </p>
          </div>
        </div>
        <div
          className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-md-0"
          
          data-aos-delay={200}
        >
          <div className="icon-box">
            <div className="icon">
              <i className="bx bx-file" />
            </div>
            <h4>
              <a href="">Sed ut perspiciatis</a>
            </h4>
            <p>
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore
            </p>
          </div>
        </div>
        <div
          className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-lg-0"
          
          
        >
          <div className="icon-box">
            <div className="icon">
              <i className="bx bx-tachometer" />
            </div>
            <h4>
              <a href="">Magni Dolores</a>
            </h4>
            <p>
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
              officia
            </p>
          </div>
        </div>
        <div
          className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4"
          
          
        >
          <div className="icon-box">
            <div className="icon">
              <i className="bx bx-world" />
            </div>
            <h4>
              <a href="">Nemo Enim</a>
            </h4>
            <p>
              At vero eos et accusamus et iusto odio dignissimos ducimus qui
              blanditiis
            </p>
          </div>
        </div>
        <div
          className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4"
          
          data-aos-delay={200}
        >
          <div className="icon-box">
            <div className="icon">
              <i className="bx bx-slideshow" />
            </div>
            <h4>
              <a href="">Dele cardo</a>
            </h4>
            <p>
              Quis consequatur saepe eligendi voluptatem consequatur dolor
              consequuntur
            </p>
          </div>
        </div>
        <div
          className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4"
          
          
        >
          <div className="icon-box">
            <div className="icon">
              <i className="bx bx-arch" />
            </div>
            <h4>
              <a href="">Divera don</a>
            </h4>
            <p>
              Modi nostrum vel laborum. Porro fugit error sit minus sapiente sit
              aspernatur
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* End Services Section */}
  {/* ======= Cta Section ======= */}
  <section id="cta" className="cta">
    <div className="container" >
      <div className="text-center">
        <h3>Call To Action</h3>
        <p>
          {" "}
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
          dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
          proident, sunt in culpa qui officia deserunt mollit anim id est
          laborum.
        </p>
        <a className="cta-btn" href="#">
          Call To Action
        </a>
      </div>
    </div>
  </section>


  <section id="contact" className="contact">
    <div className="container" >
      <div className="section-title">
        <h2>Contact</h2>
        <p>Contact Us</p>
      </div>
      <div>
        <iframe
          style={{ border: 0, width: "100%", height: 270 }}
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12097.433213460943!2d-74.0062269!3d40.7101282!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xb89d1fe6bc499443!2sDowntown+Conference+Center!5e0!3m2!1smk!2sbg!4v1539943755621"
          frameBorder={0}
          allowFullScreen=""
        />
      </div>
      <div className="row mt-5">
        <div className="col-lg-4">
          <div className="info">
            <div className="address">
              <i className="bi bi-geo-alt" />
              <h4>Location:</h4>
              <p>A108 Adam Street, New York, NY 535022</p>
            </div>
            <div className="email">
              <i className="bi bi-envelope" />
              <h4>Email:</h4>
              <p>info@example.com</p>
            </div>
            <div className="phone">
              <i className="bi bi-phone" />
              <h4>Call:</h4>
              <p>+1 5589 55488 55s</p>
            </div>
          </div>
        </div>
        <div className="col-lg-8 mt-5 mt-lg-0">
          <form
            action="forms/contact.php"
            method="post"
            role="form"
            className="php-email-form"
          >
            <div className="row">
              <div className="col-md-6 form-group">
                <input
                  type="text"
                  name="name"
                  className="form-control"
                  id="name"
                  placeholder="Your Name"
                  required=""
                />
              </div>
              <div className="col-md-6 form-group mt-3 mt-md-0">
                <input
                  type="email"
                  className="form-control"
                  name="email"
                  id="email"
                  placeholder="Your Email"
                  required=""
                />
              </div>
            </div>
            <div className="form-group mt-3">
              <input
                type="text"
                className="form-control"
                name="subject"
                id="subject"
                placeholder="Subject"
                required=""
              />
            </div>
            <div className="form-group mt-3">
              <textarea
                className="form-control"
                name="message"
                rows={5}
                placeholder="Message"
                required=""
                defaultValue={""}
              />
            </div>
            <div className="my-3">
              <div className="loading">Loading</div>
              <div className="error-message" />
              <div className="sent-message">
                Your message has been sent. Thank you!
              </div>
            </div>
            <div className="text-center">
              <button type="submit">Send Message</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>
  {/* End Contact Section */}
</main>

 
  {/* End #main */}
  {/* ======= Footer ======= */}
  <footer id="footer">
    <div className="footer-top">
      <div className="container">
        <div className="row">
          <div className="col-lg-3 col-md-6">
            <div className="footer-info">
              <h3>
                Gp<span>.</span>
              </h3>
              <p>
                A108 Adam Street <br />
                NY 535022, USA
                <br />
                <br />
                <strong>Phone:</strong> +1 5589 55488 55
                <br />
                <strong>Email:</strong> info@example.com
                <br />
              </p>
              <div className="social-links mt-3">
                <a href="#" className="twitter">
                  <i className="bx bxl-twitter" />
                </a>
                <a href="#" className="facebook">
                  <i className="bx bxl-facebook" />
                </a>
                <a href="#" className="instagram">
                  <i className="bx bxl-instagram" />
                </a>
                <a href="#" className="google-plus">
                  <i className="bx bxl-skype" />
                </a>
                <a href="#" className="linkedin">
                  <i className="bx bxl-linkedin" />
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-2 col-md-6 footer-links">
            <h4>Useful Links</h4>
            <ul>
              <li>
                <i className="bx bx-chevron-right" /> <a href="#">Home</a>
              </li>
              <li>
                <i className="bx bx-chevron-right" /> <a href="#">About us</a>
              </li>
              <li>
                <i className="bx bx-chevron-right" /> <a href="#">Services</a>
              </li>
              <li>
                <i className="bx bx-chevron-right" />{" "}
                <a href="#">Terms of service</a>
              </li>
              <li>
                <i className="bx bx-chevron-right" />{" "}
                <a href="#">Privacy policy</a>
              </li>
            </ul>
          </div>
          <div className="col-lg-3 col-md-6 footer-links">
            <h4>Our Services</h4>
            <ul>
              <li>
                <i className="bx bx-chevron-right" /> <a href="#">Web Design</a>
              </li>
              <li>
                <i className="bx bx-chevron-right" />{" "}
                <a href="#">Web Development</a>
              </li>
              <li>
                <i className="bx bx-chevron-right" />{" "}
                <a href="#">Product Management</a>
              </li>
              <li>
                <i className="bx bx-chevron-right" /> <a href="#">Marketing</a>
              </li>
              <li>
                <i className="bx bx-chevron-right" />{" "}
                <a href="#">Graphic Design</a>
              </li>
            </ul>
          </div>
          <div className="col-lg-4 col-md-6 footer-newsletter">
            <h4>Our Newsletter</h4>
            <p>
              Tamen quem nulla quae legam multos aute sint culpa legam noster
              magna
            </p>
            <form action="" method="post">
              <input type="email" name="email" />
              <input type="submit" defaultValue="Subscribe" />
            </form>
          </div>
        </div>
      </div>
    </div>
    <div className="container">
      <div className="copyright">
        © Copyright{" "}
        <strong>
          <span>Gp</span>
        </strong>
        . All Rights Reserved
      </div>
      <div className="credits">
      
        
        Designed by <a href="https://bootstrapmade.com/">BootstrapMade</a>
      </div>
    </div>
  </footer>

    </div>
    </div>
  )
}
