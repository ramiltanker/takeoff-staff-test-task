import { FC } from "react";
import { Link } from "react-router-dom";
import "./Header.scss";

interface HeaderProps {}

const links = [
  {
    id: 0,
    href: "/contacts",
    text: "Контакты",
  },
  {
    id: 1,
    href: "/sign-in",
    text: "Вход",
  },
];

const Header: FC<HeaderProps> = () => {
  return (
    <header className="header">
      <div className="header__container">
        <nav className="header__nav">
          <ul className="header__list">
            {links.map(({ id, href, text }) => {
              return (
                <li className="header__li" key={id}>
                  <Link to={href} className="header__link">
                    {text}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
