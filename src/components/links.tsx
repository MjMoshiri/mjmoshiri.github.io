import React from 'react';

const LinksPage: React.FC = () => {
    return (
        <div style={styles.pageContainer}>
            <div style={styles.cardContainer}>
                <div style={styles.profileContainer}>
                    <p style={styles.paragraph}>
                    <h1 style={styles.profileName}>Hi! (づ ◕‿◕ )づ</h1>
                        Discover My Work and Contributions:
                    </p>
                </div>
                <div style={styles.linksContainer}>
                    <a href="https://linkedin.com/in/MJMoshiri" target="_blank" rel="noopener noreferrer" style={styles.link}>LinkedIn</a>
                    <a href="https://github.com/MJMoshiri" target="_blank" rel="noopener noreferrer" style={styles.link}>GitHub</a>
                    <a href="https://leetcode.com/MJMTG" target="_blank" rel="noopener noreferrer" style={{ ...styles.link, color: 'goldenrod' }}>LeetCode</a>
                    <a href="https://mjmoshiri.github.io" target="_blank" rel="noopener noreferrer" style={styles.link}>Website</a>
                </div>
            </div>
        </div>
    );
};

const styles = {
    pageContainer: {
    display: 'flex',
    justifyContent: 'center',
    backgroundColor: '#fff',
    width: '400px',
    height: '200px',
    maxHeight: '400px',
    maxWidth: '400px',
    borderRadius: '10px',
    margin: '5% auto',
    boxShadow: '0px 2px 5px 0px rgba(0, 0, 0, 0.2)',
},
cardContainer: {
    display: 'flex',
        flexDirection: 'column' as 'column',
        alignItems: 'center',
        padding: '20px',
},
    paragraph: {
    fontSize: '16px',
        textAlign: 'center' as 'center',
        marginBottom: '0',
    },
profileContainer: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '20px',
},
profileName: {
    fontSize: '20px',
    fontWeight: 'bold',
    marginLeft: '10px',
    marginTop: '0',
},
linksContainer: {
    display: 'flex',
    flexDirection: 'row' as 'row',
    justifyContent: 'space-between',
    flexWrap: 'wrap' as 'wrap',
},
link: {
    fontSize: '14px',
        color: '#007bff',
        textDecoration: 'none',
        marginRight: '10px',
        marginBottom: '10px',
},
};

export default LinksPage;

