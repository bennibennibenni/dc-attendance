import React from "react";
import { Button, Modal, Form, Input, Radio } from "antd";
import "antd/dist/antd.css";

const CollectionCreateForm = Form.create({ name: "form_in_modal" })(
  // eslint-disable-next-line
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
              {getFieldDecorator("title", {
                rules: [
                  {
                    required: true,
                    message: "Please input your name!"
                  }
                ]
              })(<Input />)}
            </Form.Item>
            <Form.Item label="Name">
              {getFieldDecorator("title", {
                rules: [
                  {
                    required: true,
                    message: "Please input your name!"
                  }
                ]
              })(<Input type="textarea" />)}
            </Form.Item>
            <Form.Item label="Position">
              {getFieldDecorator("title", {
                rules: [
                  {
                    required: true,
                    message: "Please input your position!"
                  }
                ]
              })(<Input type="textarea" />)}
            </Form.Item>
            <Form.Item label="Major">
              {getFieldDecorator("title", {
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
          <Form.Item {...formItemLayout}>
            <Radio.Group
              defaultValue="vertical"
              onChange={this.handleFormLayoutChange}
            ></Radio.Group>
          </Form.Item>

          <Form.Item label="Input your NIM" {...formItemLayout}>
            <Input placeholder="2001558126" />
          </Form.Item>
          <Form.Item {...buttonItemLayout}>
            <Button type="primary">Submit</Button>
            <Button type="primary" onClick={this.showModal}>
              Register
            </Button>
            <CollectionCreateForm
              wrappedComponentRef={this.saveFormRef}
              visible={this.state.visible}
              onCancel={this.handleCancel}
              onCreate={this.handleCreate}
            />
          </Form.Item>
        </Form>
      </div>
    );
  }
}

export default Form.create()(Home);
