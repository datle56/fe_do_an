import React, { useState } from "react";
import { Button, Col, Row, Input, Space, Checkbox, message, Image } from "antd";
import { HomeOutlined, EyeInvisibleOutlined, EyeTwoTone } from "@ant-design/icons";
import { Link, NavLink } from "react-router-dom";

const linkStyle = {
  textDecoration: "underline",
  color: "#bdc3c7",
};

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    try {
      const response = await fetch("http://127.0.0.1:8000/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: new URLSearchParams({ username, password }),
      });

      if (response.ok) {
        const data = await response.json();
        console.log(data);
        localStorage.setItem('token', data.access_token);

        // Save the token, role, and username in localStorage
        // localStorage.setItem("access_token", data.access_token);
        localStorage.setItem("token_type", data.token_type);
        localStorage.setItem("role", data.role);
        localStorage.setItem("username", data.username);

        message.success("Login successful");

        // Redirect based on role
        if (data.role === "admin") {
          window.location.href = "/admin";
        } else if (data.role === "user") {
          window.location.href = "/user/grammar";
        }
      } else {
        message.error("Incorrect username or password");
      }
    } catch (error) {
      console.error("Error during login:", error);
      message.error("An error occurred during login");
    }
  };

  return (
    <div>
      <Row>
        <Col
          span={12}
          style={{
            display: "flex",
            flexDirection: "column",
            padding: "4rem",
          }}
        >
          <Button
            className="home-button"
            style={{
              background: "#6b8f73",
              width: "6rem",
              padding: "0.5rem",
              fontSize: "1em",
              display: "flex",
              color: "#ecf0f1",
              gap: "0.5rem",
              alignItems: "center",
              textAlign: "center",
              paddingLeft: "12px",
            }}
          >
            <Link to="/home">
              <HomeOutlined style={{ marginRight: "0.5rem" }} />
              Home
            </Link>
          </Button>
          <div className="title" style={{ marginTop: "2rem" }}>
            <p style={{ fontSize: "2.3rem" }}>
              Sign in to <b>Speak</b>
            </p>
            <p>Welcome to SPEAK</p>
          </div>
          <div className="email-password-input" style={{ marginTop: "2rem" }}>
            <Space direction="vertical" style={{ width: "100%" }}>
              <Input
                placeholder="Email"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
              <Input.Password
                placeholder="Password"
                iconRender={(visible) =>
                  visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
                }
                style={{ marginTop: "1rem" }}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </Space>
          </div>
          <div className="input-list-check-link" style={{ marginTop: "1rem" }}>
            <div
              className="checkbox-and-link-forget-password"
              style={{
                display: "flex",
                direction: "row",
                justifyContent: "space-between",
              }}
            >
              <Checkbox>Remember me</Checkbox>
              <a style={linkStyle} href="/forgot-password">
                Forgot password
              </a>
            </div>
            <Button
              style={{
                width: "100%",
                background: "#6b8f73",
                marginTop: "1rem",
                color: "#ffffff",
              }}
              onClick={handleLogin}
            >
              Login
            </Button>
          </div>
          <div
            className="link-sign-tup-login-tutor"
            style={{ marginTop: "2rem" }}
          >
            <Link to="/register" style={{ ...linkStyle, marginRight: "4rem" }}>
              Or Sign Up
            </Link>
          </div>
        </Col>

        <Col span={12} style={{ padding: "6rem", width: "110%" }}>
          <Image src="https://www.shutterstock.com/image-vector/man-key-near-computer-account-260nw-1499141258.jpg" />
        </Col>
      </Row>
      <div
        className="footer1"
        style={{
          width: "100%",
          backgroundColor: "#44624a",
          color: "white",
          height: "24rem",
        }}
      >
        <Row>
          <Col span={6} style={{ padding: "2rem", marginTop: "30px" }}>
            <h3
              style={{
                color: "#fff",
                fontSize: "large",
                fontWeight: "bold",
                marginBottom: "18px",
              }}
            >
              ABOUT US
            </h3>
            <NavLink
              style={{
                color: "white",
                margin: "1rem 0px 0px ",
                fontSize: "mediumm",
                fontWeight: "500",
              }}
              to="/"
            >
              Mission & Vision
            </NavLink>
            <br />
            <NavLink
              style={{
                color: "white",
                margin: "1rem 0px 0px ",
                fontSize: "mediumm",
                fontWeight: "500",
              }}
              to="/"
            >
              Our Company
            </NavLink>
            <br />
            <NavLink
              style={{
                color: "white",
                margin: "1rem 0px 0px ",
                fontSize: "mediumm",
                fontWeight: "500",
              }}
              to="/"
            >
              Our Projects
            </NavLink>
            <br />
            <NavLink
              style={{
                color: "white",
                margin: "1rem 0px 0px ",
                fontSize: "mediumm",
                fontWeight: "500",
              }}
              to="/"
            >
              Our Team
            </NavLink>
          </Col>
          <Col span={6} style={{ padding: "2rem", marginTop: "30px" }}>
            <h3
              style={{
                color: "#fff",
                fontSize: "large",
                fontWeight: "bold",
                marginBottom: "18px",
              }}
            >
              DISCOVER
            </h3>
            <NavLink
              style={{
                color: "white",
                margin: "1rem 0px 0px ",
                fontSize: "mediumm",
                fontWeight: "500",
              }}
              to="/"
            >
              Projects & Research
            </NavLink>
            <br />
            <NavLink
              style={{
                color: "white",
                margin: "1rem 0px 0px ",
                fontSize: "mediumm",
                fontWeight: "500",
              }}
              to="/"
            >
              Clients Review
            </NavLink>
            <br />
            <NavLink
              style={{
                color: "white",
                margin: "1rem 0px 0px ",
                fontSize: "mediumm",
                fontWeight: "500",
              }}
              to="/"
            >
              Our Projects
            </NavLink>
            <br />
            <NavLink
              style={{
                color: "white",
                margin: "1rem 0px 0px ",
                fontSize: "mediumm",
                fontWeight: "500",
              }}
              to="/"
            >
              Our Team
            </NavLink>
          </Col>
          <Col span={6} style={{ padding: "2rem", marginTop: "30px" }}>
            <h3
              style={{
                color: "#fff",
                fontSize: "large",
                fontWeight: "bold",
                marginBottom: "18px",
              }}
            >
              USEFUL LINKS
            </h3>
            <NavLink
              style={{
                color: "white",
                margin: "1rem 0px 0px ",
                fontSize: "mediumm",
                fontWeight: "500",
              }}
              to="/"
            >
              Contact Us
            </NavLink>
            <br />
            <NavLink
              style={{
                color: "white",
                margin: "1rem 0px 0px ",
                fontSize: "mediumm",
                fontWeight: "500",
              }}
              to="/"
            >
              Terms & Conditions
            </NavLink>
            <br />
            <NavLink
              style={{
                color: "white",
                margin: "1rem 0px 0px ",
                fontSize: "mediumm",
                fontWeight: "500",
              }}
              to="/"
            >
              Review
            </NavLink>
          </Col>
          <Col span={6} style={{ padding: "2rem", marginTop: "30px" }}>
            <h3
              style={{
                color: "#fff",
                fontSize: "large",
                fontWeight: "bold",
                marginBottom: "18px",
              }}
            >
              SPEAK
            </h3>
            <p style={{ color: "#B2B3CF" }}>
              Seize Potential, Enhance & Acquire Knowledge
            </p>
            <p style={{ color: "#B2B3CF" }}>
              Subscribe to get our Newsletter
            </p>
            <Input
              placeholder="Enter email"
              style={{
                background: "transparent",
                borderRadius: "30px",
                width: "100%",
                marginBottom: "1rem",
              }}
            />
            <Button
              variant="primary"
              type="submit"
              style={{
                width: "100%",
                backgroundColor: "#5e72e4",
                color: "white",
              }}
            >
              Submit
            </Button>
            <p style={{ color: "white", marginTop: "1rem" }}>
              We'll never share your email with anyone else.
            </p>
          </Col>
        </Row>
        <Row>
          <Col
            span={24}
            style={{
              textAlign: "center",
              color: "#B2B3CF",
              fontSize: "15px",
            }}
          >
            © 2021 Class Technologies Inc.
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default Login;
