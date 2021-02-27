import React from 'react';
import { Col, Row, Typography } from "antd";
import Sidebar from "../../components/Atoms/Sidebar"
import { Link } from 'react-router-dom';

import "./dashboard.css";
import Help from "../../assets/images/Help.png";

const { Paragraph, Title } = Typography;

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
        </Col>
      </Row>
    </>
  );
}

export default Dashboard;
