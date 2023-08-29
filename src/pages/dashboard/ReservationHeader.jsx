
import { Card, CardBody, CardTitle, Container, Row, Col } from "reactstrap";

const ReservationHeader = ({}) => {
  return (
    <div className="header bg-gradient-info pb-5 pt-5 pt-md-8">
      <Container fluid>
        <div className="header-body">
          {/* Card stats */}
          <Row>
            <Col lg="9" xl="">
              <Card className="card-stats mb-4 mb-xl-0 text-center">
                <CardBody>
                  <Row>
                    <div className="col-md-12">
                      <CardTitle tag="h3" className="text-uppercase mb-0">
                        CROWSOFT DİŞ AİLESİ YÖNETİM PANELİ
                      </CardTitle>
                    </div>
                  </Row>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </div>
      </Container>
    </div>
  );
};

export default ReservationHeader;
