import React, { useState } from "react";
import Modal from "./Modal";
import "./DataGrid.css";

const DataGrid = (props) => {
    const [modal, setModal] = useState(false);
    const [singleData, setSingleData] = useState("");

    const toggleModal = () => {
        setModal(!modal);
    };

    const rockets = props.data;

    const individualDetails = (value) => {
        toggleModal();
        console.log(value);
        setSingleData(value);
    };

    return (
        <section className="section rocket" id="rocket">
            <div className="rocket__container container grid">
                {rockets.map((rocket) => (
                    <div key={rocket.id}>
                        <div
                            className="rocket__content"
                            onClick={() => individualDetails(rocket)}
                        >
                            <img
                                src={rocket.flickr_images[0]}
                                alt=""
                                className="rocket__img"
                            />
                            <h3 className="rocket__title">
                                {rocket.rocket_name}
                            </h3>
                            <span className="rocket__subtitle">
                                {rocket.company}
                            </span>
                        </div>
                        {modal && (
                            <Modal data={singleData} onClose={toggleModal} />
                        )}
                    </div>
                ))}
            </div>
        </section>
    );
};

export default DataGrid;
