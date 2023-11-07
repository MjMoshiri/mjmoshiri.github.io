import React, { useRef, useEffect, memo } from 'react';
import './index.css';

const PopupComponent = memo(({ trigger, setTrigger, content }) => {
    const popupContentRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (popupContentRef.current && !popupContentRef.current.contains(event.target)) {
                setTrigger(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [setTrigger]);

    if (!trigger) return null;

    return (
        <div className="popup">
            <div className="popup-inner" ref={popupContentRef}>
                <button className="close-btn" onClick={() => setTrigger(false)}>Close</button>
                <h2>Detailed Info</h2>
                <p>{content}</p>
            </div>
        </div>
    );
});

export default PopupComponent;
