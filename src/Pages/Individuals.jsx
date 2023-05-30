import React from "react";
import img from "../Images/D.png";
import img1 from "../Images/Startup.png";
import img2 from "../Images/Designer.png";

export default function Individuals() {
  return (
    <>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-6">
            <h1 className="display-3 font-weight-bold">
              The genius way to work{" "}
              <span className="text-primary">better</span>
            </h1>
            <p>
              Calendly makes it easy to work smarter when you're working
              solo.Meetings,sessions and appiontments become efficient ways to
              achieve success and accomplish goals.
            </p>
            <a href="@" className="btn btn-dark rounded-pill px-4 py-2">
              Sign up for free
            </a>
          </div>
          <div className="col-md-6">
            <img src={img} alt="" />
          </div>
          <div className="col-md-6">
            <img src={img1} alt="" />
          </div>
          <div className="col-md-6">
            <h6>ACURATED CALENDAR</h6>
            <h6 className="display-4 font-weight-bold">Book up efficiently</h6>
            <p>
              When invitees select meeting slots from your schedule. They only
              see the time you are available,and only the length and type of
              meeting you want to have. Your schedule fills up efficiently and
              everyone avoids excess email exchanges.
            </p>
          </div>
          <div className="col-md-6">
            <h6>AUTOMATED NOTIFICATIONS & FOLLOW-UPS</h6>
            <h6 className="display-4 font-weight-bold">
              Work like you have a personal assistant
            </h6>
            <p>
              Because Calendly automates administrative task like sending
              reminder emails and follow-ups,you can focus on the work that
              builds your bussiness and brings customers back for more.
            </p>
          </div>
          <div className="col-md-6">
            <img src={img2} alt="" />
          </div>

          <div className="card">
            <div className="card-body">
              <p className="card-text display-4 text-white font-weight-bold">
                Find just-right plans
                <br />
                for individuals and small teams
              </p>
              <a href="@" className="btn btn-primary rounded-pill">
                See our plans
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
