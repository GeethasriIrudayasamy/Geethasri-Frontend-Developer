import React from "react";
import "./Modal.css";

const Modal = (props) => {
    // console.log(props.data);
    return (
        <div className="modal">
            <div className="modal-content">
                <div className="category__container container grid">
                    <div className="category__data">
                        <img
                            src={props.data.flickr_images[0]}
                            alt=""
                            className="category__img"
                        />
                        <h3 className="category__title">
                            {props.data.rocket_name}( {props.data.company})
                        </h3>
                        <p className="category__description">
                            {props.data.description}
                        </p>
                        <a href={props.data.wikipedia}>Know More</a>
                    </div>
                </div>
                <button className="close-modal" onClick={props.onClose}>
                    <box-icon name="x" color="#1c1a17"></box-icon>
                </button>
            </div>
        </div>
    );
};

export default Modal;
