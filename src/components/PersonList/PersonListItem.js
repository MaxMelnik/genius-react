// import OnlineIcon from "../OnlineIcon/OnlineIcon";

const PersonListItem = ({ person }) => {
  const { image, name, lastname, isOnline } = person;

  return (
    <div>
      <img src={image} alt={name} width="400" height="400" />
      <h3>
        Full Name: {name} {lastname}
      </h3>
      <div>{/* isOnline: <OnlineIcon /> */}</div>
    </div>
  );
};

export default PersonListItem;
