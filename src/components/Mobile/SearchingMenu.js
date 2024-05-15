import { SearchingForm } from "../Header/SearchingForm";
import classes from "./SearchingMenu.module.scss";
import arrow from "../../assets/right-arrow.png";

export const SearchingMenu = () => {
  return (
    <>
      <div className={classes.modal} />
      <div className={classes.content}>
        <img src={arrow} className={classes.arrow} />
        <SearchingForm />
      </div>
    </>
  );
};
