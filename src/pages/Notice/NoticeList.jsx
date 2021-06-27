import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button, Container, Card, Icon } from "semantic-ui-react";
import NoticeService from "../../services/NoticeService";

export default function NoticeList() {
  const [notices, setNotices] = useState([]);

  useEffect(() => {
    let noticeService = new NoticeService();

    noticeService
      .getActiveNotices()
      .then((result) => setNotices(result.data.data), [])
      .catch();
  }, []);

  return (
    <div>
      <Container className="main">
        {notices.map((notice) => (
          <Link to={`/noticedetail/${notice.id}`}>
            <Card.Group>
              <Card fluid color="purple" style={{ borderRadius: 20 }}>
                <Card.Content>
                  <Card.Header style={{ color: "#840EB6" }} textAlign="left">
                    {notice.jobPosition.jobPositionName}
                  </Card.Header>
                  <Card.Meta textAlign="left">
                    {notice.employer.companyName}
                  </Card.Meta>
                  <Card.Description
                    textAlign="left"
                    content={notice.jobDescription}
                  />

                  <Card.Description textAlign="right">
                    {notice.numberOfOpenPositions} Kontenjan |{" "}
                    <Icon name="location arrow" /> {notice.city.cityName}
                  </Card.Description>
                </Card.Content>
              </Card>
            </Card.Group>
          </Link>
        ))}
      </Container>
    </div>
  );
}
