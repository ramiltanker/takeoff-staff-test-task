import { FC } from "react";
import { loginLogout } from "../../services/reducers/auth";
import { useDispatch } from "../../services/hooks/redux";
import { Link } from "react-router-dom";
import "./Header.scss";

interface HeaderProps {}

const Header: FC<HeaderProps> = () => {
  let loggedIn = false;

  if (localStorage.getItem("login")) {
    const userLogin = JSON.parse(localStorage.getItem("login")!).userLogin;
    loggedIn = userLogin;
  } else {
    loggedIn = false;
  }

  const dispatch = useDispatch();

  return (
    <header className="header">
      <div className="header__container">
        <nav className="header__nav">
          <ul className="header__list">
            <li className="header__li">
              <Link to="/" className="header__link">
                Контакты
              </Link>
            </li>
            {!loggedIn ? (
              <li className="header__li">
                <Link to="/sign-in" className="header__link">
                  Вход
                </Link>
              </li>
            ) : (
              <li
                className="header__li"
                onClick={() => dispatch(loginLogout())}
              >
                <Link to="/sign-in" className="header__link">
                  Выход
                </Link>
              </li>
            )}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
