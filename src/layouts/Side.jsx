import React, { Component } from "react";
import { Menu, Icon, Container } from "semantic-ui-react";
import { Link } from "react-router-dom";

export default function Side() {
  return (
    <div>
      <Container className="main">
        <Menu fluid compact icon="labeled" vertical style={{ padding: 30 }}>
          <Menu.Item style={{ padding: 20 }}>
            <Icon name="briefcase" />
            <Link style={{ color: "black" }} to={`/`}>
              İş ilanları
            </Link>
          </Menu.Item>

          <Menu.Item style={{ padding: 20 }}>
            <Icon name="building" />
            <Link style={{ color: "black" }} to={`/employers`}>
              İş Verenler
            </Link>
          </Menu.Item>

          <Menu.Item style={{ padding: 20 }}>
            <Icon name="search" />
            <Link style={{ color: "black" }} to={`/jobseeker`}>
              İş Arayanlar
            </Link>
          </Menu.Item>
          <Menu.Item style={{ padding: 20 }}>
            <Icon name="settings" />
            <Link style={{ color: "black" }} to={`/settings`}>
              Ayarlar
            </Link>
          </Menu.Item>
        </Menu>
      </Container>
    </div>
  );
}
