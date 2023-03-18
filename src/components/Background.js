import React from "react";
import "./style/Background.css";
import anime from "animejs";

function Background() {
  let inBgTransition = false;
  function randomInt(min, max) {
    // min and max included
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  function numBoxes() {
    const boxWidth = window.innerHeight / 7;
    const numBox = Math.ceil(window.innerWidth / boxWidth) * 7;
    return Array(numBox)
      .fill(0)
      .map((_, i) => i);
  }
  function handleClick(_, ind) {
    if (inBgTransition) return;
    inBgTransition = true;

    let animColor = `rgba(${randomInt(10, 255)},${randomInt(
      10,
      255
    )},${randomInt(10, 255)},${randomInt(20, 30) / 100})`;

    anime({
      targets: ".grid-border",
      scale: [
        { value: 0.9, duration: 500 },
        { value: 1, duration: 500 },
      ],
      backgroundColor: [
        {
          value: animColor,
          duration: 500,
        },
        { value: "rgba(0,0,0,0)", duration: 500 },
      ],
      delay: anime.stagger(100, {
        grid: [7, 12],
        from: ind,
      }),
      easing: "easeInOutQuad",
      complete: () => {
        inBgTransition = false;
      },
    });
    console.log(ind);
  }
  const numEls = numBoxes();
  return (
    <div className="background-container" style={{ color: "white" }}>
      {numEls.map((i) => {
        return (
          <div
            className="grid-border"
            key={i}
            onClick={(event) => {
              handleClick(event, i);
            }}
          />
        );
      })}
    </div>
  );
}

export default Background;
