import { FC, useState } from "react";
import Input from "../../../../components/Input/Input";
import {
  updateContact,
  deleteContact,
} from "../../../../services/actions/contacts";
import {
  AiOutlineEdit,
  AiOutlineClose,
  AiOutlineCheck,
  AiOutlineDelete,
} from "react-icons/ai";
import { useDispatch } from "../../../../services/hooks/redux";
import "./ContactCard.scss";

interface ContactCardProps {
  name: string;
  phone: string;
  id: string;
}

const ContactCard: FC<ContactCardProps> = ({ name, phone, id }) => {
  const [isInputDisabled, setIsInputDisabled] = useState<boolean>(true);
  const [nameValue, setNameValue] = useState<string>(name);
  const [phoneValue, setPhoneValue] = useState<string>(phone);

  const dispatch = useDispatch();

  const handleNameValueChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNameValue(e.target.value);
  };

  const handlePhoneValueChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPhoneValue(e.target.value);
  };

  const handleSubmitEdit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(updateContact(id, nameValue, phoneValue));
    setIsInputDisabled(true);
  };

  const handleCancel = () => {
    setIsInputDisabled(true);
    setNameValue(name);
    setPhoneValue(phone);
  };

  const handleDelete = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    dispatch(deleteContact(id));
  };

  return (
    <div
      className={`contact-card ${
        !isInputDisabled ? "contact-card--active" : ""
      }`}
    >
      <form className="contact-card__form" onSubmit={handleSubmitEdit}>
        <fieldset className="contact-card__fieldset">
          <label htmlFor="contact-card-name">Имя</label>
          <Input
            type="text"
            name="contact-card-name"
            className={`contact-card__input ${
              !isInputDisabled
                ? "contact-card__input--active"
                : "contact-card__input--inactive"
            }`}
            onChange={handleNameValueChange}
            disabled={isInputDisabled}
            value={nameValue}
          ></Input>
        </fieldset>
        <fieldset className="contact-card__fieldset">
          <label htmlFor="contact-card-phone">Телефон</label>
          <Input
            type="number"
            name="contact-card-phone"
            className={`contact-card__input ${
              !isInputDisabled
                ? "contact-card__input--active"
                : "contact-card__input--inactive"
            }`}
            onChange={handlePhoneValueChange}
            disabled={isInputDisabled}
            value={phoneValue}
          ></Input>
        </fieldset>
        {(nameValue !== name || phoneValue !== phone) && (
          <button
            type="submit"
            className="contact-card__card-button contact-card__card-button--confirm"
            onClick={() => {
              setIsInputDisabled(false);
            }}
          >
            <AiOutlineCheck />
          </button>
        )}
      </form>
      <button
        type="button"
        className="contact-card__card-button contact-card__card-button--edit"
        onClick={() => {
          setIsInputDisabled(false);
        }}
      >
        <AiOutlineEdit />
      </button>
      {!isInputDisabled && (
        <button
          type="button"
          className="contact-card__card-button contact-card__card-button--cancel"
          onClick={handleCancel}
        >
          <AiOutlineClose />
        </button>
      )}
      {!isInputDisabled && (
        <button
          type="button"
          className="contact-card__card-button contact-card__card-button--delete"
          onClick={handleDelete}
        >
          <AiOutlineDelete />
        </button>
      )}
    </div>
  );
};

export default ContactCard;
