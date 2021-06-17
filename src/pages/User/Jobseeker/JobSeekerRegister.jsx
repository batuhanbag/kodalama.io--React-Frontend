import React from "react";
import {
  Button,
  Form,
  Grid,
  Header,
  Image,
  Message,
  Segment,
  Container,
} from "semantic-ui-react";
import { Link } from "react-router-dom";
import logo from "../assets/hrms-logo.png";

export default function JobSeekerRegister() {
  const options = [
    { key: "m", text: "Erkek", value: "male" },
    { key: "f", text: "Kadın", value: "female" },
    { key: "o", text: "Belirtmek İstemiyorum", value: "other" },
  ];
  return (
    <div>
      <Container className="register">
        <Header as="h2" style={{ color: "#840EB6" }} textAlign="center">
          Kayıt Ol
        </Header>
        <Form size="large">
          <Segment stacked>
            <Grid stackable>
              <Grid.Column width={8}>
                <div style={{ marginTop: "1em" }}>
                  <label>İsim</label>

                  <Form.Input
                    fluid
                    icon="user"
                    iconPosition="left"
                    placeholder="İsim"
                    type="text"
                    name="firstName"
                  />
                </div>
                <div style={{ marginTop: "1em" }}>
                  <label>Soy İsim</label>
                  <Form.Input
                    fluid
                    icon="user"
                    iconPosition="left"
                    placeholder="Soy isim"
                    type="text"
                    name="lastName"
                  />
                </div>
                <div style={{ marginTop: "1em" }}>
                  <label>Kimlik Numarası</label>
                  <Form.Input
                    fluid
                    icon="id card"
                    iconPosition="left"
                    placeholder="Kimlik numarası"
                    type="text"
                    name="nationalNumber"
                  />
                </div>
                <div style={{ marginTop: "1em" }}>
                  <label>Doğum Tarihi</label>
                  <Form.Input
                    fluid
                    icon="calendar times"
                    iconPosition="left"
                    placeholder="Dogum tarihi"
                    type="date"
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
                  <label>Email Tekrar</label>
                  <Form.Input
                    fluid
                    icon="mail"
                    iconPosition="left"
                    placeholder="E-mail adresi tekrar"
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
          <Link to={"/registerEmployer"}>
            İşveren olarak kaydolmak için buraya tıkla
          </Link>
        </Message>
      </Container>
    </div>
  );
}
{
  /* <Grid textAlign="center" verticalAlign="middle">
          <Grid.Column style={{ maxWidth: 450 }}>
            <Header as="h2" style={{ color: "#840EB6" }} textAlign="center">
              Kayıt Ol
            </Header>
            <Form size="large">
              <Segment stacked>
                <Form.Input
                  fluid
                  icon="user"
                  iconPosition="left"
                  placeholder="E-mail address"
                />
                <Form.Input
                  fluid
                  icon="lock"
                  iconPosition="left"
                  placeholder="Password"
                  type="password"
                />
                <Form.Input
                  fluid
                  icon="lock"
                  iconPosition="left"
                  placeholder="Password"
                  type="password"
                />
                <Form.Input
                  fluid
                  icon="lock"
                  iconPosition="left"
                  placeholder="Password"
                  type="password"
                />
                <Form.Input
                  fluid
                  icon="lock"
                  iconPosition="left"
                  placeholder="Password"
                  type="password"
                />

                <Button
                  style={{ backgroundColor: "#840EB6", color: "white" }}
                  fluid
                  size="large"
                >
                  Login
                </Button>
              </Segment>
            </Form>
            <Message>
              New to us? <a href="#">Sign Up</a>
            </Message>
          </Grid.Column>
        </Grid> */
}
