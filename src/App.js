import React, { Fragment, Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import FontFaceObserver from "fontfaceobserver";

import DotAnimation from "./DotAnimation";
import NavList from "./NavList";
import AboutPage from "./about";
import ConnectPage from "./connect";
import PortfolioPage from "./portfolio";

import "./App.css";

class App extends Component {
  state = { view: null };

  nameWrapper = React.createRef();

  componentDidMount() {
    new FontFaceObserver("Luckiest Guy").load()
      .then(() => {
        this.setState({
          fontLoaded: true
        });
      });
  }

  handleSwitchView = view => {
    return () => null;
  };

  renderDefaultPage = props => {
    const { fontLoaded } = this.state;
    const nameClasses =
      `name-wrapper ${fontLoaded ? "font-loaded" : ""}`;

    return (
      <div className="app-wrapper">
        <DotAnimation>
          <div className={nameClasses} ref={this.nameWrapper}>
            Rajat Jain
          </div>
        </DotAnimation>
        <NavList />
      </div>
    );
  };

  renderBlog = () => {
    window.location.href = 'https://blog.rajatja.in';
    return null;
  };

  renderResume = () => {
    window.location.href = '/resume.pdf';
    return null;
  }

  render() {
    return (
      <Router>
        <Fragment>
          <Route path="/" exact component={this.renderDefaultPage} />
          <Route path="/about" component={AboutPage} />
          <Route path="/blog" component={this.renderBlog} />
          <Route path="/portfolio" component={PortfolioPage} />
          <Route path="/resume" component={this.renderResume} />
          <Route path="/connect" component={ConnectPage} />
        </Fragment>
      </Router>
    );
  }
}

export default App;
