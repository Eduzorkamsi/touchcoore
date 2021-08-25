import React from "react";
import { Layout, Menu, Card, Avatar, Progress } from "antd";
import { DownOutlined } from "@ant-design/icons";
import Logo1 from "../assets/dashboardlogo.png";
import "../styles/dashboard.css";
// import Avatar1 from "../assets/avatar.png";
import Avatar2 from "../assets/avatar2.png";
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
import Dman2 from "../assets/dman2.png";
import Yline from "../assets/yline.png";
import Bline from "../assets/bline.png";
import Rline from "../assets/rline.png";

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
            {/* <Menu.Item>
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
            <Menu.Item>
              <div style={{ display: "flex", flexDirection: "column" }}>
                <text>Jude Adam</text>
                <text>Admin</text>
              </div>
            </Menu.Item> */}
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
                <text className="s-text" style={{ marginLeft: "28px" }}>
                  Dashboard
                </text>
              </Menu.Item>
              <Menu.Item key="2">
                <img src={Companies} alt="comp" />
                <text className="s-text" style={{ marginLeft: "28px" }}>
                  Companies
                </text>
              </Menu.Item>
              <Menu.Item key="3">
                <img src={Pool} alt="pool" />
                <text className="s-text" style={{ marginLeft: "28px" }}>
                  Order Pool
                </text>
              </Menu.Item>
              <Menu.Item key="4">
                <img src={History} alt="hist" />
                <text className="s-text" style={{ marginLeft: "28px" }}>
                  Order History
                </text>
              </Menu.Item>
              <Menu.Item key="5">
                <img src={Subscription} alt="sub" />
                <text className="s-text" style={{ marginLeft: "28px" }}>
                  Subscriptions
                </text>
              </Menu.Item>
              <Menu.Item key="6">
                <img src={Earnings} alt="earn" />
                <text className="s-text" style={{ marginLeft: "28px" }}>
                  Earnings
                </text>
              </Menu.Item>
              <Menu.Item key="7">
                <img src={Reports} alt="rep" />
                <text className="s-text" style={{ marginLeft: "28px" }}>
                  Reports
                </text>
              </Menu.Item>
              <Menu.Item key="8">
                <img src={Settings} alt="sett" />
                <text className="s-text" style={{ marginLeft: "28px" }}>
                  Settings
                </text>
              </Menu.Item>
              <Menu.Item key="9">
                <img src={Support} alt="supp" />
                <text className="s-text" style={{ marginLeft: "28px" }}>
                  Supports
                </text>
              </Menu.Item>
            </Menu>
          </Sider>
          <Layout
            className="bg-grey"
            style={{ padding: "21.5px 39px 24px", minWidth: "fit-content" }}
          >
            <text className="ml-text">Dashboard</text>
            <Content
              className="site-layout-background"
              style={{
                padding: 0,
                marginTop: 26.94,
              }}
            >
              <div style={{ display: "flex", flexDirection: "row" }}>
                <div style={{ marginRight: 40 }}>
                  {/* ----------------------------------- */}
                  {/* total exchange card */}
                  <Card
                    style={{
                      width: 300,
                      marginBottom: 41,
                      borderRadius: 12,
                      display: "flex",
                      flexDirection: "column",
                    }}
                  >
                    <div>
                      <text className="ls-text">
                        Total Exchange <br /> Pool Orders
                      </text>
                      <img
                        src={Gpool}
                        alt="gpool"
                        style={{ float: "right", marginTop: "-20px" }}
                      />
                    </div>
                    <div style={{ display: "flex", flexDirection: "row" }}>
                      <text className="r-num">504</text>
                      <img
                        style={{ objectFit: "contain" }}
                        src={Yline}
                        alt="line"
                      />
                      <text
                        className="xs-text"
                        style={{
                          color: "#92929D",
                          marginTop: "30.87px",
                          marginLeft: "76px",
                          display: "flex",
                          flexDirection: "row",
                        }}
                      >
                        Today{" "}
                        <DownOutlined
                          style={{
                            marginTop: "5px",
                            marginLeft: "2px",
                            color: "#000",
                          }}
                        />
                      </text>
                    </div>
                  </Card>
                  {/* ---------------------
total companies */}
                  <Card
                    style={{
                      width: 300,
                      marginBottom: 41,
                      borderRadius: 12,
                      display: "flex",
                      flexDirection: "column",
                    }}
                  >
                    <div>
                      <text className="ls-text">
                        Total <br /> Companies
                      </text>
                      <img
                        src={YCompany}
                        alt="gpool"
                        style={{ float: "right", marginTop: "-20px" }}
                      />
                    </div>
                    <div style={{ display: "flex", flexDirection: "row" }}>
                      <text className="r-num">504</text>
                      <img
                        style={{ objectFit: "contain" }}
                        src={Yline}
                        alt="line"
                      />
                      <text
                        className="xs-text"
                        style={{
                          color: "#92929D",
                          marginTop: "30.87px",
                          marginLeft: "76px",
                          display: "flex",
                          flexDirection: "row",
                        }}
                      >
                        Today{" "}
                        <DownOutlined
                          style={{
                            marginTop: "5px",
                            marginLeft: "2px",
                            color: "#000",
                          }}
                        />
                      </text>
                    </div>
                  </Card>
                  {/* -----------
total cancelled orders */}
                  <Card
                    style={{
                      width: 300,
                      marginBottom: 41,
                      borderRadius: 12,
                      display: "flex",
                      flexDirection: "column",
                    }}
                  >
                    <div>
                      <text className="ls-text">
                        Total <br /> Cancelled Orders
                      </text>
                      <img
                        src={Cancelled}
                        alt="gpool"
                        style={{ float: "right", marginTop: "-20px" }}
                      />
                    </div>
                    <div style={{ display: "flex", flexDirection: "row" }}>
                      <text className="r-num">504</text>
                      <img
                        style={{ objectFit: "contain" }}
                        src={Yline}
                        alt="line"
                      />
                      <text
                        className="xs-text"
                        style={{
                          color: "#92929D",
                          marginTop: "30.87px",
                          marginLeft: "76px",
                          display: "flex",
                          flexDirection: "row",
                        }}
                      >
                        Today{" "}
                        <DownOutlined
                          style={{
                            marginTop: "5px",
                            marginLeft: "2px",
                            color: "#000",
                          }}
                        />
                      </text>
                    </div>
                  </Card>
                  {/* ------
total created orders */}
                  <Card
                    style={{
                      width: 300,
                      marginBottom: 41,
                      borderRadius: 12,
                      display: "flex",
                      flexDirection: "column",
                    }}
                  >
                    <div>
                      <text className="ls-text">
                        Total <br /> Created Orders
                      </text>
                      <img
                        src={Ppool}
                        alt="gpool"
                        style={{ float: "right", marginTop: "-20px" }}
                      />
                    </div>
                    <div style={{ display: "flex", flexDirection: "row" }}>
                      <text className="r-num">504</text>
                      <img
                        style={{ objectFit: "contain" }}
                        src={Yline}
                        alt="line"
                      />
                      <text
                        className="xs-text"
                        style={{
                          color: "#92929D",
                          marginTop: "30.87px",
                          marginLeft: "76px",
                          display: "flex",
                          flexDirection: "row",
                        }}
                      >
                        Today{" "}
                        <DownOutlined
                          style={{
                            marginTop: "5px",
                            marginLeft: "2px",
                            color: "#000",
                          }}
                        />
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
                    {/* ---------companies sent orders to delivery pool today */}
                    <Card
                      style={{
                        width: 204,
                        height: 357,
                        marginRight: 40,
                        borderRadius: 12,
                        display: "flex",
                        flexDirection: "column",
                      }}
                    >
                      <div
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          marginBottom: 29.38,
                        }}
                      >
                        <text className="b-num">120</text>
                        <text className="xsb-text">
                          Companies sent orders <br /> to delivery pool today
                        </text>
                      </div>
                      <div style={{ marginBottom: "27.11px" }}>
                        <Avatar src={Avatar2} />
                      </div>
                      <text className="rs-num">+84%</text>
                      <img
                        style={{ objectFit: "contain" }}
                        src={Bline}
                        alt="line"
                      />
                      <text
                        className="xsb-text"
                        style={{ marginTop: "10.84px" }}
                      >
                        Compared to yesterday
                      </text>
                    </Card>
                    {/* -------------orders today */}
                    <Card style={{ width: 692, borderRadius: 12 }}>
                      <text>Orders Today</text>
                      <Progress type="circle" percent={86} width={80} />
                      <Progress type="circle" percent={67} width={80} />
                      <Progress type="circle" percent={14} width={80} />
                    </Card>
                  </div>
                  <div style={{ display: "flex", flexDirection: "row" }}>
                    {/* -----------exchange pool today */}
                    <Card
                      style={{
                        width: 326,
                        height: 361,
                        marginRight: 40,
                        borderRadius: 12,
                      }}
                    >
                      <div style={{ display: "flex", flexDirection: "row" }}>
                        <div
                          style={{ display: "flex", flexDirection: "column" }}
                        >
                          <text
                            style={{
                              fontSize: "16px",
                              fontWeight: 700,
                              minWidth: "max-content",
                            }}
                          >
                            Exchange Pool Today
                          </text>
                          <text
                            className="xs-text"
                            style={{ color: "#92929d" }}
                          >
                            Most orders picked by:
                          </text>
                          <img
                            src={Dman2}
                            alt="dman"
                            style={{
                              width: "fit-content",
                              marginTop: 10,
                              marginBottom: 10,
                            }}
                          />
                          <text style={{ fontSize: "16px", fontWeight: 700 }}>
                            FZ Deliveries
                          </text>
                          <text className="s-text">Allen, Lagos</text>
                          <text className="num r" style={{ marginTop: 15 }}>
                            504
                          </text>
                          <text className="s-text">Orders</text>
                          <text className="num b" style={{ marginTop: 15 }}>
                            267
                          </text>
                          <text className="s-text">Pushed to pool</text>
                        </div>
                        <div
                          style={{
                            display: "flex",
                            flexDirection: "column",
                            marginTop: "140.38px",
                            marginLeft: "-24px",
                          }}
                        >
                          <text className="b-num" style={{ fontSize: "30px" }}>
                            N340,000
                          </text>
                          <img
                            style={{ objectFit: "contain" }}
                            src={Rline}
                            alt="line"
                          />
                          <text
                            className="xsb-text"
                            style={{
                              marginTop: "10.84px",
                              minWidth: "max-content",
                            }}
                          >
                            Compared to yesterday
                          </text>
                        </div>
                      </div>
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
