const handleDeleteContact = (id: string) => {
  return fetch(`http://localhost:3001/contacts/${id}`, {
    method: "DELETE",
    headers: {
      "Content-type": "application/json",
    },
  });
};

export default handleDeleteContact;
