import React, { useState } from "react";
import styled from "styled-components";
import mumbleIMG from '../../src/assets/Mumble-Logo.gif';
import askIMG from '../../src/assets/Ask-Logo.gif';
import movieBuddyIMG from '../../src/assets/movie-buddy.png';
import { RiGithubFill, RiNotionFill } from 'react-icons/ri';
import { BiSolidLeftArrow, BiSolidRightArrow } from 'react-icons/bi';
import { BsDot } from 'react-icons/bs';
import { GiSkills } from 'react-icons/gi';
import { FaTag } from 'react-icons/fa';

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
            info: '이 프로젝트의 주요 목적은 사용자들에게 익명성을 제공하면서 자유롭게 질문하고 응답할 수 있는 플랫폼을 제공하는 것입니다. 사용자들은 개인 정보 노출 없이 질문, 고민, 의견 등을 공유하고 다른 사용자들로부터 익명으로 질문 할 수 있습니다. 이를 통해 솔직하고 오픈한 의사소통이 가능해집니다.',
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
            info: '사용자가 시청한 영화에 대한 개인적인 평점과 리뷰를 기록하고 관리할 수 있는 플랫폼입니다. 사용자들은 자신만의 영화에 대한 생각을 일기처럼 작성할 수 있으며, 달마다 영화 관람의 목표치를 설정할 수 있는 공간을 제공합니다. 각 영화에 대한 자기 자신만의 특별하고 다양한 표현을 기록, 그에 대한 추억을 남길 수 있게 하고자 했습니다. ',
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
            info: '현대사회에서 사람들은 많은 감정들을 느끼며 하루를 보냅니다. 많은 감정들 중 힘들거나 말하기 어려웠던 감정을 털어낼 수 있는 일기장을 만들고, 쓰레기통이라는 콘셉트를 부여하여 부정적인 감정을 버리고 해소할 수 있는 애플리케이션을 만들고자 했습니다.',
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

                <ProjectBodyBox>
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
                    <Empty />
                    <ProjectInfo>
                        <InfoHeader>
                            <InfoIcon /> 
                            <InfoTitle> Info </InfoTitle>
                        </InfoHeader>
                        <InfoText>  {projectData[currentIndex].info} </InfoText>
                    </ProjectInfo>
                </ProjectBodyBox>

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
        height: 80%;
    }
    @media (max-width: 450px) {
        width: 300px; 
        height: 90%;
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
    margin-bottom: 6%;
    border-radius: 100px;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2); 
`;

const ProjectStandard = styled.h1`
    font-size: 0.8rem;
    font-weight: 100;
    text-align: center;
    color: #EAEAEA;
    margin-bottom: 1.5%;
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
        /* margin-bottom: 5px; */
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

const ProjectBodyBox = styled.div`
    flex-direction: row;
    width: 80%;
    height: 30%;
    display: flex;
    justify-content: space-between;
    margin-top: 5%;
    transition: background-color 0.3s;

    @media (max-width: 550px) {
        flex-direction: column;
        align-items: center;
        justify-content: flex-start;
        overflow: scroll;
        height: 40%;
        padding: 5px 0px;

        /* 스크롤바 숨기기 */
        -ms-overflow-style: none; /* 인터넷 익스플로러 */
        scrollbar-width: none; /* 파이어폭스 */
        &::-webkit-scrollbar {
            display: none;
        }
    }
`;

const Empty = styled.div`
    width: 0.1%;
    background-color: #243e35;
    margin-left: 10px;
    margin-right: 10px;

    @media (max-width: 550px) {
        display: none;
    }
`;

const ProjectInfo = styled.div`
    margin: 1%;
    width: 48.5%;  
    transition: background-color 0.3s;

    @media (max-width: 550px) {
        width: 90%;
        margin-top: 3%;
    }
`;

const InfoHeader = styled.div`
    color: white;
    font-size: 13.5px;
    font-weight: 300;
    display: flex;
    align-items: center;
    flex-direction: row;
    margin-bottom: 2%;
`;

const InfoIcon = styled(FaTag)`
    margin-right: 5px;
    padding-bottom: 5px;
    color: #243e35;

    @media (max-width: 550px) {
        width: 13px;
        height: 13px;
        padding-bottom: 0px;
    }
`;

const InfoTitle = styled.h1`
    font-size: 18px;
    font-weight: bold;
    align-items: center;

    @media (max-width: 550px) {
        font-size: 16px;
    }
`;

const InfoText = styled.p`
    color: white;
    font-size: 12px;
    line-height: 16px;
    font-weight: 100;
    display: flex;
    align-items: center;
    flex-direction: row;
    margin-bottom: 2%;
`;

const ProjectSkillBox = styled.div`
    /* background-color: wheat; */
    margin: 1%;
    width: 48.5%;
    transition: background-color 0.3s;

    @media (max-width: 550px) {
        width: 90%;
    }
`;

const SkillDot = styled(BsDot)`
    width: 20px;
    height: 20px;
    flex-shrink: 0; /* 방지하기 위한 속성 추가 */

    @media (max-width: 550px) {
        width: 15px;
        height: 15px;
    }
`;

const ProjectText = styled.h1`
    color: white;
    font-size: 13.5px;
    font-weight: 300;
    display: flex;
    align-items: center;
    flex-direction: row;
    margin-bottom: 2%;
`;

const ProjectSkillText = styled(ProjectText)`
    font-size: 18px;
    font-weight: bold;
    align-items: center;

    @media (max-width: 550px) {
        font-size: 16px;
    }
`;

const SkillIcon = styled(GiSkills)`
    margin-right: 5px;
    padding-bottom: 5px;
    color: #243e35;

    @media (max-width: 550px) {
        width: 15px;
        height: 15px;
        padding-bottom: 0px;
    }
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