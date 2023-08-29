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

const Register = ()=>{

    const validationSchema = Yup.object().shape({
        name: Yup.string().required("Name is required"),
        email: Yup.string().email("Invalid email").required("Email is required"),
        password: Yup.string()
          .min(6, "Password must be at least 6 characters")
          .required("Password is required"),
        confirmPassword: Yup.string()
          .oneOf([Yup.ref("password"), null], "Passwords must match")
          .required("Confirm Password is required"),
        agreeToPrivacyPolicy: Yup.boolean().oneOf(
          [true],
          "You must agree to the Privacy Policy"
        ),
      });
    const initialValues = {
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
        agreeToPrivacyPolicy: false,
      };
    
      const handleSubmit = async (values, { resetForm }) => {
       
      };
    return(
        <>
         <Row>
            <Col md="4"></Col>
          <Col md="4">
          <Card className="bg-secondary shadow border-0 d-flex">
          <CardHeader className="bg-transparent pb-2">
            <div className="text-muted text-center mt-2 mb-2">
              <small>Sign up with</small>
            </div>
            <div className="text-center">
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
            <div className="text-center mt-2">
              Do you have an account ?
              <p className="mt-1 mb-1">
                <a className="" href="/login">
                  Sign in
                </a>
              </p>
            </div>
          </CardHeader>
          <CardBody className="px-lg-4 py-lg-2">
            <div className="text-center text-muted mb-2">
              <small>Or sign up with credentials</small>
            </div>
            <Formik
              initialValues={initialValues}
              validationSchema={validationSchema}
              onSubmit={handleSubmit}
            >
              {({ errors, touched }) => (
                <Form>
                  <FormGroup>
                    <InputGroup className="input-group-alternative mb-3">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="ni ni-hat-3" />
                        </InputGroupText>
                      </InputGroupAddon>
                      <Field
                        className="form-control"
                        name="name"
                        placeholder="Name"
                      />
                      
                    </InputGroup>
                    {errors.name && touched.name && (
                        <div className="text-danger mt-3">{errors.name}</div>
                      )}
                  </FormGroup>
                  <FormGroup>
                    <InputGroup className="input-group-alternative mb-3">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="ni ni-email-83" />
                        </InputGroupText>
                      </InputGroupAddon>
                      <Field
                        className="form-control"
                        name="email"
                        placeholder="Email"
                      />
                      
                    </InputGroup>
                    {errors.email && touched.email && (
                        <div className="text-danger mt-3">{errors.email}</div>
                      )}
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
                        name="password"
                        placeholder="Password"
                        type="password"
                        autoComplete="new-password"
                      />
                      
                    </InputGroup>
                    {errors.password && touched.password && (
                        <div className="text-danger mt-3">{errors.password}</div>
                      )}
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
                        name="confirmPassword"
                        placeholder="Confirm Password"
                        type="password"
                        autoComplete="new-password"
                      />
                    </InputGroup>
                    {errors.confirmPassword &&
                        touched.confirmPassword && (
                          <div className="text-danger mt-3">
                            {errors.confirmPassword}
                          </div>
                        )}
                  </FormGroup>
                  {/* <div className="text-muted font-italic">
                    <small>
                      password strength:{" "}
                      <span className="text-success font-weight-700">
                        strong
                      </span>
                    </small>
                  </div> */}
                  <Row className="my-3">
                    <Col xs="12">
                      <div className="custom-control custom-control-alternative custom-checkbox">
                        <Field
                          className="custom-control-input"
                          id="customCheckRegister"
                          type="checkbox"
                          name="agreeToPrivacyPolicy"
                        />
                        <label
                          className="custom-control-label"
                          htmlFor="customCheckRegister"
                        >
                          <span className="text-muted">
                            I agree with the{" "}
                            <a
                              href="#pablo"
                              onClick={(e) => e.preventDefault()}
                            >
                              Privacy Policy
                            </a>
                          </span>
                        </label>
                       
                      </div>
                      {errors.agreeToPrivacyPolicy &&
                          touched.agreeToPrivacyPolicy && (
                            <div className="text-danger mt-3">
                              {errors.agreeToPrivacyPolicy}
                            </div>
                          )}
                    </Col>
                  </Row>
                  <div className="text-center">
                    <Button className="mb-3" color="primary" type="submit">
                      Create account
                    </Button>
                  </div>
                </Form>
              )}
            </Formik>
          </CardBody>
        </Card>
          </Col>
        </Row>
        </>
    )
}

export default Register;