import { useQuery } from "@tanstack/react-query";
import { getContactsList } from "../../api/api";
import Loader from "../../components/Loader";
import { Link } from "react-router-dom";

const Contacts = () => {
  const { data, isFetching } = useQuery({
    queryKey: ["contactsList"],
    queryFn: getContactsList,
    refetchOnMount: true,
  });
  return (
    <>
      <h1 style={{ margin: "0 auto" }}>Contacts</h1>
      {isFetching ? (
        <Loader />
      ) : (
        <ul>
          {data?.map((contact) => (
            <li key={contact.id}>
              <Link
                to={`${contact.id}`}
              >{`${contact.name} ${contact.lastname}`}</Link>
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

export default Contacts;
