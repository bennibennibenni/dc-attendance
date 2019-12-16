import React from "react";
import styled from "styled-components";
import { Input, Button } from "antd";
import "antd/dist/antd.css";

const { TextArea } = Input;

const StyledButton = styled(Button)`
 margin-top: 20px;
`;

class Feedback extends React.Component {
  render() {
    return (
      <div>
        <TextArea rows={8} />
        <StyledButton type="primary">Submit</StyledButton>
      </div>
    );
  }
}

export default Feedback;
