import "./About.css";
import { GoArrowUpRight } from "react-icons/go";

export default function About() {
  return (
    <>
      <section className="aboutSection" id="about">
        <img src="/heavyWaves.png" alt="" className="heavyWaves" />

        <img src="/spiral.png" alt="spiral" className="spiral" />
        <div className="about">
          <div className="blurCircle"></div>
          <div className="imagePart">
            <img
              src="/aboutSectionImage.png"
              alt="about image"
              className="aboutImage"
            />

            <div className="box">
              <div className="miniBox ">
                <div className="text flex flex-col text-center text-white absolute top-12 left-4.5">
                  <h2 className="text-white text-[38px] font-[700] leading-9">
                    25+
                  </h2>
                  <p>Years of Experience</p>
                </div>
              </div>
            </div>
          </div>

          <div className="textPart">
            <h2>ABOUT US</h2>

            <div className="solutionText">
              <h1>
                Building Future-Ready <br />
                <span className="text-[#e67e00] ">Solutions</span> with Passion
                & Precision
              </h1>
              <p>
                we combine cutting-edge technology with deep industry expertise
                to deliver software solutions that drive growth. Since 2015, our
                team of 50+ engineers, designers, and strategists has empowered
                200+ businesses—from startups to enterprises—with scalable,
                secure, and user-centric tools. We don’t just code; we solve
                problems.
              </p>
            </div>

            <div className="clientText">
              <div className="client">
                <h1>200+</h1>
                <p className="para">Client</p>
              </div>

              <div className="awards">
                <h1>10+%</h1>
                <p className="para">Industry Awards</p>
              </div>
            </div>

            <div className="buttonPart">
              <button className="btnAbout">
                <p>ABOUT US</p>
              </button>

              <div className="arrowBtn">
                <GoArrowUpRight className="arrow" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
