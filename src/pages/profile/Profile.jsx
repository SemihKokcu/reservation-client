import React from "react";
import {
  Button,
  Card,
  CardBody,
  CardHeader,
  CardTitle,
  Col,
  Container,
  Row,
} from "reactstrap";

const Profile = () => {
  return (
    <div className="header bg-gradient-info pb-8 pt-5 pt-md-4">
      <Container fluid>
        <CardHeader className="text-center bg-gradient-success">RANDEVULARIM</CardHeader>
        <div className="header-body">
          <Row className="mt-3">
              <Col md="3" className="mt-3">
                <Card>
                  <CardHeader className="text-center">
                    Randevu Bilgileri
                  </CardHeader>
                  <CardBody>
                    <Row>
                      <Col md="4" className="me-1">
                        <CardTitle>Doktor:</CardTitle>
                      </Col>
                      <Col md="8" className="">
                        <CardTitle>Semih Kökçü</CardTitle>
                      </Col>
                    </Row>
                    <Row>
                      <Col md="4" className="me-1">
                        <CardTitle>Tarih:</CardTitle>
                      </Col>
                      <Col md="8" className="">
                        <CardTitle>
                          23.11.2023 <div className="mt-2">08:30</div>
                        </CardTitle>
                      </Col>
                    </Row>
                    <Row>
                      <Col md="9"></Col>
                      <Button color="warning">
                        <i class="fa-solid fa-xmark"></i>
                      </Button>
                    </Row>
                  </CardBody>
                </Card>
              </Col>
              <Col md="3" className="mt-3">
                <Card>
                  <CardHeader className="text-center">
                    Randevu Bilgileri
                  </CardHeader>
                  <CardBody>
                    <Row>
                      <Col md="4" className="me-1">
                        <CardTitle>Doktor:</CardTitle>
                      </Col>
                      <Col md="8" className="">
                        <CardTitle>Semih Kökçü</CardTitle>
                      </Col>
                    </Row>
                    <Row>
                      <Col md="4" className="me-1">
                        <CardTitle>Tarih:</CardTitle>
                      </Col>
                      <Col md="8" className="">
                        <CardTitle>
                          23.11.2023 <div className="mt-2">08:30</div>
                        </CardTitle>
                      </Col>
                    </Row>
                    <Row>
                      <Col md="9"></Col>
                      <Button color="warning">
                        <i class="fa-solid fa-xmark"></i>
                      </Button>
                    </Row>
                  </CardBody>
                </Card>
              </Col>
              <Col md="3" className="mt-3">
                <Card>
                  <CardHeader className="text-center">
                    Randevu Bilgileri
                  </CardHeader>
                  <CardBody>
                    <Row>
                      <Col md="4" className="me-1">
                        <CardTitle>Doktor:</CardTitle>
                      </Col>
                      <Col md="8" className="">
                        <CardTitle>Semih Kökçü</CardTitle>
                      </Col>
                    </Row>
                    <Row>
                      <Col md="4" className="me-1">
                        <CardTitle>Tarih:</CardTitle>
                      </Col>
                      <Col md="8" className="">
                        <CardTitle>
                          23.11.2023 <div className="mt-2">08:30</div>
                        </CardTitle>
                      </Col>
                    </Row>
                    <Row>
                      <Col md="9"></Col>
                      <Button color="warning">
                        <i class="fa-solid fa-xmark"></i>
                      </Button>
                    </Row>
                  </CardBody>
                </Card>
              </Col>
              <Col md="3" className="mt-3">
                <Card>
                  <CardHeader className="text-center">
                    Randevu Bilgileri
                  </CardHeader>
                  <CardBody>
                    <Row>
                      <Col md="4" className="me-1">
                        <CardTitle>Doktor:</CardTitle>
                      </Col>
                      <Col md="8" className="">
                        <CardTitle>Semih Kökçü</CardTitle>
                      </Col>
                    </Row>
                    <Row>
                      <Col md="4" className="me-1">
                        <CardTitle>Tarih:</CardTitle>
                      </Col>
                      <Col md="8" className="">
                        <CardTitle>
                          23.11.2023 <div className="mt-2">08:30</div>
                        </CardTitle>
                      </Col>
                    </Row>
                    <Row>
                      <Col md="9"></Col>
                      <Button color="warning">
                        <i class="fa-solid fa-xmark"></i>
                      </Button>
                    </Row>
                  </CardBody>
                </Card>
              </Col>
             

            <Col md="3"></Col>
          </Row>
        </div>
      </Container>
    </div>
  );
};

export default Profile;
