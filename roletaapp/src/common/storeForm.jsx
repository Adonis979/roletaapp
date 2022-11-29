import React from "react";
import store from "../fotot/store.jpg";
import MainForm from "../component/mainForm";

function StoreForm(props) {
    const typesOfBlinds = [
        {
            name: 'Roller Blinds',
            cost: 20
        },
        {
            name: 'Day and Night Blinds',
            cost: 25
        }
    ]
    const image = {
        photo: store,
        name: 'Roller Blinds',
        info: 'Day and Night Blinds are a simple and practical window dressing with a versatility that makes them suitable for every room in the home.',
    }

    return (
        <MainForm
            typesOfBlinds={typesOfBlinds}
            image={image}
        ></MainForm>
    )
}

export default StoreForm;