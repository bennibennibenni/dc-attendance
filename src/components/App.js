import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { Layout } from 'antd';
import 'antd/dist/antd.css';

import Feedback from './Feedback';
import SideBar from './SideBar';
import Header from './Header';
import Students from './Students';
import Login from './Login';
import Home from './Home';
import ViewCalender from './ViewCalender';
import AttendanceDetail from './AttendanceDetail';
import EditInformation from './EditInformation';
import { Overview, Individual } from './Attendance';

const Dashboard = () => <div>Dashboard</div>;

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Layout>
          <SideBar />
          <Layout>
            <Header />
            <Layout.Content
              style={{
                margin: '24px 16px',
                padding: 24,
                background: '#fff',
                minHeight: '100vh'
              }}>
              <Route exact path="/" component={Dashboard} />
              <Route exact path="/attendance" component={Overview} />
              <Route exact path="/attendance/individual" component={Individual} />

              <Route exact path="/edit-information" component={EditInformation} />
              <Route exact path="/feedback" component={Feedback} />
              <Route exact path="/home" component={Home} />
              <Route exact path="/attendance-detail" component={AttendanceDetail} />
              <Route exact path="/calender" component={ViewCalender} />
              <Route exact path="/students" component={Students} />
              <Route exact path="/login" component={Login} />
            </Layout.Content>
          </Layout>
        </Layout>
      </BrowserRouter>
    );
  }
}

export default App;
