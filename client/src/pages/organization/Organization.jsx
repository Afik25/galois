import React, { useState } from "react";
import "./organization.css";
import Fragment1 from "../layouts/organization/fragment1/Fragment1";
import Fragment2 from "../layouts/organization/fragment2/Fragment2";

const Organization = () => {
  const [fragment, setFragment] = useState(0);
  return (
    <div className="organization">
      <div className="head">
        <div className="container display-flex-space-between-center">
          <img
            src={process.env.PUBLIC_URL + "/logo.png"}
            className="logo"
            onClick={() => setFragment(0)}
          />
          <div className="navigation">
            <button className={fragment === 1 ? "button active" : "button"} onClick={() => setFragment(1)}>
              Follow Up on A Report
            </button>
            <button className={fragment === 2 ? "button active" : "button"} onClick={() => setFragment(2)}>
              Code of Conduct
            </button>
            <button className={fragment === 3 ? "button active" : "button"} onClick={() => setFragment(3)}>
              FaQs
            </button>
          </div>
        </div>
      </div>
      <div className="body">
        {fragment === 0 && <Fragment1 />}
        {fragment === 1 && <Fragment2 />}
        {fragment === 2 && <p>Fragment3</p>}
        {fragment === 3 && <p>Fragment4</p>}
      </div>
    </div>
  );
};

export default Organization;
