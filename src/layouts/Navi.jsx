import React, { useState } from "react";
import { useHistory, Link } from "react-router-dom";
import { Button, Menu, Container, Icon, Segment } from "semantic-ui-react";
import styles from "../css/Navi.module.css";
import SignOut from "./SignOut";
import SignedIn from "./SignedIn";
import { Route } from "react-router";

export default function Navi() {
  const [isAuthenticated, setisAuthenticated] = useState(true);

  const history = useHistory();

  function handleSignOut() {
    setisAuthenticated(false);
    history.push("/");
  }

  function handleSignIn() {
    setisAuthenticated(true);
  }

  return (
    <div>
      <Menu fixed="top" size="large">
        <Container>
          <Link to={`/`}>
            <Menu.Item
              className={styles.menuText}
              icon="building outline"
              name="H R M S"
            ></Menu.Item>
          </Link>
          <Menu.Menu position="right">
            <Menu.Item>
              {isAuthenticated ? (
                <SignedIn signOut={handleSignOut} />
              ) : (
                <SignOut signIn={handleSignIn} />
              )}
            </Menu.Item>
            <Menu.Item>
              <Link to={`/noticeadd`}>
                <Button inverted color="violet">
                  İlan Ver !
                </Button>
              </Link>
            </Menu.Item>
          </Menu.Menu>
        </Container>
      </Menu>
    </div>
  );
}
