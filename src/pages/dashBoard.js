import React from "react";
import { Layout, Menu, Card, Avatar, Badge, Progress } from "antd";
import { DownOutlined } from "@ant-design/icons";
import Logo1 from "../assets/dashboardlogo.png";
import "../styles/dashboard.css";
import Avatar1 from "../assets/avatar.png";
import Dashboardimg from "../assets/Dashboard.png";
import Companies from "../assets/Companies.png";
import Cancelled from "../assets/cancelled.png";
import Earnings from "../assets/earnings.png";
import Gpool from "../assets/gpool.png";
import Pool from "../assets/pool.png";
import Ppool from "../assets/ppool.png";
import History from "../assets/history.png";
import Reports from "../assets/reports.png";
import Settings from "../assets/settings.png";
import Subscription from "../assets/subscription.png";
import Support from "../assets/support.png";
import YCompany from "../assets/ycompany.png";

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
          <Menu
            mode="horizontal"
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginLeft: "8%",
            }}
          >
            <Menu.Item>
              <text>Search</text>
            </Menu.Item>
            <Menu.Item className="avatar1">
              {" "}
              <span>
                <Badge dot>
                  <Avatar src={Avatar1} />
                </Badge>
              </span>
            </Menu.Item>
          </Menu>
        </Header>
        <Layout>
          <Sider width={200} className="site-layout-background">
            <Menu
              mode="inline"
              defaultSelectedKeys={["1"]}
              style={{ height: "100%", borderRight: 0 }}
            >
              <Menu.Item key="1">
                <img src={Dashboardimg} alt="dash" />
                Dashboard
              </Menu.Item>
              <Menu.Item key="2">
                <img src={Companies} alt="comp" />
                Companies
              </Menu.Item>
              <Menu.Item key="3">
                <img src={Pool} alt="pool" />
                Order Pool
              </Menu.Item>
              <Menu.Item key="4">
                <img src={History} alt="hist" />
                Order History
              </Menu.Item>
              <Menu.Item key="5">
                <img src={Subscription} alt="sub" />
                Subscriptions
              </Menu.Item>
              <Menu.Item key="6">
                <img src={Earnings} alt="earn" />
                Earnings
              </Menu.Item>
              <Menu.Item key="7">
                <img src={Reports} alt="rep" />
                Reports
              </Menu.Item>
              <Menu.Item key="8">
                <img src={Settings} alt="sett" />
                Settings
              </Menu.Item>
              <Menu.Item key="9">
                <img src={Support} alt="supp" />
                Supports
              </Menu.Item>
            </Menu>
          </Sider>
          <Layout
            className="bg-grey"
            style={{ padding: "21.5px 39px 24px", minWidth: "fit-content" }}
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
                      display: "flex",
                      flexDirection: "column",
                    }}
                  >
                    <div style={{ display: "flex", flexDirection: "row" }}>
                      <text>
                        Total Exchange <br /> Pool Orders
                      </text>
                      <img src={Gpool} alt="gpool" />
                    </div>
                    <div style={{ display: "flex", flexDirection: "row" }}>
                      <text>504</text>
                      <text>
                        Today <DownOutlined />
                      </text>
                    </div>
                  </Card>

                  <Card
                    style={{
                      width: 300,
                      marginBottom: 41,
                      borderRadius: 12,
                      display: "flex",
                      flexDirection: "column",
                    }}
                  >
                    <div style={{ display: "flex", flexDirection: "row" }}>
                      <text>
                        Total Exchange <br /> Pool Orders
                      </text>
                      <img src={YCompany} alt="gpool" />
                    </div>
                    <div style={{ display: "flex", flexDirection: "row" }}>
                      <text>504</text>
                      <text>
                        Today <DownOutlined />
                      </text>
                    </div>
                  </Card>

                  <Card
                    style={{
                      width: 300,
                      marginBottom: 41,
                      borderRadius: 12,
                      display: "flex",
                      flexDirection: "column",
                    }}
                  >
                    <div style={{ display: "flex", flexDirection: "row" }}>
                      <text>
                        Total Exchange <br /> Pool Orders
                      </text>
                      <img src={Cancelled} alt="gpool" />
                    </div>
                    <div style={{ display: "flex", flexDirection: "row" }}>
                      <text>504</text>
                      <text>
                        Today <DownOutlined />
                      </text>
                    </div>
                  </Card>

                  <Card
                    style={{
                      width: 300,
                      marginBottom: 41,
                      borderRadius: 12,
                      display: "flex",
                      flexDirection: "column",
                    }}
                  >
                    <div style={{ display: "flex", flexDirection: "row" }}>
                      <text>
                        Total Exchange <br /> Pool Orders
                      </text>
                      <img src={Ppool} alt="gpool" />
                    </div>
                    <div style={{ display: "flex", flexDirection: "row" }}>
                      <text>504</text>
                      <text>
                        Today <DownOutlined />
                      </text>
                    </div>
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
                      <Progress type="circle" percent={86} width={80} />
                      <Progress type="circle" percent={67} width={80} />
                      <Progress type="circle" percent={14} width={80} />
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
                      <text className="m-text" style={{ marginTop: 30 }}>
                        Delivered Orders
                      </text>
                      <div style={{ marginTop: 10 }}>
                        <Progress
                          style={{ marginBottom: 25 }}
                          strokeLinecap="square"
                          percent={75}
                        />
                        <Progress
                          style={{ marginBottom: 25 }}
                          strokeLinecap="square"
                          percent={50}
                        />
                        <Progress
                          style={{ marginBottom: 25 }}
                          strokeLinecap="square"
                          percent={60}
                        />
                        <Progress
                          style={{ marginBottom: 25 }}
                          strokeLinecap="square"
                          percent={35}
                        />
                        <Progress
                          style={{ marginBottom: 25 }}
                          strokeLinecap="square"
                          percent={70}
                        />
                      </div>
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
