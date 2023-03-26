import React, { useEffect, useRef } from "react";
import "./style/Home3.css";
import VanillaTilt from "vanilla-tilt";

function Tilt(props) {
  const { options, title, ...rest } = props;
  const tilt = useRef(null);

  useEffect(() => {
    VanillaTilt.init(tilt.current, options);
  }, [options]);

  return (
    <div ref={tilt} {...rest} className="service-box">
      <div className="service title">{title}</div>
    </div>
  );
}

function Home3() {
  const options = {
    max: 20,
    speed: 400,
    glare: true,
    "max-glare": 0.5,
  };
  const titles = [
    "Influencer Search",
    "Influencer Outreach",
    "Identifying Target Audience",
    "Content Amplification Stratergizing",
    "Campaign Execution",
    "Detailed Reporting & Analytics",
  ];
  return (
    <section className="home3-container pointer-events-all">
      {titles.map((title, i) => {
        return <Tilt title={title} key={i} options={options}></Tilt>;
      })}
      {/* <div className="service-box">
        <div className="service title">Influencer Outreach</div>
      </div>
      <div className="service-box">
        <div className="service title">Identifying Target Audience</div>
      </div>
      <div className="service-box">
        <div className="service title">Content Amplification Stratergizing</div>
      </div>
      <div className="service-box">
        <div className="service title">Campaign Execution</div>
      </div>
      <div className="service-box">
        <div className="service title">Detailed Reporting & Analytics</div>
      </div> */}
    </section>
  );
}

export default Home3;
