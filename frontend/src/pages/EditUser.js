import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { useNavigate, useParams } from "react-router-dom"

const EditUser = () => {

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [gender, setGender] = useState("Male")
    const navigate = useNavigate()
    const { id } = useParams()

    useEffect(() => {
        getUserByID();
        // eslint-disable-next-line
    }, []);

    const updateUser = async (e) => {
        e.preventDefault()
        try {
            await axios.patch(`http://localhost:5000/users/${id}`, { name, email, gender })
            navigate("/")
        } catch (error) {
            console.log(error)
        }
    }

    const getUserByID = async () => {
        const response = await axios.get(`http://localhost:5000/users/${id}`)
        setName(response.data.name);
        setEmail(response.data.email);
        setGender(response.data.gender);
    }

    return (
        <div className="m-5">
            <h1 className="mb-5 font-bold text-3xl">
                Edit User
            </h1>
            <div className="w-auto">
                <form onSubmit={updateUser}>
                    <div className="mt-5">
                        <label>Name</label>
                        <div>
                            <input
                                type="text"
                                className="text-field"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                placeholder="Name"
                            />
                        </div>
                    </div>
                    <div className="mt-5">
                        <label>Email</label>
                        <div>
                            <input
                                type="text"
                                className="text-field"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="Email"
                            />
                        </div>
                    </div>
                    <div className="mt-5">
                        <label>Gender</label>
                        <div>
                            <div>
                                <select
                                    value={gender}
                                    onChange={(e) => setGender(e.target.value)}
                                    className="text-field"
                                >
                                    <option value="Male">Male</option>
                                    <option value="Female">Female</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div className="w-full flex justify-end mt-6">
                        <button type="submit" className="button-green w-1/6">Update</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default EditUser;