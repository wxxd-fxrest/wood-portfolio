import React, { useState } from "react";
import styled from "styled-components";
import mumbleIMG from '../../src/assets/Mumble-Logo.gif';
import askIMG from '../../src/assets/Ask-Logo.gif';
import movieBuddyIMG from '../../src/assets/movie-buddy.png';
import { RiGithubFill, RiNotionFill } from 'react-icons/ri';
import { BiSolidLeftArrow, BiSolidRightArrow } from 'react-icons/bi';
import { BsDot } from 'react-icons/bs';
import { GiSkills } from 'react-icons/gi';

const Project = () => {
    const projectData = [
        { 
            name: 'Ask & Answer',
            standard: '개인 프로젝트',
            app: 'web / app(ios only)',
            date: '2023년 8월 18일 → 2023년 8월 28일',
            skill: 'React | React Native | Expo',
            styleSkill: 'styled-components | React Icon | Expo Icon',
            database_api: 'Firebase',
            img: askIMG,
            imgBgColor: '#2b4743',
            url: process.env.REACT_APP_MUMBLE_URL,
            notion: process.env.REACT_APP_MUMBLE_NOTION,
            github: process.env.REACT_APP_MUMBLE_GITHUB,
        },
        { 
            name: 'Movie Buddy',
            standard: '개인 프로젝트',
            app: 'app(ios only)',
            date: '2023년 8월 7일 → 2023년 8월 17일',
            skill: 'React Native | React Query | React Navigation',
            styleSkill: 'styled-components | Expo Icon',
            database_api: 'Firebase | TMDB(Api)',
            img: movieBuddyIMG,
            imgBgColor: '#1e242b',
            url: process.env.REACT_APP_MUMBLE_URL,
            notion: process.env.REACT_APP_MUMBLE_NOTION,
            github: process.env.REACT_APP_MUMBLE_GITHUB,
        },
        { 
            name: 'MUMBLE',
            standard: '팀 프로젝트',
            app: 'web',
            date: '2023년 4월 2일 → 2023년 5월 11일',
            skill: 'React',
            database_api: 'Firebase | Last.fm(Api)',
            img: mumbleIMG,
            imgBgColor: '#f8f7f1',
            url: process.env.REACT_APP_MUMBLE_URL,
            notion: process.env.REACT_APP_MUMBLE_NOTION,
            github: process.env.REACT_APP_MUMBLE_GITHUB,
        },
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    const handleNextClick = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % projectData.length);
    };

    const handlePrevClick = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? projectData.length - 1 : prevIndex - 1
        );
    };

    const handleGithubClick = () => {
        window.open(projectData[currentIndex].github, '_blank');
    };

    const handleNotionClick = () => {
        window.open(projectData[currentIndex].notion, '_blank');
    };

    return (
        <Container>
            <ProjectBox>
                <ProjectImg 
                    img={projectData[currentIndex].img} 
                    color={projectData[currentIndex].imgBgColor}
                />
                <ProjectStandard>{projectData[currentIndex].standard}</ProjectStandard>
                <ProjectTitle>
                    <ProjectName>{projectData[currentIndex].name}</ProjectName>
                    <ProjectApp>{projectData[currentIndex].app}</ProjectApp>
                </ProjectTitle>

                <ProjectDate>{projectData[currentIndex].date}</ProjectDate>

                <ProjectSkillBox>
                    <ProjectSkillText>
                        <SkillIcon />
                        Skill Set 
                    </ProjectSkillText>
                    <ProjectSkill>
                        <SkillDot />
                        {projectData[currentIndex].skill}
                    </ProjectSkill>

                    <ProjectDataBase>
                        <SkillDot />
                        {projectData[currentIndex].database_api}
                    </ProjectDataBase>

                    {projectData[currentIndex].styleSkill && 
                        <ProjectStyleSkill>
                            <SkillDot />
                            {projectData[currentIndex].styleSkill}
                        </ProjectStyleSkill>
                    }
                </ProjectSkillBox>

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

            </ProjectBox>

            <ControlButtons>
                <BeforeBtn onClick={handlePrevClick}>
                    <LeftArrow />
                </BeforeBtn>

                <AfterBtn onClick={handleNextClick}>
                    <RightArrow />
                </AfterBtn>
            </ControlButtons>

            <Dots>
                {projectData.map((_, index) => (
                    <Dot key={index} active={index === currentIndex} onClick={() => setCurrentIndex(index)} />
                ))}
            </Dots>
        </Container>
    );
};

