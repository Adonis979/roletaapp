import React from "react";
import venetiane from "../fotot/venetiane2.jpg";
import MainForm from "../component/mainForm";

function VenetianeForm(props) {
  const typesOfBlinds = [
    {
      name: "Aluminium Venetiane",
      cost: 12,
    },
    {
      name: "Wooden Venetiane",
      cost: 20,
    },
  ];
  const image = {
    photo: venetiane,
    name: "Venetiane",
    info:
      "A big reason for the popularity of Venetian blinds is the control they give you." +
      " The blinds can be lifted and the slats twisted via a chord mechanism to give you total control over how much light enters the room," +
      " as well as letting you control your privacy.",
  };
  return <MainForm typesOfBlinds={typesOfBlinds} image={image}></MainForm>;
}

export default VenetianeForm;
