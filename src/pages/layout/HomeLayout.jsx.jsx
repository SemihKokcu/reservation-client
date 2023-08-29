import React from "react";
import { useLocation, Route, Routes, Navigate } from "react-router-dom";

import routes from "../routes";
import ResNavbar from "./navbar/Navbar";
import Footer from "./footer/Footer";
import PrivateComponent from "components/PrivateComponent";

const HomeLayout = (props) => {
  const mainContent = React.useRef(null);
  const location = useLocation();

  React.useEffect(() => {
    document.body.classList.add("bg-default");
    return () => {
      document.body.classList.remove("bg-default");
    };
  }, []);
  React.useEffect(() => {
    if (mainContent.current) {
        document.documentElement.scrollTop = 0;
        document.scrollingElement.scrollTop = 0;
        mainContent.current.scrollTop = 0;
      }
  }, [location]);

  const getRoutes = (routes) => {
    return routes.map((prop, key) => {
        return (
          <Route
            path={prop.path}
            element={prop.component}
            key={key}
            exact
          />
        )   
    });
  };

  return (
    <>
     <PrivateComponent>
      <ResNavbar />
      <Routes>
        {getRoutes(routes)}
        <Route path="*" element={<Navigate to="/login" replace />} />
      </Routes>
      <Footer />
     </PrivateComponent>
    </>
  );
};

export default HomeLayout;
