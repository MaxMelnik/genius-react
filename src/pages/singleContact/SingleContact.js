import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { getSingleContact } from "../../api/api";
import Loader from "../../components/Loader";

const SingleContact = () => {
  const { id } = useParams();
  const { data, isFetching } = useQuery({
    queryKey: ["singleContact"],
    queryFn: () => getSingleContact(id),
  });

  return (
    <>
      {isFetching ? (
        <Loader />
      ) : (
        <>
          <h1 style={{ textAlign: "center" }}>
            {data.name} {data.lastname} {id}
          </h1>
          <div>{data.about}</div>
        </>
      )}
    </>
  );
};

export default SingleContact;
