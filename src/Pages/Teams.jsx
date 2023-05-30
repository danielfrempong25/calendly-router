import React from "react";
import img from "../Images/Online.png";
import img1 from "../Images/TM.png";
import img2 from "../Images/CS.png";
import img3 from "../Images/Recruting.png";
import img4 from "../Images/sales.png";
import img5 from "../Images/education.png";
import "../styles/Teams.css";

export default function Teams() {
  return (
    <>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-6">
            <h1 className="display-3 font-weight-bold">
              <span className="text-primary">Power up </span>your teams
            </h1>
            <p>
              Calendly gives you control over team sheduling
              <br />
              with a standardized,sociable process.its secure,
              <br />
              easy to manage and integrates with your team's
              <br /> favourite tools,so you can get everyone as efficiently
              <br /> and effectively as possible
            </p>
            <button type="button" className="btn btn-primary rounded-pill">
              Start for free
            </button>{" "}
            <button type="button" className="btn btn-light rounded-pill">
              Contact Sales
            </button>
          </div>
          <div className="col-md-6">
            <img src={img} alt="" />
          </div>
        </div>
      </div>

      <h2 className="text-center font-weight-bold">
        Streamline task,extend team
        <br /> reach
      </h2>

      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-6">
            <img src={img1} alt="" />
          </div>
          <div className="col-md-6">
            <h6 className="text-primary">AUTOMATED ASSIGNMENT</h6>
            <h3 className="font-weight-bold">
              Control how your team gets
              <br /> booked
            </h3>
            <p>
              With Calendly,you can offer sessions that are a few minutes or a
              few hours,for one invitee or a group.Automated round-robbin
              first-available,or a geographical-based assignment let you easily
              divvy up meetings in any way that works for your team members.
            </p>
          </div>
        </div>
      </div>

      <h6 className="text-primary text-center">SOLUTIONS</h6>
      <h3 className="font-weight-bold text-center">
        The right Calendly for the work you do
      </h3>

      <div className="container-fluid">
        <div className="row justify-content-center">
          <div className="card" style={{ width: "12rem" }}>
            <img className="card-img-top" src={img2} alt=" " />
            <div className="card-body">
              <h5 className="card-title">Sales</h5>
              <p className="card-text">Get to your best leads faster.</p>
              <a href="@" className="card-link">
                Learn more
              </a>
            </div>
          </div>

          <div className="card" style={{ width: "12rem" }}>
            <img className="card-img-top" src={img3} alt="" />
            <div className="card-body">
              <h5 className="card-title">Recruiting</h5>
              <p className="card-text">Less emailing,more closing.</p>
              <a href="@" className="card-link">
                Learn more
              </a>
            </div>
          </div>

          <div className="card" style={{ width: "12rem" }}>
            <img className="card-img-top" src={img4} alt="" />
            <div className="card-body">
              <h5 className="card-title">Customer success</h5>
              <p className="card-text">
                Connect with customers when it matters.
              </p>
              <a href="@" className="card-link">
                Learn more
              </a>
            </div>
          </div>

          <div className="card" style={{ width: "12rem" }}>
            <img className="card-img-top" src={img5} alt="" />
            <div className="card-body">
              <h5 className="card-title">Education</h5>
              <p className="card-text">Boost student success.</p>
              <a href="@" className="card-link">
                Learn more
              </a>
            </div>
          </div>
        </div>
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
              Carrers
            </a>
            <a href="@" className="d-block">
              Security
            </a>
          </div>

          <div className="col-md-3">
            <h3 className="font-weight-bold">Solutions</h3>
            <a href="@" className="d-block">
              Customer success
            </a>
            <a href="@" className="d-block">
              Sales
            </a>
            <a href="@" className="d-block">
              Recruting
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
              Embeded Calendly
            </a>
            <a href="@" className="d-block">
              Availabiliy
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
