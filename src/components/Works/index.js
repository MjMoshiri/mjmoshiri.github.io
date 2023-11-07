import React, { useEffect, useRef, useState } from 'react';
import './index.css';
import PopupComponent from "../PopUp";

const descriptions = {
    0: {
        jobTitle: "Backend Developer | Intern",
        company: "Nokia Network",
        stack: "Typescript, NodeJs, React, Go ,Docker",
        imageUrl: "/me.jpg",
        details : "Test Input"
    },
    1: {
        jobTitle: "Researcher",
        company: "LUT University",
        stack: "TensorFlow, Python, MS Office, OpenAI API",
        imageUrl: "/me.jpg",
        details : "Test Input"
    },
    2: {
        jobTitle: "Teaching Assistant",
        company: "LUT University",
        stack: "Python, Java, C",
        imageUrl: "/me.jpg",
        details : "Test Input"
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
        const options = {
            root: null, rootMargin: '0px', threshold: 0.1
        };
        const callback = (entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    setTimeout(() => {
                        entry.target.classList.add('auto-hover');
                        setTimeout(() => {
                            entry.target.classList.remove('auto-hover');
                        }, 2000);
                    }, 2000);
                }
            });
        };
        const observer = new IntersectionObserver(callback, options);

        const currentBoxes = boxRefs.current;

        currentBoxes.forEach(box => observer.observe(box));

        return () => {
            currentBoxes.forEach(box => observer.unobserve(box));
        };
    }, []);

    const generateTimelineBox = (desc, index) => {
        const isEven = index % 2 === 0;
        return (
            <React.Fragment key={index}>
                {isEven ? (
                    <>
                        <img src={desc.imageUrl} alt={desc.jobTitle} className="timeline-image"/>
                        <div className="timeline-middle">
                            <div className="timeline-circle"></div>
                        </div>
                    </>
                ) : null}
                <div className="timeline-box" ref={el => boxRefs.current[index] = el} onClick={() => handleReadMoreClick(desc)} style={{ cursor: 'pointer' }}>
                    <div className="timeline-text">
                        <h3>{desc.jobTitle}</h3>
                        <h4>{desc.company}</h4>
                        <p>{desc.stack}</p>
                    </div>
                    <div className="read-more-text" onClick={() => handleReadMoreClick(desc)}>Read More</div>
                </div>
                {!isEven ? (
                    <>
                        <div className="timeline-middle">
                            <div className="timeline-circle"></div>
                        </div>
                        <img src={desc.imageUrl} alt={desc.jobTitle} className="timeline-image"/>
                    </>
                ) : null}
            </React.Fragment>
        );
    };

    return (
        <section className="design-section">
            <div className="timeline">
                {Object.values(descriptions).map((desc, index) => generateTimelineBox(desc, index))}
            </div>
            {currentDescription && (
                <PopupComponent
                    trigger={isPopupOpen}
                    setTrigger={setIsPopupOpen}
                    content={
                        <>
                            <h2>{currentDescription.jobTitle}</h2>
                            <h3>{currentDescription.company}</h3>
                            <p>{currentDescription.details}</p>
                            <p>{currentDescription.stack}</p>
                        </>
                    }
                />
            )}
        </section>
    );
}

export default Works;
