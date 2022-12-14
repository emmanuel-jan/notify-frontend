import React, { useState } from "react";
import PropTypes from "prop-types";
import {
  Breadcrumb,
  Layout,
  Menu,
  theme,
  Typography,
  Row,
  Col,
  Button,
  Space,
  Card,
  Modal,
  Checkbox,
  Form,
  Input,
} from "antd";
import cover from "../../../assets/img/cover-img.svg";
import proven from "../../../assets/img/proven.svg";
import scale from "../../../assets/img/scale.svg";
import email from "../../../assets/img/email.svg";
import { DollarCircleOutlined } from "@ant-design/icons";
import "./LandingPage.css";
import { motion, useScroll } from "framer-motion";

const { Header, Content, Footer } = Layout;
const { Title, Text, Paragraph } = Typography;

const LandingPage = (props) => {
  const [open, setOpen] = useState(false);
  const [confirmLoading, setConfirmLoading] = useState(false);
  const [modalText, setModalText] = useState("Content of the modal");
  const showModal = () => {
    setOpen(true);
  };
  const handleOk = () => {
    setModalText("The modal will be closed after two seconds");
    setConfirmLoading(true);
    setTimeout(() => {
      setOpen(false);
      setConfirmLoading(false);
    }, 2000);
  };
  const handleCancel = () => {
    console.log("Clicked cancel button");
    setOpen(false);
  };
  const onFinish = (values) => {
    console.log("Success:", values);
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  const { scrollYProgress } = useScroll();
  return (
    <Layout className="thefont">
      <Header
        style={{
          position: "sticky",
          top: 0,
          zIndex: 1,
          width: "100%",
          backgroundColor: "#1890ff",
        }}
      >
        <Row justify="center">
          <Col xs={24} sm={24} md={5} lg={5}>
            <Title
              className="thefont"
              style={{ margin: "0", paddingTop: "10px", color: "white" }}
              type="secondary"
              level={2}
            >
              <motion.div initial={{y:-250}} animate={{y:0}} transition={{delay:0.5}}>
              Notify
              </motion.div>
              
            </Title>
          </Col>
          <Col align="center" xs={24} sm={24} md={15} lg={15}></Col>
        </Row>
      </Header>
      <Content
        className="site-layout"
        style={{
          padding: "0 50px",
        }}
      >
        <Row justify="center">
          <Col
            xs={24}
            sm={24}
            md={10}
            lg={10}
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "100vh",
            }}
          >
            <motion.div
              initial={{ opacity: 0, y: -250 }}
              animate={{
                opacity: 1,
                y: -10,
              }}
              transition={{delay:1.5, duration:0.5}}
            >
              <div>
                <Text
                  className="thefont"
                  style={{ padding: "0px", margin: "0px", color: "#1890ff" }}
                >
                  EMAIL DELIVERY. SIMPLIFIED.
                </Text>
                <Title
                  type="secondary"
                  className="thefont"
                  style={{ padding: "0px", margin: "0px" }}
                >
                  Leader in trusted email delivery
                </Title>
                <Paragraph
                  className="thefont"
                  style={{
                    padding: "0px",
                    margin: "0px",
                    fontSize: "18px",
                    lineHeight: "1.2",
                  }}
                  type="secondary"
                >
                  Our powerful cloud-based solution processes over 100 billion
                  emails/month for thousands of customers, allowing them to
                  focus on their business, instead of their email
                  infrastructure.
                </Paragraph>
                <Space wrap style={{ marginTop: "10px" }}>
                  <Button className="thefont" type="primary" shape="round">
                    Get Started
                  </Button>
                  <Button
                    className="thefont"
                    type="primary"
                    shape="round"
                    onClick={showModal}
                    ghost
                  >
                    Register
                  </Button>
                </Space>
                <Modal
                  title={
                    <Title align="center" level={3} type="secondary">
                      Your Details Will Help Us Set You Up!
                    </Title>
                  }
                  open={open}
                  onOk={handleOk}
                  confirmLoading={confirmLoading}
                  onCancel={handleCancel}
                >
                  <Form
                    name="basic"
                    labelCol={{
                      span: 8,
                    }}
                    wrapperCol={{
                      span: 16,
                    }}
                    initialValues={{
                      remember: true,
                    }}
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                    autoComplete="off"
                  >
                    <Form.Item
                      name="name"
                      rules={[
                        {
                          required: true,
                          message: "Please input your name!",
                        },
                      ]}
                      align="center"
                    >
                      <Input placeholder="John Doe" />
                    </Form.Item>
                    <Form.Item
                      name="appname"
                      rules={[
                        {
                          required: true,
                          message: "Please input your appname!",
                        },
                      ]}
                      align="center"
                    >
                      <Input placeholder="Enter Name of Your App" />
                    </Form.Item>
                    <Form.Item
                      name="phone"
                      rules={[
                        {
                          required: true,
                          message: "Please input your phone number!",
                        },
                      ]}
                      align="center"
                    >
                      <Input placeholder="Enter Your Phone Number" />
                    </Form.Item>
                    <Form.Item
                      name="email"
                      rules={[
                        {
                          required: true,
                          message: "Please input your email!",
                        },
                      ]}
                      align="center"
                    >
                      <Input placeholder="Enter Your Emai;" />
                    </Form.Item>

                    <Form.Item
                      name="password"
                      rules={[
                        {
                          required: true,
                          message: "Please input your password!",
                        },
                      ]}
                      align="center"
                    >
                      <Input.Password placeholder="Enter Your Password" />
                    </Form.Item>

                    <Form.Item
                      wrapperCol={{
                        offset: 8,
                        span: 16,
                      }}
                    >
                      {/* <Button type="primary" htmlType="submit">
                      Submit
                    </Button> */}
                    </Form.Item>
                  </Form>
                </Modal>
              </div>
            </motion.div>
          </Col>

          <Col xs={24} sm={24} md={10} lg={10}>
          <motion.div
              initial={{ opacity: 0}}
              animate={{
                opacity: 1,
              }}
              transition={{delay:1.5}}
            >
            <img style={{ width: "100%" }} src={cover} alt="" />
            </motion.div>
          </Col>
        </Row>
        <Row
          gutter={[16, 24]}
          justify="center"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Col xs={24} sm={24} md={20} lg={20}>
            <Col xs={24} sm={24} md={24} lg={24}>
              <Title
                level={2}
                className="thefont"
                style={{ padding: "0px", margin: "0px", color: "#1890ff" }}
              >
                We Are All About...
              </Title>
            </Col>
            <Row>
              <Col className="gutter-row" xs={24} sm={24} md={10}>
                <Title level={4} type="secondary" className="thefont">
                  <DollarCircleOutlined />
                  &nbsp;Industry-Leading Deliverability
                </Title>
                <Text
                  className="thefont"
                  type="secondary"
                  style={{ fontSize: "18px", lineHeight: "1.2" }}
                >
                  A suite of clean IP streams, a host of delivery and reputation
                  features, and a team of 30+ deliverability experts focused on
                  your sending.
                </Text>
              </Col>
              <Col className="gutter-row" xs={24} sm={24} md={10}>
                <Title level={4} type="secondary" className="thefont">
                  <DollarCircleOutlined />
                  &nbsp;Scalable Infrastructure
                </Title>
                <Text
                  className="thefont"
                  type="secondary"
                  style={{ fontSize: "18px", lineHeight: "1.2" }}
                >
                  A global, custom-built MTA architected for the cloud and
                  supported by a redundant, self-hosted datacenter
                  infrastructure.
                </Text>
              </Col>
              <Col className="gutter-row" xs={24} sm={24} md={10}>
                <Title level={4} type="secondary" className="thefont">
                  <DollarCircleOutlined />
                  &nbsp;Real-time, Customizable Analytics
                </Title>
                <Text
                  className="thefont"
                  type="secondary"
                  style={{ fontSize: "18px", lineHeight: "1.2" }}
                >
                  Create reports based on timeframe, email category, ISP,
                  geography, and device-type.
                </Text>
              </Col>
              <Col className="gutter-row" xs={24} sm={24} md={10}>
                <Title level={4} type="secondary" className="thefont">
                  <DollarCircleOutlined />
                  &nbsp;Global Support
                </Title>
                <Text
                  className="thefont"
                  type="secondary"
                  style={{ fontSize: "18px", lineHeight: "1.2" }}
                >
                  24/7 dedicated email experts ready to answer any and all
                  questions.
                </Text>
              </Col>
            </Row>
          </Col>
        </Row>
        <Row
          justify="center"
          style={{
            height: "100vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Col xs={24} sm={24} md={20} lg={20}>
            <Row gutter={16}>
              <Col align="center" xs={24} sm={24} md={24} lg={24}>
                <Title
                  className="thefont"
                  type="secondary"
                  level={3}
                  style={{ color: "#1890ff" }}
                >
                  The Notify Difference
                </Title>
              </Col>
              <Col xs={24} sm={24} md={8}>
                <Card
                  align="center"
                  hoverable
                  bordered={false}
                  cover={
                    <img
                      style={{ height: "30vh", padding: "10px" }}
                      alt="example"
                      src={proven}
                    />
                  }
                >
                  <Title level={4} type="secondary" className="thefont">
                    &nbsp;Proven Deliverability
                  </Title>
                  <Text
                    className="thefont"
                    type="secondary"
                    style={{ fontSize: "18px", lineHeight: "1.2" }}
                  >
                    We offer domain authentication, compliance and
                    deliverability coaching, and proactive ISP outreach to
                    ensure you achieve optimal inbox delivery.{" "}
                  </Text>
                </Card>
              </Col>
              <Col xs={24} sm={24} md={8}>
                <Card
                  align="center"
                  hoverable
                  bordered={false}
                  cover={
                    <img
                      style={{ height: "30vh", padding: "10px" }}
                      alt="example"
                      src={scale}
                    />
                  }
                >
                  <Title level={4} type="secondary" className="thefont">
                    &nbsp;Scale With Confidence
                  </Title>
                  <Text
                    className="thefont"
                    type="secondary"
                    style={{ fontSize: "18px", lineHeight: "1.2" }}
                  >
                    Whether you???re a startup or a large enterprise, we can
                    handle your important emails. Our world-class platform
                    delivers more than 35 billion emails per month.
                  </Text>
                </Card>
              </Col>
              <Col xs={24} sm={24} md={8}>
                <Card
                  align="center"
                  hoverable
                  bordered={false}
                  cover={
                    <img
                      style={{ height: "30vh", padding: "10px" }}
                      alt="example"
                      src={email}
                    />
                  }
                >
                  <Title level={4} type="secondary" className="thefont">
                    &nbsp;Email Expertise
                  </Title>
                  <Text
                    className="thefont"
                    type="secondary"
                    style={{ fontSize: "18px", lineHeight: "1.2" }}
                  >
                    With SendGrid, you have an expert in your corner. Our
                    Customer Success and Support Teams give you the information
                    and guidance you need, when you need it
                  </Text>
                </Card>
              </Col>
            </Row>
          </Col>
        </Row>
      </Content>
      <Footer
        style={{
          textAlign: "center",
        }}
      >
        Notify ??2022 Created by Notify IT team
      </Footer>
    </Layout>
  );
};

LandingPage.propTypes = {};

export default LandingPage;
