import React, {Component} from "react";
import roletaJashtme from "../fotot/roletaJashtme.png.png";

class ImageForm extends Component {
    render() {
        const {image, typesOfBlinds} = this.props;
        return (
            <div className="card m-2 text-center">
                <img className="card-img-top"  src={image.photo} alt="Card image cap"></img>
                <div className="card-body">
                    <h5 className="card-title"><strong>{image.name}</strong></h5>
                    <p className="card-text">{image.info}</p>
                </div>
                <ul className="list-group list-group-flush">
                    {typesOfBlinds.map ((blind,index) =>  <li key={index} className="list-group-item"><strong>{blind.name}</strong>: Cost {blind.cost} Euro/m<sup>2</sup></li>)}
                </ul>
            </div>
        )
    }
}

export default ImageForm;