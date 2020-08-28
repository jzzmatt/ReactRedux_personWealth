import React from "react";
import "./styles.css";
import Layout from "./components/Layout";
import DisplayList from "./components/DisplayList";
import Controller from "./components/Controller";

export default function App() {
  return (
    <div className="App">
      <h2>React Redux Person Wealth Exercice</h2>
      <Layout>
        <Controller />
        <DisplayList />
      </Layout>
    </div>
  );
}
