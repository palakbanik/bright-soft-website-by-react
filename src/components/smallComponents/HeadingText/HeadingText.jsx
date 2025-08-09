import "./HeadingText.css";

export default function HeadingText({ headingText, spanText }) {
  return (
    <>
      <h1 className="headingText">
        {headingText}
        <span>{spanText}</span>
      </h1>
    </>
  );
}
