import React from 'react';
import './index.css';

function Projects() {
    // Example items with image and title
    const items = [
        { id: 1, title: 'Project 1', imageUrl: "/me.jpg" },
        { id: 2, title: 'Project 2', imageUrl: "/lut.png" },
        { id: 3, title: 'Project 3', imageUrl: "/nokia.png" },
        { id: 4, title: 'Project 4', imageUrl: "/me.jpg" },
        { id: 5, title: 'Project 5', imageUrl: "/lut.png" },
        { id: 6, title: 'Project 6', imageUrl: "/nokia.png"},
        { id: 7, title: 'Project 7', imageUrl: "/me.jpg" },
        { id: 8, title: 'Project 8', imageUrl: "/lut.png" },
        { id: 9, title: 'Project 9', imageUrl: "/nokia.png" },
        { id: 10, title: 'Project 10', imageUrl: "/me.jpg" },
    ];

    return (
        <div className="projects-grid">
            {items.map((item) => (
                <div key={item.id} className="project-item" style={{ backgroundImage: `url(${item.imageUrl})` }}>
                    <div className="project-item-title">{item.title}</div>
                </div>
            ))}
        </div>
    );
}

export default Projects;
