import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Calendar, Card, Col, Row, Statistic, Tag, Typography } from "antd";
import "antd/dist/antd.css";

class TotalStudent extends Component {
  render() {
    return (
      <div>
        <Row>
          <Col span={6}>
            <Row style={{ margin: 10 }}>
              <Card title="Today's brief">
                <Card.Grid style={{ width: "33.3%", textAlign: "center" }}>
                  <Statistic
                    title="On Time"
                    value={23}
                    valueStyle={{ color: "#3f8600" }}
                  />
                </Card.Grid>
                <Card.Grid style={{ width: "33.3%", textAlign: "center" }}>
                  <Statistic
                    title="Late"
                    value={1}
                    valueStyle={{ color: "#d48806" }}
                  />
                </Card.Grid>
                <Card.Grid style={{ width: "33.3%", textAlign: "center" }}>
                  <Statistic
                    title="Absent"
                    value={3}
                    valueStyle={{ color: "#cf1322" }}
                  />
                </Card.Grid>
              </Card>
            </Row>
          </Col>
        </Row>
      </div>
    );
  }
}

export default TotalStudent;
