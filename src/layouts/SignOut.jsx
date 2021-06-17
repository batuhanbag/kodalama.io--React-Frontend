import React from "react";
import { Button, Menu } from "semantic-ui-react";
import { Link } from "react-router-dom";

export default function SignOut(props) {
  return (
    <div>
      <Menu.Item>
        <Button onClick={props.signIn} primary>
          Giriş Yap
        </Button>
        <Link to={"/register"}>
          <Button primary style={{ marginLeft: "0.5em" }}>
            Kayıt Ol
          </Button>
        </Link>
      </Menu.Item>
    </div>
  );
}
