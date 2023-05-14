import Aos from "aos";
import React, { useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";

const ContentBox3 = () => {
  useEffect(() => {
    Aos.init({ duration: 1500 });
  }, []);
  return (
    <div className="contentBox">
      <h3>Reiterating The Message</h3>
      <div
        style={{ display: "flex", justifyContent: "center", paddingTop: "1%" }}
      >
        <div style={{ height: "1px", background: "gray", width: "20%" }}></div>
      </div>

      <p style={{ marginTop: "7%" }} data-aos="fade-in">
        Many buddhists today practice the seeking of enlightenment rather than
        practicing the way of Buddha himself. Buddha was an enlightened being
        who spread his philosophy far and wide, preaching and changing and
        influencing the world and his actions live on to this day.
      </p>
      <br />
      <p data-aos="fade-in">
        Buddhists in most countries are seen as people who simply meditate. The
        idea is to relinquish attachment to earthly desires in order to DO MORE.
        Not to meditate all day to do nothing. In an effort of learning all
        teachings, we will re-evaluate the core values, and give a new
        perspective based on the teachings. The core re-evaluation leads us to
        the idea that Nirvana is something to achieve in this realm. And that
        leaving this realm is a negative desire in it of itself.
      </p>
      <br />
      <h4 style={{ color: "gray" }} data-aos="fade-in">
        Let’s break them down.
      </h4>
      <br />
      <Container data-aos="fade-in">
        <ol>
          <li>
            To save all people: this is by far the biggest vow that is failed to
            be recognized by modern Buddhist society. Outreach is a non-factor.
            So many people who need this valuable information are left in the
            dark, with no outreach from Buddhists. Actual progress using
            technology (tools to increase impact) are completely disregarded.
          </li>
          <br />
          <li>
            Many people have regarded this initial vow as meaning to renounce.
            But here’s what the true text says “Desires for tangible things
            (such as wealth, property, or other material goods) or for pleasures
            of the body (such as sexual activity, gluttony, or other hedonistic
            pursuits). Buddhism teaches us to try to let go of our worldly
            desires, freeing our minds and bodies for a state of
            enlightenment.”As it says, freeing our minds and bodies for a state
            of enlightenment.
          </li>
          <br />
          <li>
            Learning all teachings requires knowing all things, we do not even
            know how consciousness works yet. To learn all teachings, we need to
            learn by the act of doing. There is no better thing to learn at this
            time, than how to spread change like Buddha did.
          </li>
          <br />
          <li>
            “In <strong>Buddhism</strong>, <strong>enlightenment </strong>
            (called bodhi in Indian
            <strong> Buddhism </strong>, or satori in Zen{" "}
            <strong>Buddhism</strong>) is when a<strong> Buddhist </strong>
            finds the truth about life and stops being reborn because they have
            reached Nirvana.” In order to stop the cycle of rebirth, we must
            stop the death to life cycle. With infinite time our particles are
            always brought back to a conscious form. Until we find a conscious
            form to reach Nirvana in, we will repeat the cycle. “
            <strong>Rebirth</strong> in{" "}
            <strong style={{ fontStyle: "italic" }}> Buddhism </strong>
            refers to its teaching that the actions of a person lead to a new
            existence after death, in an endless cycle called
            <strong> saṃsāra </strong>.This cycle is considered to
            <strong> dukkha </strong>,unsatisfactory and painful. The cycle
            stops only if
            <strong style={{ fontStyle: "italic" }}> liberation </strong>
            is achieved by
            <strong style={{ fontStyle: "italic" }}> insight </strong>
            and the{" "}
            <strong style={{ fontStyle: "italic" }}>
              extinguishing of craving
            </strong>
          </li>
          <br />
        </ol>
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
  );
};

export default ContentBox3;
