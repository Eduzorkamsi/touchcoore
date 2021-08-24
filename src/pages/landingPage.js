import React, { useState } from "react";
import { Button, Row, Layout, Progress, Form, Input } from "antd";
import "../styles/landingPage.css";
import Logo from "../assets/Dms.png";
import Dman from "../assets/Dman.png";
import { Link } from "react-router-dom";

const LandingPage = () => {
  const { Header } = Layout;
  const [componentSize, setComponentSize] = useState("default");

  const onFormLayoutChange = ({ size }) => {
    setComponentSize(size);
  };
  return (
    <>
      <Layout className="bg-grey">
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
            <div
              className="right bg-white"
              style={{ width: "45%", marginBottom: 80 }}
            >
              <div style={{ margin: 48 }}>
                <Progress strokeLinecap="square" percent={75} />
                <h3 className="m-text" style={{ marginTop: 40 }}>
                  Basic Information
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
                  <div style={{ display: "flex", flexDirection: "row" }}>
                    <Form.Item label="">
                      <Input
                        placeholder="Company Name"
                        style={{ marginRight: 16 }}
                      />
                    </Form.Item>
                    <Form.Item label="">
                      <Input placeholder="Last Name" />
                    </Form.Item>
                  </div>

                  <Form.Item label="">
                    <Input
                      placeholder="Company Address"
                      style={{ width: "100%" }}
                    />
                  </Form.Item>
                  <Form.Item label="">
                    <Input
                      placeholder="Phone Number"
                      style={{ width: "100%" }}
                    />
                  </Form.Item>
                  <Form.Item label="">
                    <Input
                      placeholder="Company Mail Address"
                      style={{ width: "100%" }}
                    />
                  </Form.Item>
                  <Form.Item label="">
                    <Input placeholder="Password" style={{ width: "100%" }} />
                  </Form.Item>
                </Form>

                <text className="xxs-text">
                  By clicking "Next" you agree to our{" "}
                  <span className="terms">
                    Terms of Service, Privacy
                    <br />
                    Policy,
                  </span>
                  and to receive marketing communications from Envoy.
                </text>

                <Row style={{ marginTop: 40 }}>
                  <text
                    className="xs-text"
                    style={{ marginLeft: 52, marginRight: 87, marginTop: 8 }}
                  >
                    Got an account?
                    <Link to="/logIn">
                      <span className="terms">Sign in</span>
                    </Link>
                  </text>

                  <Button className="btn">Register</Button>
                </Row>
              </div>
            </div>
          </Row>
        </div>
      </Layout>
    </>
  );
};

export default LandingPage;
