import React, { useState } from "react";
import { Button, Col, Row, Input, Space, message, Image } from "antd";
import { HomeOutlined, EyeInvisibleOutlined, EyeTwoTone } from "@ant-design/icons";
import { Link, useNavigate } from "react-router-dom";

const linkStyle = {
  textDecoration: "underline",
  color: "#bdc3c7",
};

function Register() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async () => {
    if (password !== confirmPassword) {
      message.error("Passwords do not match");
      return;
    }

    try {
      const response = await fetch("http://127.0.0.1:8000/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: new URLSearchParams({
          username,
          email,
          password,
          role: "user", // Default role set to 'user'
        }),
      });

      if (response.ok) {
        message.success("Registration successful");
        navigate("/login");
      } else {
        const data = await response.json();
        if (data.detail === "Username already exists") {
          message.error("Username already exists");
        } else {
          message.error("Registration failed");
        }
      }
    } catch (error) {
      console.error("Error during registration:", error);
      message.error("An error occurred during registration");
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
            <p style={{ fontSize: "2.3rem" }}>Register account</p>
            <p>Welcome to SPEAK</p>
          </div>
          <div className="email-password-input" style={{ marginTop: "2rem" }}>
            <Space direction="vertical" style={{ width: "100%" }}>
              <Input
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
              <Input
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <Input.Password
                placeholder="Password"
                iconRender={(visible) =>
                  visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
                }
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <Input.Password
                placeholder="Confirm password"
                iconRender={(visible) =>
                  visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
                }
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            </Space>
          </div>
          <Button
            style={{
              width: "100%",
              background: "#6b8f73",
              marginTop: "1rem",
              color: "#ffffff",
            }}
            onClick={handleSubmit}
          >
            Register
          </Button>
          <div
            className="link-sign-tup-login-tutor"
            style={{ marginTop: "2rem" }}
          >
            <Link to="/login" style={{ ...linkStyle, marginRight: "4rem" }}>
              Or Login
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
            <Link
              style={{
                color: "white",
                margin: "1rem 0px 0px ",
                fontSize: "medium",
                fontWeight: "500",
              }}
              to="/"
            >
              Mission & Vision
            </Link>
            <br />
            <Link
              style={{
                color: "white",
                margin: "1rem 0px 0px ",
                fontSize: "medium",
                fontWeight: "500",
              }}
              to="/"
            >
              Our Company
            </Link>
            <br />
            <Link
              style={{
                color: "white",
                margin: "1rem 0px 0px ",
                fontSize: "medium",
                fontWeight: "500",
              }}
              to="/"
            >
              Our Projects
            </Link>
            <br />
            <Link
              style={{
                color: "white",
                margin: "1rem 0px 0px ",
                fontSize: "medium",
                fontWeight: "500",
              }}
              to="/"
            >
              Our Team
            </Link>
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
            <Link
              style={{
                color: "white",
                margin: "1rem 0px 0px ",
                fontSize: "medium",
                fontWeight: "500",
              }}
              to="/"
            >
              Projects & Research
            </Link>
            <br />
            <Link
              style={{
                color: "white",
                margin: "1rem 0px 0px ",
                fontSize: "medium",
                fontWeight: "500",
              }}
              to="/"
            >
              Clients Review
            </Link>
            <br />
            <Link
              style={{
                color: "white",
                margin: "1rem 0px 0px ",
                fontSize: "medium",
                fontWeight: "500",
              }}
              to="/"
            >
              Our Projects
            </Link>
            <br />
            <Link
              style={{
                color: "white",
                margin: "1rem 0px 0px ",
                fontSize: "medium",
                fontWeight: "500",
              }}
              to="/"
            >
              Our Team
            </Link>
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
            <Link
              style={{
                color: "white",
                margin: "1rem 0px 0px ",
                fontSize: "medium",
                fontWeight: "500",
              }}
              to="/"
            >
              Contact Us
            </Link>
            <br />
            <Link
              style={{
                color: "white",
                margin: "1rem 0px 0px ",
                fontSize: "medium",
                fontWeight: "500",
              }}
              to="/"
            >
              Terms & Conditions
            </Link>
            <br />
            <Link
              style={{
                color: "white",
                margin: "1rem 0px 0px ",
                fontSize: "medium",
                fontWeight: "500",
              }}
              to="/"
            >
              Review
            </Link>
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
              style={{ width: "100%", backgroundColor: "#5e72e4", color: "white" }}
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
            style={{ textAlign: "center", color: "#B2B3CF", fontSize: "15px" }}
          >
            © 2021 Class Technologies Inc.
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default Register;
