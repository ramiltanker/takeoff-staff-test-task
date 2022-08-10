import { FC, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import PageLayout from "../../components/PageLayout/PageLayout";
import Input from "../../components/Input/Input";
import Button from "../../components/Button/Button";
import { useDispatch, useSelector } from "../../services/hooks/redux";
import { login } from "../../services/actions/auth";
import "./SignIn.scss";

interface SignInProps {}

const SignIn: FC<SignInProps> = () => {
  const [nameValue, setNameValue] = useState<string>("");
  const [passwordValue, setPasswordValue] = useState<string>("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { loginSuccess } = useSelector((store) => store.auth);

  console.log(loginSuccess);
  const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(login(nameValue, passwordValue));
  };

  useEffect(() => {
    if (loginSuccess) {
      navigate("/contacts");
    }
  }, [loginSuccess]);

  const handleChangeName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNameValue(e.target.value);
  };

  const handleChangePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPasswordValue(e.target.value);
  };

  return (
    <div className="sign-in">
      <div className="sign-in__container">
        <h2 className="sign-in__title">Вход</h2>
        <form className="sign-in__form" onSubmit={handleLogin}>
          <fieldset className="sign-in__fieldset">
            <label htmlFor="sign-in-email">Email</label>
            <Input
              className="sign-in__input"
              type="email"
              name="sign-in-email"
              placeholder="Пожалуйста, введите Ваш email-адрес"
              onChange={handleChangeName}
            ></Input>
          </fieldset>
          <fieldset className="sign-in__fieldset">
            <label htmlFor="sign-in-password">Пароль</label>
            <Input
              className="sign-in__input"
              type="password"
              name="sign-in-password"
              placeholder="Пожалуйста, введите Ваш пароль"
              onChange={handleChangePassword}
            ></Input>
          </fieldset>
          <Button
            className="sign-in__button hover-scale"
            type="submit"
            onClick={() => 0}
          >
            Войти
          </Button>
        </form>
      </div>
    </div>
  );
};

interface SignInWrapperProps {}

const SignInWrapper: FC<SignInWrapperProps> = () => {
  return (
    <PageLayout>
      <SignIn />
    </PageLayout>
  );
};

export default SignInWrapper;
