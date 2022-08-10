const handleUpdateContact = (id: string, name: string, phone: string) => {
  return fetch(`http://localhost:3001/contacts/${id}`, {
    method: "PATCH",
    body: JSON.stringify({
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

export default handleUpdateContact;
