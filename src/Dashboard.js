import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom'; // react-router-dom에서 Link 컴포넌트를 임포트

const Dashboard = () => {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://localhost:8080/api/toy-project');
                setProjects(response.data);
            } catch (error) {
                console.error('Error fetching data: ', error);
            }
        };

        fetchData();
    }, []);

    return (
        <div className="dashboard">
            <h2>TOY Projects</h2>
            {projects.map((project, index) => (
                <div key={index} className="project">
                    {index + 1}. <Link to={`/${project.reactFilePath}`}>{project.name}</Link>
                </div>
            ))}
        </div>
    );
};

export default Dashboard;
