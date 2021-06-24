import React, { useEffect, useState } from "react";
import {
  Button,
  Dropdown,
  Input,
  TextArea,
  Card,
  Form,
  Grid,
  Container,
} from "semantic-ui-react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useHistory } from "react-router-dom";
import CityService from "../../services/CityService";
import NoticeService from "../../services/NoticeService.js";
import JobPositionService from "../../services/JobPositionService";

export default function NoticeAdd() {
  const JobAdvertAddSchema = Yup.object().shape({
    lastDate: Yup.date()
      .nullable()
      .required("Bu alanın doldurulması zorunludur"),
    description: Yup.string().required("Bu alanın doldurulması zorunludur"),
    jobPositionId: Yup.string().required("Bu alanın doldurulması zorunludur"),
    workTimeId: Yup.string().required("Bu alanın doldurulması zorunludur"),
    workPlaceId: Yup.string().required("Bu alanın doldurulması zorunludur"),
    educationLevel: Yup.string().required("Bu alanın doldurulması zorunludur"),
    openPositions: Yup.string()
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
      description: "",
      jobPositionId: "",
      educationLevel: "",
      workTimeId: "",
      workPlaceId: "",
      openPositions: "",
      cityId: "",
      minSalary: "",
      maxSalary: "",
      lastDate: "",
    },
    validationSchema: JobAdvertAddSchema,
    onSubmit: (values) => {
      values.employer_id = 4;
      addNotice.add(values).then((result) => console.log(result.data.data));
      alert(
        "İş ilanınız gerekli kontrollerden sonra yayımlanacaktır, iyi günler."
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

  const educationLevel = [
    { key: "lise", text: "Lise", value: "lise" },
    { key: "onlisans", text: "Ön Lisans", value: "on_lisans" },
    { key: "lisans", text: "Lisans", value: "lisans" },
    { key: "yukseklisans", text: "Yüksek Lisans", value: "yuksek_lisans" },
    { key: "diger", text: "Diğer", value: "diger" },
  ];

  const workTimeType = [
    { key: "1", text: "Tam Zamanlı", value: "Tamzamanli" },
    { key: "2", text: "Yarı Zamanlı", value: "Yarizamanlı" },
  ];

  return (
    <div>
      <Container className="main">
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
                    <label>Eğitim Seviyesi</label>
                    <Form.Dropdown
                      clearable
                      item
                      placeholder="Eğitim Seviyesi"
                      search
                      selection
                      onChange={(event, data) =>
                        handleChangeSemantic(data.value, "educationLevel")
                      }
                      onBlur={formik.onBlur}
                      id="educationLevel"
                      value={formik.values.educationLevel}
                      options={educationLevel}
                    />
                    {formik.errors.educationLevel &&
                      formik.touched.educationLevel && (
                        <div className={"ui pointing red basic label"}>
                          {formik.errors.educationLevel}
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
                        handleChangeSemantic(data.value, "workPlaceId")
                      }
                      onBlur={formik.onBlur}
                      id="workPlaceId"
                      value={formik.values.workPlaceId}
                      options={typeOfWork}
                    />
                    {formik.errors.workPlaceId &&
                      formik.touched.workPlaceId && (
                        <div className={"ui pointing red basic label"}>
                          {formik.errors.workPlaceId}
                        </div>
                      )}
                  </Grid.Column>
                </Grid>
              </Form.Field>
              <Form.Field>
                <label>Çalışma Süresi</label>
                <Form.Dropdown
                  clearable
                  item
                  placeholder="Çalışma Süresi"
                  search
                  onChange={(event, data) =>
                    handleChangeSemantic(data.value, "workTimeId")
                  }
                  onBlur={formik.onBlur}
                  id="workTimeId"
                  value={formik.values.workTimeId}
                  selection
                  options={workTimeType}
                />
              </Form.Field>
              {formik.errors.workTimeId && formik.touched.workTimeId && (
                <div className={"ui pointing red basic label"}>
                  {formik.errors.workTimeId}
                </div>
              )}
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
                      id="openPositions"
                      name="openPositions"
                      error={Boolean(formik.errors.openPositions)}
                      onChange={formik.handleChange}
                      value={formik.values.openPositions}
                      onBlur={formik.handleBlur}
                      placeholder="Açık İş Pozisyonu Sayısı"
                    ></Input>
                    {formik.errors.openPositions &&
                      formik.touched.openPositions && (
                        <div className={"ui pointing red basic label"}>
                          {formik.errors.openPositions}
                        </div>
                      )}
                  </Grid.Column>
                  <Grid.Column width={8}>
                    <label>Son Başvuru Tarihi</label>
                    <Input
                      style={{ width: "100%" }}
                      type="date"
                      error={Boolean(formik.errors.lastDate)}
                      value={formik.values.lastDate}
                      onBlur={formik.handleBlur}
                      onChange={(event, data) =>
                        handleChangeSemantic(data.value, "lastDate")
                      }
                      name="lastDate"
                      placeholder="Son Başvuru Tarihi"
                    ></Input>
                    {formik.errors.lastDate && formik.touched.lastDate && (
                      <div className={"ui pointing red basic label"}>
                        {formik.errors.lastDate}
                      </div>
                    )}
                  </Grid.Column>
                </Grid>
              </Form.Field>
              <Form.Field>
                <label>Açıklama</label>
                <TextArea
                  placeholder="Açıklama"
                  error={Boolean(formik.errors.description).toString()}
                  onChange={formik.handleChange}
                  value={formik.values.description}
                  name="description"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  style={{ minHeight: 100 }}
                />
                {formik.errors.description && formik.touched.description && (
                  <div className={"ui pointing red basic label"}>
                    {formik.errors.description}
                  </div>
                )}
              </Form.Field>
              <Button
                content="Ekle"
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
