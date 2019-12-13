import React from "react";
import { Input, Button } from "antd";
import "antd/dist/antd.css";

const { TextArea } = Input;

class Feedback extends React.Component {
  render() {
    return (
      <div>
        <TextArea rows={8} />
        <Button type="primary">Submit</Button>
      </div>
    );
  }
}

export default Feedback;
