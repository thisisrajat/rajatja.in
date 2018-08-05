import React, { Fragment, Component } from "react";

import { getRandomNumber } from "./utils/getRandomNumber";

import "./DotAnimation.css";

let DOT_COUNT = 15;

class DotAnimation extends Component {
  dots = [];

  initDotsArray = () => {
    const { height, width } = this.canvas;
    for (let i = 0; i < DOT_COUNT; i++) {
      if (this.dots[i] && this.dots[i].next) continue;
      this.dots[i] = {
        x: getRandomNumber(0, width),
        y: getRandomNumber(0, height),
        radius: getRandomNumber(1, 5),
        dir: getRandomNumber(0, 1) % 2,
        steps: getRandomNumber(5, 20),
        next() {
          if (this.dir === 0) {
            this.x = (this.x + getRandomNumber(1, 1)) % width;
          } else {
            this.y = (this.y + getRandomNumber(1, 1)) % height;
          }
          if (this.steps === 0) {
            this.steps = getRandomNumber(0, 10);
            this.dir = getRandomNumber(0, 1) % 2;
          }
          this.steps--;
        }
      };
    }
  };

  drawDot = dot => {
    const context = this.canvas.getContext("2d");
    context.beginPath();

    dot.next();

    context.arc(dot.x, dot.y, dot.radius, 0, 2 * Math.PI, false);

    context.fillStyle = "white";
    context.fill();
  };

  drawDotsOnScreen = () => {
    const context = this.canvas.getContext("2d");
    context.clearRect(0, 0, this.canvas.width, this.canvas.height);

    for (let i = 0; i < DOT_COUNT; i++) {
      this.drawDot(this.dots[i]);
    }

    this.animationFrame = requestAnimationFrame(
      () => (this.animationFrame = requestAnimationFrame(this.drawDotsOnScreen))
    );
  };

  increaseDotCount = () => {
    this.interval = setInterval(() => {
      if (DOT_COUNT === 50) return;
      DOT_COUNT += 1;
      this.initDotsArray();
    }, 1000);
  };

  componentWillUnmount() {
    clearInterval(this.interval);
    cancelAnimationFrame(this.animationFrame);
  }

  componentDidMount() {
    this.initDotsArray();
    this.drawDotsOnScreen();
    this.increaseDotCount();
  }

  render() {
    return (
      <Fragment>
        <canvas
          width={window.innerWidth}
          height={window.innerHeight}
          ref={ref => (this.canvas = ref)}
          className="full-bleed"
        />
        {this.props.children}
      </Fragment>
    );
  }
}

export default DotAnimation;
