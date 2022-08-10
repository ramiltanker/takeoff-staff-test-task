const handleGetContacts = () => {
  return fetch(`http://localhost:3001/contacts`, {
    method: "GET",
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

export default handleGetContacts;
