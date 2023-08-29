import { Pivot, PivotItem } from "@fluentui/react";
import { Container, Row } from "reactstrap";
import ReservationList from "./ReservationList";
import AddReservation from "./AddReservation";

const ReservationPivot = () => {
  return (
    <Container fluid className="mt-3">
      <Row>
        <Pivot style={{width:"100%"}}>
          <PivotItem  headerText="Randevular Listesi">
            <div className="mt-3">
                <ReservationList/>
            </div>
          </PivotItem>
          <PivotItem headerText="Randevu Ekle">
            <div className="mt-3">
                <AddReservation />
            </div>
          </PivotItem>
        </Pivot>
      </Row>
    </Container>
  );
};
export default ReservationPivot;
