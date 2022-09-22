import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { useParams, useNavigate } from "react-router-dom"

const DetailUser = () => {

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [gender, setGender] = useState("Male")
    const { id } = useParams()
    const navigate = useNavigate();

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
        <div className="m-5">
            <div className="column is-half">
                <button onClick={() => navigate(`/`)} className="button-blue w-1/12">Back</button>
                <form>
                    <div className="mt-5">
                        <label>Name</label>
                        <div>{name}</div>
                    </div>
                    <div className="mt-5">
                        <label>Email</label>
                        <div>{email}</div>
                    </div>
                    <div className="mt-5">
                        <label>Gender</label>
                        <div>{gender}</div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default DetailUser;