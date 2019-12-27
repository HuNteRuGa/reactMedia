import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";

import Notes from "../../containers/Homepage/Notes";
import New from "../../containers/Homepage/New";
import Menu from "./Menu/Menu";

import "../../styles/Homepage/Homepage.scss";

class Homepage extends Component {
  render() {
    return (
      <>
        <Menu avatar={this.props.accounts.jwt.data.avatar} />
        <Switch>
          <Route path="/notes">
            <Notes />
            <New />
          </Route>
          <Route path="/project/:id">
            <Notes />
          </Route>
        </Switch>
      </>
    );
  }
}

export default Homepage;
