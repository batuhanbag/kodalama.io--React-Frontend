import React, { useState, useEffect } from "react";
import {
  Card,
  Button,
  Grid,
  Image,
  Container,
  Icon,
  Step,
  Header,
} from "semantic-ui-react";
import NoticeService from "../../services/NoticeService";
import { Link, useParams } from "react-router-dom";

export default function NoticeDetail() {
  let { id } = useParams();

  const [notices, setNotices] = useState({});

  useEffect(() => {
    let noticeService = new NoticeService();

    noticeService
      .getByNoticeId(id)
      .then((result) => setNotices(result.data.data))
      .catch();
  }, []);

  return (
    <div>
      <Container className="main">
        <Grid
          celled
          style={{ backgroundColor: "white", width: 850, padding: 25 }}
        >
          <Grid.Row>
            <Grid.Column width={16}>
              <Header style={{ color: "#840EB6", fontSize: 25 }}>
                {notices?.employer?.companyName}
              </Header>

              <a href="#" style={{ fontWeight: "bold", color: "orange" }}>
                {notices?.employer?.webSite}
              </a>

              <p style={{ marginTop: 15 }}>
                <Icon name="phone" /> {notices?.employer?.phoneNumber}
              </p>
              <Header style={{ color: "#840EB6", fontSize: 25 }}>
                {notices?.jobPosition?.jobPositionName}
              </Header>
              <Step.Group>
                <Step>
                  <Step.Content>
                    <Icon name="save" />
                    <Step.Title style={{ marginTop: 10 }}>İş Tipi</Step.Title>
                    <Step.Description style={{ marginTop: 10 }}>
                      {notices?.typeOfWork}
                    </Step.Description>
                  </Step.Content>
                </Step>

                <Step completed>
                  <Step.Content>
                    <Icon name="numbered list" />
                    <Step.Title style={{ marginTop: 10 }}>Kontenjan</Step.Title>
                    <Step.Description style={{ marginTop: 10 }}>
                      {notices?.numberOfOpenPositions} Kişi
                    </Step.Description>
                  </Step.Content>
                </Step>

                <Step completed>
                  <Step.Content>
                    <Icon name="arrow down" />
                    <Step.Title style={{ marginTop: 10 }}>
                      Minimum Ücret
                    </Step.Title>
                    <Step.Description style={{ marginTop: 10 }}>
                      {notices?.minSalary}
                    </Step.Description>
                  </Step.Content>
                </Step>
                <Step completed>
                  <Step.Content>
                    <Icon name="arrow up" />
                    <Step.Title style={{ marginTop: 10 }}>
                      Maksimum Ücret
                    </Step.Title>
                    <Step.Description style={{ marginTop: 10 }}>
                      {notices?.maxSalary}
                    </Step.Description>
                  </Step.Content>
                </Step>
              </Step.Group>
            </Grid.Column>
          </Grid.Row>

          <Grid.Row>
            <Grid.Column width={16}>
              <Header style={{ color: "#840EB6", fontSize: 25 }}>
                İş Açıklaması
              </Header>
              <p>{notices?.jobDescription}</p>
            </Grid.Column>
          </Grid.Row>

          <Grid.Row>
            <Grid.Column width={8} style={{ marginTop: 20 }}>
              <Button fluid inverted color="red">
                <p>Başvur </p>
              </Button>
            </Grid.Column>
            <Grid.Column width={8} style={{ marginTop: 20 }}>
              <Button fluid inverted color="orange">
                <p>Favorilerime Ekle </p>
              </Button>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    </div>
  );
}
