import React, { useCallback, useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import Intro from './components/Intro';
import Project from './components/Project';
import Start from './components/Start';

const App = () => {
    const [currentPage, setCurrentPage] = useState(0);
    const sections = [
        { id: 'Start', color: '#dc322f' },
        { id: 'Intro', color: '#268bd2' },
        { id: 'Project', color: '#073642' },
    ];
    const containerRef = useRef();

    const scrollToSection = (index) => {
        const targetSection = document.getElementById(sections[index].id);
        if (targetSection) {
            targetSection.scrollIntoView({
                behavior: 'smooth',
            });
        }
    };

    const handleScroll = useCallback((e) => {
        const delta = e.deltaY;
        const newPageIndex = currentPage + (delta > 0 ? 1 : -1);
    
        if (newPageIndex >= 0 && newPageIndex < sections.length) {
            setCurrentPage(newPageIndex);
            scrollToSection(newPageIndex);
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [currentPage]);
    
    useEffect(() => {
        const container = containerRef.current;
        const scrollHandler = (e) => handleScroll(e);
        container.addEventListener('wheel', scrollHandler);
        return () => {
            container.removeEventListener('wheel', scrollHandler);
        };
    }, [handleScroll]);

    return (
        <Container ref={containerRef}>
            {sections.map((section, index) => (
                <Section
                    key={section.id}
                    id={section.id}
                    className={`section ${currentPage === index ? 'active' : ''}`}
                    color={section.color}
                >
                    {section.id === 'Start' && <Start />}
                    {section.id === 'Intro' && <Intro />}
                    {section.id === 'Project' && <Project />}
                </Section>
            ))}
        </Container>
    );
};

const Container = styled.div`
    width: 100%;
    height: 100vh;
    position: relative;
    overflow: hidden;
    scroll-snap-type: y mandatory;
    overflow-y: scroll;
    scrollbar-width: none;
    -ms-overflow-style: none;
    cursor: pointer;
`;

const Section = styled.div`
    height: 100vh;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    scroll-snap-align: start;
    transition: background-color 0.3s;

    background-color: ${({ color }) => color};
    
    h1 {
        color: white;
        font-size: 3rem;
    }
`;

export default App;
