import React, { Component } from "react";
import SelectFields from "./selectField";
import InputFields from "./inputFields";
import Buttons from "./buttons";

function InputForm(props) {
  return (
    <div>
      <form onSubmit={props.calculate}>
        <SelectFields
          typesOfBlinds={props.typesOfBlinds}
          handleTypeChange={props.handleTypeChange}
          selectedType={props.selectedType}
          changeCost={props.changeCost}
        ></SelectFields>
        <InputFields
          inputField={props.inputField}
          handleFieldChange={props.handleFieldChange}
          deleteField={props.deleteField}
        ></InputFields>
        <Buttons
          addField={props.addField}
          showResult={props.showResult}
        ></Buttons>
      </form>
    </div>
  );
}

export default InputForm;
