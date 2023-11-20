import React from 'react';
import { AiFillGithub, AiOutlineMail } from "react-icons/ai";
import { FaLinkedin } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import SearchBar from "./search-bar";
import { Category } from "../types";
import Skills from "./skills";
import Experiences from "./experiences";
import Projects from "./projects";
import Education from "./education";

interface HomeProps {
    handleSearch: (searchTerm: string) => void;
    filteredItems: Map<Category, any[]>;
}

const Home: React.FC<HomeProps> = ({ handleSearch, filteredItems }) => {
    return (
        <div>
            <h1>⚒️ Work in Progress ⚒️</h1>
            <h2 style={{ color: "blueviolet" }}>Everything about MJ Moshiri</h2>
            <div style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                margin: "1rem",
                gap: "1rem",
            }}>
                <a href="https://github.com/mjmoshiri" target="_blank" rel="noopener noreferrer">
                    <AiFillGithub />
                </a>
                <a href="https://www.linkedin.com/in/mjmoshiri/" target="_blank" rel="noopener noreferrer">
                    <FaLinkedin />
                </a>
                <a href="https://leetcode.com/mjmtg/" target="_blank" rel="noopener noreferrer">
                    <SiLeetcode />
                </a>
                <a href="mailto:thisismjmoshiri@gmail.com" target="_blank" rel="noopener noreferrer">
                    <AiOutlineMail />
                </a>
            </div>
            <p><strong>🔍 Quick Search:</strong> Instantly find skills and technologies with my <em>Smart Search</em>!
                <br />Fast results in just the time it takes to type. 🚀 <br />
                <a href="https://github.com/MjMoshiri/resume?tab=readme-ov-file#search-function" target="_blank" rel="noreferrer">Find out How!</a></p>
            <SearchBar onSearch={handleSearch} />
            {filteredItems.has(Category.Skills) &&
                <Skills items={filteredItems.get(Category.Skills)!} title="Skills" />}
            {filteredItems.has(Category.Experience) &&
                <Experiences items={filteredItems.get(Category.Experience)!} title="Experience" />}
            {filteredItems.has(Category.Projects) &&
                <Projects items={filteredItems.get(Category.Projects)!} title="Projects" />}
            {filteredItems.has(Category.Education) &&
                <Education items={filteredItems.get(Category.Education)!} title="Education" />}
        </div>
    );
};

export default Home;
