import { FC, useState, useEffect } from "react";
import PageLayout from "../../components/PageLayout/PageLayout";
import Button from "../../components/Button/Button";
import ContactCard from "./components/ContactCard/ContactCard";
import { useDispatch, useSelector } from "../../services/hooks/redux";
import { getContacts, createContact } from "../../services/actions/contacts";
import "./Contacts.scss";
import Input from "../../components/Input/Input";
import { ContactType } from "../../types/contacts";

interface ContactsProps {}

const Contacts: FC<ContactsProps> = () => {
  const [renderCards, setRenderCards] = useState<ContactType[]>([]);
  const [activeTab, setActiveTab] = useState<"add" | "all">("add");
  const [nameValue, setNameValue] = useState<string>("");
  const [phoneValue, setPhoneValue] = useState<string>("");
  const [searchValue, setSearchValue] = useState<string>("");
  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNameValue(e.target.value);
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPhoneValue(e.target.value);
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };

  const handleCreateContact = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(createContact(nameValue, phoneValue));
    setNameValue("");
    setPhoneValue("");
  };

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const filteredContacts = contacts.filter((obj) =>
      Object.values(obj).some((val) =>
        val.toUpperCase().includes(searchValue.toUpperCase())
      )
    );

    setRenderCards(filteredContacts);
  };

  const handleResetSearch = () => {
    setSearchValue("");
    setRenderCards(contacts);
  };

  const dispatch = useDispatch();
  const { contacts } = useSelector((store) => store.contacts);

  useEffect(() => {
    dispatch(getContacts());
  }, [dispatch]);

  useEffect(() => {
    const filteredContacts = contacts.filter((obj) =>
      Object.values(obj).some((val) =>
        val.toUpperCase().includes(searchValue.toUpperCase())
      )
    );
    setRenderCards(filteredContacts);
  }, [contacts]);

  return (
    <div className="contacts">
      <div className="contacts__container">
        <h2 className="contacts__title">Контакты</h2>
        <div className="contacts__tabs">
          <Button
            type="button"
            onClick={() => setActiveTab("add")}
            className={`contacts__tab ${
              activeTab === "add" ? "contacts__tab--active" : ""
            } hover-scale`}
          >
            Добавить Контакт
          </Button>
          <Button
            type="button"
            onClick={() => setActiveTab("all")}
            className={`contacts__tab ${
              activeTab === "all" ? "contacts__tab--active" : ""
            } hover-scale`}
          >
            Ваши Контакты
          </Button>
        </div>
        {activeTab === "add" && (
          <form className="contacts__form" onSubmit={handleCreateContact}>
            <fieldset className="contacts__fieldset">
              <label htmlFor="contacts-add-name">Имя</label>
              <Input
                type="text"
                name="contacts-add-name"
                className="contacts__input"
                placeholder="Введите имя"
                onChange={handleNameChange}
                value={nameValue}
              ></Input>
            </fieldset>
            <fieldset className="contacts__fieldset">
              <label htmlFor="contacts-add-phone">Телефон</label>
              <Input
                type="number"
                name="contacts-add-phone"
                className="contacts__input"
                placeholder="Введите номер телефона"
                onChange={handlePhoneChange}
                value={phoneValue}
              ></Input>
            </fieldset>
            <Button
              className="contacts__button hover-scale"
              type="submit"
              disabled={nameValue.length === 0 || phoneValue.length === 0}
            >
              Сохранить
            </Button>
          </form>
        )}
        {activeTab === "all" && (
          <>
            <form className="contacts__search" onSubmit={handleSearch}>
              <Input
                className="contacts__search-input"
                placeholder="Введите слово для поика"
                value={searchValue}
                onChange={handleSearchChange}
              ></Input>
              <Button
                className="contacts__search-button hover-scale"
                type="submit"
              >
                Найти
              </Button>
              {searchValue.length > 0 && (
                <Button
                  className="contacts__search-button hover-scale"
                  type="button"
                  onClick={handleResetSearch}
                >
                  Сбросить
                </Button>
              )}
            </form>
            <div className="contacts__cards">
              {renderCards.map(({ id, name, phone }) => {
                return (
                  <ContactCard key={id} name={name} phone={phone} id={id} />
                );
              })}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

interface ContactsWrapperProps {}

const ContactsWrapper: FC<ContactsWrapperProps> = () => {
  return (
    <PageLayout>
      <Contacts />
    </PageLayout>
  );
};

export default ContactsWrapper;
