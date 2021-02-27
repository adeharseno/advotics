import React from 'react';
import { Link } from 'react-router-dom';
import { Col, Row } from 'antd';
import { withRouter } from 'react-router-dom'

// style
import './header.css';
import Logo from "../../assets/images/advotics-logo-optimize.jpg";
import LogoAdvotics from "../../assets/images/advotics.png";
import Logout from "../../assets/images/logout.png";
import Profile from "../../assets/images/Profile.svg";

function HeaderPage() {
    return (
        <>
        <div className="header">
            <Row className="header-style" type="flex" align="middle">
                <Col 
                    xl={12} 
                    lg={12} 
                    md={12} 
                    sm={24} 
                    xs={24}>
                    <Link to="/">
                        <img 
                            src={Logo} 
                            alt="Advotics"
                            style={{ height: "38px" }}
                            />
                            <p>powered by</p>
                            <img 
                                src={LogoAdvotics} 
                                alt="Advotics"
                                style={{ height: "34px", top: "2px" }}
                                />
                    </Link>
                </Col>
                <Col 
                    xl={12} 
                    lg={12} 
                    md={12} 
                    sm={24} 
                    xs={24}
                    style={{ textAlign: "right" }}>
                    <Link to="" className="profile">
                        <div className="profile-desc">
                            <label>Username</label>
                            <span>Company Name</span>
                        </div>
                        <img 
                            src={Profile} 
                            alt="Profile"
                            style={{ width: "32px" }}
                            />
                    </Link>
                    <Link to="">
                        <img 
                            src={Logout} 
                            alt="Logout"
                            />
                    </Link>
                </Col>
            </Row>
        </div>
        </>
    );
} 

export default withRouter(HeaderPage);