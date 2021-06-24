import React, { useEffect, useState } from "react";
import {
  Button,
  Form,
  Grid,
  Header,
  Image,
  Message,
  Dropdown,
  Segment,
  Container,
} from "semantic-ui-react";
import { Link } from "react-router-dom";
import logo from "../assets/hrms-logo.png";
import CityService from "../../../services/CityService";

export default function EmployerRegister() {
  const [cities, setCities] = useState([]);

  useEffect(() => {
    let cityService = new CityService();

    cityService.getCitys().then((result) => setCities(result.data.data));
  }, []);

  const cityOptions = cities.map((city, index) => ({
    key: index,
    text: city.cityName,
    value: city.id,
  }));

  return (
    <div>
      <Container className="register">
        <Header as="h2" style={{ color: "#840EB6" }} textAlign="center">
          Şirket Olarak Kayıt Ol
        </Header>
        <Form size="large">
          <Segment stacked>
            <Grid stackable>
              <Grid.Column width={8}>
                <div style={{ marginTop: "1em" }}>
                  <label>Şirket İsimi</label>

                  <Form.Input
                    fluid
                    icon="building"
                    iconPosition="left"
                    placeholder="Şirket İsimi"
                    type="text"
                    name="firstName"
                  />
                </div>
                <div style={{ marginTop: "1em" }}>
                  <label>Telefon Numarası</label>
                  <Form.Input
                    fluid
                    icon="phone"
                    iconPosition="left"
                    placeholder="Telefon Numarası"
                    type="text"
                    name="lastName"
                  />
                </div>
                <div style={{ marginTop: "1em" }}>
                  <label>Web Sitesi</label>
                  <Form.Input
                    fluid
                    icon="wordpress"
                    iconPosition="left"
                    placeholder="Web Sitesi"
                    type="text"
                    name="nationalNumber"
                  />
                </div>
                <div style={{ marginTop: "1em" }}>
                  <label>Sektör</label>
                  <Form.Input
                    fluid
                    icon="chart pie
                    "
                    iconPosition="left"
                    placeholder="Sektör"
                    type="text"
                    name="birthDate"
                  />
                </div>
              </Grid.Column>

              <Grid.Column width={8}>
                <div style={{ marginTop: "1em" }}>
                  <label>Email</label>
                  <Form.Input
                    fluid
                    icon="mail"
                    iconPosition="left"
                    placeholder="E-mail adresi"
                    type="email"
                    name="email"
                  />
                </div>
                <div style={{ marginTop: "1em" }}>
                  <label>Lokasyon</label>
                  <Form.Dropdown
                    fluid
                    item
                    search
                    selection
                    options={cityOptions}
                    iconPosition="left"
                    placeholder="Lokasyon"
                    name="reEmail"
                  />
                </div>
                <div style={{ marginTop: "1em" }}>
                  <label>Şifre</label>
                  <Form.Input
                    fluid
                    icon="lock"
                    iconPosition="left"
                    placeholder="Şifre"
                    type="password"
                    name="password"
                  />
                </div>
                <div style={{ marginTop: "1em" }}>
                  <label>Şifre Tekrar</label>
                  <Form.Input
                    fluid
                    icon="lock"
                    iconPosition="left"
                    placeholder="Şifre tekrar"
                    type="password"
                    name="rePassword"
                  />
                </div>
              </Grid.Column>
            </Grid>

            <br />
            <Button
              style={{ backgroundColor: "#840EB6", color: "white" }}
              fluid
              size="large"
              type="submit"
            >
              Kayıt Ol
            </Button>
          </Segment>
        </Form>
        <Message info>
          <Link to={"/registerJobSeeker"}>
            Normal üye olarak kaydolmak için buraya tıkla
          </Link>
        </Message>
      </Container>
    </div>
  );
}
