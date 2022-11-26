import React from 'react';

function Buttons(props) {
    return (
        <div>
            <div className="text-center">
                <button onClick={props.addField} className="btn btn-primary m-2 text-center col-2"> Add More</button>
                <button type="submit col" className="btn btn-success m-2 col-2 text-center"> Calculate</button>
            </div>
            <div className="text-center">
                <span className="badge badge-pill bg-warning mt-2" style={{fontSize:20}}>Result: {props.showResult} Euro</span>
            </div>
        </div>
    );
}

export default Buttons;