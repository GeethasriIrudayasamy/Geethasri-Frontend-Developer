import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { loadrockets } from "../store/datas";
import DataGrid from "./DataGrid";
import "./SearchSection.css";

const SearchSection = () => {
    const dispatch = useDispatch();
    const rockets = useSelector((state) => state.list);
    const [search, setSearch] = useState(false);

    useEffect(() => {
        dispatch(loadrockets());
    }, [dispatch]);

    // console.log(rockets);
    const [query, setQuery] = useState("");
    const queryHandler = (event) => {
        event.preventDefault();
        setQuery(event.target.value);
        setSearch(true);
    };

    // console.log(query);
    const filteredRockets = rockets.filter((rocket) => {
        return (
            rocket.rocket_name.toLowerCase().includes(query.toLowerCase()) ||
            rocket.rocket_id.toLowerCase().includes(query.toLowerCase())
        );
    });
    return (
        <section className="section newsletter" id="explore">
            <div className="newsletter__container container">
                <h2 className="section__title">Exploring Together</h2>
                <p className="newsletter__description">
                    Space Exploration vehicles details in one place.
                </p>

                <form action="" className="newsletter__form">
                    <input
                        type="text"
                        placeholder="Search"
                        className="newsletter__input"
                        value={query}
                        onChange={queryHandler}
                    />
                    <button
                        className="button search"
                        onClick={(event) => {
                            event.preventDefault();
                            setQuery("");
                            setSearch(false);
                        }}
                    >
                        <box-icon
                            name={!search ? "search" : "x"}
                            color="white"
                        ></box-icon>
                    </button>
                </form>
            </div>
            <DataGrid data={filteredRockets} />
        </section>
    );
};

export default SearchSection;
