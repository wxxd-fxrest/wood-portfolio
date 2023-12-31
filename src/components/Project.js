import React, { useState } from "react";
import styled, { keyframes } from "styled-components";
import mumbleIMG from '../../src/assets/Mumble-Logo.gif';
import askIMG from '../../src/assets/Ask-Logo.gif';
import movieBuddyIMG from '../../src/assets/movie-buddy.png';
import PingIMG from '../../src/assets/PingLogo.gif';
import { RiGithubFill, RiNotionFill } from 'react-icons/ri';
import { BiSolidLeftArrow, BiSolidRightArrow } from 'react-icons/bi';
import { BsDot } from 'react-icons/bs';
import { GiSkills } from 'react-icons/gi';
import { FaTag } from 'react-icons/fa';
import { AiOutlineLink } from 'react-icons/ai';

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
            info: '이 프로젝트는 익명으로 자유롭게 질문, 응답이 가능하도록 했으며 사용자들은 개인 정보에 대한 노출 없이 질문, 고민, 의견을 공유할 수 있습니다. 이를 통해 솔직하고 개방적인 의사소통이 가능하도록 했습니다.',
            url: process.env.REACT_APP_ASK_URL,
            notion: process.env.REACT_APP_ASK_NOTION,
            github: process.env.REACT_APP_ASK_GITHUB,
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
            info: '이 프로젝트는 사용자가 시청한 영화에 대한 평점, 리뷰를 기록하고 관리하는 공간을 제공합니다. 자신만의 영화에 대한 생각을 기록하며 영화 관람의 목표치를 설정할 수 있으며, 각 영화에 대한 추억을 보관하는 공간입니다.',
            notion: process.env.REACT_APP_MOVIE_NOTION,
            github: process.env.REACT_APP_MOVIE_GITHUB,
        },
        { 
            name: 'MUMBLE',
            standard: '팀 프로젝트',
            app: 'web',
            date: '2023년 4월 2일 → 2023년 5월 11일',
            skill: 'React, React Router Dom',
            database_api: 'Firebase | Last.fm(Api)',
            img: mumbleIMG,
            imgBgColor: '#f8f7f1',
            info: '현대사회에서 여러 감정들을 느끼며 하루를 보내는 사람들을 위해, 어려운 감정을 털어낼 수 있는 공간입니다. 쓰레기통 컨셉을 활용하여 부정적인 감정을 조금이나마 해소할 수 있기를 바라며 해당 프로젝트를 구현했습니다.',
            url: process.env.REACT_APP_MUMBLE_URL,
            notion: process.env.REACT_APP_MUMBLE_NOTION,
            github: process.env.REACT_APP_MUMBLE_GITHUB,
        },
        { 
            name: 'Ping Travel',
            standard: '개인 프로젝트',
            app: 'web',
            date: '2023년 7월 2일 → 2023년 7월 26일',
            skill: 'React, React Router Dom',
            database_api: 'Firebase | Kakao Map',
            img: PingIMG,
            imgBgColor: '#ff8f4c',
            info: '이 웹사이트는 여행 계획 및 기록 관리를 지원하며, 지도를 활용한 목적지 선택과 일정 작성이 가능합니다. 또한, 친구와 함께 계획을 협력하고 완료된 여행을 기록으로 저장하여 공유합니다.',
            url: process.env.REACT_APP_PING_URL,
            notion: process.env.REACT_APP_PING_NOTION,
            github: process.env.REACT_APP_PING_GITHUB,
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

    const handleSiteClick = () => {
        if(projectData[currentIndex].url) {
            window.open(projectData[currentIndex].url, '_blank');
        } else if(!projectData[currentIndex].url) {
            alert('해당 프로젝트는 App으로 제작되어 URL링크가 제공되지 않습니다.')
        }
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
                    onClick={handleSiteClick}
                />
                {projectData[currentIndex].url && <>
                    <LinkIcon />
                    <LinkText> 로고 클릭시 웹사이트로 이동합니다 </LinkText>
                </>}
                <ProjectStandard><span>{projectData[currentIndex].standard}</span></ProjectStandard>
                <ProjectTitle>
                    <ProjectName><span>{projectData[currentIndex].name}</span></ProjectName>
                    <ProjectApp><span>{projectData[currentIndex].app}</span></ProjectApp>
                </ProjectTitle>

                <ProjectDate><span>{projectData[currentIndex].date}</span></ProjectDate>

                <ProjectBodyBox>
                    <ProjectSkillBox>
                        <SkillInfoHeader>
                            <SkillIcon />
                            Skill Set 
                        </SkillInfoHeader>
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
                        <SkillInfoHeader>
                            <InfoIcon /> 
                            <InfoTitle> Introduction </InfoTitle>
                        </SkillInfoHeader>
                        <InfoText>  {projectData[currentIndex].info} </InfoText>
                    </ProjectInfo>
                </ProjectBodyBox>

                <ButtonWrapper>
                    <GitHubBtn onClick={handleGithubClick}>
                        <RiGithubFill />
                        <GitHubText>github</GitHubText>
                    </GitHubBtn>
                    <NotionBtn onClick={handleNotionClick}>
                        <RiNotionFill />
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
    width: 450px; /* 원하는 너비 값으로 설정 */
    height: 75%;
    border-radius: 30px;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease;
    position: relative;

    @media (min-height: 800px) {
        width: 500px;
        height: 63%;
    }
    @media (max-width: 620px) {
        width: 400px; 
    }
    @media (max-width: 450px) {
        width: 340px; 
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
    position: relative;
    cursor: pointer;
    transition: transform 0.3s ease;
    
    @media (max-width: 620px) {
        margin-top: 15%;
        height: 25%;
    }
    @media (max-width: 450px) {
        margin-top: 13%;
        height: 20%;
    }
`;

const LinkIcon = styled(AiOutlineLink)`
    position: absolute;
    top: 15px;
    right: 15px;
    color: rgba(255, 255, 255, 0.7);
    font-size: 20px;
`;

const slideInAnimation = keyframes`
    from {
        opacity: 0;
        transform: translateX(100%);
    }
    to {
        opacity: 1;
        transform: translateX(0);
    }
`;

const LinkText = styled.h1`
    position: absolute;
    top: 20px;
    right: 40px;
    color: white;
    font-size: 11px;
    font-weight: 100;
    animation: ${slideInAnimation} 1s forwards; 
`;

const ProjectStandard = styled.h1`
    font-size: 0.8rem;
    font-weight: 100;
    text-align: center;
    color: #EAEAEA;
    margin-bottom: 2%;

    @media (max-width: 550px) {
        margin-bottom: 1%;
    }
`;

const ProjectTitle = styled.div`
    flex-direction: row;
    display: flex;
    align-items: center;
    margin-top: 1%;

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
`;

const ProjectDate = styled.h1`
    font-size: 0.8rem;
    font-weight: 100;
    text-align: center;
    color: #EAEAEA;
    margin-bottom: 1%;

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
    margin-top: 3.5%;
    transition: background-color 0.3s;

    @media (min-height: 800px) {
        width: 500px;
        height: 61%;
    }
    @media (max-width: 550px) {
        flex-direction: column;
        align-items: center;
        justify-content: flex-start;
        overflow: scroll;
        width: 75%;
        height: 35%;
        margin-top: 3%;

        /* 스크롤바 숨기기 */
        -ms-overflow-style: none; /* 인터넷 익스플로러 */
        scrollbar-width: none; /* 파이어폭스 */
        &::-webkit-scrollbar {
            display: none;
        }
    }
    @media (max-width: 450px) {
        width: 73%;
        height: 42%;
    }
`;

const Empty = styled.div`
    width: 0.1%;
    background-color: white;
    margin-left: 10px;
    margin-right: 10px;
    margin: 10px;

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

const InfoTitle = styled.div`
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
    line-height: 18px;
    font-weight: 100;
    display: flex;
    align-items: center;
    flex-direction: row;
    margin-bottom: 2%;
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

const ProjectSkillBox = styled.div`
    /* background-color: wheat; */
    margin: 1%;
    width: 48.5%;
    transition: background-color 0.3s;

    @media (max-width: 550px) {
        width: 90%;
    }
`;

const ProjectText = styled.div`
    color: white;
    font-size: 13.5px;
    font-weight: 300;
    display: flex;
    align-items: center;
    flex-direction: row;
    margin-bottom: 2%;
`;

const SkillInfoHeader = styled(ProjectText)`
    font-size: 18px;
    font-weight: bold;
    align-items: center;
    margin: 3% 0px;

    @media (max-width: 550px) {
        font-size: 16px;
        margin: 2% 0px;
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
    padding: 8px 15px;
    z-index: 10;
    transition: background-color 0.3s;
    transition: transform 0.3s ease;

    &:hover {
        background-color: rgba(255, 255, 255, 0.2);
    }

    @media (max-width: 450px) {
        padding: 5px;
        display: flex;
    }
`;

const GitHubBtn = styled(RoundButton)`
    font-size: 30px;
`;

const NotionBtn = styled(RoundButton)`
    font-size: 30px;
`;

const GitHubText = styled.h1`
    font-size: 10px;
    font-weight: 100;
    transition: transform 0.3s ease;

    @media (max-width: 450px) {
        display: none;
    }
`;

const NotionText = styled.h1`
    font-size: 10px;
    font-weight: 100;
    transition: transform 0.3s ease;

    @media (max-width: 450px) {
        display: none;
    }
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
        width: 340px; 
    }
`;

const BeforeBtn = styled.button`
    border: none;
    background-color: transparent;
    cursor: pointer;
    justify-content: center;
    align-items: center;
    display: flex;
    border-radius: 50%;
    padding: 3px 3px;
`;

const AfterBtn = styled.button`
    border: none;
    background-color: transparent;
    cursor: pointer;
    justify-content: center;
    align-items: center;
    display: flex;
    border-radius: 50%;
    padding: 3px 3px;
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
    margin: 0px 10px;
    cursor: pointer;
`;


export default Project;