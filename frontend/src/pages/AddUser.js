import React, { useState } from 'react'
import axios from 'axios';
import { useNavigate } from "react-router-dom"

const AddUser = () => {

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [gender, setGender] = useState("Male")
    const navigate = useNavigate()

    const saveUser = async (e) => {
        e.preventDefault()
        try {
            await axios.post("http://localhost:5000/users", { name, email, gender })
            navigate("/")
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div className="m-5">
            <h1 className="mb-5 font-bold text-3xl">
                Add User
            </h1>
            <div className="w-auto">
                <form onSubmit={saveUser}>
                    <div className="mt-5">
                        <label>Name</label>
                        <div className="control">
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
                        <div className="control">
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
                        <div className="control">
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
                        <button type="submit" className="button-green w-1/6">Save</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default AddUser;