import { useEffect, useState } from "react";
import styles from "./App.module.scss";
import { getContactsList } from "./api/api";
import Loader from "./components/Loader";
import { useFetch } from "./hooks/useFetch";
import axios from "axios";

function App() {
  const [data, setData] = useState([]);
  const [isPostLoading, setIsPostLoading] = useState(false);
  const { data: contacts, isLoading, error } = useFetch("/contacts");

  useEffect(() => {
    setData(contacts);
  }, [contacts]);

  const addContact = async () => {
    setIsPostLoading(true);
    const payload = {
      name: "Robert",
      lastname: "California",
      about: "I am the Lizardking",
    };
    const response = await axios.post("/contacts", payload);
    setData((prevData) => [...prevData, response.data]);
    setIsPostLoading(false);
  };

  const deleteContact = async (id) => {
    await axios.delete(`/contacts/${id}`);
    setData((prevData) => prevData.filter((item) => item.id !== id));
  };

  const editContact = async (id) => {
    const payload = {
      name: "Bob",
    };
    const response = await axios.patch(`/contacts/${id}`, payload);
    setData((prevData) =>
      prevData.map((item) => {
        if (item.id === id) {
          return response.data;
        }
        return item;
      })
    );
  };

  if (error) {
    return <div>SWW: {error}</div>;
  }

  return (
    <div>
      <header>
        <h1>Contacts</h1>
      </header>
      <main>
        <ul>
          {isLoading ? (
            <Loader loading={isLoading} />
          ) : (
            data?.map((contact) => (
              <li key={contact.id}>
                <p>
                  {contact.name} {contact.lastname}
                  <button onClick={() => editContact(contact.id)}>e</button>
                  <button onClick={() => deleteContact(contact.id)}>-</button>
                </p>
              </li>
            ))
          )}
        </ul>
        <button disabled={isPostLoading} onClick={addContact}>
          {isPostLoading ? "*" : "+"}
        </button>
      </main>
    </div>
  );
}

export default App;
