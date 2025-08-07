import "./Hero.css";
import { IoMdArrowForward } from "react-icons/io";
import HeaderBtn from "../../smallComponents/HeaderBtn/HeaderBtn";
import Header from "../../smallComponents/Header/Header";

export default function Hero() {
  return (
    <>
      <Header />
      <main className="heroSection">
        <div className="hero">
          <div className="linearBlurBlue"></div>
          <div className="linearBlurBlue2"></div>
          <div className="linearBlurOrange"></div>
          <div className="content">
            <div className="textContent">
              <h1>
                Innovative Software <span>Solutions</span> for Modern Businesses
              </h1>
              <p>Custom-built, scalable, and future-ready technology.</p>
            </div>

            <div className="heroBtn">
              <HeaderBtn />
            </div>
          </div>
        </div>

        <div className="imageContent">
          <div className="heroImage">
            <img
              src="../../../../public/heroImage.jpg"
              alt="hero Image"
              className="heroImage"
            />
            <div className="imageText">
              <div className="imageCircles">
                <div className="circle1 ">
                  <div className="miniCircle"></div>
                </div>
                <div className="circle">
                  <div></div>
                </div>
                <div className="circle">
                  <div></div>
                </div>
              </div>

              <a
                href="/"
                className="flex items-center gap-2.5 absolute bottom-4 right-7 text-white cursor-pointer hover:text-[#e67e00] transition-all duration-300"
              >
                <p>See All Product</p>
                <IoMdArrowForward />
              </a>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
