import { useQuery } from "@tanstack/react-query";
import { getContactsList } from "../../api/api";
import Loader from "../../components/Loader";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Contacts = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { data, isFetching } = useQuery({
    queryKey: ["contactsList"],
    queryFn: getContactsList,
    refetchOnMount: true,
    refetchOnReconnect: false,
    refetchOnWindowFocus: false,
  });
  return (
    <>
      <h1 style={{ margin: "0 auto" }}>Contacts</h1>
      <button onClick={() => navigate(-1)}>{"<"}</button>
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
