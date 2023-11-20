import React, {useEffect, useMemo, useState} from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import './App.css';
import TrieData from "./data/trie-data";
import {IDataItem, Category} from "./types";
import {data} from "./data/static-data";
import LinksPage from "./components/links";
import Home from "./components/home";

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
        <Router>
            <div className="App">
                <Routes>
                    <Route path="/" element={<Home handleSearch={handleSearch} filteredItems={filteredItems}/>}/>
                    <Route path="/links" element={<LinksPage/>}/>
                </Routes>
            </div>
        </Router>
    );


};

export default App;