const Container = styled.div`
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
    background: linear-gradient(0deg, #c1ccc8, #243e35 99%);
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const ProjectBox = styled.div`
    background-color: rgba(255, 255, 255, 0.05);
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 500px; /* 원하는 너비 값으로 설정 */
    height: 75%;
    border-radius: 30px;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease;
    position: relative;

    @media (max-width: 620px) {
        width: 400px; 
    }
    @media (max-width: 450px) {
        width: 300px; 
    }
`;

const ProjectImg = styled.div`
    width: 80%;
    height: 28%;
    background-color: ${props => props.color};
    background-image: url(${props => props.img});
    background-size: contain; 
    background-position: center;
    background-repeat: no-repeat;
    margin-top: 10%;
    margin-bottom: 8%;
    border-radius: 100px;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2); 
`;

const ProjectStandard = styled.h1`
    font-size: 1rem;
    font-weight: 100;
    text-align: center;
    color: #EAEAEA;
    margin-bottom: 3%;
`;

const ProjectTitle = styled.div`
    flex-direction: row;
    display: flex;
    align-items: center;

    @media (max-width: 550px) {
        flex-direction: column;
        display: flex;
        align-items: flex-end;
    }
`;

const ProjectName = styled.h1`
    font-size: 1.5rem;
    font-weight: bold;
    text-align: center;
    color: white;
    margin-bottom: 5px;
    margin-right: 10px;

    @media (max-width: 550px) {
        margin-bottom: 0px;
        margin-right: 0px;
    }
`;

const ProjectApp = styled.h1`
    font-size: 0.8rem;
    font-weight: 100;
    text-align: center;
    color: #EAEAEA;
    opacity: 0.7;

    @media (max-width: 550px) {
        margin-bottom: 5px;
    }
`;

const ProjectDate = styled.h1`
    font-size: 0.8rem;
    font-weight: 100;
    text-align: center;
    color: #EAEAEA;

    @media (max-width: 550px) {
        display: none;
    }
`;

const ProjectSkillBox = styled.div`
    width: 60%;
    margin-top: 3%;
`;

const SkillDot = styled(BsDot)`
    width: 20px;
    height: 20px;
    flex-shrink: 0; /* 방지하기 위한 속성 추가 */
`;

const ProjectText = styled.h1`
    color: white;
    font-size: 16px;
    font-weight: 500;
    display: flex;
    align-items: center;
    flex-direction: row;
    margin-bottom: 8px;
`;

const ProjectSkillText = styled(ProjectText)`
    font-size: 18px;
    font-weight: bold;
    align-items: center;
`;

const SkillIcon = styled(GiSkills)`
    margin-right: 5px;
    padding-bottom: 5px;
    color: #243e35;
`;

const ProjectSkill = styled(ProjectText)``;
const ProjectDataBase = styled(ProjectText)``;
const ProjectStyleSkill = styled(ProjectText)``;

const ButtonWrapper = styled.div`
    display: flex;
    gap: 10px;
    position: absolute;
    bottom: 20px;
    right: 20px;
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
    z-index: 10;

    &:hover {
        background-color: rgba(255, 255, 255, 0.2);
    }
`;

const GitHubBtn = styled(RoundButton)``;

const NotionBtn = styled(RoundButton)``;

const GitHubText = styled.h1`
    font-size: 10px;
    font-weight: 100;
`;

const NotionText = styled.h1`
    font-size: 10px;
    font-weight: 100;
`;

const ControlButtons = styled.div`
    display: flex;
    justify-content: space-between; /* 수평 중앙 정렬 */
    align-items: center; /* 수직 중앙 정렬 */
    margin-top: 10px;
    width: 600px; 
    position: absolute;
    transition: transform 0.2s ease;

    @media (max-width: 620px) {
        width: 390px; 
    }
    @media (max-width: 450px) {
        width: 300px; 
    }
`;

const BeforeBtn = styled.button`
    border: none;
    background-color: transparent;
    cursor: pointer;
    justify-content: center;
    align-items: center;
    display: flex;
`;

const AfterBtn = styled.button`
    border: none;
    background-color: transparent;
    cursor: pointer;
    justify-content: center;
    align-items: center;
    display: flex;
`;

const LeftArrow = styled(BiSolidLeftArrow)`
    width: 30px;
    height: 30px;
    color: #243e35;

    &:hover {
        color: #f91300;
    }
`;

const RightArrow = styled(BiSolidRightArrow)`
    width: 30px;
    height: 30px;
    color: #243e35;

    &:hover {
        color: #f91300;
    }
`;

const Dots = styled.div`
    display: flex;
    margin-top: 30px;
`;

const Dot = styled.div`
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background-color: ${({ active }) => (active ? "#243e35" : "#c1ccc8")};
    margin: 0 10px;
    cursor: pointer;
`;


export default Project;