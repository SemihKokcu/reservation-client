import Sidebar from "pages/dashboard/Sidebar";
import React from "react";
import { useLocation, Route, Routes, Navigate } from "react-router-dom";
import { Container } from "reactstrap";

import routes from "pages/routes";
import ResNavbar from "./navbar/Navbar";
import Footer from "./footer/Footer";
import { connect, useDispatch, useSelector } from "react-redux";
import PrivateComponent from "../../components/PrivateComponent";

const Admin = (props) => {
  const mainContent = React.useRef(null);
  const location = useLocation();
  const dispatch = useDispatch();
  React.useEffect(() => {
    if (mainContent.current) {
      document.documentElement.scrollTop = 0;
      document.scrollingElement.scrollTop = 0;
      mainContent.current.scrollTop = 0;
    }
  }, [location]);

  const getRoutes = (routes) => {
    return routes.map((prop, key) => {
      if (prop.layout === "/admin") {
        return (
          <Route path={prop.path} element={prop.component} key={key} exact />
        );
      } else {
        return null;
      }
    });
  };

  const setSideBar = (routes) => {
    return routes.filter((prop) => prop.layout === "/admin");
  };

  const { successMessage, showLoading, errorMessage } = useSelector(
    (state) => state.auth
  );

  return (
    <>
      {/* {
      successMessage && (
        <Alertify message={successMessage} severity={"success"} />
      )
    } */}
      <PrivateComponent>
        <Sidebar
          {...props}
          routes={setSideBar(routes)}
          logo={{
            innerLink: "/admin/index",
            imgSrc: require("../../assets/img/brand/crow-black.png"),
            imgAlt: "...",
          }}
        />
        <div className="main-content" ref={mainContent}>
          <ResNavbar />
          <Routes>
            {getRoutes(routes)}
            <Route
              path="*"
              element={<Navigate to="/admin/dashboard" replace />}
            />
          </Routes>
          <Container fluid>
            <Footer />
          </Container>
        </div>
      </PrivateComponent>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    errorMessage: state.errorMessage,
    successMessage: state.successMessage,
    showLoading: state.showLoading,
  };
};
export default connect(mapStateToProps)(Admin);
