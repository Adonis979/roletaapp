import React from 'react';

function InputFields(props) {
    return (
        <div>
        {props.inputField.map((input, index) =>
                <div key={index} className="text-center row m-2">
                    <div className="text-center col-2">
                        <span className="badge badge-pill bg-warning mt-2">Blind {index + 1}
                        </span>
                    </div>
                    <div className="col">
                        <input min="1" required={true} type="number" name="Width"
                               onChange={event => props.handleFieldChange(index, event)}
                               className="form-control" placeholder="Width (cm) "/>
                    </div>
                    <div className="col">
                        <input min="1" required={true} type="number" name="Height"
                               onChange={event => props.handleFieldChange(index, event)}
                               className="form-control"
                               placeholder="Height (cm)"/>
                    </div>
                    <div className="col-2">
                        <button onClick={() => props.deleteField(index)}
                                className="btn btn-sm btn-danger m-2">Delete
                        </button>
                    </div>
                </div>)}
        </div>
    );
}

export default InputFields;