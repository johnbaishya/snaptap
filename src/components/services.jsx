import React from "react";
import { getBrandBackground } from "../utils/appUtils";

export const Services = (props) => {
  const backgrooundStyle = getBrandBackground()
  const backgrooundStyle2 = getBrandBackground(135)
  return (
    <div id="services" className="text-center" style={{...backgrooundStyle2}}>
      <div className="container">
        <div className="section-title">
          <h2>Our Services</h2>
          {/* <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit duis sed
            dapibus leonec.
          </p> */}
        </div>
        <div className="row">
          {props.data
            ? props.data.map((d, i) => (
                <div key={`${d.name}-${i}`} className="col-md-4">
                  {" "}
                  <i className={d.icon} style={{...backgrooundStyle}}></i>
                  <div className="service-desc">
                    <h3>{d.name}</h3>
                    <p>{d.text}</p>
                  </div>
                </div>
              ))
            : "loading"}
        </div>
      </div>
    </div>
  );
};
