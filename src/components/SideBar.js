import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Layout, Menu, Icon } from "antd";
import "antd/dist/antd.css";

const { Sider } = Layout;

class SideBar extends Component {
  state = { collapsed: false };

  onCollapse = collapsed => {
    this.setState({ collapsed });
  };

  render() {
    return (
      <Sider
        style={{ height: "100" }}
        collapsible
        collapsed={this.state.collapsed}
        onCollapse={this.onCollapse}
      >
        <div>
          <div style={{ margin: 16 }}>
            <Link to="/"></Link>
          </div>
          <Menu theme="dark" mode="inline" defaultSelectedKeys={["1"]}>
          <Menu.Item key="8">
              <Icon type="schedule" />
              <span>Edit Information</span>
              <Link to="/edit-information/" />
            </Menu.Item>
            <Menu.Item key="7">
              <Icon type="schedule" />
              <span>Summary</span>
              <Link to="/attendance/" />
            </Menu.Item>
            <Menu.Item key="6">
              <Icon type="schedule" />
              <span>Attendance Detail</span>
              <Link to="/attendance-detail/" />
            </Menu.Item>
            <Menu.Item key="5">
              <Icon type="schedule" />
              <span>Input Feedback</span>
              <Link to="/feedback/" />
            </Menu.Item>
            <Menu.Item key="4">
              <Icon type="schedule" />
              <span>Home</span>
              <Link to="/home/" />
            </Menu.Item>
            <Menu.Item key="3">
              <Icon type="user" />
              <span>Students</span>
              <Link to="/students" />
            </Menu.Item>
            <Menu.Item key="2">
              <Icon type="schedule" />
              <span>Calender</span>
              <Link to="/calender/" />
            </Menu.Item>
            <Menu.Item key="1">
              <Icon type="login" />
              <span>Login / Logout</span>
              <Link to="/login/" />
            </Menu.Item>
          </Menu>
        </div>
      </Sider>
    );
  }
}

export default SideBar;
