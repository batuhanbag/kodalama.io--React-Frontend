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
            <Table.Row>
              <Table.Cell>Yalova Bilişim</Table.Cell>
              <Table.Cell>Yazılım Mühendisi</Table.Cell>
              <Table.Cell>5000 - 7500</Table.Cell>
              <Table.Cell>Yalova</Table.Cell>
              <Table.Cell>5</Table.Cell>
              <Table.Cell>
                <Button inverted color="red">
                  Görüntüle
                </Button>
              </Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>Peek Games</Table.Cell>
              <Table.Cell>Senior Oyun Tasarımcısı</Table.Cell>
              <Table.Cell>12500 - 15000</Table.Cell>
              <Table.Cell>İstanbul</Table.Cell>
              <Table.Cell>2</Table.Cell>
              <Table.Cell>
                <Button inverted color="red">
                  Görüntüle
                </Button>
              </Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>Fabrika Games</Table.Cell>
              <Table.Cell>Juniour Yazılım Geliştirici</Table.Cell>
              <Table.Cell>3500 - 4000</Table.Cell>
              <Table.Cell>Antalya</Table.Cell>
              <Table.Cell>1</Table.Cell>
              <Table.Cell>
                <Button inverted color="red">
                  Görüntüle
                </Button>
              </Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>Akkim Kimya </Table.Cell>
              <Table.Cell>Proses ve Süreç Mühendisi</Table.Cell>
              <Table.Cell>7000 - 8000</Table.Cell>
              <Table.Cell>Yalova</Table.Cell>
              <Table.Cell>4</Table.Cell>
              <Table.Cell>
                <Button inverted color="red">
                  Görüntüle
                </Button>
              </Table.Cell>
            </Table.Row>
          </Table.Body>
        </Table>
      </Container>
    </div>
  );
}
