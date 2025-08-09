import "./ProductCard.css";
import { GoArrowUpRight } from "react-icons/go";

export default function ProductCard() {
  return (
    <>
      <div className="productCard">
        <div className="card">
          <div className="img">
            <img src="/product.jpg" alt="Product" />
          </div>

          <div className="frame">
            <img src="/public/productLogo.png" alt="logo" />

            <div className="frameText">
              <h3>Dynamic HostBD - Reliable Hoisting, Real Results</h3>

              <a href="/" className="arrowIcon">
                <GoArrowUpRight className="iconArrow" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
