import React, { Component } from "react";
import { Menu, Icon, Container } from "semantic-ui-react";
import { Link } from "react-router-dom";

export default function Side() {
  return (
    <div>
      <Container className="main">
        <Menu fluid compact icon="labeled" vertical>
          <Menu.Item>
            <Icon name="briefcase" />
            <Link to={`/`}>İş ilanları</Link>
          </Menu.Item>

          <Menu.Item>
            <Icon name="building" />
            <Link to={`/employers`}>İş Verenler</Link>
          </Menu.Item>

          <Menu.Item>
            <Icon name="code branch" />
            <Link to={`/jobseeker`}>İş Arayanlar</Link>
          </Menu.Item>

          <Menu.Item>
            <Icon name="clipboard" />
            <Link to={`/cvs`}>Cvler</Link>
          </Menu.Item>
        </Menu>
      </Container>
    </div>
  );
}
