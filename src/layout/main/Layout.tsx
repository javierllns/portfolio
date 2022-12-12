import styles from "./Layout.module.css";
import { Outlet } from "react-router-dom";
import { Sidebar } from "../../components";

export const MainLayout = () => {
  return (
    <div className={styles.mainContainer}>
      <Sidebar />
      <div className={styles.content}>
        <Outlet />
      </div>
    </div>
  );
};

export default MainLayout;
