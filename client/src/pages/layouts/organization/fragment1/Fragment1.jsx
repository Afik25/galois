import React from "react";
import "./fragment1.css";
import countries from "../../../../middlewares/countries.json";
import { isEmpty } from "../../../../utils/utils";

const Fragment1 = () => {
  return (
    <div className="orga-frament1">
      <p className="title t-3">
        <b>Attention</b> message
      </p>
      <h2 className="title t-1">Our Commitment</h2>
      <div className="container display-flex-space-between-center">
        <div className="left">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Soluta id
          illo neque ea natus. Placeat eligendi amet facilis voluptates at
          aliquid debitis tenetur deleniti quae, recusandae error enim,
          necessitatibus et!
        </div>
        <div className="right">
          <h2 className="title t-2">To Make a report</h2>
          <form>
            <div className="form-item">
              <label className="title t-2">
                Select the country in which you are located.
              </label>
              <select>
                <option value="" style={{ color: "grey" }}>
                  - Select -
                </option>
                {isEmpty(countries) ? (
                  <option value="" selected>
                    No country available!
                  </option>
                ) : (
                  countries.map((item, i) => (
                    <option key={i} value={item.name.official}>
                      {item.name.official}
                    </option>
                  ))
                )}
              </select>
            </div>
          </form>
          <p className="title t-3">
            After you complete your report, you will be assigned a unique code
            called a "report key." Write down your report key and password and
            keep them in a safe place. After <b>5-6</b> business days, use your
            report key and password to check your report for feedback or
            questions.
          </p>
          <p className="title t-3">
            <b>EthicsPoint is NOT an Emergency Service:</b>
          </p>
          <p className="title t-3">
            Do not use this site to report events presenting an immediate threat
            to life or property. Reports submitted through this service may not
            receive an immediate response. If you require emergency assistance,
            please contact your local authorities.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Fragment1;
