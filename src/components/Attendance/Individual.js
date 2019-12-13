import React, { Component } from 'react';
import { Calendar, Card, Select, Typography } from 'antd';
import 'antd/dist/antd.css';

const data = [
  'Beatrice Esquivel',
  'Caine Crosby',
  'Carmen Cordova',
  'Elicia Blevins',
  'Everly Carson',
  'Isabella-Rose Salt',
  'Lillie-May Villanueva',
  'Primrose Dixon',
  'Remy Williamson',
  'Stephanie Foreman'
];

let dateCellRender = value => {
  if (value.day() === 0 || value.day() === 6) {
    return <Card style={{ backgroundColor: '#fff1f0' }} bordered={false} />;
  }
  if (value.format('YYYY/MM/DD') === '2019/03/18') {
    return (
      <Typography.Title level={3} style={{ color: '#3f8600' }} align="center">
        On Time
      </Typography.Title>
    );
  } else if (value.format('YYYY/MM/DD') === '2019/03/19') {
    return (
      <Typography.Title level={3} style={{ color: '#cf1322' }} align="center">
        Absent
      </Typography.Title>
    );
  }
  return null;
};

class Individual extends Component {
  state = {
    dataSource: data,
    searchData: '',
    showCalendar: false
  };

  render() {
    return (
      <div>
        <Select
          showSearch
          style={{ width: 200 }}
          onChange={() => this.setState({ showCalendar: true })}
          placeholder="Select an employee">
          {data.map(name => (
            <Select.Option value={name}>{name}</Select.Option>
          ))}
        </Select>
        {this.state.showCalendar ? <Calendar dateCellRender={dateCellRender} /> : <div />}
      </div>
    );
  }
}

export default Individual;
