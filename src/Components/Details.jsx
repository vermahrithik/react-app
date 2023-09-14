import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const Details = () => {
    const navigate = useNavigate();
    const { id } = useParams();
    const [user, setuser] = useState([]);

    const GetUser = async () => {
        try {
            const data = await fetch(
                `https://jsonplaceholder.typicode.com/users/${id}`
            );
            const d = await data.json();
            setuser(d);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        GetUser();
    }, []);
    return (
        <div className="card bg-light p-2">
            <h3>User Details</h3>
            <p>{JSON.stringify(user)}</p>
            <div style={{
                display:"flex",
                alignItems:"center",
                justifyContent:"flex-start",
                gap:"5px"
            }}>
            <button className="btn btn-warning" onClick={() => navigate(-1)}>back</button>
            <button className="btn btn-danger" onClick={() => navigate("/home")}>home</button>
            </div>
        </div>
    );
};

export default Details;