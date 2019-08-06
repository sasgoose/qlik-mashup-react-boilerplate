import React, { Component } from "react";
import qlik from "./qlik";

export default class App extends Component {
  componentDidMount() {
    qlik
      .then(res => {
        this.qlik = res;
        console.log(this.qlik);
      })
      .catch(err => console.log(err));
  }

  render() {
    return <div>Hello Qlik</div>;
  }
}
