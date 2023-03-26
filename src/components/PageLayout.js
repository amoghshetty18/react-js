import React from "react";
import logo from "../assets/socialtaglogo.png";
import menu from "../assets/circle.png";
import "./style/PageLayout.css";
import anime from "animejs";
import arrowLogo from "../assets/navarrow.png";

function PageLayout({ curPg, children, setPg }) {
  let inTransition = false;
  let menuOpened = false;
  let serial = false;
  const pgObj = {
    0: "Home",
    2: "Services",
    3: "About",
    4: "Brands",
    5: "Some Creators",
    6: "Contact",
  };
  function toggleMenu() {
    if (!serial) {
      if (inTransition) return;
      inTransition = true;
    }
    if (!menuOpened) {
      anime
        .timeline({
          duration: 600,
          easing: "easeInOutQuad",
        })
        .add(
          {
            targets: ".menu-circle",
            rotate: 180,
          },
          0
        )
        .add(
          {
            targets: ".menu-icon-line:nth-child(1)",
            rotate: -45,
            translateX: -3,
            translateY: 7,
          },
          0
        )
        .add(
          {
            targets: ".menu-icon-line:nth-child(2)",
            rotate: 45,
            width: "100%",
            translateX: -3,
            translateY: -7,
            complete: () => {
              menuOpened = true;
              inTransition = false;
              serial = true;
            },
          },
          0
        );
    } else {
      anime
        .timeline({
          duration: 600,
          easing: "easeInOutQuad",
        })
        .add(
          {
            targets: ".menu-circle",
            rotate: 0,
          },
          0
        )
        .add(
          {
            targets: ".menu-icon-line:nth-child(1)",
            rotate: 0,
            duration: 600,
            translateX: 0,
            translateY: 0,
            easing: "easeInOutQuad",
          },
          0
        )
        .add(
          {
            targets: ".menu-icon-line:nth-child(2)",
            rotate: 0,
            width: "80%",
            translateX: 0,
            translateY: 0,
            duration: 600,
            easing: "easeInOutQuad",
            complete: () => {
              menuOpened = false;
              inTransition = false;
              serial = false;
            },
          },
          0
        );
    }
  }

  return (
    <div className="pageHome">
      <header>
        <img src={logo} id="logo" alt="Social Tag Logo"></img>
        <div className="menu-icon">
          <div className="menu-icon-line"></div>
          <div className="menu-icon-line"></div>
          <img
            src={menu}
            className="menu-circle"
            alt="menu-circle"
            onClick={() => {
              toggleMenu();
            }}
          />
        </div>
      </header>
      {children}
      <div className="section-nav">
        {
          <img
            className="arrow"
            id="up-arrow"
            src={arrowLogo}
            alt="Up Navigation Arrow"
            style={{
              opacity: curPg,
              pointerEvents: curPg > 0 ? "all" : "none",
            }}
            onClick={() => {
              if (curPg > 0) setPg(curPg - 1);
            }}
          />
        }
        {curPg < 6 && (
          <img
            className="arrow"
            id="down-arrow"
            src={arrowLogo}
            alt="Down Navigation Arrow"
            onClick={() => {
              setPg(curPg + 1);
            }}
          />
        )}
      </div>
      <div></div>
      <footer>
        <button className="lets-talk">Let's Talk</button>
        <div className="cur-pg">{pgObj[curPg]}</div>
      </footer>
    </div>
  );
}

export default PageLayout;
