import React, { useContext, useEffect, useState } from "react";
import { ResidenceContext } from "../contexts/ResidenceContext";
import {
  Form,
  FormGroup,
  Label,
  Input,
  Col,
  Row,
  Button,
  CardImg
} from "reactstrap";
import {
  divStyle1,
  imgStyle,
  residence,
  topPStyle
} from "../css/bookingComponentStyle";

const BookingComponent = props => {
  const { chosenResidence } = useContext(ResidenceContext);
  console.log(chosenResidence);
  // const [residence, setResidence] = useState(null);

  // const fetchOneResidence = async id => {
  //   let res = await fetch(`/rest/residences/${id}`);
  //   res = await res.json();
  //   // console.log(res);
  //   setResidence(res);
  // };

  // useEffect(() => {
  //   if (props.match.params.residenceId){
  //     fetchOneResidence(props.match.params.residenceId);
  //   };
  // }, [props.match.params.residenceId]);

  //const goToBookingPage = id => {
  //history.push(`/residences/${id}`);

  return (
    <Row>
      <Col xs="12" md={{ size: 8, offset: 2 }}>
        <div style={divStyle1} className="card bg-warning my-3">
          <div className="card-body">
            <p style={topPStyle} className="col-12 text-center">
              Boka bostad
            </p>
            <img
              style={imgStyle}
              src={chosenResidence.images}
              alt=""
              className="card-img-top"
            />
            <Form className="my-3">
              <Row form>
                <Col xs="12" md="6">
                  <FormGroup>
                    <Label for="name">Förnamn</Label>
                    <Input type="text" name="name" id="firstName" />
                  </FormGroup>
                </Col>
                <Col xs="12" md="6">
                  <FormGroup>
                    <Label for="lastName">Efternamn:</Label>
                    <Input type="lastname" name="lastname" id="lastName" />
                  </FormGroup>
                </Col>
              </Row>
              <Row form>
                <Col xs="12" md="6">
                  <FormGroup>
                    <Label for="phone">Telefon:</Label>
                    <Input
                      type="number"
                      name="number"
                      id="phoneNumber"
                      display="inline-block"
                    />
                  </FormGroup>
                </Col>
                <Col xs="12" md="6">
                  <FormGroup>
                    <Label for="email">Email:</Label>
                    <Input type="email" name="email" id="emailAdress" />
                  </FormGroup>
                </Col>
              </Row>

              <Button
                color="secondary"
                block
                className="col-12 col-md-8 offset-md-2"
              >
                Fortsätt
              </Button>
            </Form>
          </div>
        </div>
      </Col>
    </Row>
  );
};

export default BookingComponent;
