import React, {useEffect, useRef, useState} from 'react';
import './index.css';
import PopupComponent from "../PopUp";

const descriptions = {
    "NOKIA": {
        Date: "Dec 2022 - May 2023", Titles: [{
            jobTitle: "Software Engineer | Intern",
            stack: "Typescript, Go, Docker, OpenShift, Kubernetes",

            details: ["Data Collection and Analysis Platform Team, focusing on Backend development using TypeScript / Go, and Cloud & DevOps R&D. Key accomplishments include:",
                " - Enhanced API efficiency and functionality, achieving a 20% improvement in load tests and better user satisfaction.", " - Modernized application architecture to the latest industry standards ensuring software quality and efficiency.", " - Shifted a product to enterprise runners, cutting maintenance tasks by 25% and boosting system reliability.", " - Gained proficiency in managing and maintaining OpenShift Container Platform and Kubernetes clusters through comprehensive training and hands-on experience."]
        }]
    }, "LUT": {
        Date: "Dec 2021 - Sep 2022", Titles: [{
            jobTitle: "Researcher",
            stack: "Python, TensorFlow, MS Office",
            details: ["Developed study materials, coding exercises, and problem-solving activities for AI and Linux-focused courses aimed at Bachelor's and Master's level software engineering students."]
        }, {
            jobTitle: "Teaching Assistant",
            stack: "Python, Java, C",
            details: ["Provided mentorship to students in Python, Java, and C by helping with low-level programming concepts such as memory management and high-level programming concepts such as object-oriented programming (OOP)."]
        }]
    }
};


function Works() {
    const boxRefs = useRef([]);
    const [isPopupOpen, setIsPopupOpen] = useState(false);
    const [currentDescription, setCurrentDescription] = useState(null);

    const handleReadMoreClick = (desc) => {
        setCurrentDescription(desc);
        setIsPopupOpen(true);
    };
    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    const target = entry.target;
                    const addHoverClass = () => target.classList.add('auto-hover');
                    const removeHoverClass = () => target.classList.remove('auto-hover');

                    const hoverTimeout = setTimeout(addHoverClass, 2000);

                    const removalTimeout = setTimeout(removeHoverClass, 4000);

                    return () => {
                        clearTimeout(hoverTimeout);
                        clearTimeout(removalTimeout);
                    };
                }
            });
        }, {root: null, rootMargin: '0px', threshold: 0.1});

        const currentBoxes = boxRefs.current;
        currentBoxes.forEach((box) => observer.observe(box));

        return () => {
            currentBoxes.forEach((box) => observer.unobserve(box));
        };
    }, []);

    const generateTimelineBox = (desc, title, Date, index) => {
        const descriptionBox = (<div className={`timeline-box`}
                                     ref={el => boxRefs.current[index] = el}
                                     onClick={() => handleReadMoreClick(desc)}
                                     style={{cursor: 'pointer'}}>
            <div className="timeline-text">
                <h3>{desc.jobTitle}</h3>
                <p>{desc.stack}</p>
            </div>
            <div className="read-more-text" onClick={() => handleReadMoreClick(desc)}>Read More</div>
        </div>);

        const CompanyTitle = () => {
            return title ? (<div className="company-title">
                <div className="title">{title}</div>
                <div className="date">{Date}</div>
            </div>) : (<div></div>);
        }
        const timelineMiddle = (<div className="timeline-middle">
            <div className="timeline-circle"></div>
        </div>);

        return (<React.Fragment key={index}>
            <>
                <CompanyTitle/>
                {timelineMiddle}
            </>
            {descriptionBox}
        </React.Fragment>);
    };


    return (<section className="design-section">
        <div className="timeline">
            {Object.keys(descriptions).map((company, index) => {
                const {Date, Titles} = descriptions[company];
                return (<div className="timeline-container">
                    <div className="timeline-content">
                        {Titles.map((title, innerIndex) => {
                            return generateTimelineBox(title, innerIndex === 0 ? company : null, Date, index * 10 + innerIndex);
                        })}
                    </div>
                </div>);
            })}
        </div>
        {currentDescription && (<PopupComponent
            trigger={isPopupOpen}
            setTrigger={setIsPopupOpen}
            content={<>
                <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'baseline'}}>
                    <h2>{currentDescription.jobTitle}</h2>
                    <span style={{
                        fontSize: 'smaller', fontStyle: 'italic'
                    }}>{currentDescription.date}</span>
                </div>
                <span className="tech-stack">{currentDescription.stack}</span>
                <hr style={{borderColor: 'lightgray', borderWidth: '1px'}}/>
                {currentDescription.details.map((detail) => (<p>{detail}</p>))}            </>}
        />)}
    </section>);
}

export default Works;
