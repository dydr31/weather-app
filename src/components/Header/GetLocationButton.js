import nav from "../../assets/navigation.png";
import { getCoords, getLocation } from "../../util/functions";
import classes from "./GetLocationButton.module.scss";

export const GetLocationButton = () => {
  const getPositionHandler = async () => {
    let res = await getCoords()
    console.log(res)

  };
  return (
    <>
      <button onClick={getPositionHandler} className={classes["nav-button"]}>
        <img src={nav} className={`${classes["nav-image"]}`} />
      </button>
    </>
  );
};
