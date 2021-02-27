import React from 'react';
import { Col, Row, Typography } from "antd";
import Sidebar from "../../components/Atoms/Sidebar"
import { Link } from 'react-router-dom';
import Chart from "react-google-charts";

import "./dashboard.css";
import Help from "../../assets/images/Help.png";
import Sales from "../../assets/images/Sales-Turnover.svg";
import LinkMore from "../../assets/images/more.svg";

const { Paragraph, Title } = Typography;
const data = [
  ["Element", "Nett", { role: "style" }],
  ["Jan 12", 8.94, "#37B04C"],
  ["Tue", 10.49, "#37B04C"],
  ["Wed", 19.3, "#37B04C"],
  ["Thu", 21.45, "#37B04C"],
  ["Fri", 8.94, "#37B04C"],
  ["Sat", 10.49, "#37B04C"],
  ["Sun", 19.3, "#37B04C"]
];

function Dashboard() {

  return (
    <>
      <Sidebar />
      <Row className="main-section">
        <Col
          xl={{ span: 24, offset: 1 }}
          lg={{ span: 24, offset: 1 }}
          md={{ span: 24, offset: 1 }}
          sm={{ span: 24, offset: 0 }}
          xs={{ span: 24, offset: 0 }}
        >
          <Row>
            <Col
              xl={{ span: 21, offset: 1 }}
              lg={{ span: 21, offset: 1 }}
              md={{ span: 21, offset: 1 }}
              sm={{ span: 22, offset: 1 }}
              xs={{ span: 22, offset: 1 }}
              style={{ display: 'flex' }}
            >
                <div>
                    <span>
                        <Title level={1} className="title-primary">
                          Dashboard
                        </Title>
                    </span>
                </div>
            </Col>
            <Col
              xl={{ span: 12, offset: 1 }}
              lg={{ span: 12, offset: 1 }}
              md={{ span: 12, offset: 1 }}
              sm={{ span: 24, offset: 1 }}
              xs={{ span: 24, offset: 1 }}
              style={{ display: 'flex' }}
            >
                <div>
                </div>
            </Col>
          </Row>
          <Row>
            <Col
                xl={{ span: 21, offset: 1 }}
                lg={{ span: 21, offset: 1 }}
                md={{ span: 21, offset: 1 }}
                sm={{ span: 22, offset: 1 }}
                xs={{ span: 22, offset: 1 }}
                style={{ display: 'flex' }}
              >
              <Row className="card-insight" style={{ width: "100%"}}>
                <Col span={12}>
                  <Title level={5}>MARKET INSIGHTS</Title>
                </Col>
                <Col span={12} style={{ textAlign: "right" }}>
                  <Link to="">
                    <img 
                      src={Help} 
                      alt="Help"
                      />
                    <Paragraph>Click Here for Help</Paragraph>
                  </Link>
                </Col>
              </Row>
            </Col>
          </Row>
          <Row>
            <Col
              xl={{ span: 21, offset: 1 }}
              lg={{ span: 21, offset: 1 }}
              md={{ span: 21, offset: 1 }}
              sm={{ span: 22, offset: 1 }}
              xs={{ span: 22, offset: 1 }}
              style={{ display: 'flex' }}
            >
                <div className="card-small">
                  <div className="card-small-content">
                    <p>Sales Turnover</p>
                    <Title level={2}>Rp 3,600,000</Title>
                    <span><label>13.8%</label> last period in product sold</span>
                  </div>
                  <div className="card-small-image">
                    <img 
                      src={Sales} 
                      alt="Sales Turnover"
                      style={{ height: "60px" }}
                      />
                  </div>
                  <Link to="" className="card-link">
                    <img 
                      src={LinkMore} 
                      alt="Link More"
                      style={{ height: "24px" }}
                      />
                  </Link>
                </div>
            </Col>
          </Row>
          <Row>
            <Col
              xl={{ span: 14, offset: 1 }}
              lg={{ span: 14, offset: 1 }}
              md={{ span: 14, offset: 1 }}
              sm={{ span: 22, offset: 1 }}
              xs={{ span: 22, offset: 1 }}
              style={{ display: 'flex' }}
            >
                <div className="card-large">
                  <Title level={4}>AVERAGE PURCHASE VALUE</Title>
                  <Chart
                    chartType="ColumnChart"
                    width="600px"
                    height="400px"
                    data={data}
                  />
                  <Link to="" className="card-link">
                    <img 
                      src={LinkMore} 
                      alt="Link More"
                      style={{ height: "24px" }}
                      />
                  </Link>
                </div>
            </Col>
          </Row>
        </Col>
      </Row>
    </>
  );
}

export default Dashboard;
