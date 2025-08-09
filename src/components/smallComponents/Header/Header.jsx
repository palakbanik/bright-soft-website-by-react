import "./Header.css";
import "../../../index.css";
import HeaderBtn from "../HeaderBtn/HeaderBtn";

const lists = [
  { id: 1, name: "Home", link: "#home" },
  { id: 2, name: "Services", link: "/" },
  { id: 3, name: "About", link: "#about" },
  { id: 4, name: "Careers", link: "/" },
  { id: 5, name: "Contact", link: "/" },
];

export default function Header() {
  return (
    <>
      <nav className="headerContainer">
        <div className="logo">
          <a href="/">
            <img src="/logo.png" alt="logo" />
          </a>
        </div>

        <div className="listSection">
          <ul className="listItems">
            {lists.map((list) => {
              return (
                <li className="list" key={list.id} id="home">
                  <a href={list.link}>{list.name}</a>
                </li>
              );
            })}
          </ul>

          <div className="headerBtn">
            <HeaderBtn />
          </div>
        </div>
      </nav>
    </>
  );
}
