import React from 'react';
import './App.css';
import Form from './Form';
import Positive from './Positive';
import Negetive from './Negetive';
// import { useEffect } from 'react';

function App() {

  const [sentiment, setSentiment] = React.useState('');

  // useEffect(()=>{
  //   setTimeout(()=>{
  //     setSentiment('');
  //   }, 2000);
  // },[sentiment]);

  return (
    <div>


  <i className="bi bi-list mobile-nav-toggle d-xl-none"></i>

 
  <header id="header">
    <div className="d-flex flex-column">

      <div className="profile">
        <img src="https://cdn.onlinewebfonts.com/svg/img_319546.png" alt="" className="img-fluid rounded-circle" style={{backgroundColor: "#03E9F4"}} />
        <h1 className="text-light"><a href="index.html">Sentiment Analysis</a></h1>
        <div className="social-links mt-4 text-center">
          <a href="#" className="twitter"><i className="bx bxl-twitter"></i></a>
          <a href="#" className="facebook"><i className="bx bxl-facebook"></i></a>
          <a href="#" className="instagram"><i className="bx bxl-instagram"></i></a>
          <a href="#" className="google-plus"><i className="bx bxl-skype"></i></a>
          <a href="#" className="linkedin"><i className="bx bxl-linkedin"></i></a>
        </div>
      </div>

      <nav id="navbar" className="nav-menu navbar">
        <ul>
          <li><a href="#hero" className="nav-link scrollto active"><i className="bx bx-home"></i> <span>Home</span></a></li>
          <li><a href="#about" className="nav-link scrollto"><i className="bx bx-user"></i> <span>About Us</span></a></li>
          <li><a href="#resume" className="nav-link scrollto"><i className="bx bx-file-blank"></i> <span>Learn More</span></a></li>
          <li><a href="#portfolio" className="nav-link scrollto"><i className="bx bx-book-content"></i> <span>Book Appointment</span></a></li>
          <li><a href="#services" className="nav-link scrollto"><i className="bx bx-server"></i> <span>Services</span></a></li>
          <li><a href="#contact" className="nav-link scrollto"><i className="bx bx-envelope"></i> <span>Contact Us</span></a></li>
        </ul>
      </nav>
    </div>
  </header>

  <section id="hero" className="d-flex flex-column justify-content-center align-items-center">
    <div className="hero-container" data-aos="fade-in">
      
    <Form sentiment={sentiment} setSentiment={setSentiment}/>

    </div>


  </section>

   {sentiment=="true"? <Positive />: sentiment=="false"? <Negetive />:<hr style={{display: 'none'}}/>}

  <footer id="footer">
    <div className="container">
      <div className="copyright">
        &copy; Copyright <strong><span>Arpit Sahu</span></strong>
      </div>
      <div className="credits">
        Designed by <a href="#">Arpit Sahu</a>
      </div>
    </div>
  </footer>

    </div>
  );
}

export default App;
