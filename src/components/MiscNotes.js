import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const MIscNotes = () => {
  return (
    <div>
      <div style={{ position: "relative", height: "70vh", width: "100%" }}>
        <img
          src="MiscNotes.jpg"
          style={{
            height: "100%",
            width: "100%",
            objectFit: "cover",
            overflow: "hidden",
          }}
        />
      </div>
      <div className="contentBox">
        <h3>MISC NOTES</h3>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            paddingTop: "1%",
            paddingBottom: "6%",
          }}
        >
          <div style={{ height: "1px", background: "gray", width: "7%" }}></div>
        </div>

        <div>
          <Row>
            <Col
              xs={6}
              style={{
                padding: "10%",
              }}
            >
              <h5>
                <strong>Buddha’s views of suicide:</strong>
              </h5>
              <br />
              <p>"Suicide is based on desire and ignorance."</p>
              <br />
              <div
                className="ToMisc"
                style={{ display: "flex", justifyContent: "end" }}
              >
                <a
                  href="http://www.buddhanet.net/e-learning/dharmadata/fdd30.htm"
                  style={{ textDecoration: "none" }}
                >
                  <strong>
                    See More <span>&#8594;</span>
                  </strong>
                </a>
              </div>
            </Col>
            <Col xs={6}>
              <p>Based on this let’s enter a thought experiment…</p>
              <br />
              <p>
                If you are in the middle of a lake, you have the capability to
                swim, would the lack of swimming be suicide, no?
              </p>
              <br />
              <p>
                If you jump in a pool and do not swim, letting yourself drown,
                that is suicide.{" "}
              </p>
              <br />
              <p>
                If you are swimming with a friend who pushes you in for fun, and
                then you decided to let yourself drown, that friend would
                obviously save you, yet you would have attempted suicide.
              </p>
              <br />
              <p>
                What about if your friend pushes you out of a canoe 30 ft from
                the deck, and paddles away too far to save you. He knows you can
                swim ba
              </p>
              <br />
              <p>
                But what about if you were dropped into a lake, you see a shore
                but it looks far away, the waves are pushing against you, you
                are unsure if you would make it…. would it be suicide to give
                up?
              </p>
              <br />
            </Col>
          </Row>
          <div>
            <p>
              Are we not committing modern day suicide to not try and continue,
              given we are at the one point in a existing beings timeline when
              it has become possible? Is there not a life that you can live
              where you have a major impact.{" "}
            </p>
            <p>
              {" "}
              Imagine if you have a fatal illness and the cure was within reach
              but you choose to let yourself die, this is simply a form of
              suicide, if we do not fight for our lives, we do not fight to save
              all lives.
            </p>
            <p>
              Do not be ignorant to the possibility of this. With the advent of
              the internet humanity has more opportunity and power across board
              than ever before. We have also been overladen with distraction.
              Never could a normal lifespan give all the teachings and meaning
              necessary. A new era is starting in the world, and in life.
            </p>
            <p>
              Even if the odds are stacked against you. You should still do it.
            </p>
          </div>
          <div>
            <Row xs={4}>
              <Col
                xs={6}
                style={{
                  padding: "10%",
                  paddingTop: "10%",
                }}
              >
                {" "}
                <strong style={{ fontSize: "24px" }}>What About LOVE ?</strong>
                <br />
                <div
                  className="ToMisc"
                  style={{ display: "flex", justifyContent: "end" }}
                >
                  <strong>
                    See Reddit Post<span>&#8594;</span>
                  </strong>
                </div>
              </Col>
              <Col xs={6} style={{ padding: "10%" }}>
                <p>In replies</p>
                <p>
                  “Buddhas have the ultimate purpose of helping to awaken living
                  beings to transcend the suffering of birth and death”
                </p>
                <p>
                  My life should be maximizing the amount I give. Feed my ego of
                  being selfless and caring not for materials
                </p>
              </Col>
            </Row>
          </div>
          <div>
            <h3 style={{ padding: "3%" }}>
              <strong>
                " One of the greatest things Effective Buddhists can first do
                is, conversion."
              </strong>
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MIscNotes;
