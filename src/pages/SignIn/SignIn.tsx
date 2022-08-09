import { FC } from "react";
import PageLayout from "../../components/PageLayout/PageLayout";
import Input from "../../components/Input/Input";
import Button from "../../components/Button/Button";
import "./SignIn.scss";

interface SignInProps {}

const SignIn: FC<SignInProps> = () => {
  return (
    <div className="sign-in">
      <div className="sign-in__container">
        <h2 className="sign-in__title">Вход</h2>
        <form className="sign-in__form">
          <fieldset className="sign-in__fieldset">
            <label htmlFor="sign-in-email">Email</label>
            <Input
              className="sign-in__input"
              type="email"
              name="sign-in-email"
              placeholder="Пожалуйста, введите Ваш email-адрес"
            ></Input>
          </fieldset>
          <fieldset className="sign-in__fieldset">
            <label htmlFor="sign-in-password">Пароль</label>
            <Input
              className="sign-in__input"
              type="password"
              name="sign-in-password"
              placeholder="Пожалуйста, введите Ваш пароль"
            ></Input>
          </fieldset>
          <Button className="sign-in__button hover-scale" type="button" onClick={() => 0}>
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
