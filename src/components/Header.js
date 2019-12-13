import React, { Component } from 'react';
import { Layout } from 'antd';
import 'antd/dist/antd.css';

class Header extends Component {
  render() {
    return (
      <Layout.Header style={{ background: '#fff' }}>
        <p>It's Benni</p>
      </Layout.Header>
    );
  }
}

export default Header;
