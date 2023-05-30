import React from "react";
import img from "../Images/TM.png";
import img1 from "../Images/compass.png";
import img2 from "../Images/Dropbox-Logo.jpeg";
import img3 from "../Images/ebay.png";
import img4 from "../Images/Laz Logo.jpeg";
import img5 from "../Images/twilio.png";

export default function Homepage() {
  return (
    <>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-6">
            <h1 className="display-3 font-weight-bold">
              Easy Sheduling <span className="text-primary">ahead</span>
            </h1>
            <p>
              Calendly is your hub for sheduling meetings professionally and
              efficeinctly,eliminating the hassle of back and forth emails so
              you can get back to work
            </p>
            <div className="input-group mb-3">
              <input
                type="text"
                className="form-control"
                placeholder="Enter your email"
                aria-label="Enter your email"
                aria-describedby="button-addon2"
              />
              <button
                className="btn btn-outline-dark"
                type="button"
                id="button-addon2"
              >
                Sign up
              </button>
            </div>
            <p>Create your free account No creadit card required</p>
          </div>
          <div className="col-md-6">
            <img src={img} alt="" className="image-fluid" />
          </div>
        </div>
      </div>

      <div className="container">
        <div className="text-center">
          <h2>
            Simplified scheduling for more than <br />{" "}
            <span className="text-primary">10,000,000</span> users worldwide
          </h2>
        </div>
        <div className="row align-items-center justify-content-around">
          <div className="col-md-2">
            <img className="img-fluid" src={img1} alt="" />
          </div>
          <div className="col-md-2">
            <img className="img-fluid" src={img2} alt="" />
          </div>
          <div className="col-md-2">
            <img className="img-fluid" src={img3} alt="" />
          </div>
          <div className="col-md-2">
            <img className="img-fluid" src={img4} alt="" />
          </div>
          <div className="col-md-2">
            <img className="img-fluid" src={img5} alt="" />
          </div>
        </div>
      </div>

      <section className="list">
        <div className="container">
          <div className="row align-text-center">
            <div className="col-md-4">
              <div className="we">
                <h4 className="font-weight-italic">
                  <span className="sv">1</span>
                  Create simple
                  <br />
                  rules
                </h4>
                <p>
                  Lets cadenly know
                  <br /> your availability preference and
                  <br /> it will do the work for you
                </p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="we">
                <h4 className="font-weight-italic">
                  <span className="sv">2</span>
                  Share your
                  <br />
                  link
                </h4>
                <p>
                  Send guest your Calendly
                  <br />
                  link or embed it on your website
                </p>
              </div>
            </div>

            <div className="col-md-4">
              <div className="we">
                <h4 className="font-weight-italic">
                  <span className="sv">3</span>
                  Get booked
                </h4>
                <p>
                  They pick a time and the
                  <br />
                  event is added to your calendar
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
