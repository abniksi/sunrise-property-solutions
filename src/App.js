import "tailwindcss/dist/base.css";
import "styles/globalStyles.css";
import React from "react";
import { css } from "styled-components/macro"; //eslint-disable-line
import MainLandingPage from "AgencyLandingPage";
import OurStoryPage from "OurStoryPage";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

export default function App() {
  return (
    <Router>
      <Switch>
        <Route path="/">
          <MainLandingPage />
        </Route>
        <Route path="/ourStory">
          <OurStoryPage />
        </Route>
      </Switch>
    </Router>
  );
}