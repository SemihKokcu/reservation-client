import React from "react";
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  FormGroup,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Row,
  Col,
} from "reactstrap";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { connect, useDispatch,useSelector } from 'react-redux';
import {  useNavigate } from 'react-router-dom'
import { loginAction } from "store/actions/AuthActions";
const Login = () => {

  const validationSchema = Yup.object().shape({
    email: Yup.string().email("Invalid email").required("Email is required"),
    password: Yup.string().required("Password is required"),
  });
  const initialValues = {
    email: "",
    password: "",
  };

  const dispatch = useDispatch();
  const navigate = useNavigate();
  
  const handleSubmit = async (values, { resetForm }) => {
    const data = {
      email: values.email,
      password: values.password
    }
    dispatch(loginAction(data.email,data.password,navigate));
  
  };
  const { successMessage, showLoading, errorMessage } = useSelector((state) => state.auth);
  
  return (
    <>
   
      <Row>
        <Col md="4"></Col>
        <Col md="8">
          <Col lg="6" md="7">
            <Card className="bg-secondary shadow border-0">
              <CardHeader className="bg-transparent pb-5">
                <div className="text-muted text-center mt-2 mb-3">
                  <small>Sign in with</small>
                </div>
                <div className="btn-wrapper text-center">
                  <Button
                    className="btn-neutral btn-icon"
                    color="default"
                    href="#pablo"
                    onClick={(e) => e.preventDefault()}
                  >
                    <span className="btn-inner--icon">
                      <img
                        alt="..."
                        src={
                          require("../../../assets/img/icons/common/github.svg")
                            .default
                        }
                      />
                    </span>
                    <span className="btn-inner--text">Facebook</span>
                  </Button>
                  <Button
                    className="btn-neutral btn-icon"
                    color="default"
                    href="#pablo"
                    onClick={(e) => e.preventDefault()}
                  >
                    <span className="btn-inner--icon">
                      <img
                        alt="..."
                        src={
                          require("../../../assets/img/icons/common/google.svg")
                            .default
                        }
                      />
                    </span>
                    <span className="btn-inner--text">Google</span>
                  </Button>
                </div>
              </CardHeader>
              <CardBody className="px-lg-5 py-lg-5">
                <div className="text-center text-muted mb-4">
                  <small>Or sign in with credentials</small>
                </div>
                <Formik
                  initialValues={initialValues}
                  validationSchema={validationSchema}
                  onSubmit={handleSubmit}
                >
                  <Form role="form">
                    <FormGroup className="mb-3">
                      <InputGroup className="input-group-alternative">
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="ni ni-email-83" />
                          </InputGroupText>
                        </InputGroupAddon>
                        <Field
                          className="form-control"
                          type="email"
                          name="email"
                          placeholder="Email"
                        />
                      </InputGroup>
                      <ErrorMessage
                        component="div"
                        name="email"
                        className="text-danger mt-3"
                      />
                    </FormGroup>
                    <FormGroup>
                      <InputGroup className="input-group-alternative">
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="ni ni-lock-circle-open" />
                          </InputGroupText>
                        </InputGroupAddon>
                        <Field
                          className="form-control"
                          type="password"
                          name="password"
                          placeholder="Password"
                        />
                      </InputGroup>
                      <ErrorMessage
                        component="div"
                        name="password"
                        className="text-danger mt-3"
                      />
                    </FormGroup>
                    <div className="custom-control custom-control-alternative custom-checkbox">
                      <Field
                        className="custom-control-input"
                        id="customCheckLogin"
                        type="checkbox"
                        name="rememberMe"
                      />
                      <label
                        className="custom-control-label"
                        htmlFor="customCheckLogin"
                      >
                        <span className="text-muted">Remember me</span>
                      </label>
                    </div>
                    <div className="text-center">
                      <Button className="my-4" color="primary" type="submit">
                        Sign in
                      </Button>
                    </div>
                  </Form>
                </Formik>
              </CardBody>
            </Card>
            <Row className="mt-3">
              <Col xs="6">
                <a className="text-light" href="/auth/forgot-password">
                  <small>Forgot password?</small>
                </a>
              </Col>
              <Col className="text-right" xs="6">
                <a className="text-light" href="/auth/register">
                  <small>Create new account</small>
                </a>
              </Col>
            </Row>
          </Col>
        </Col>
      </Row>
    </>
  );
};


export default (Login);
