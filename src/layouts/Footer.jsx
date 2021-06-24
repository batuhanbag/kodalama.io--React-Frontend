import React from "react";
import {
  Container,
  Divider,
  Grid,
  Header,
  Image,
  List,
  Segment,
} from "semantic-ui-react";

export default function Footer() {
  return (
    <div>
      <Segment
        inverted
        vertical
        style={{
          margin: "5em 0em 0em",
          padding: "5em 0em",
          backgroundColor: "white",
        }}
      >
        <Container textAlign="center" style={{ color: "black" }}>
          <Grid divided inverted stackable>
            <Grid.Column width={3}>
              <Header
                inverted
                as="h4"
                style={{ color: "black" }}
                content="Group 1"
              />
              <List link inverted>
                <List.Item as="a" style={{ color: "black" }}>
                  Link One
                </List.Item>
                <List.Item as="a" style={{ color: "black" }}>
                  Link Two
                </List.Item>
                <List.Item as="a" style={{ color: "black" }}>
                  Link Three
                </List.Item>
                <List.Item as="a" style={{ color: "black" }}>
                  Link Four
                </List.Item>
              </List>
            </Grid.Column>
            <Grid.Column width={3}>
              <Header
                inverted
                as="h4"
                style={{ color: "black" }}
                content="Group 2"
              />
              <List link inverted>
                <List.Item as="a" style={{ color: "black" }}>
                  Link One
                </List.Item>
                <List.Item as="a" style={{ color: "black" }}>
                  Link Two
                </List.Item>
                <List.Item as="a" style={{ color: "black" }}>
                  Link Three
                </List.Item>
                <List.Item as="a" style={{ color: "black" }}>
                  Link Four
                </List.Item>
              </List>
            </Grid.Column>
            <Grid.Column width={3}>
              <Header
                inverted
                as="h4"
                style={{ color: "black" }}
                content="Group 3"
              />
              <List link inverted>
                <List.Item as="a" style={{ color: "black" }}>
                  Link One
                </List.Item>
                <List.Item as="a" style={{ color: "black" }}>
                  Link Two
                </List.Item>
                <List.Item as="a" style={{ color: "black" }}>
                  Link Three
                </List.Item>
                <List.Item as="a" style={{ color: "black" }}>
                  Link Four
                </List.Item>
              </List>
            </Grid.Column>
            <Grid.Column width={7}>
              <Header
                inverted
                as="h4"
                style={{ color: "black" }}
                content="Hakkımızda"
              />
              <p>
                Extra space for a call to action inside the footer that could
                help re-engage users.Extra space for a call to action inside the
                footer that could help re-engage users.Extra space for a call to
                action inside the footer that could help re-engage users.
              </p>
            </Grid.Column>
          </Grid>

          <Divider inverted section />
          <Header
            inverted
            as="h4"
            style={{ color: "black" }}
            content="H R M S"
          />
          <List horizontal inverted divided link size="small">
            <List.Item as="a" style={{ color: "black" }} href="#">
              Yardım
            </List.Item>
            <List.Item as="a" style={{ color: "black" }} href="#">
              Hakkımızda
            </List.Item>
            <List.Item as="a" style={{ color: "black" }} href="#">
              Şartlar ve Koşullar
            </List.Item>
            <List.Item as="a" style={{ color: "black" }} href="#">
              İletişim
            </List.Item>
          </List>
        </Container>
      </Segment>
    </div>
  );
}
