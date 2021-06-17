import React from "react";
import styles from "../css/TopSection.module.css";
import { Button, Select, Input, Dropdown } from "semantic-ui-react";

export default function TopSection() {
  const optionsLocation = [
    { key: "all", text: "Ankara", value: "all" },
    { key: "articles", text: "İstanbul", value: "articles" },
    { key: "products", text: "Yalova", value: "products" },
  ];
  const optionsPosition = [
    { key: "all", text: "Diş Hekimliği", value: "all" },
    { key: "articles", text: "Yazılım Mühendisliği", value: "articles" },
    { key: "products", text: "Makine Mühendisliği", value: "products" },
  ];
  return (
    <div className={styles.main}>
      <div className={styles.inputs}>
        <Dropdown
          size="big"
          search
          selection
          options={optionsPosition}
          className={styles.searchJob}
          placeholder="Pozisyonunuz"
        />
        <Dropdown
          size="big"
          search
          selection
          options={optionsLocation}
          className={styles.searchLocation}
          placeholder="Konumuz"
        />

        <Button inverted className={styles.searchButton} color="orange">
          <p className={styles.searchButtonText}>İş Bul !</p>
        </Button>
      </div>
    </div>
  );
}
