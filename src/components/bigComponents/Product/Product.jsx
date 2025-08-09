import HeadingText from "../../smallComponents/HeadingText/HeadingText";
import ProductCard from "../../smallComponents/ProductCard/ProductCard";
import "./Product.css";

export default function Product() {
  return (
    <>
      <div className="productSection">
        <HeadingText headingText="Our" spanText=" Product" />

        <div className="productItems">
          <div className="products">
            <ProductCard />
          </div>
        </div>
      </div>
    </>
  );
}
