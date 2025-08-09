import "./TextWithArrowBtn.css";
import { GoArrowUpRight } from "react-icons/go";

export default function TextWithArrowBtn({ text }) {
  return (
    <div>
      <div className="buttonPart">
        <button className="btnAbout">
          <p>{text}</p>
        </button>

        <div className="arrowBtn">
          <GoArrowUpRight className="arrow" />
        </div>
      </div>
    </div>
  );
}
