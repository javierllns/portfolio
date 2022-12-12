import { Outlet } from "react-router-dom";

export const MainLayout = () => {
  return (
    <div>
      <div>Main layout</div>
      <Outlet />
    </div>
  );
};

export default MainLayout;
