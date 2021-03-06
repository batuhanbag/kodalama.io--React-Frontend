import React, { useEffect, useState } from "react";
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

export default function JobSeekerUpdate() {
  const history = useHistory();

  const [jobSeeker, setJobSeeker] = useState({});

  useEffect(() => {
    let jobSeeker = new JobSeekerService();

    jobSeeker
      .getJobSeekerById(18)
      .then((result) => setJobSeeker(result.data.data));
  }, []);

  const JobSeekerRegisterSchema = Yup.object().shape({
    firstName: Yup.string().required("İsim boş bırakılamaz."),
    lastName: Yup.string().required("Soyisim boş bırakılamaz."),
    nationalityId: Yup.number().required("TC Kimlik no boş bırakılamaz."),
    birthYear: Yup.date().required("Doğum tarihi gereklidir."),
    email: Yup.string()
      .email("Lütfen geçerli bir email adresi giriniz.")
      .max(255)
      .required("Email adresi gereklidir."),

    password: Yup.string().min(8).max(24).required("Şifre gereklidir."),
  });

  let jobSeekerUpdate = new JobSeekerService();

  const formik = useFormik({
    initialValues: {
      firstName: jobSeeker.firstName,
      lastName: "",
      nationalityId: "",
      birthYear: "",
      email: "",

      password: "",
    },
    validationSchema: JobSeekerRegisterSchema,
    onSubmit: (values) => {
      console.log(values);

      let body = {
        id: 18,
        firstName: values.firstName,
        lastName: values.lastName,
        email: values.email,
        nationalityId: values.nationalityId,
        password: values.password,
        birthYear: values.birthYear,
        status: false,
      };
      console.log(body);

      if (jobSeeker.password == values.password) {
        jobSeekerUpdate
          .updateJobSeeker(body)
          .then((result) => console.log(result));
        toast.success(`Güncelleme Başarıyla Gerçekleştirilmiştir`);
        history.push("/uptadeJobSeeker");
      } else {
        toast.error(`Güncelleme Başarısız.`);
        history.push("/uptadeJobSeeker");
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
          Bilgilerimi Güncelle
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
                    placeholder={jobSeeker.firstName}
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
                    placeholder={jobSeeker.lastName}
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
                    placeholder={jobSeeker.nationalityId}
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
              </Grid.Column>

              <Grid.Column width={8}>
                <div style={{ marginTop: "1em" }}>
                  <label>Doğum Tarihi</label>
                  <Form.Input
                    fluid
                    icon="calendar times"
                    iconPosition="left"
                    placeholder={jobSeeker.birthYear}
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
                <div style={{ marginTop: "1em" }}>
                  <label>Email</label>
                  <Form.Input
                    fluid
                    icon="mail"
                    iconPosition="left"
                    placeholder={jobSeeker.email}
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
              </Grid.Column>
            </Grid>

            <br />
            <Button
              style={{ backgroundColor: "#840EB6", color: "white" }}
              fluid
              size="large"
              type="submit"
            >
              Bilgilerimi Güncelle
            </Button>
          </Segment>
        </Form>
      </Container>
    </div>
  );
}
