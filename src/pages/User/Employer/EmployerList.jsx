import React, { useState, useEffect } from "react";
import { Table, Container } from "semantic-ui-react";
import EmployerService from "../../../services/EmployerService";
export default function EmployerList() {
  const [employers, setEmployers] = useState([]);

  useEffect(() => {
    let employerService = new EmployerService();

    employerService
      .getEmployers()
      .then((result) => setEmployers(result.data))
      .catch();
  }, []);

  return (
    <div>
      <Container className="main">
        {employers.map((employer) => (
          <Table celled fixed singleLine>
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell>Şirket İsimi</Table.HeaderCell>
                <Table.HeaderCell>Lokasyon</Table.HeaderCell>
                <Table.HeaderCell>Sektör</Table.HeaderCell>
                <Table.HeaderCell>İletişim</Table.HeaderCell>
                <Table.HeaderCell>Web Sitesi</Table.HeaderCell>
              </Table.Row>
            </Table.Header>

            <Table.Body>
              <Table.Row key={employer.id}>
                <Table.Cell>{employer.companyName}</Table.Cell>
                <Table.Cell>{employer.location}</Table.Cell>
                <Table.Cell>{employer.sector}</Table.Cell>
                <Table.Cell>{employer.phoneNumber}</Table.Cell>
                <Table.Cell>{employer.webSite}</Table.Cell>
              </Table.Row>
            </Table.Body>
          </Table>
        ))}
      </Container>
    </div>
  );
}
