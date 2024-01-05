import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Card from "./components/Card";
import Card2 from "./components/Card2";

let data = {
  name: ["Vivek", "Divya", "Bindi", "Chotu"],
  specs: [
    { vivek: "Vivek got a pakage of 35 Lpa in jan 24" },
    { Divya: "Divya will come to prayagraj on 1st Feb 24" },
    { Bindi: "Bindi loves chotu" },
    { Chotu: "Chotu loves bindi" },
  ],
};
function Appp() {
  
  return (
    <>
      <h1>Vivek got a pakage of 35 Lpa in Jan 24</h1>
      <Card name = {data.name[0]} specs = {data.specs[0].vivek} />
      <Card2 name = {data.name[1]} specs = {data.specs[1].Divya}/>
      <Card name = {data.name[2]} specs = {data.specs[2].Bindi}/>
      <Card name = {data.name[3]} specs = {data.specs[3].Chotu}/>
    </>
  );
}

export default Appp;
