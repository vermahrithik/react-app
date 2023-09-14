import React from "react";
import { useNavigate } from "react-router-dom";

const About = () => {
    const navigate = useNavigate();
    const HomeHandler = () => {
        // backend api call
        // save database
        navigate("/");
    };
    return (
        <div className="w-75">
            <h1>FusionReact Technologies<sup>&trade;</sup></h1>
            <p>
            <b>FusionReact Technologies</b> is a leading company specializing in React web app development and deployment. With a passionate team of skilled developers, they craft user-centric, visually appealing, and highly functional web applications. They prioritize client success, offering tailored solutions that align with business objectives. FusionReact is dedicated to staying at the forefront of React technology, ensuring clients remain innovative and competitive in the ever-evolving digital landscape.
            </p>
            <button onClick={HomeHandler} className="btn btn-danger">
                Home
            </button>
        </div>
    );
};

export default About;