import React from "react";
import styled from "styled-components";
import Clock from "react-live-clock";
import { Button, Modal, Form, Input, Radio, Select } from "antd";
import "antd/dist/antd.css";

const { Option } = Select;

const StyledButton = styled(Button)`
  margin-left: 20px;
`;

const CollectionCreateForm = Form.create({ name: "form_in_modal" })(
  class extends React.Component {
    render() {
      const { visible, onCancel, onCreate, form } = this.props;
      const { getFieldDecorator } = form;
      return (
        <Modal
          visible={visible}
          title="Register Student"
          okText="Register"
          onCancel={onCancel}
          onOk={onCreate}
        >
          <Form layout="vertical">
            <Form.Item label="NIM">
              {getFieldDecorator("nim", {
                rules: [
                  {
                    required: true,
                    message: "Please input your name!"
                  }
                ]
              })(<Input />)}
            </Form.Item>
            <Form.Item label="Name">
              {getFieldDecorator("name", {
                rules: [
                  {
                    required: true,
                    message: "Please input your name!"
                  }
                ]
              })(<Input type="textarea" />)}
            </Form.Item>
            <Form.Item label="Role">
              {getFieldDecorator("role", {
                rules: [{ required: true, message: "Please select your Role!" }]
              })(
                <Select onChange={this.handleSelectChange}>
                  <Option value="kobid1">Koordinator Bidang 1</Option>
                  <Option value="kobid2">Koordinator Bidang 2</Option>
                  <Option value="kobid3">Koordinator Bidang 3</Option>
                  <Option value="kobid4">Koordinator Bidang 4</Option>
                </Select>
              )}
            </Form.Item>
            <Form.Item label="Major">
              {getFieldDecorator("major", {
                rules: [
                  {
                    required: true,
                    message: "Please input your major!"
                  }
                ]
              })(<Input type="textarea" />)}
            </Form.Item>
          </Form>
        </Modal>
      );
    }
  }
);
class Home extends React.Component {
  constructor() {
    super();
    this.state = {
      formLayout: "horizontal"
    };
  }

  state = {
    visible: false
  };

  showModal = () => {
    this.setState({ visible: true });
  };

  handleCancel = () => {
    this.setState({ visible: false });
  };

  handleCreate = () => {
    const { form } = this.formRef.props;
    form.validateFields((err, values) => {
      if (err) {
        return;
      }

      console.log("Received values of form: ", values);
      form.resetFields();
      this.setState({ visible: false });
    });
  };

  saveFormRef = formRef => {
    this.formRef = formRef;
  };

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
    const buttonItemLayout =
      formLayout === "horizontal"
        ? {
            wrapperCol: { span: 14, offset: 4 }
          }
        : null;
    return (
      <div>
        <Form layout={formLayout}>
          <Form.Item {...formItemLayout}></Form.Item>

          <Clock
            format={"dddd, MMMM Mo, YYYY, h:mm:ss A"}
            timezone={"Asia/Jakarta"}
          />
          <Form.Item>
            Input your NIM
            <Input placeholder="2001558126" />
          </Form.Item>

          <Button type="primary">Submit</Button>
          <StyledButton type="primary" onClick={this.showModal}>
            Register
          </StyledButton>
          <CollectionCreateForm
            wrappedComponentRef={this.saveFormRef}
            visible={this.state.visible}
            onCancel={this.handleCancel}
            onCreate={this.handleCreate}
          />
        </Form>
      </div>
    );
  }
}

export default Form.create()(Home);
