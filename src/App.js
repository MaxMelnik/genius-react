import { useEffect, useState } from "react";
import styles from "./App.module.scss";
import { addContact, getContactsList } from "./api/api";
import Loader from "./components/Loader";
import { useFetch } from "./hooks/useFetch";
import axios from "axios";
import { useMutation, useQuery } from "@tanstack/react-query";

function App() {
  const { data, isFetching, error, refetch } = useQuery({
    queryKey: ["contactsist"],
    queryFn: getContactsList,
  });

  const { mutateAsync } = useMutation({
    mutationFn: addContact,
  });

  const addNewContact = async () => {
    const payload = {
      name: "Robert",
      lastname: "California",
      about: "I am the Lizardking",
    };
    try {
      await mutateAsync(payload);
      refetch();
    } catch (e) {}
  };

  return (
    <div>
      <header>
        <h1>Contacts</h1>
      </header>
      <main>
        <ul>
          {isFetching ? (
            <Loader loading={isFetching} />
          ) : (
            data?.map((contact) => (
              <li key={contact.id}>
                <p>
                  {contact.name} {contact.lastname}
                  <button>e</button>
                  <button>-</button>
                </p>
              </li>
            ))
          )}
        </ul>
        <button onClick={addNewContact}>+</button>
      </main>
    </div>
  );
}

export default App;
