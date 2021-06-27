import React, { useState, useEffect } from "react";
import { Button, Card, Container, Image } from "semantic-ui-react";
import { Link } from "react-router-dom";
import JobSeekerService from "../../../services/JobSeekerService";

export default function JobSeekerList() {
  const [jobSeeker, setjobSeeker] = useState([]);

  useEffect(() => {
    let jobSeekerService = new JobSeekerService();

    jobSeekerService
      .getJobSeekers()
      .then((result) => setjobSeeker(result.data))
      .catch();
  }, []);

  return (
    <div>
      <Container className="main">
        <Card.Group>
          {jobSeeker.map((jobSeeker) => (
            <Card
              key={jobSeeker.id}
              style={{ marginLeft: "7em", marginRight: "0em", padding: 30 }}
            >
              <Card.Content>
                <Card.Header style={{ padding: 10 }}>
                  {jobSeeker.firstName + " " + jobSeeker.lastName}
                </Card.Header>
                <Card.Meta>Friends of Elliot</Card.Meta>
                <Card.Description>
                  Steve wants to add you to the group{" "}
                  <strong>best friends</strong>
                </Card.Description>
              </Card.Content>
              <Card.Content style={{ paddingTop: 30 }} extra>
                <Link to={`/cvs/${jobSeeker.id}`}>
                  <Button inverted color="green">
                    CV Görüntüle
                  </Button>
                </Link>
              </Card.Content>
            </Card>
          ))}
        </Card.Group>
      </Container>
    </div>
  );
}
