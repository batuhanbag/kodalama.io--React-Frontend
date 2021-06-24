import React, { useState, useEffect } from "react";
import { Button, Container, Table } from "semantic-ui-react";
import NoticeService from "../../services/NoticeService";

export default function NoticeList() {
  const [notices, setNotices] = useState([]);

  useEffect(() => {
    let noticeService = new NoticeService();

    noticeService
      .getNotices()
      .then((result) => setNotices(result.data.data), [])
      .catch();
  }, []);

  return (
    <div>
      <Container className="main">
        <Table striped>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>Şirket Adı</Table.HeaderCell>
              <Table.HeaderCell>Pozisyon</Table.HeaderCell>
              <Table.HeaderCell>Maaş Aralığı</Table.HeaderCell>
              <Table.HeaderCell>Şehir</Table.HeaderCell>
              <Table.HeaderCell>Kontenjan</Table.HeaderCell>
              <Table.HeaderCell>Detaylar</Table.HeaderCell>
            </Table.Row>
          </Table.Header>

          <Table.Body>
            {notices.map((notice) => (
              <Table.Row>
                <Table.Cell>{notice.employer.companyName}</Table.Cell>
                <Table.Cell>{notice.jobPosition.jobPositionName}</Table.Cell>
                <Table.Cell>
                  {notice.minSalary} - {notice.maxSalary}
                </Table.Cell>
                <Table.Cell>{notice.city.cityName}</Table.Cell>
                <Table.Cell>{notice.numberOfOpenPositions}</Table.Cell>
                <Table.Cell>
                  <Button inverted color="red">
                    Görüntüle
                  </Button>
                </Table.Cell>
              </Table.Row>
            ))}
          </Table.Body>
        </Table>
      </Container>
    </div>
  );
}
