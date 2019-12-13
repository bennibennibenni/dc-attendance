import React from "react";
import { Form, Input, Button, Radio } from 'antd';


import "antd/dist/antd.css";

class Home extends React.Component {
  constructor() {
    super();
    this.state = {
      formLayout: 'horizontal',
    };
  }

  handleFormLayoutChange = e => {
    this.setState({ formLayout: e.target.value });
  };

  render() {
    const { formLayout } = this.state;
    const formItemLayout =
      formLayout === 'horizontal'
        ? {
            labelCol: { span: 4 },
            wrapperCol: { span: 14 },
          }
        : null;
    const buttonItemLayout =
      formLayout === 'horizontal'
        ? {
            wrapperCol: { span: 14, offset: 4 },
          }
        : null;
    return (
      <div>
        <Form layout={formLayout}>
          <Form.Item {...formItemLayout}>
            <Radio.Group defaultValue="vertical" onChange={this.handleFormLayoutChange}>
            </Radio.Group>
          </Form.Item>
        
          <Form.Item label="Input your NIM" {...formItemLayout}>
            <Input placeholder="2001558126" />
          </Form.Item>
          <Form.Item {...buttonItemLayout}>
            <Button type="primary">Submit</Button>
          </Form.Item>
        </Form>
      </div>
    );
  }
}

export default Form.create()(Home)
