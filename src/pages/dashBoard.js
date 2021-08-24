import React from "react";
import { Layout, Menu, Card } from "antd";
import { PieChartOutlined } from "@ant-design/icons";
import Logo1 from "../assets/dashboardlogo.png";
import "../styles/dashboard.css";

const DashBoard = () => {
  //   const { SubMenu } = Menu;
  const { Header, Content, Sider } = Layout;

  return (
    <>
      <Layout>
        <Header
          className="header bg-white"
          style={{ display: "flex", flexDirection: "row" }}
        >
          <img src={Logo1} alt="dashboardlogo" style={{ objectFit: "none" }} />
          <Menu mode="horizontal">
            <Menu.Item>nav 1</Menu.Item>
            <Menu.Item>nav 2</Menu.Item>
          </Menu>
        </Header>
        <Layout>
          <Sider width={200} className="site-layout-background">
            <Menu
              mode="inline"
              defaultSelectedKeys={["1"]}
              style={{ height: "100%", borderRight: 0 }}
            >
              <Menu.Item key="1" icon={<PieChartOutlined />}>
                Dashboard
              </Menu.Item>
              <Menu.Item key="2" icon={<PieChartOutlined />}>
                Companies
              </Menu.Item>
              <Menu.Item key="3" icon={<PieChartOutlined />}>
                Order Pool
              </Menu.Item>
              <Menu.Item key="4" icon={<PieChartOutlined />}>
                Order History
              </Menu.Item>
              <Menu.Item key="5" icon={<PieChartOutlined />}>
                Subscriptions
              </Menu.Item>
              <Menu.Item key="6" icon={<PieChartOutlined />}>
                Earnings
              </Menu.Item>
              <Menu.Item key="7" icon={<PieChartOutlined />}>
                Reports
              </Menu.Item>
              <Menu.Item key="8" icon={<PieChartOutlined />}>
                Settings
              </Menu.Item>
              <Menu.Item key="9" icon={<PieChartOutlined />}>
                Supports
              </Menu.Item>
            </Menu>
          </Sider>
          <Layout
            className="bg-grey"
            style={{ padding: "21.5px 39px 24px", maxWidth: "none" }}
          >
            <text>Dashboard</text>
            <Content
              className="site-layout-background"
              style={{
                padding: 0,
                marginTop: 26.94,
              }}
            >
              <div style={{ display: "flex", flexDirection: "row" }}>
                <div style={{ marginRight: 40 }}>
                  <Card
                    style={{
                      width: 300,
                      // height: 150,
                      marginBottom: 41,
                      borderRadius: 12,
                      // Padding: "24px 25px 24px 25px",
                    }}
                  >
                    <p>Card content</p>
                    <p>Card content</p>
                    <p>Card content</p>
                  </Card>

                  <Card
                    style={{ width: 300, marginBottom: 41, borderRadius: 12 }}
                  >
                    <p>Card content</p>
                    <p>Card content</p>
                    <p>Card content</p>
                  </Card>

                  <Card
                    style={{ width: 300, marginBottom: 41, borderRadius: 12 }}
                  >
                    <p>Card content</p>
                    <p>Card content</p>
                    <p>Card content</p>
                  </Card>

                  <Card
                    style={{ width: 300, marginBottom: 41, borderRadius: 12 }}
                  >
                    <p>Card content</p>
                    <p>Card content</p>
                    <p>Card content</p>
                  </Card>
                </div>
                <div style={{ display: "flex", flexDirection: "column" }}>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      marginBottom: 40,
                    }}
                  >
                    <Card
                      style={{
                        width: 204,
                        height: 357,
                        marginRight: 40,
                        borderRadius: 12,
                      }}
                    >
                      <p>Card content</p>
                      <p>Card content</p>
                      <p>Card content</p>
                    </Card>

                    <Card style={{ width: 692, borderRadius: 12 }}>
                      <p>Card content</p>
                      <p>Card content</p>
                      <p>Card content</p>
                    </Card>
                  </div>
                  <div style={{ display: "flex", flexDirection: "row" }}>
                    <Card
                      style={{
                        width: 326,
                        height: 361,
                        marginRight: 40,
                        borderRadius: 12,
                      }}
                    >
                      <p>Card content</p>
                      <p>Card content</p>
                      <p>Card content</p>
                    </Card>

                    <Card style={{ width: 569.08, borderRadius: 12 }}>
                      <p>Card content</p>
                      <p>Card content</p>
                      <p>Card content</p>
                    </Card>
                  </div>
                </div>
              </div>
            </Content>
          </Layout>
        </Layout>
      </Layout>
    </>
  );
};

export default DashBoard;
