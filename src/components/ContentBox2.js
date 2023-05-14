import React, { useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./ContentBox2.css";
import AOS from "aos";
import "aos/dist/aos.css";

const ContentBox2 = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="contentBox">
      <h3>EVIDENCE</h3>
      <div
        style={{ display: "flex", justifyContent: "center", paddingTop: "1%" }}
      >
        <div style={{ height: "1px", background: "gray", width: "6%" }}></div>
      </div>

      <h5>
        <p style={{ marginTop: "7%" }} data-aos="fade-in">
          In current Buddhist society, the top Buddhist role models have iron
          wills, but lack real ACTION or PURPOSE behind this because of a
          misinterpretation of Dharma. Buddha’s four main vows tell a different
          story of how the Buddha should act.
        </p>
      </h5>
      <br />
      <h5>
        <p data-aos="fade-in">
          The Bodhisattva Vows exist in many different forms; they are chanted
          as follows:
        </p>
      </h5>

      <div style={{ marginTop: "4%" }}>
        <Row style={{ paddingBottom: "5%" }}>
          <Col xs={6}>
            <h4
              style={{ color: "gray", marginTop: "15%", marginLeft: "15%" }}
              data-aos="fade-in"
            >
              The Bodhisattva Vows exist in many different forms; they are
              chanted as follows:
            </h4>
            <ul
              style={{ marginTop: "6%", marginLeft: "20%" }}
              data-aos="fade-in"
            >
              <br />
              <li>Creations are numberless, I vow to free them.</li>
              <br />
              <li>Delusions are inexhaustible, I vow to transform them.</li>
              <br />
              <li>Reality is boundless, I vow to perceive it.</li>
              <br />
              <li>The awakened way is unsurpassable, I vow to embody it.</li>
              <br />
            </ul>
          </Col>
          <Col xs={6}>
            <img
              src="BuddhaVows.jpg"
              style={{ height: "70vh", paddingLeft: "20%" }}
              data-aos="fade-up"
            />
          </Col>

          <Col xs={6}>
            <img
              src="Saint.jpg"
              style={{ height: "70vh", paddingLeft: "20%" }}
              data-aos="fade-up"
            />
          </Col>

          <Col xs={6}>
            <h4
              style={{ color: "gray", marginTop: "18%", marginLeft: "15%" }}
              data-aos="fade-in"
            >
              It’s also said in this way:
            </h4>
            <br />
            <ul
              style={{ marginTop: "6%", marginLeft: "20%" }}
              data-aos="fade-in"
            >
              <li>Living beings are limitless, I vow to liberate them all.</li>
              <br />
              <li>Blind passions are limitless, I vow to sever them all.</li>
              <br />
              <li>Dharma gates are inexhaustible, I vow to know them all.</li>
              <br />
              <li>Unsurpassed is awakening, I vow to realize it.</li>
              <br />
            </ul>
          </Col>

          <Col xs={6}>
            <h4
              style={{ color: "gray", marginTop: "20%", marginLeft: "15%" }}
              data-aos="fade-in"
            >
              Or, in the most laymen terms:
            </h4>
            <br />
            <ul
              style={{ marginTop: "6%", marginLeft: "20%" }}
              data-aos="fade-in"
            >
              <li>To save all people</li>
              <br />
              <li>To renounce all worldly desires</li>
              <br />
              <li>To learn all teachings</li>
              <br />
              <li>To attain perfect enlightenment</li>
              <br />
            </ul>
          </Col>
          <Col xs={6}>
            <img
              src="Layman.jpg"
              style={{ height: "70vh", paddingLeft: "20%" }}
              data-aos="fade-up"
            />
          </Col>
        </Row>
        <br />
        <p data-aos="fade-in">
          If you go searching, there are many other ways these four vows are
          written, but they are all telling the same thing, in this order.{" "}
        </p>
        <br />
        <p data-aos="fade-in">
          As anyone may observe from the outside, the most influential people in
          the world today are not Buddhists. On top of that anyone from a
          Non-Buddhist city, will tell you that they have not heard from a
          Buddhist about why that path is best.
        </p>
        <br />
        <p data-aos="fade-in">
          It is a sickness is the Buddha communities today to ignore the first
          vow, and try to move on to 2,3, and 4. By the very means of the vows,
          step 2 cannot be done without first completing step 1. Step 1 is in
          fact, an earthly desire. The Four Main Vows are a harmonious right of
          passage that must be balanced in action towards their completion.
        </p>
        <br />
        <p data-aos="fade-in">
          Therefore, the way of the Buddha should be to renounce all worldly
          desires IN ORDER TO save all people, and to learn all teachings IN
          ORDER TO save all people, and that once these steps are completed
          perfect enlightenment will be attained. This means that these tasks
          are in harmony. As one renounces more wordy desires to spend more time
          saving people, one learns teachings to improve how they go about
          saving others, and rides the collective path towards enlightenment.{" "}
        </p>
        <br />
        <p data-aos="fade-in">
          However, instead of following this path and order, Buddhists today are
          known as people continually meditating. Struggling to awaken and
          renounce all worldly desires, and instead all acting to each other
          like they are farther along the path. I believe Buddhism has become a
          sick game of ineffective spiritual ego stroking.
        </p>
        <br />
        <Container style={{ paddingTop: "5%" }}>
          <Row>
            <Col xs={6}>
              <img
                src="SittingMonk.jpg"
                style={{
                  width: "100%",
                  height: "90%",
                  paddingRight: "2%",
                  marginTop: "3%",
                }}
                data-aos="fade-up"
              />
            </Col>
            <Col xs={6}>
              <p data-aos="fade-in">
                I am not saying that the Men and Women who have become great at
                meditating for hours and wholly living a minimalist life have
                not gone further down their path of enlightenment, instead that
                it is very sad that so much potential is moving towards the
                wrong place for the world to awaken and be saved. It is a fact
                these people who realize their potential to follow the first vow
                will be some of the strongest Buddhas there are.
              </p>
              <br />
              <p data-aos="fade-in">
                The funny thing about tech entrepreneurs who are rapidly
                changing the future, and Buddhism is that these tech
                entrepreneurs are slowly learning the way of the Buddha in order
                to optimize themselves. They are reaching new paths of
                enlightenment. Instead of referring to their actions as the
                Buddha way, they are learning the teachings of Buddha in order
                to be more effective.{" "}
              </p>
              <br />
              <h4 style={{ color: "gray", marginTop: "2%" }} data-aos="fade-in">
                A few examples of parallel movements to the 10 precepts are:
              </h4>
              <br />
              <ul data-aos="fade-in">
                <li>
                  Not to engage in licentious acts or encourage others to do so.
                  A monk is expected to abstain from sexual conduct entirely.
                </li>
                <br />
                <li>
                  Not to use false words and speech, or encourage others to do
                  so.
                </li>
                <br />
                <li>
                  Not to trade or sell alcoholic beverages or encourage others
                  to do so.
                </li>
                <br />
                <li>Not to harbor anger or encourage others to be angry.</li>
                <br />
              </ul>
            </Col>
          </Row>
        </Container>
        <div
          className="ToMisc"
          style={{ display: "flex", justifyContent: "end" }}
        >
          <strong>
            See More <span>&#8594;</span>
          </strong>
        </div>
        <div
          style={{
            height: "1px",
            background: "gray",
            width: "100%",
            marginTop: "6%",
          }}
        ></div>
      </div>
    </div>
  );
};

export default ContentBox2;
