import MainNavigation from "./MainNavigation";
import { Fragment } from "react";
import styles from "./Layout.module.css";

function Layout(props) {
  return (
    <Fragment>
      <MainNavigation />
      <main className={styles.main}>{props.children}</main>
    </Fragment>
  );
}

export default Layout;
