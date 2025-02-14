import React, { useEffect, useState } from 'react';
import "./home.css";
import axios from 'axios';

const Home = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:8000/users")
            .then(res => {
                setUsers(res.data);
            })
            .catch(err => console.log(err));
    }, []);

    return (
        <section id="homeBlock">
            <article>
                <h1>List of users</h1>
                {
                    users && users.length > 0 ? (
                        <table>
                            <thead>
                                <tr>
                                    <th>SI.No</th>
                                    <th>Name</th>
                                    <th>Email</th>
                                    <th>Phone Number</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    users.map((user, i) => (
                                        <tr key={i}>
                                            <td>{user.id}</td>
                                            <td>{user.name}</td>
                                            <td>{user.email}</td>
                                            <td>{user.phone}</td>
                                        </tr>
                                    ))
                                }
                            </tbody>
                        </table>
                    ) : <h1>No data available</h1>
                }
            </article>
        </section>
    );
}

export default Home;
