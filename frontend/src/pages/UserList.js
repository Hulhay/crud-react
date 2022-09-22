import React, { useState, useEffect } from 'react'
import axios from "axios"
import { useNavigate } from "react-router-dom"

const UserList = () => {

    const [users, setUsers] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        getUsers();
    }, []);

    const getUsers = async () => {
        const response = await axios.get("http://localhost:5000/users");
        setUsers(response.data);
    }

    const deleteUser = async (id) => {
        try {
            await axios.delete(`http://localhost:5000/users/${id}`)
            setUsers(users.filter((user) => user.id !== id));
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div className="m-5">
            <div className="w-full">
                <button onClick={() => navigate(`add`)} className="button-green font-normal mb-2 hover:font-medium">Add New User</button>
                <table className="w-full border mt-5">
                    <thead className="border">
                        <tr>
                            <th>No.</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Gender</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map((user, index) => (
                            <tr key={user.id}>
                                <td className="text-center">{index + 1}</td>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td className="text-center">{user.gender}</td>
                                <td className="flex w-full">
                                    <button onClick={() => navigate(`view/${user.id}`)} className="button-green w-1/3">View</button>
                                    <button onClick={() => navigate(`edit/${user.id}`)} className="button-blue w-1/3">Edit</button>
                                    <button onClick={() => deleteUser(user.id)} className="button-red w-1/3">Delete</button>
                                </td>
                            </tr>
                        ))}

                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default UserList;