import React, { useEffect, useState } from "react";
import {
  Button,
  Form,
  Grid,
  Header,
  Segment,
  Container,
  GridColumn,
} from "semantic-ui-react";
import { useFormik } from "formik";
import { useHistory } from "react-router-dom";
import * as Yup from "yup";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
import CityService from "../../../services/CityService";
import EmployerService from "../../../services/EmployerService";

export default function EmployerUptade() {
  const [cities, setCities] = useState([]);

  const EmployerRegisterSchema = Yup.object().shape({
    companyName: Yup.string().required("Şirket İsimi Gereklidir."),
    email: Yup.string().email().required("Email Adresi Gereklidir"),
    location: Yup.string().required("Lokasyon Gereklidir"),
    password: Yup.string()
      .required("Parola Gereklidir")
      .min(8, "Parola 8 karakterden küçük olamaz")
      .max(24, "Parola 24 karakterden uzun olamaz."),
    phoneNumber: Yup.number().required("Telefon Numarası Gereklidir."),
    sector: Yup.string().required("Sektör Adı Gereklidir"),
    webSite: Yup.string().required("Web Sitesi Gereklidir."),
  });

  const [employer, setEmployer] = useState({});

  useEffect(() => {
    let employer = new EmployerService();

    employer.getEmployerById(9).then((result) => setEmployer(result.data.data));
  }, []);

  const history = useHistory();

  let uptadeEmployer = new EmployerService();

  const formik = useFormik({
    initialValues: {
      companyName: "",
      email: "",
      location: "",
      password: "",
      phoneNumber: "",
      sector: "",
      webSite: "",
    },
    validationSchema: EmployerRegisterSchema,
    onSubmit: (values) => {
      console.log(values);

      let body = {
        id: 9,
        companyName: values.companyName,
        email: values.email,
        location: values.location,
        password: values.password,
        phoneNumber: values.phoneNumber,
        sector: values.sector,
        webSite: values.webSite,
        status: false,
        verificationStatus: true,
      };

      console.log(body);
      if (employer.password == values.password) {
        uptadeEmployer
          .uptadeEmployers(body)
          .then((result) => console.log(result));
        toast.success(`Güncelleme Başarıyla Gerçekleştirilmiştir`);
        history.push("/uptadeEmployer");
      } else {
        toast.error(`Güncelleme Başarısız.`);
        history.push("/uptadeEmployer");
      }
    },
  });

  useEffect(() => {
    let cityService = new CityService();

    cityService.getCitys().then((result) => setCities(result.data.data));
  }, []);

  const cityOptions = cities.map((city, index) => ({
    key: index,
    text: city.cityName,
    value: city.cityName,
  }));
  const handleChangeSemantic = (value, fieldName) => {
    formik.setFieldValue(fieldName, value);
  };

  return (
    <div>
      <Container className="register">
        <Header as="h2" style={{ color: "#840EB6" }} textAlign="center">
          Şirket Bilgilerimi Güncelle
        </Header>
        <Form size="large" onSubmit={formik.handleSubmit}>
          <Segment stacked>
            <Grid stackable>
              <Grid.Column width={8}>
                <div style={{ marginTop: "1em" }}>
                  <label>Şirket İsimi</label>

                  <Form.Input
                    fluid
                    icon="building"
                    iconPosition="left"
                    placeholder={employer?.companyName}
                    type="text"
                    name="companyName"
                    onChange={(event, data) =>
                      handleChangeSemantic(data.value, "companyName")
                    }
                    onBlur={formik.onBlur}
                    id="companyName"
                    value={formik.values.companyName}
                  />
                  {formik.errors.companyName && formik.touched.companyName && (
                    <div className={"ui pointing red basic label"}>
                      {formik.errors.companyName}
                    </div>
                  )}
                </div>
                <div style={{ marginTop: "1em" }}>
                  <label>Telefon Numarası</label>
                  <Form.Input
                    fluid
                    icon="phone"
                    iconPosition="left"
                    placeholder={employer?.phoneNumber}
                    type="text"
                    name="phoneNumber"
                    onChange={(event, data) =>
                      handleChangeSemantic(data.value, "phoneNumber")
                    }
                    onBlur={formik.onBlur}
                    id="phoneNumber"
                    value={formik.values.phoneNumber}
                  />
                  {formik.errors.phoneNumber && formik.touched.phoneNumber && (
                    <div className={"ui pointing red basic label"}>
                      {formik.errors.phoneNumber}
                    </div>
                  )}
                </div>
                <div style={{ marginTop: "1em" }}>
                  <label>Web Sitesi</label>
                  <Form.Input
                    fluid
                    icon="wordpress"
                    iconPosition="left"
                    placeholder={employer?.webSite}
                    type="text"
                    name="webSite"
                    onChange={(event, data) =>
                      handleChangeSemantic(data.value, "webSite")
                    }
                    onBlur={formik.onBlur}
                    id="webSite"
                    value={formik.values.webSite}
                  />
                  {formik.errors.webSite && formik.touched.webSite && (
                    <div className={"ui pointing red basic label"}>
                      {formik.errors.webSite}
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
                    placeholder={employer?.email}
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
                  <label>Sektör</label>
                  <Form.Input
                    fluid
                    icon="chart pie
                    "
                    iconPosition="left"
                    placeholder={employer?.sector}
                    type="text"
                    name="sector"
                    onChange={(event, data) =>
                      handleChangeSemantic(data.value, "sector")
                    }
                    onBlur={formik.onBlur}
                    id="sector"
                    value={formik.values.sector}
                  />
                  {formik.errors.sector && formik.touched.sector && (
                    <div className={"ui pointing red basic label"}>
                      {formik.errors.sector}
                    </div>
                  )}
                </div>
                <div style={{ marginTop: "1em" }}>
                  <label>Şifre</label>
                  <Form.Input
                    fluid
                    icon="lock"
                    iconPosition="left"
                    placeholder="Şifreniz"
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
              <GridColumn width={16}>
                <div>
                  <label>Lokasyon</label>
                  <Form.Dropdown
                    fluid
                    item
                    search
                    selection
                    options={cityOptions}
                    iconPosition="left"
                    placeholder={employer?.location}
                    name="location"
                    onChange={(event, data) =>
                      handleChangeSemantic(data.value, "location")
                    }
                    onBlur={formik.onBlur}
                    id="location"
                    value={formik.values.location}
                  />
                  {formik.errors.location && formik.touched.location && (
                    <div className={"ui pointing red basic label"}>
                      {formik.errors.location}
                    </div>
                  )}
                </div>
              </GridColumn>
            </Grid>

            <br />
            <Button
              style={{ backgroundColor: "#840EB6", color: "white" }}
              fluid
              size="large"
              type="submit"
            >
              Güncelle
            </Button>
          </Segment>
        </Form>
      </Container>
    </div>
  );
}
