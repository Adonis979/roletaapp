import React from "react";

function SelectFields(props) {
  return (
    <div className="container text-center">
      <div className="row">
        <div className="col">
          <select
            className="form-select m-2"
            required
            name="selectedType"
            onChange={(event) => props.handleTypeChange(event)}
          >
            <option selected value="">
              Choose item...
            </option>
            {props.typesOfBlinds.map((blind, index) => (
              <option key={index} value={blind.cost}>
                {blind.name}
              </option>
            ))}
          </select>
        </div>
        <div className="col-3">
          <input
            min="1"
            type="number"
            required={true}
            name="selectedType"
            placeholder="Cost €"
            onChange={(event) => props.changeCost(event)}
            value={props.selectedType || ""}
            className="form-control m-2 text-center"
          ></input>
        </div>
        <div className="col">
          <select
            className="form-select m-2"
            aria-label="Default select example"
          >
            <option selected>Choose a color...</option>
            <option className="bg-white text-center" value="1">
              White
            </option>
            <option className="bg-secondary text-white text-center" value="2">
              Anthracid
            </option>
            <option className="bg-success text-white text-center" value="3">
              Green
            </option>
          </select>
        </div>
      </div>
    </div>
  );
}

export default SelectFields;
