import classes from "./Footer.module.scss";

export const Footer = () => {
  return (
    <footer className={classes.footer}>
      <p>by dydr31@github</p>
      <a
        href="https://www.flaticon.com/free-icons"
        title="icons"
        className="link"
      >
        Icons created by Freepik - Flaticon
      </a>
    </footer>
  );
};
