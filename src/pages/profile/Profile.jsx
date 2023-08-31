import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
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

import { getallReservationsByUserAction } from "store/actions/ReservationActions";

const Profile = () => {
  const { reservations } = useSelector((state) => state.reservation);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getallReservationsByUserAction());
  }, []);

  return (
    <div className="header bg-gradient-info pb-8 pt-5 pt-md-4">
      <Container fluid>
        <CardHeader className="text-center bg-gradient-success">
          RANDEVULARIM
        </CardHeader>
        <div className="header-body">
          <Row className="mt-3">
            {reservations.map((reservation, index) => (
              <Col md="3" className="mt-3" key={index}>
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
                        <CardTitle>{reservation.doctorName}</CardTitle>
                      </Col>
                    </Row>
                    <Row>
                      <Col md="4" className="me-1">
                        <CardTitle>Tarih:</CardTitle>
                      </Col>
                      <Col md="8" className="">
                        <CardTitle>
                          {reservation.date}{" "}
                          <div className="mt-2">{reservation.startTime}</div>
                        </CardTitle>
                      </Col>
                    </Row>
                    <Row>
                      <Col md="9"></Col>
                      <Button color="warning">
                        <i className="fa-solid fa-xmark"></i>
                      </Button>
                    </Row>
                  </CardBody>
                </Card>
              </Col>
            ))}
            <Col md="3"></Col>
          </Row>
        </div>
      </Container>
    </div>
  );
};

export default Profile;
