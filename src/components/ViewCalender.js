import React, { Component } from "react";
import { Calendar } from "antd";
import "antd/dist/antd.css";

class ViewCalender extends Component {
  state = {
    showCalendar: false
  };

  render() {
    return (
      <div>
        <Calendar />
      </div>
    );
  }
}

export default ViewCalender;
