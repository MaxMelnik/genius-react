import { useState } from "react";
import { PERSONS } from "../../utils";
import PersonListItem from "./PersonListItem";
import classNames from "classnames";

import styles from "./PersonList.module.scss";

// const styles = {
//   containerSkyblue: {
//     padding: 32,
//     backgroundColor: "skyblue",
//     color: "black",
//   },
//   containerDarkred: {
//     padding: 32,
//     backgroundColor: "darkred",
//     color: "white",
//   },
// };

const PersonList = () => {
  const [state, setState] = useState(false);

  const changeBGColor = () => {
    setState(!state);
  };

  //   const setStyleBGColor = (type) => {
  //     if (type === "gold") {
  //       return "goldColor";
  //     }
  //     if (type === "crimson") {
  //       return "crimsonColor";
  //     }
  //   };

  return (
    <div
      //   className={`${styles.container} ${styles[setStyleBGColor("crimson")]}`}
      className={classNames(
        styles.container,
        state ? styles.skyblue : styles.darkred
      )}
    >
      {PERSONS.map((person) => (
        <PersonListItem key={person.id} person={person} />
      ))}
      <button onClick={changeBGColor}>•</button>
    </div>
  );
};

export default PersonList;
