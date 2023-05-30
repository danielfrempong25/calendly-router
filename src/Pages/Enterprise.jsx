import React from "react";
import img from "../Images/visa.jpg";
import img1 from "../Images/Dropbox-Logo.jpeg";
import img2 from "../Images/ebay.png";
import img3 from "../Images/SA.png";
import img4 from "../Images/COS.png";
import img5 from "../Images/REC.png";

export default function Enterprise() {
  return (
    <>
      <h1 className="text-center font-weight-bold mt-5">
        <span className="text-primary">Way more</span> than a<br /> scheduling
        link
      </h1>
      <p className="text-center mt-5">
        Standardize on the #1 scheduling platform and
        <br />
        deliver the power of Calendly across your entire
        <br className="text-center" /> organization.
      </p>

      <div className="text-center">
        <a href="∂" className="btn btn-dark rounded-pill px-4 py-2">
          Contact sales
        </a>
      </div>

      <div className="container-fluid">
        <div className="banner mt-5">
          <p className="text-center text-white font-weight-bold">
            Trusted by more than 50,000 of the
            <br />
            world's leading organizations.
          </p>

          <div className="row align-items-center justify-content-around">
            <div className="col-md-2">
              <img src={img} alt="" className="img-fluid" />
            </div>
            <div className="col-md-2">
              <img src={img1} alt="" className="img-fluid" />
            </div>
            <div className="col-md-2">
              <img src={img2} alt="" className="img-fluid" />
            </div>
          </div>
        </div>
      </div>

      <div className="container mt-5">
        <div className="row justify-content-center">
          <div className="card m-4" style={{ width: "18rem" }}>
            <img className="card-img-top" src={img3} alt="" />
            <div className="fs">Sales</div>
            <div className="card-body">
              <p className="card-text">
                Convert more leads and prospects into meetings and revenue.
                Easily book demos and customer calls without the back and forth.
              </p>
            </div>
          </div>

          <div className="card m-4" style={{ width: "18rem" }}>
            <img className="card-img-top" src={img4} alt="" />
            <div className="fs">Customer Success</div>
            <div className="card-body">
              <p className="card-text">
                Deliver better support interactions and customer consultations.
                Stay connected with automated reminders and follow-ups.
              </p>
            </div>
          </div>

          <div className="card m-4" style={{ width: "18rem" }}>
            <img className="card-img-top" src={img5} alt="" />
            <div className="fs">Recruiting</div>
            <div className="card-body">
              <p className="card-text">
                Fill your candidate pipeline and book more interviews and
                recruiter screens with easy, standardized scheduling.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="text-center mt-5">
        <a href="@" className="btn btn-dark rounded-pill px-4 py-2">
          Learn more
        </a>
      </div>

      <footer className="container mt-5">
        <div className="row">
          <div className="col-md-3">
            <h3 className="font-weight-bold">
              Easy
              <br /> <span className="text-primary">ahead</span>
            </h3>
            <p>
              We take the work out of connecting
              <br />
              with others so you can accomplish more
            </p>
            <select className="custom-select" id="inputGroupSelect01">
              <option selected>English</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>
          </div>
          <div className="col-md-3">
            <h3 className="font-weight-bold">About</h3>
            <a href="@" className="d-block">
              About Calendly
            </a>
            <a href="@" className="d-block">
              Contact Sales
            </a>
            <a href="@" className="d-block">
              Newsroom
            </a>
            <a href="@" className="d-block">
              Careers
            </a>
            <a href="@" className="d-block">
              Security
            </a>
          </div>
          <div className="col-md-3">
            <h3 className="font-weight-bold">Solutions</h3>
            <a href="@" className="d-block">
              Customer Success
            </a>
            <a href="@" className="d-block">
              Sales
            </a>
            <a href="@" className="d-block">
              Recruiting
            </a>
            <a href="@" className="d-block">
              Education
            </a>
            <a href="@" className="d-block">
              Marketing
            </a>
          </div>
          <div className="col-md-3">
            <h3 className="font-weight-bold">Popular Features</h3>
            <a href="@" className="d-block">
              Embedded Calendly
            </a>
            <a href="@" className="d-block">
              Availability
            </a>
            <a href="@" className="d-block">
              Sending Notifications
            </a>
            <a href="@" className="d-block">
              Using Calendly Mobile
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}
