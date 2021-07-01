import React from "react";
import { Button, Image, Dropdown, Menu } from "semantic-ui-react";
import { useHistory, Link } from "react-router-dom";

export default function SignedIn(props) {
  return (
    <div>
      <Menu.Item>
        <Image
          avatar
          spaced="right"
          src="https://i.imgur.com/3McFm3K_d.webp?maxwidth=640&shape=thumb&fidelity=medium"
        />
        <Dropdown pointing="top right" text="Batuhan">
          <Dropdown.Menu>
            <Link to={`/uptadeEmployer`}>
              <Dropdown.Item text="Bilgilerimi Güncelle-1" icon="cog" />
            </Link>

            <Link to={`/uptadeJobSeeker`}>
              <Dropdown.Item text="Bilgilerimi Güncelle-2" icon="cog" />
            </Link>
            <Dropdown.Item text="Cv Güncelle" icon="tags" />
            <Dropdown.Item text="Favori İlanlarım" icon="favorite" />

            <Dropdown.Item
              onClick={props.signOut}
              text="Çıkış Yap"
              icon="sign-out"
            />
          </Dropdown.Menu>
        </Dropdown>
      </Menu.Item>
    </div>
  );
}
