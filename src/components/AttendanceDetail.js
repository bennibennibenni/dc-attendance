import React, { Component } from "react";
import { Table, Form, Input } from "antd";
import "antd/dist/antd.css";

const data = [
  {
    key: "1",
    date: "29 December 2019",
    time: "12.00 WIB"
  },
  {
    key: "2",
    date: "30 Januari 2019",
    time: "12.30 WIB"
  },
  {
    key: "3",
    date: "31 March 2019",
    time: "11.00 WIB"
  },
  {
    key: "4",
    date: "4 April 2019",
    time: "12.00 WIB'"
  }
];

class AttedanceDetail extends Component {
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
        <Form.Item label="Name" {...formItemLayout}>
          <Input disabled />
        </Form.Item>
        <Form.Item label="Role" {...formItemLayout}>
          <Input disabled />
        </Form.Item>
        <Form.Item label="Total Absence" {...formItemLayout}>
          <Input disabled />
        </Form.Item>
        <Table
          columns={[
            { title: "Date", dataIndex: "date", key: "date" },
            { title: "Time", dataIndex: "time", key: "time" }
          ]}
          dataSource={data}
          onChange={this.handleChange}
        />
      </div>
    );
  }
}

export default AttedanceDetail;
