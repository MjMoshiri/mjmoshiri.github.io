import React, {useEffect, useRef} from 'react';
import './index.css';

function Works() {
    const descriptions = [{
        jobTitle: "Backend Developer | Intern",
        company: "Nokia Network",
        stack: "Typescript, NodeJs, React, Go ,Docker",
        imageUrl: "/me.jpg"
    }, {
        jobTitle: "Backend Developer | Intern",
        company: "Nokia Network",
        stack: "Typescript, NodeJs, React, Go ,Docker",
        imageUrl: "/me.jpg"
    }, {
        jobTitle: "Backend Developer | Intern",
        company: "Nokia Network",
        stack: "Typescript, NodeJs, React, Go ,Docker",
        imageUrl: "/me.jpg"
    }];
    const boxRefs = useRef([]);

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
        boxRefs.current.forEach(box => observer.observe(box));
        return () => {
            boxRefs.current.forEach(box => observer.unobserve(box));
        };
    }, []);

    return (<section className="design-section">
        <div className="timeline">
            {descriptions.map((desc, index) => {
                if (index % 2 === 0) {
                    return (<React.Fragment key={index}>
                        <img src={desc.imageUrl} alt={desc.jobTitle} className="timeline-image"/>
                        <div className="timeline-middle">
                            <div className="timeline-circle"></div>
                        </div>
                        <div className="timeline-box" ref={el => boxRefs.current[index] = el}>
                            <div className="timeline-text">
                                <h3>{desc.jobTitle}</h3>
                                <h4>{desc.company}</h4>
                                <p>{desc.stack}</p>
                            </div>
                            <div className="read-more-text">Read More</div>
                        </div>
                    </React.Fragment>);
                } else {
                    return (<React.Fragment key={index}>
                        <div className="timeline-box" ref={el => boxRefs.current[index] = el}>
                            <div className="timeline-text">
                                <h3>{desc.jobTitle}</h3>
                                <h4>{desc.company}</h4>
                                <p>{desc.stack}</p>
                            </div>
                            <div className="read-more-text">Read More</div>
                        </div>
                        <div className="timeline-middle">
                            <div className="timeline-circle"></div>
                        </div>
                        <img src={desc.imageUrl} alt={desc.jobTitle} className="timeline-image"/>
                    </React.Fragment>);
                }
            })}
        </div>
    </section>);
}

export default Works;
