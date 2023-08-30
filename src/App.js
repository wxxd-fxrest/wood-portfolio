import React, { useCallback, useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { startColors } from './colors';
import Intro from './components/Intro';
import Project from './components/Project';
import Start from './components/Start';
import { RiGithubFill, RiNotionFill } from 'react-icons/ri';

const App = () => {
    const [currentPage, setCurrentPage] = useState(0);
    const [currentIndex] = useState(0); 
    
    const projectData = [
        { 
            github: process.env.REACT_APP_GITHUB,
            notion: process.env.REACT_APP_NOTION, 
        },
    ];

    const sections = [
        { id: 'Start', color: startColors.backGroundColor },
        { id: 'Intro', color: '#c0bfe1' },
        { id: 'Project', color: '#eaecf6' },
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

    const handleGithubClick = () => {
        window.open(projectData[currentIndex].github, '_blank');
    };

    const handleNotionClick = () => {
        window.open(projectData[currentIndex].notion, '_blank');
    };

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
                    {section.id === 'Start' && (
                        <ButtonWrapper>
                            <GitHubBtn onClick={handleGithubClick}>
                                <RiGithubFill size={30} />
                                <GitHubText>github</GitHubText>
                            </GitHubBtn>
                            <NotionBtn onClick={handleNotionClick}>
                                <RiNotionFill size={30} />
                                <NotionText> notion </NotionText>
                            </NotionBtn>
                        </ButtonWrapper>
                    )}
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
    
    /* 스크롤바 숨기기 */
    -ms-overflow-style: none; /* 인터넷 익스플로러 */
    scrollbar-width: none; /* 파이어폭스 */
    &::-webkit-scrollbar {
        display: none;
    }
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
`;

const ButtonWrapper = styled.div`
    position: absolute;
    bottom: 30px;
    right: 50px;
    display: flex;
    gap: 10px;
`;

const RoundButton = styled.button`
    outline: none;
    background-color: transparent;
    border: none;
    color: white;
    cursor: pointer;
    border-radius: 50px;
    /* padding: 5px 10px; */
    padding: 10px 18px;
    transition: background-color 0.3s;

    &:hover {
        background-color: rgba(255, 255, 255, 0.2);
    }
`;

const GitHubBtn = styled(RoundButton)``;

const NotionBtn = styled(RoundButton)``;

const GitHubText = styled.h1`
    font-size: 12px;
    font-weight: 100;
`;

const NotionText = styled.h1`
    font-size: 12px;
    font-weight: 100;
`;

export default App;
