import { MenuItem, TextField } from "@mui/material";
import React, { useState } from "react";
import {
  Card,
  CardBody,
  Container,
  Row,
  Col,
  CardHeader,
  Button,
} from "reactstrap";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import dayjs from "dayjs";
const Home = () => {
  const doctors = [
    {
      value: "1",
      label: "Can Korkmaz",
    },
    {
      value: "2",
      label: "Semih Kökçü",
    },
    {
      value: "3",
      label: "Adem Caba",
    },
    {
      value: "4",
      label: "Kerem Batın Gönen",
    },
  ];

  const timeSlots = [
    "08:00",
    "08:30",
    "09:00",
    "09:30",
    "10:00",
    "10:30",
    "11:00",
    "11:30",
    "12:00",
    "12:30",
    "13:00",
    "13:30",
    "14:00",
    "14:30",
    "15:00",
    "15:30",
    "16:00",
  ];

  const [selectedTime, setSelectedTime] = useState("");
  const [selectedDoctor, setSelectedDoctor] = useState("");
  const [selectedDate, setSelectedDate] = useState();

  const handleTimeClick = (time) => {
    setSelectedTime(time);
  };

  const handleDoctorChange = (event) => {
    setSelectedDoctor(event.target.value);
  };

  const handleDateChange = (date) => {
    setSelectedDate(date);
    

  };

  const handleSubmit = () => {

    const year = selectedDate.year();
    const month = selectedDate.month();
    const day = selectedDate.date();

  const formattedDate = `${year}-${month + 1}-${day}`;

  const appointmentData = {
    doctor: selectedDoctor,
    date: formattedDate,
    time: selectedTime,
  };

  console.log("Randevu Bilgileri:", appointmentData);
  };

  return (
    <div className="header bg-gradient-info pb-8 pt-5 pt-md-4">
      <Container fluid>
        <div className="header-body">
          <Row>
            <Col lg="4" xl="4"></Col>
            <Col lg="4" xl="4">
              <CardHeader className="text-center mb-2">
                CROWSOFT DİŞ AİLESİ
              </CardHeader>
              <Card className="card-stats mb-4 mb-xl-0">
                <CardBody>
                  <TextField
                    id="outlined-select-currency"
                    select
                    value={selectedDoctor}
                    onChange={handleDoctorChange}
                    defaultValue=""
                    helperText="Lütfen randevu almak istediğiniz doktoru seçiniz"
                    sx={{ width: "100%" }}
                  >
                    {doctors.map((option) => (
                      <MenuItem key={option.value} value={option.value}>
                        {option.label}
                      </MenuItem>
                    ))}
                  </TextField>
                  <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DemoContainer components={["DatePicker"]}>
                      <DatePicker
                      className="mt-3"
                        label="Randevu tarihi seçiniz"
                        onChange={(newValue) => handleDateChange(newValue)}
                        sx={{width: "100%"}}
                      />
                    </DemoContainer>
                  </LocalizationProvider>
                 {selectedDoctor && selectedDate && selectedDate.isValid() && (
                     <div style={{ textAlign: "center", marginTop: "16px" }}>
                     {timeSlots.map((time) => (
                       <Button
                         key={time}
                         variant="contained"
                         color={selectedTime === time ? "primary" : "default"}
                         onClick={() => handleTimeClick(time)}
                         style={{ margin: "4px" }}
                       >
                         {time}
                       </Button>
                     ))}
                   </div>
                 )}
                </CardBody>
                <Button color="primary" onClick={handleSubmit}>
                  ONAYLA
                </Button>
              </Card>
            </Col>
            <Col lg="4" xl="4"></Col>
          </Row>
        </div>
      </Container>
    </div>
  );
};

export default Home;
