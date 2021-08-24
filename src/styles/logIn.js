import React, { useState } from "react";
import { Button, Row, Layout, Form, Input } from "antd";
import "../styles/landingPage.css";
import Logo from "../assets/Dms.png";
import Dman from "../assets/Dman.png";
import { Link } from "react-router-dom";

const LogIn = () => {
  const { Header } = Layout;
  const [componentSize, setComponentSize] = useState("default");

  const onFormLayoutChange = ({ size }) => {
    setComponentSize(size);
  };
  return (
    <>
      <Layout className="bg-grey" style={{ height: "100vh" }}>
        <Header className="bg-grey">
          <img src={Logo} alt="logo" />
        </Header>
        <div style={{ marginLeft: 130, marginRight: 154 }}>
          <Row style={{ width: "100%" }}>
            {/* left side */}
            <div className="left" style={{ width: "55%" }}>
              <img style={{ width: "fit-content" }} src={Dman} alt="Dman" />
              <text className="lg-text" style={{ marginTop: 32 }}>
                Let’s help you manage your <br />
                riders and delivery systems.
              </text>
              <text
                className="xs-text"
                style={{ marginTop: 25, textAlign: "-webkit-center" }}
              >
                Every logistics company whether it’s a multi-national branding
                <br />
                corporation or a regular local deserves the basic standard
                necessities
                <br /> in achieving a high service delivery
              </text>
              <Button className="btn" style={{ marginTop: 24.9 }}>
                Get Started
              </Button>
            </div>
            {/* right side */}
            <div className="right bg-white" style={{ width: "45%" }}>
              <div style={{ margin: 48 }}>
                <h3 className="m-text" style={{ marginTop: 40 }}>
                  You're Welcome Back!
                </h3>
                <h6 className="s-text" style={{ marginTop: 8 }}>
                  Enter the following information below
                </h6>
                <Form
                  layout="horizontal"
                  initialValues={{
                    size: componentSize,
                  }}
                  onValuesChange={onFormLayoutChange}
                  size={componentSize}
                  style={{ marginTop: 50 }}
                >
                  <Form.Item label="">
                    <Input
                      placeholder="Email Address"
                      style={{ width: "100%" }}
                    />
                  </Form.Item>

                  <Form.Item label="">
                    <Input placeholder="Password" style={{ width: "100%" }} />
                  </Form.Item>
                </Form>

                <text
                  className="xxs-text terms"
                  style={{ display: "flex", justifyContent: "flex-end" }}
                >
                  Forgot Password?
                </text>

                <Row
                  style={{
                    marginTop: 40,
                    display: "flex",
                    justifyContent: "space-between",
                  }}
                >
                  <text className="xs-text" style={{ marginTop: 8 }}>
                    Just joining us here?
                    <Link to="/">
                      <span className="terms">Register Now</span>
                    </Link>
                  </text>

                  <Link to="/dashBoard">
                    <Button className="btn">LogIn</Button>
                  </Link>
                </Row>
              </div>
            </div>
          </Row>
        </div>
      </Layout>
    </>
  );
};

export default LogIn;
