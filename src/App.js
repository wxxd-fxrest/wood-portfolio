import React, { useCallback, useEffect, useRef, useState } from 'react';
import styled, { keyframes } from 'styled-components';
import { startColors } from './colors';
import Intro from './components/Intro';
import Project from './components/Project';
import Start from './components/Start';
import { RiGithubFill, RiNotionFill } from 'react-icons/ri';

const scaleAnimation = keyframes`
    0% {
        transform: scale(1);
    }
    50% {
        transform: scale(1.2); /* 크기 확대 */
    }
    100% {
        transform: scale(1);
    }
`;


const App = () => {
    const [currentpage, setcurrentpage] = useState(0);
    const [currentIndex] = useState(0);

    const projectData = [
        {
            github: process.env.REACT_APP_GITHUB,
            notion: process.env.REACT_APP_NOTION,
        },
    ];

    const sections = [
        { id: 'Start', color: startColors.backGroundColor },
        { id: 'Project', color: startColors.backGroundColor },
        { id: 'Intro', color: '#c1ccc8' },
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
        const newPageIndex = currentpage + (delta > 0 ? 1 : -1);

        if (newPageIndex >= 0 && newPageIndex < sections.length) {
            setcurrentpage(newPageIndex);
            scrollToSection(newPageIndex);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [currentpage]);

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
                    className={`section ${currentpage === index ? 'active' : ''}`}
                    color={section.color}
                >
                    {section.id === 'Start' && <Start />}
                    {section.id === 'Project' && <Project />}
                    {section.id === 'Intro' && <Intro />}
                    {section.id === 'Start' && (
                        <ButtonWrapper>
                            <GitHubBtn onClick={handleGithubClick}>
                                <GitHub />
                                <GitHubText>github</GitHubText>
                            </GitHubBtn>
                            <NotionBtn onClick={handleNotionClick}>
                                <Notion />
                                <NotionText> notion </NotionText>
                            </NotionBtn>
                            <ScrollHint currentpage={currentpage}>
                                <a href="#!" style={{textDecorationLine: 'none'}}>
                                    <span></span>
                                </a>
                                {/* <ScrollText> scroll </ScrollText> */}
                            </ScrollHint>
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
    bottom: 5%;
    left: 13%;
    display: flex;
    gap: 10px;

    @media (min-width: 1900px) {
        left: 18%;
    }

    @media (max-width: 1200px) {
        left: 11%;
    }
    @media (max-width: 768px) {
        left: 9%;
    }
`;

const RoundButton = styled.button`
    outline: none;
    background-color: transparent;
    border: none;
    color: white;
    cursor: pointer;
    border-radius: 50px;
    padding: 10px 18px;
    transition: background-color 0.3s;

    &:hover {
        background-color: rgba(255, 255, 255, 0.2);
    }

    @media (max-width: 768px) {
        padding: 5px 13px;
    }
`;

const GitHubBtn = styled(RoundButton)``;

const NotionBtn = styled(RoundButton)``;

const GitHub = styled(RiGithubFill)`
    width: 40px;
    height: 40px;
    transition: background-color 0.3s;

    @media (max-width: 768px) {
        width: 30px;
        height: 30px;
    }
`;

const Notion = styled(RiNotionFill)`
    width: 40px;
    height: 40px;
    transition: background-color 0.3s;

    @media (max-width: 768px) {
        width: 30px;
        height: 30px;
    }
`;

const GitHubText = styled.p`
    font-size: 12px;
    font-weight: 100;

    @media (max-width: 768px) {
        font-size: 10px;
    }
`;

const NotionText = styled.p`
    font-size: 12px;
    font-weight: 100;

    @media (max-width: 768px) {
        font-size: 10px;
    }
`;

const ScrollHint = styled.div`
    position: fixed;
    bottom: 7%;
    right: 12%;
    font-size: 1rem;
    color: white;
    opacity: ${({ currentpage }) => ((currentpage) === 0 ? '0.5' : '0')};
    transition: opacity 0.3s;

    a {
        padding-top: 40px;
        display: flex;
        align-items: center; /* 세로 중앙 정렬을 위해 추가 */
        position: relative;

        span {
            position: absolute;
            top: 0;
            left: 50%;
            width: 40px;
            height: 40px;
            margin-left: -20px; /* 가운데 정렬을 위해 마진 수정 */
            border: 1px solid #fff;
            border-radius: 100%;
            box-sizing: border-box;
            animation: ${scaleAnimation} 2s infinite; /* 원형 확대/축소 애니메이션 적용 */

            &::after {
                position: absolute;
                top: 50%;
                left: 50%;
                content: '';
                width: 11px;
                height: 11px;
                margin: -6px 0 0 -5.5px;
                border-left: 1px solid #fff;
                border-bottom: 1px solid #fff;
                transform: rotate(-45deg);
                box-sizing: border-box;
            }
        }
    }

    @media (max-width: 768px) {        
        a {
            padding-top: 30px;
            
            span {
                width: 30px;
                height: 30px;

                &::after {
                    width: 10px;
                    height: 10px;
                    margin: -5px 0 0 -5px;
                }
            }
        }
    }
`;

export default App;
