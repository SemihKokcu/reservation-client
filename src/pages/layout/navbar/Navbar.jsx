import { useEffect, useState } from "react";
import { connect, useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import {
  UncontrolledCollapse,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container,
  Row,
  Col,
} from "reactstrap";
import { logoutAction } from "store/actions/AuthActions";


const ResNavbar = () => {
  const {role,status } = useSelector((state) => state.auth);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logoutAction(navigate))
  }

  return (
    <>
      <Navbar className="navbar-top navbar-horizontal navbar-dark" expand="md">
        <div className="container-fluid">
          <NavbarBrand className="mx-5" to="/home" tag={Link}>
            <img
              alt="..."
              src={require("../../../assets/img/brand/crow-black.png")}
            />
            <b className="mx-3">Crow Soft</b>
          </NavbarBrand>
          <button className="navbar-toggler" id="navbar-collapse-main">
            <span className="navbar-toggler-icon" />
          </button>
          <UncontrolledCollapse navbar toggler="#navbar-collapse-main">
            <div className="navbar-collapse-header d-md-none">
              <Row>
                <Col className="collapse-brand" xs="6">
                  <Link to="/">
                    <img
                      alt="..."
                      src={require("../../../assets/img/brand/crow-black.png")}
                    />
                  </Link>
                </Col>
                <Col className="collapse-close" xs="6">
                  <button className="navbar-toggler" id="navbar-collapse-main">
                    <span />
                    <span />
                  </button>
                </Col>
              </Row>
            </div>
            <Nav className="ml-auto mx-5" navbar>
              {
                status && (
                  <>
                  <NavItem>
                <NavLink className="nav-link-icon" to="/home" tag={Link}>
                <i class="fa-solid fa-crow"></i>
                  <span className="nav-link-inner--text">Randevu Al</span>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink className="nav-link-icon" to="/profile" tag={Link}>
                <i class="fa-solid fa-calendar-days"></i>
                  <span className="nav-link-inner--text">Randevularım</span>
                </NavLink>
              </NavItem></>
                )
              }
              
                <NavItem>
                {role === "ADMIN" && ( 
                  <NavLink className="nav-link-icon" to="/admin/dashboard" tag={Link}>
                    <i class="fa-solid fa-layer-group"></i>
                    <span className="nav-link-inner--text">Yönetim Paneli</span>
                  </NavLink>
                  )}
              </NavItem>
               
              {
                !status ===true ? (
                  <>
                  <NavItem>
                <NavLink className="nav-link-icon" to="/login" tag={Link}>
                  <i className="ni ni-key-25" />
                  <span className="nav-link-inner--text">Login</span>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  className="nav-link-icon"
                  to="/register"
                  tag={Link}
                >
                  <i className="ni ni-circle-08" />
                  <span className="nav-link-inner--text">Register</span>
                </NavLink>
              </NavItem></>
                  
                ): (
                  <>
                   <NavItem>
                <NavLink
                  className="nav-link-icon"
                  to="/login"
                  tag={Link}
                  onClick={handleLogout}
                >
                  <i class="fa-solid fa-rotate-right"></i>
                  <span className="nav-link-inner--text">Logout</span>
                </NavLink>
              </NavItem>
                  </>
                )
              }

              {/* <NavItem>
                  <UncontrolledDropdown className="nav-link-icon mt-2">
                            <DropdownToggle id='current' color='white'>
                                 <i class="fa-solid fa-language"></i>
                            </DropdownToggle>
                            <DropdownMenu  >
                                <DropdownItem id='tr' onClick={()=>handleChangeLng("tr")}>TR</DropdownItem>
                                <DropdownItem id='en' onClick={()=>handleChangeLng("en")}>EN</DropdownItem>
                            </DropdownMenu>
                        </UncontrolledDropdown>
              </NavItem> */}
            </Nav>
          </UncontrolledCollapse>
        </div>
      </Navbar>
    </>
  );
};
const mapStateToProps = (state) => {
  return {
     role: state.role,
     status:state.status
  };
};
export default connect(mapStateToProps)(ResNavbar);