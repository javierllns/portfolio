import styles from "./Sidebar.module.css";

export const Sidebar = () => {
  return (
    <div className={styles.mainContainer}>
      <div className={styles.profilePicture}></div>
      <div className={styles.profileName}>Javier Llanos</div>
      <div className={styles.socialLinks}></div>
      <div className={styles.siteNavigation}></div>
    </div>
  );
};

export default Sidebar;
