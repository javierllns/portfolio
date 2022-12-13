import { useEffect, useState } from "react";
import { useClassNames, useListenWindowResize } from "../../../hooks";
import styles from "./Sidebar.module.css";

export const Sidebar = () => {
  const classes = useClassNames(styles);
  const { width: viewportWidth } = useListenWindowResize();
  const [showSidebar, setShowSidebar] = useState(false);

  const handleToggleSidebar = () => {
    setShowSidebar((prev) => !prev);
  };

  useEffect(() => {
    if (viewportWidth && viewportWidth > 1280) {
      setShowSidebar(true);
    }
  }, [viewportWidth]);

  return (
    <div className={classes({ mainContainer: true, collapseMainContainer: !showSidebar })}>
      <div className={styles.toggleShowSidebarWrapper}>
        <div className={styles.toggleShowSidebar} onClick={handleToggleSidebar}>
          X
        </div>
      </div>
      <div className={styles.profilePicture}></div>
      <div className={styles.profileName}>Javier Llanos</div>
      <div className={styles.socialLinks}></div>
      <div className={styles.siteNavigation}></div>
    </div>
  );
};

export default Sidebar;
