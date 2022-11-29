import React from "react";
import roletaJashtme from "../fotot/outsideblind.jpg";
import MainForm from "../component/mainForm";

function OutsideBlindForm(props) {
  const typesOfBlinds = [
    {
      name: "Aluminium Outside Blinds",
      cost: 45,
    },
    {
      name: "Plastic Outside Blinds",
      cost: 40,
    },
  ];
  const image = {
    photo: roletaJashtme,
    name: "Outside Blinds",
    info: "Outise Blinds are very good for noise cancellation and window protection",
  };

  return <MainForm typesOfBlinds={typesOfBlinds} image={image}></MainForm>;
}

export default OutsideBlindForm;
