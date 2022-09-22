import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { useParams, Link } from "react-router-dom"

const DetailUser = () => {

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [gender, setGender] = useState("Male")
    const { id } = useParams()

    useEffect(() => {
        getUserByID();
        // eslint-disable-next-line
    }, []);

    const getUserByID = async () => {
        const response = await axios.get(`http://localhost:5000/users/${id}`)
        setName(response.data.name);
        setEmail(response.data.email);
        setGender(response.data.gender);
    }

    return (
        <div className="columns mt-5 is-centered">
            <div className="column is-half">
                <Link to={`/`} className="button is-info">Back</Link>
                <form>
                    <div className="field">
                        <label className="label">Name</label>
                        <p>{name}</p>
                    </div>
                    <div className="field">
                        <label className="label">Email</label>
                        <p>{email}</p>
                    </div>
                    <div className="field">
                        <label className="label">Gender</label>
                        <p>{gender}</p>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default DetailUser;