import AOS from "aos";
import React, { useEffect } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import "./Sources.css";

const Sources = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  return (
    <div
      className="sources"
      style={{
        paddingLeft: "12%",
        paddingRight: "12%",
        paddingTop: "5%",
        paddingBottom: "10%",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "start",
        }}
      >
        <h3> | SOURCES </h3>
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "start",
          paddingTop: "1%",
          paddingBottom: "6%",
        }}
      >
        <div style={{ height: "1px", background: "gray", width: "6%" }}></div>
      </div>

      <br />
      <Container
        style={{
          display: "flex",
          justifyContent: "center",
          paddingLeft: "15%",
        }}
      >
        <Row>
          <Col sm={4}>
            <Card
              className="Card"
              style={{ borderWidth: "0", maxWidth: "70%" }}
              data-aos="fade-up"
            >
              <a
                href="https://secularbuddhism.org/four-truths-four-vows/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Card.Img className="CardImg" variant="top" src="Secular.jpg" />
              </a>
            </Card>{" "}
            <a
              className="linkName"
              href="https://secularbuddhism.org/four-truths-four-vows/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <p
                className="text_card"
                style={{ fontSize: "14px", paddingTop: "2%" }}
                data-aos="fade-up"
              >
                <strong>| Four Truths, Four Vows</strong>
              </p>
            </a>
          </Col>
          <Col sm={4}>
            <Card
              className="Card"
              style={{ borderWidth: "0", maxWidth: "65%" }}
              data-aos="fade-up"
            >
              <a
                href="https://en.wikipedia.org/wiki/List_of_Buddha_claimants"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Card.Img
                  className="CardImg"
                  variant="top"
                  src="Wikipedia.jpg"
                />
              </a>
            </Card>
            <a
              className="linkName"
              href="https://en.wikipedia.org/wiki/List_of_Buddha_claimants"
              target="_blank"
              rel="noopener noreferrer"
            >
              {" "}
              <p
                className="text_card"
                style={{ fontSize: "14px", paddingTop: "2%" }}
                data-aos="fade-up"
              >
                <strong>| List of Buddha Claimants</strong>
              </p>
            </a>
          </Col>
          <Col sm={4}>
            <Card
              className="Card"
              style={{ borderWidth: "0", maxWidth: "61%" }}
              data-aos="fade-up"
            >
              <a
                href="https://www.worldtribune.org/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Card.Img
                  className="CardImg"
                  variant="top"
                  src="WorldTribute.jpg"
                />
              </a>
            </Card>
            <a
              className="linkName"
              href="https://www.worldtribune.org/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <p
                className="text_card"
                style={{ fontSize: "14px", paddingTop: "2%" }}
                data-aos="fade-up"
              >
                <strong>| Core Buddhist Concepts</strong>
              </p>
            </a>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Sources;
