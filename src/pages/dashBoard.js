import React from "react";
import { Layout, Menu, Card, Avatar, Progress, Badge } from "antd";
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
import { Link } from "react-router-dom";
import Cchart from "../assets/cchart.png";
// import Chartjs from "../component/chart";

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
          <Link to="/">
            <img
              src={Logo1}
              alt="dashboardlogo"
              style={{ objectFit: "none" }}
            />
          </Link>

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
                      <div
                        style={{
                          display: "flex",
                          flexDirection: "row",
                          marginTop: "10px",
                        }}
                      >
                        <text className="ml-text">Orders Today</text>
                        <text
                          className="xs-text"
                          style={{
                            color: "#92929D",
                            marginLeft: "65%",
                            display: "flex",
                            flexDirection: "row",
                            marginTop: "10px",
                          }}
                        >
                          Daily{" "}
                          <DownOutlined
                            style={{
                              marginLeft: "2px",
                              marginTop: "3px",
                              color: "#000",
                            }}
                          />
                        </text>
                      </div>
                      <div style={{ display: "flex", flexDirection: "row" }}>
                        <div
                          style={{
                            display: "flex",
                            flexDirection: "column",
                          }}
                        >
                          <text className="xsb-text">
                            <Badge color="green" />
                            Delivered
                          </text>
                          <text className="b-num" style={{ fontSize: "24px" }}>
                            320
                          </text>
                        </div>
                        <div
                          style={{
                            display: "flex",
                            flexDirection: "column",
                            marginLeft: "22px",
                          }}
                        >
                          <text className="xsb-text">
                            <Badge color="blue" />
                            Reviews
                          </text>
                          <text className="b-num" style={{ fontSize: "24px" }}>
                            230
                          </text>
                        </div>
                        <div
                          style={{
                            display: "flex",
                            flexDirection: "column",
                            marginLeft: "22px",
                          }}
                        >
                          <text className="xsb-text">
                            <Badge color="red" />
                            Cancelled
                          </text>
                          <text className="b-num" style={{ fontSize: "24px" }}>
                            80
                          </text>
                        </div>
                      </div>

                      <div style={{ float: "right" }}>
                        <Progress
                          type="circle"
                          percent={86}
                          width={80}
                          strokeColor="blue"
                        />
                        <Progress
                          type="circle"
                          percent={67}
                          width={80}
                          strokeColor="green"
                        />
                        <Progress
                          type="circle"
                          percent={14}
                          width={80}
                          strokeColor="red"
                        />
                      </div>
                      <img
                        src={Cchart}
                        alt="chart"
                        style={{ width: "-webkit-fill-available" }}
                      />
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
                      <text className="ml-text" style={{ marginTop: 30 }}>
                        Delivered Orders
                      </text>
                      <div style={{ marginTop: 28 }}>
                        <div style={{ display: "flex", flexDirection: "row" }}>
                          <text
                            style={{
                              fontSize: 10,
                              fontWeight: 400,
                              color: "#92929d",
                            }}
                          >
                            Today
                          </text>
                          <Progress
                            style={{
                              marginBottom: 25,
                              marginLeft: 55,
                            }}
                            strokeLinecap="square"
                            percent={75}
                            showInfo={false}
                            width={50}
                          />
                        </div>

                        <div style={{ display: "flex", flexDirection: "row" }}>
                          <text
                            style={{
                              fontSize: 10,
                              fontWeight: 400,
                              marginRight: 46,
                              color: "#92929d",
                            }}
                          >
                            Yesteray
                          </text>
                          <Progress
                            style={{ marginBottom: 25 }}
                            strokeLinecap="square"
                            percent={50}
                            showInfo={false}
                          />
                        </div>

                        <div style={{ display: "flex", flexDirection: "row" }}>
                          <text
                            style={{
                              fontSize: 10,
                              fontWeight: 400,
                              marginRight: 46,
                              minWidth: "fit-content",
                              color: "#92929d",
                            }}
                          >
                            01 March
                          </text>
                          <Progress
                            style={{ marginBottom: 25 }}
                            strokeLinecap="square"
                            percent={60}
                            showInfo={false}
                          />
                        </div>

                        <div style={{ display: "flex", flexDirection: "row" }}>
                          <text
                            style={{
                              fontSize: 10,
                              fontWeight: 400,
                              marginRight: 46,
                              minWidth: "fit-content",
                              color: "#92929d",
                            }}
                          >
                            02 March
                          </text>
                          <Progress
                            style={{ marginBottom: 25 }}
                            strokeLinecap="square"
                            percent={35}
                            showInfo={false}
                          />
                        </div>

                        <div style={{ display: "flex", flexDirection: "row" }}>
                          <text
                            style={{
                              fontSize: 10,
                              fontWeight: 400,
                              color: "#92929d",
                              minWidth: "fit-content",
                            }}
                          >
                            03 March
                          </text>
                          <Progress
                            style={{ marginBottom: 25, marginLeft: 46 }}
                            strokeLinecap="square"
                            percent={70}
                            showInfo={false}
                          />
                        </div>
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
