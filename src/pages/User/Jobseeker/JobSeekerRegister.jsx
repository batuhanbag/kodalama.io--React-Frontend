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
import { Link, useHistory } from "react-router-dom";
import logo from "../assets/hrms-logo.png";
import { useFormik } from "formik";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
import * as Yup from "yup";
import JobSeekerService from "../../../services/JobSeekerService";
import axios from "axios";

export default function JobSeekerRegister() {
  const options = [
    { key: "m", text: "Erkek", value: "male" },
    { key: "f", text: "Kadın", value: "female" },
    { key: "o", text: "Belirtmek İstemiyorum", value: "other" },
  ];

  const history = useHistory();

  const JobSeekerRegisterSchema = Yup.object().shape({
    firstName: Yup.string().required("İsim boş bırakılamaz."),
    lastName: Yup.string().required("Soyisim boş bırakılamaz."),
    nationalityId: Yup.number().required("TC Kimlik no boş bırakılamaz."),
    birthYear: Yup.date().required("Doğum tarihi gereklidir."),
    email: Yup.string()
      .email("Lütfen geçerli bir email adresi giriniz.")
      .max(255)
      .required("Email adresi gereklidir."),
    reEmail: Yup.string()
      .email("Lütfen geçerli bir email adresi giriniz.")
      .max(255)
      .required("Tekrar email adresi gereklidir."),
    password: Yup.string().min(8).max(24).required("Şifre gereklidir."),
    passwordAgain: Yup.string()
      .min(8)
      .max(24)
      .required("Şifre tekrar gereklidir."),
  });

  let jobSeekerRegister = new JobSeekerService();

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      nationalityId: "",
      birthYear: "",
      email: "",
      reEmail: "",
      password: "",
      passwordAgain: "",
    },
    validationSchema: JobSeekerRegisterSchema,
    onSubmit: (values) => {
      console.log(values);

      let body = {
        firstName: values.firstName,
        lastName: values.lastName,
        email: values.email,
        nationalityId: values.nationalityId,
        password: values.password,
        birthYear: values.birthYear,
        status: true,
      };
      console.log(body);

      if (
        values.password == values.passwordAgain &&
        values.email == values.reEmail
      ) {
        jobSeekerRegister
          .registerJobSeeker(body)
          .then((result) => console.log(result));
        toast.success(`Kaydınız Başarıyla Gerçekleştirilmiştir.`);
        history.push("/registerJobSeeker");
      } else {
        toast.error("Kaydınız Başarısız, Lütfen Bilgilerinizi Kontrol Ediniz.");
        history.push("/registerJobSeeker");
      }
    },
  });

  const handleChangeSemantic = (value, fieldName) => {
    formik.setFieldValue(fieldName, value);
  };

  return (
    <div>
      <Container className="register">
        <Header as="h2" style={{ color: "#840EB6" }} textAlign="center">
          Kayıt Ol
        </Header>
        <Form size="large" onSubmit={formik.handleSubmit}>
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
                    onChange={(event, data) =>
                      handleChangeSemantic(data.value, "firstName")
                    }
                    onBlur={formik.onBlur}
                    id="firstName"
                    value={formik.values.firstName}
                  />
                  {formik.errors.firstName && formik.touched.firstName && (
                    <div className={"ui pointing red basic label"}>
                      {formik.errors.firstName}
                    </div>
                  )}
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
                    onChange={(event, data) =>
                      handleChangeSemantic(data.value, "lastName")
                    }
                    onBlur={formik.onBlur}
                    id="lastName"
                    value={formik.values.lastName}
                  />
                  {formik.errors.lastName && formik.touched.lastName && (
                    <div className={"ui pointing red basic label"}>
                      {formik.errors.lastName}
                    </div>
                  )}
                </div>
                <div style={{ marginTop: "1em" }}>
                  <label>Kimlik Numarası</label>
                  <Form.Input
                    fluid
                    icon="id card"
                    iconPosition="left"
                    placeholder="Kimlik numarası"
                    type="text"
                    name="nationalityId"
                    onChange={(event, data) =>
                      handleChangeSemantic(data.value, "nationalityId")
                    }
                    onBlur={formik.onBlur}
                    id="nationalityId"
                    value={formik.values.nationalityId}
                  />
                  {formik.errors.nationalityId &&
                    formik.touched.nationalityId && (
                      <div className={"ui pointing red basic label"}>
                        {formik.errors.nationalityId}
                      </div>
                    )}
                </div>
                <div style={{ marginTop: "1em" }}>
                  <label>Doğum Tarihi</label>
                  <Form.Input
                    fluid
                    icon="calendar times"
                    iconPosition="left"
                    placeholder="Dogum tarihi"
                    type="text"
                    name="birthYear"
                    onChange={(event, data) =>
                      handleChangeSemantic(data.value, "birthYear")
                    }
                    onBlur={formik.onBlur}
                    id="birthYear"
                    value={formik.values.birthYear}
                  />
                  {formik.errors.birthYear && formik.touched.birthYear && (
                    <div className={"ui pointing red basic label"}>
                      {formik.errors.birthYear}
                    </div>
                  )}
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
                    onChange={(event, data) =>
                      handleChangeSemantic(data.value, "email")
                    }
                    onBlur={formik.onBlur}
                    id="email"
                    value={formik.values.email}
                  />
                  {formik.errors.email && formik.touched.email && (
                    <div className={"ui pointing red basic label"}>
                      {formik.errors.email}
                    </div>
                  )}
                </div>
                <div style={{ marginTop: "1em" }}>
                  <label>Email Tekrar</label>
                  <Form.Input
                    fluid
                    icon="mail"
                    iconPosition="left"
                    placeholder="E-mail adresi tekrar"
                    name="reEmail"
                    onChange={(event, data) =>
                      handleChangeSemantic(data.value, "reEmail")
                    }
                    onBlur={formik.onBlur}
                    id="reEmail"
                    value={formik.values.reEmail}
                  />
                  {formik.errors.reEmail && formik.touched.reEmail && (
                    <div className={"ui pointing red basic label"}>
                      {formik.errors.reEmail}
                    </div>
                  )}
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
                    onChange={(event, data) =>
                      handleChangeSemantic(data.value, "password")
                    }
                    onBlur={formik.onBlur}
                    id="password"
                    value={formik.values.password}
                  />
                  {formik.errors.password && formik.touched.password && (
                    <div className={"ui pointing red basic label"}>
                      {formik.errors.password}
                    </div>
                  )}
                </div>
                <div style={{ marginTop: "1em" }}>
                  <label>Şifre Tekrar</label>
                  <Form.Input
                    fluid
                    icon="lock"
                    iconPosition="left"
                    placeholder="Şifre tekrar"
                    type="password"
                    name="passwordAgain"
                    onChange={(event, data) =>
                      handleChangeSemantic(data.value, "passwordAgain")
                    }
                    onBlur={formik.onBlur}
                    id="passwordAgain"
                    value={formik.values.passwordAgain}
                  />
                  {formik.errors.passwordAgain &&
                    formik.touched.passwordAgain && (
                      <div className={"ui pointing red basic label"}>
                        {formik.errors.passwordAgain}
                      </div>
                    )}
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
