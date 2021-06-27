import React, { useEffect, useState } from "react";
import {
  Button,
  Dropdown,
  Input,
  TextArea,
  Card,
  Header,
  Form,
  Grid,
  Container,
} from "semantic-ui-react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useHistory } from "react-router-dom";
import NoticeService from "../../services/NoticeService";
import CityService from "../../services/CityService";
import JobPositionService from "../../services/JobPositionService";
import "react-toastify/dist/ReactToastify.min.css";
import { toast } from "react-toastify";

export default function NoticeAdd() {
  const NoticeAddSchema = Yup.object().shape({
    applicationDeadline: Yup.date()
      .nullable()
      .required("Bu alanın doldurulması zorunludur"),
    jobDescription: Yup.string().required("Bu alanın doldurulması zorunludur"),
    jobPositionId: Yup.string().required("Bu alanın doldurulması zorunludur"),
    workTimeType: Yup.string().required("Bu alanın doldurulması zorunludur"),
    typeOfWork: Yup.string().required("Bu alanın doldurulması zorunludur"),
    numberOfOpenPositions: Yup.string()
      .required("Posizyon sayısı zorunludur")
      .min(1, "Posizyon sayısı 1 den küçük olamaz"),
    cityId: Yup.string().required("Bu alanın doldurulması zorunludur"),
    minSalary: Yup.number()
      .min(0, "0 Dan az olamaz")
      .required("Bu alan zorunludur"),
    maxSalary: Yup.number()
      .min(0, "0 Dan az olamaz")
      .required("Bu alan zorunludur"),
  });

  const history = useHistory();

  let addNotice = new NoticeService();

  const formik = useFormik({
    initialValues: {
      jobDescription: "",
      jobPositionId: "",
      workTimeType: "",
      typeOfWork: "",
      numberOfOpenPositions: "",
      cityId: "",
      minSalary: "",
      maxSalary: "",
      applicationDeadline: "",
    },
    validationSchema: NoticeAddSchema,
    onSubmit: (values) => {
      console.log(values);

      values.employerId = 9;
      addNotice
        .AddNotices(values)
        .then((result) => console.log(result.data.data));

      toast.success(
        `İş ilanı başarıyla eklendi, Personelimiz onayından sonra yayınlanacaktır.`
      );
      history.push("/noticeadd");
    },
  });

  const [cities, setCities] = useState([]);

  const [jobPositions, setjobPositions] = useState([]);

  useEffect(() => {
    let cityService = new CityService();
    let jobPositionService = new JobPositionService();

    jobPositionService
      .getJobPositions()
      .then((result) => setjobPositions(result.data));

    cityService.getCitys().then((result) => setCities(result.data.data));
  }, []);

  const handleChangeSemantic = (value, fieldName) => {
    formik.setFieldValue(fieldName, value);
  };

  const cityOptions = cities.map((city, index) => ({
    key: index,
    text: city.cityName,
    value: city.id,
  }));

  const jobPositionOptions = jobPositions.map((position, index) => ({
    key: index,
    text: position.jobPositionName,
    value: position.jobPositionId,
  }));

  const typeOfWork = [
    { key: "Remote", text: "Remote", value: "Remote" },
    { key: "Ofis", text: "Ofis", value: "Ofis" },
  ];

  // const educationLevel = [
  //   { key: "lise", text: "Lise", value: "lise" },
  //   { key: "onlisans", text: "Ön Lisans", value: "on_lisans" },
  //   { key: "lisans", text: "Lisans", value: "lisans" },
  //   { key: "yukseklisans", text: "Yüksek Lisans", value: "yuksek_lisans" },
  //   { key: "diger", text: "Diğer", value: "diger" },
  // ];

  const workTimeType = [
    { key: "1", text: "Tam Zamanlı", value: "Tamzamanli" },
    { key: "2", text: "Yarı Zamanlı", value: "Yarizamanlı" },
  ];

  return (
    <div>
      <Container className="register">
        <Header as="h2" style={{ color: "#840EB6" }} textAlign="center">
          İş İlanını Ekle
        </Header>
        <Card fluid>
          <Card.Content>
            <Form onSubmit={formik.handleSubmit}>
              <Form.Field style={{ marginBottom: "1rem" }}>
                <Grid stackable>
                  <Grid.Column width={8}>
                    <label>İş Pozisyonu</label>
                    <Form.Dropdown
                      clearable
                      item
                      placeholder="İş pozisyonu"
                      search
                      selection
                      onChange={(event, data) =>
                        handleChangeSemantic(data.value, "jobPositionId")
                      }
                      onBlur={formik.onBlur}
                      id="jobPositionId"
                      value={formik.values.jobPositionId}
                      options={jobPositionOptions}
                    />
                    {formik.errors.jobPositionId &&
                      formik.touched.jobPositionId && (
                        <div className={"ui pointing red basic label"}>
                          {formik.errors.jobPositionId}
                        </div>
                      )}
                  </Grid.Column>
                  <Grid.Column width={8}>
                    <Form.Field>
                      <label>Çalışma Süresi</label>
                      <Form.Dropdown
                        clearable
                        item
                        placeholder="Çalışma Süresi"
                        search
                        onChange={(event, data) =>
                          handleChangeSemantic(data.value, "workTimeType")
                        }
                        onBlur={formik.onBlur}
                        id="workTimeType"
                        value={formik.values.workTimeType}
                        selection
                        options={workTimeType}
                      />
                    </Form.Field>
                    {formik.errors.workTimeType &&
                      formik.touched.workTimeType && (
                        <div className={"ui pointing red basic label"}>
                          {formik.errors.workTimeType}
                        </div>
                      )}
                  </Grid.Column>
                </Grid>
              </Form.Field>

              <Form.Field>
                <Grid stackable>
                  <Grid.Column width={8}>
                    <label>Şehir</label>
                    <Form.Dropdown
                      clearable
                      item
                      placeholder="Şehir"
                      search
                      onChange={(event, data) =>
                        handleChangeSemantic(data.value, "cityId")
                      }
                      onBlur={formik.onBlur}
                      id="cityId"
                      value={formik.values.cityId}
                      selection
                      options={cityOptions}
                    />
                    {formik.errors.cityId && formik.touched.cityId && (
                      <div className={"ui pointing red basic label"}>
                        {formik.errors.cityId}
                      </div>
                    )}
                  </Grid.Column>
                  <Grid.Column width={8}>
                    <label>Çalışma Şekli</label>
                    <Form.Dropdown
                      clearable
                      item
                      placeholder="Çalışma Şekli"
                      search
                      selection
                      onChange={(event, data) =>
                        handleChangeSemantic(data.value, "typeOfWork")
                      }
                      onBlur={formik.onBlur}
                      id="typeOfWork"
                      value={formik.values.typeOfWork}
                      options={typeOfWork}
                    />
                    {formik.errors.typeOfWork && formik.touched.typeOfWork && (
                      <div className={"ui pointing red basic label"}>
                        {formik.errors.typeOfWork}
                      </div>
                    )}
                  </Grid.Column>
                </Grid>
              </Form.Field>
              <Form.Field>
                <Grid stackable>
                  <Grid.Column width={8}>
                    <label>Minimum Maaş Aralığı</label>
                    <Input
                      style={{ width: "100%" }}
                      type="number"
                      value={formik.values.minSalary}
                      name="minSalary"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      placeholder="Minimum Maaş Aralığı"
                    ></Input>
                    {formik.errors.minSalary && formik.touched.minSalary && (
                      <div className={"ui pointing red basic label"}>
                        {formik.errors.minSalary}
                      </div>
                    )}
                  </Grid.Column>
                  <Grid.Column width={8}>
                    <label>Maximum Maaş Aralığı</label>
                    <Input
                      style={{ width: "100%" }}
                      type="number"
                      value={formik.values.maxSalary}
                      name="maxSalary"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      placeholder="Maximum Maaş Aralığı"
                    ></Input>
                    {formik.errors.maxSalary && formik.touched.maxSalary && (
                      <div className={"ui pointing red basic label"}>
                        {formik.errors.maxSalary}
                      </div>
                    )}
                  </Grid.Column>
                </Grid>
              </Form.Field>
              <Form.Field>
                <Grid stackable>
                  <Grid.Column width={8}>
                    <label>Açık İş Pozisyonu Sayısı</label>
                    <Input
                      style={{ width: "100%" }}
                      type="number"
                      id="numberOfOpenPositions"
                      name="numberOfOpenPositions"
                      error={Boolean(formik.errors.numberOfOpenPositions)}
                      onChange={formik.handleChange}
                      value={formik.values.numberOfOpenPositions}
                      onBlur={formik.handleBlur}
                      placeholder="Açık İş Pozisyonu Sayısı"
                    ></Input>
                    {formik.errors.numberOfOpenPositions &&
                      formik.touched.numberOfOpenPositions && (
                        <div className={"ui pointing red basic label"}>
                          {formik.errors.numberOfOpenPositions}
                        </div>
                      )}
                  </Grid.Column>
                  <Grid.Column width={8}>
                    <label>Son Başvuru Tarihi</label>
                    <Input
                      style={{ width: "100%" }}
                      type="date"
                      error={Boolean(formik.errors.applicationDeadline)}
                      value={formik.values.applicationDeadline}
                      onBlur={formik.handleBlur}
                      onChange={(event, data) =>
                        handleChangeSemantic(data.value, "applicationDeadline")
                      }
                      name="applicationDeadline"
                      placeholder="Son Başvuru Tarihi"
                    ></Input>
                    {formik.errors.applicationDeadline &&
                      formik.touched.applicationDeadline && (
                        <div className={"ui pointing red basic label"}>
                          {formik.errors.applicationDeadline}
                        </div>
                      )}
                  </Grid.Column>
                </Grid>
              </Form.Field>
              <Form.Field>
                <label>Açıklama</label>
                <TextArea
                  placeholder="Açıklama"
                  error={Boolean(formik.errors.jobDescription).toString()}
                  onChange={formik.handleChange}
                  value={formik.values.jobDescription}
                  name="jobDescription"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  style={{ minHeight: 100 }}
                />
                {formik.errors.jobDescription &&
                  formik.touched.jobDescription && (
                    <div className={"ui pointing red basic label"}>
                      {formik.errors.jobDescription}
                    </div>
                  )}
              </Form.Field>
              <Button
                content="İlanı Ekle"
                inverted
                color="purple"
                labelPosition="right"
                icon="add"
                positive
                type="submit"
                style={{ marginLeft: "20px" }}
              />
            </Form>
          </Card.Content>
        </Card>
      </Container>
    </div>
  );
}
