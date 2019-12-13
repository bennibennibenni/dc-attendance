import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Card, Col, Row, Statistic, Tag, Typography } from 'antd';
import 'antd/dist/antd.css';

let dateCellRender = value => {
  if (value.format('YYYY/MM/DD') === '2019/03/18') {
    return (
      <Typography align="center">
        <Statistic value={88.8} precision={1} valueStyle={{ color: '#3f8600' }} suffix="%" />
      </Typography>
    );
  }
  return null;
};

let monthCellRender = value => {
  if (value.format('YYYY/MM') === '2019/03') {
    return (
      <Typography align="center">
        <Statistic value={79.2} precision={1} valueStyle={{ color: '#3f8600' }} suffix="%" />
      </Typography>
    );
  }
  return null;
};

class Overview extends Component {
  render() {
    return (
      <div>
        <Row>
          <Col span={18}>
            <Calendar dateCellRender={dateCellRender} monthCellRender={monthCellRender} />
          </Col>
          <Col span={6}>
            <Row style={{ margin: 10 }}>
              <Card title="Today's brief">
                <Card.Grid style={{ width: '33.3%', textAlign: 'center' }}>
                  <Statistic title="On Time" value={23} valueStyle={{ color: '#3f8600' }} />
                </Card.Grid>
                <Card.Grid style={{ width: '33.3%', textAlign: 'center' }}>
                  <Statistic title="Late" value={1} valueStyle={{ color: '#d48806' }} />
                </Card.Grid>
                <Card.Grid style={{ width: '33.3%', textAlign: 'center' }}>
                  <Statistic title="Absent" value={3} valueStyle={{ color: '#cf1322' }} />
                </Card.Grid>
              </Card>
            </Row>
            <Row style={{ margin: 10 }}>
              <Card title="Late & Absents">
                <Tag color="#d48806">
                  <Link to="/students">John Brown</Link>
                </Tag>
                <Tag color="#cf1322">
                  <Link to="/students">Jim Green</Link>
                </Tag>
                <Tag color="#cf1322">
                  <Link to="/students">Joe Black</Link>
                </Tag>
                <Tag color="#cf1322">
                  <Link to="/students">Jim Red</Link>
                </Tag>
              </Card>
            </Row>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Overview;
