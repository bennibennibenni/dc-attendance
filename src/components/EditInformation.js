import React, { Component } from "react";
import { Table, Form, Input, Button } from "antd";
import "antd/dist/antd.css";

class EditInformation extends Component {
  constructor() {
    super();
    this.state = {
      formLayout: "horizontal"
    };
  }

  handleFormLayoutChange = e => {
    this.setState({ formLayout: e.target.value });
  };
  render() {
    const { formLayout } = this.state;
    const formItemLayout =
      formLayout === "horizontal"
        ? {
            labelCol: { span: 4 },
            wrapperCol: { span: 14 }
          }
        : null;
    return (
      <div>
        <Form.Item label="NIM" {...formItemLayout}>
          <Input disabled />
        </Form.Item>
        <Form.Item label="Name" {...formItemLayout}>
          <Input disabled />
        </Form.Item>
        <Form.Item label="Role" {...formItemLayout}>
          <Input disabled />
        </Form.Item>
        <Form.Item label="Major" {...formItemLayout}>
          <Input disabled />
        </Form.Item>
        <Form.Item label="'" {...formItemLayout}>
        <Button
            type="primary"
            htmlType="submit"
            className="login-form-button"
          >
            Submit
          </Button>
          </Form.Item>
        
    
      </div>
    );
  }
}

export default EditInformation;
