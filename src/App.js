import { Fragment } from "react";
import "./App.css";
import Hero from "./Components/Hero";
import Navbar from "./Components/Navbar";
import SearchSection from "./Components/SearchSection";

function App() {
    return (
        <Fragment>
            <Navbar />
            <Hero />
            <SearchSection />
        </Fragment>
    );
}

export default App;
