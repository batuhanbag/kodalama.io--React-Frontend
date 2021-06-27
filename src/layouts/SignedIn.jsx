import React from "react";
import { Button, Image, Dropdown, Menu } from "semantic-ui-react";

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
            <Dropdown.Item text="Bilgilerimi Güncelle" icon="cog" />
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
