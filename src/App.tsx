import React, {useEffect, useMemo, useState} from 'react';
import './App.css';
import SearchBar from './components/search-bar';
import TrieData from "./data/trie-data";
import {IDataItem, Category} from "./types";
import {data} from "./data/static-data";
import Education from "./components/education";
import Experiences from "./components/experiences";
import Projects from "./components/projects";
import Skills from "./components/skills";
import {AiFillGithub} from "react-icons/ai";
import {SiLeetcode} from "react-icons/si";
import {AiOutlineMail} from "react-icons/ai";
import {FaLinkedin} from "react-icons/fa";

const prepareData = () => {
    const fullData = new Map<Category, IDataItem[]>();
    const trieData = new TrieData();
    const resumeMap = new Map<string, IDataItem>();

    for (let category in data) {
        let categoryTags = data[category].tags;
        let categoryData = data[category].data;
        for (let subcategory in categoryData) {
            let subcategoryTags = categoryData[subcategory].tags;
            let subcategoryData = categoryData[subcategory].data;
            for (let item of subcategoryData) {
                item.category = category as Category;
                item.subcategory = subcategory;
                resumeMap.set(item.name, item);
                if (fullData.has(item.category)) {
                    fullData.get(item.category)?.push(item);
                } else {
                    fullData.set(item.category, [item]);
                }
                let combinedTags = [...categoryTags, ...subcategoryTags, ...item.tags];
                for (let tag of combinedTags) {
                    tag = tag.toLowerCase();
                    trieData.insert(tag, item.name);
                }
            }
        }
    }

    return {fullData, trieData, resumeMap};
};

const App: React.FC = () => {
    const [filteredItems, setFilteredItems] = useState(new Map<Category, IDataItem[]>());

    const {fullData, trieData, resumeMap} = useMemo(() => prepareData(), []);

    useEffect(() => {
        setFilteredItems(fullData);
    }, [fullData]);


    const handleSearch = (query: string) => {
        const ans = trieData.search(query);

        if (!query.trim()) {
            setFilteredItems(fullData);
            return;
        }

        let newFilteredItems = new Map<Category, IDataItem[]>();
        ans.forEach(key => {
            const item = resumeMap.get(key);
            if (item && item.category) {
                const currentItems = newFilteredItems.get(item.category as Category) || [];
                newFilteredItems.set(item.category as Category, [...currentItems, item]);
            }
        });

        setFilteredItems(newFilteredItems);
    };
    return (
        <div className="App">
            <h1>⚒️ Work in Progress ⚒️</h1>
            <h2 style={
                {color: "blueviolet"}
            }
            >Everything about MJ Moshiri</h2>
            <div style={
                {
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    margin: "1rem",
                    gap: "1rem",
                }
            }>
                <a href="https://github.com/mjmoshiri" target="_blank" rel="noopener noreferrer">
                    <AiFillGithub/>
                </a>
                <a href="https://www.linkedin.com/in/mjmoshiri/" target="_blank" rel="noopener noreferrer">
                    <FaLinkedin/>
                </a>
                <a href="https://leetcode.com/mjmtg/" target="_blank" rel="noopener noreferrer">
                    <SiLeetcode/>
                </a>
                <a href="mailto:thisismjmoshiri@gmail.com" target="_blank" rel="noopener noreferrer">
                    <AiOutlineMail/>
                </a>
            </div>
            <p><strong>🔍 Quick Search:</strong> Instantly find skills and technologies with my <em>Smart Search</em>!
                <br/>Fast results in just the time it takes to type. 🚀 <br/>
                <a href="https://github.com/MjMoshiri/resume?tab=readme-ov-file#search-function" target="_blank" rel="noreferrer">Find out How!</a></p>
            <SearchBar onSearch={handleSearch}/>
            {filteredItems.has(Category.Skills) &&
                <Skills items={filteredItems.get(Category.Skills)!} title="Skills"/>}
            {filteredItems.has(Category.Experience) &&
                <Experiences items={filteredItems.get(Category.Experience)!} title="Experience"/>}
            {filteredItems.has(Category.Projects) &&
                <Projects items={filteredItems.get(Category.Projects)!} title="Projects"/>}
            {filteredItems.has(Category.Education) &&
                <Education items={filteredItems.get(Category.Education)!} title="Education"/>}
        </div>
    );


};

export default App;
