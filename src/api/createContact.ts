import { v4 as uuidv4 } from "uuid";

const handleCreateContact = (name: string, phone: string) => {
  return fetch(`http://localhost:3001/contacts`, {
    method: "POST",
    body: JSON.stringify({
      id: uuidv4(),
      name,
      phone,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((res) => {
      if (!res.ok) {
        return Promise.reject({ message: `Ошибка ${res.status}` });
      }
      return res.json();
    })
    .then((res) => {
      return res;
    });
};

export default handleCreateContact;
