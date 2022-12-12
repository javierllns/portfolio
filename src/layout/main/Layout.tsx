import { Outlet } from "react-router-dom";
import styles from "./Layout.module.css";

export const MainLayout = () => {
  return (
    <div className={styles.mainContainer}>
      <div style={{ height: "100vh", width: "200px", backgroundColor: "red" }}>Main layout</div>
      <div className={styles.content}>
        <Outlet />
      </div>
    </div>
  );
};

export default MainLayout;
