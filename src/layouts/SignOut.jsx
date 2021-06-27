import React from "react";
import { Button, Menu, Dropdown } from "semantic-ui-react";
import { Link } from "react-router-dom";

const options = [
  { key: 1, text: "Giriş Yap", value: 1 },
  { key: 2, text: "Size Ulaşalım", value: 2 },
];

export default function SignOut(props) {
  return (
    <div>
      <Menu.Item>
        <Button onClick={props.signIn} inverted color="violet">
          Giriş Yap
        </Button>
        <Link to={"/registerJobSeeker"}>
          <Button
            inverted
            color="violet"
            style={{ marginLeft: "0.5em", marginRight: "0.5em" }}
          >
            Kayıt Ol
          </Button>
        </Link>

        <Button.Group color="purple">
          <Link to={"/registerEmployer"}>
            <Button>İş Veren</Button>
            <Dropdown
              className="button icon"
              floating
              options={options}
              trigger={<></>}
            />
          </Link>
        </Button.Group>
      </Menu.Item>
    </div>
  );
}
