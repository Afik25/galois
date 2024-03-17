import React, { useState } from "react";
import { Helmet } from "react-helmet";
import "./home.css";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import { Link } from "react-router-dom";

const Home = () => {
  const [isSearch, setIsSearch] = useState(true);
  return (
    <React.Fragment>
      <Helmet>
        <title>Home - GALOIS</title>
        <meta name="description" content="" />
        <meta name="keywords" content="" />
      </Helmet>
      <div className="wrapper">
        <Header />
        <div className={isSearch ? "body" : "body display-flex-center-center"}>
          <form className="request-form">
            <h2 className="title t-3">
              You are now in a Secure area for submitting your report.
            </h2>
            <p className="title t-1">
              What is the name of the companyor institution you are filling out
              a report for ?
            </p>
            <div className="container">
              <div className="input-div">
                <input
                  type="text"
                  className="input-form"
                  autoComplete="none"
                  placeholder=" "
                  // {...register("title")}
                />
                {/* <label htmlFor="title" className="label-form">
                  Leson's/Exercise's/Solution's title
                </label> */}
                {/* {errors.title && (
                  <span className="fade-in">{errors.title.message}</span>
                )} */}
              </div>
              <button type="submit" className="button normal">
                Submit information
              </button>
            </div>
            <div className="result-msg">
              <h3 className="title t-1">
                There are too many matches for your search. Please be
                specific with the name.
              </h3>
              <p className="title t-2">
                The following matches were found fro "Afik foundation"
              </p>
            </div>
          </form>
          <div className="request-result">
            <Link to="organization" className="link result-item">
              Afik Foundation
            </Link>
            <Link to="organization" className="link result-item">
              Afik Foundation
            </Link>
            <Link to="organization" className="link result-item">
              Afik Foundation
            </Link>
            <Link to="organization" className="link result-item">
              Afik Foundation
            </Link>
            <Link to="organization" className="link result-item">
              Afik Foundation
            </Link>
            <Link to="organization" className="link result-item">
              Afik Foundation
            </Link>
            <Link to="organization" className="link result-item">
              Afik Foundation
            </Link>
            <Link to="organization" className="link result-item">
              Afik Foundation
            </Link>
            <Link to="organization" className="link result-item">
              Afik Foundation
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    </React.Fragment>
  );
};

export default Home;
