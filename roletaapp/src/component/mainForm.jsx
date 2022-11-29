import React, {useState} from 'react';
import ImageForm from "./imageForm";
import InputForm from "./inputForm";

function MainForm(props) {
    const [inputType, setInputType] = useState([{selectedType: ''}])
    const [inputField, setInputField] = useState([
        {width: 0, height: 0},
        {width: 0, height: 0}
    ])
    const [showResult, setShowResult] = useState(0)

    const handleTypeChange = (event) => {
        let data = [...inputType];
        data[event.target.name] = +(event.target.value)
        setInputType(data)
    }
    const changeCost = (event) => {
        let data = [...inputType]
        data[event.target.name] = +(event.target.value)
        setInputType(data)
    }

    const handleFieldChange = (index, event) => {
        let data = [...inputField];
        data[index][event.target.name] = +(event.target.value);
        setInputField(data);
    }

    const addField = () => {
        let newField = {width: '', height: ''}
        setInputField([...inputField, newField])
    }

    const deleteField = (index) => {
        let data = [...inputField]
        data.splice(index, 1)
        setInputField(data)
    }

    const calculate = (event) => {
        event.preventDefault();
        let result = []
        let finalResult;
        for (const key in inputField) {
            let multiply = inputField[key].Width / 100 * inputField[key].Height / 100
            if (multiply < 1) {
                multiply = 1;
            }
            result.push(multiply);
        }
        const sum = result.reduce((partialSum, a) => partialSum + a, 0);
        finalResult = (sum * inputType.selectedType).toFixed(1)
        setShowResult(finalResult)
    }


    return (
        <div className="row w-100" style={{height: 750}}>
            <div className="col-4">
                <ImageForm
                    image={props.image}
                    typesOfBlinds={props.typesOfBlinds}
                ></ImageForm>
            </div>
            <div className="col">
                <InputForm
                    changeCost={changeCost}
                    selectedType={inputType.selectedType}
                    typesOfBlinds={props.typesOfBlinds}
                    calculate={calculate}
                    handleFieldChange={handleFieldChange}
                    handleTypeChange={handleTypeChange}
                    inputField={inputField}
                    deleteField={deleteField}
                    addField={addField}
                    showResult={showResult}
                ></InputForm>
            </div>
        </div>
    );
}

export default MainForm;