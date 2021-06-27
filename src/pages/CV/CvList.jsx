import React, { useState, useEffect } from "react";
import JobSeekerService from "../../services/JobSeekerService";
import {
  Card,
  Button,
  Grid,
  Image,
  Container,
  Icon,
  Header,
} from "semantic-ui-react";
import { Link, useParams } from "react-router-dom";
export default function CvList() {
  let { id } = useParams();

  const [jobSeekerCv, setJobSeekerCv] = useState({});

  const [jobSeeker, setJobSeeker] = useState({});

  useEffect(() => {
    let jobSeekerCvService = new JobSeekerService();

    let jobSeeker = new JobSeekerService();

    jobSeeker
      .getJobSeekerById(id)
      .then((result) => setJobSeeker(result.data.data))
      .catch();

    jobSeekerCvService
      .getCv(id)
      .then((result) => setJobSeekerCv(result.data.data))
      .catch();
  }, [id]);

  console.log(jobSeekerCv.cvExperience?.positionName);
  return (
    <div>
      <Container className="main">
        <Grid celled style={{ backgroundColor: "white" }}>
          <Grid.Row>
            <Grid.Column width={6}>
              {jobSeekerCv.photograph?.map((image) => (
                <Image src={image?.photographLink} />
              ))}
            </Grid.Column>

            <Grid.Column width={5}>
              <Header>Özgeçmiş</Header>
              {jobSeekerCv.cvPrewriting?.map((prewriting) => (
                <div>
                  <h5>{prewriting?.prewriting}</h5>
                </div>
              ))}
            </Grid.Column>
            <Grid.Column width={5}>
              <Header>Eğitim</Header>
              {jobSeekerCv.cvEducation?.map((education) => (
                <div>
                  <h5>{education?.university?.universityName}</h5>
                </div>
              ))}
              <hr />
              <Header>Yabancı Diller</Header>
              {jobSeekerCv.cvLanguage?.map((language) => (
                <div>
                  <h5>
                    Seviye - {language?.languageLevel}
                    {" | "}
                    {language?.language?.languageName}
                  </h5>
                </div>
              ))}
            </Grid.Column>
          </Grid.Row>

          <Grid.Row>
            <Grid.Column width={6}>
              <div style={{ marginBottom: 25 }}>
                <h5 style={{ marginTop: 5 }}>
                  {jobSeeker?.firstName} {jobSeeker?.lastName}
                </h5>
                <h5 style={{ marginTop: -5 }}>{jobSeeker?.email}</h5>
              </div>
              <hr />
              {jobSeekerCv.link?.map((link) => (
                <a href={link?.linkAddress} target="_blank">
                  <Button color="linkedin" style={{ marginTop: 10 }}>
                    <Icon name="linkedin" /> LinkedIn
                  </Button>
                </a>
              ))}
            </Grid.Column>
            <Grid.Column width={10}>
              <Header>Deneyimler</Header>
              {jobSeekerCv.cvExperience?.map((experience) => (
                <div>
                  <h5>
                    <h4>Şirket</h4> {experience?.company} (
                    {experience?.jobBeginnigDate} - {experience?.jobEndingDate})
                  </h5>
                  <h5>
                    <h4>Pozisyon</h4> {experience?.positionName}
                  </h5>
                </div>
              ))}
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    </div>
  );
}
