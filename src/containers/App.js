import React from "react";
import "./App.css";
import CardForm from "./CardForm";
import Card from "../containers/Card";
import styles from "./App.module.css";

function App() {
  return (
    <div className={styles.AppWrapper}>
      <Card />
      <CardForm />
    </div>
  );
}

export default App;
