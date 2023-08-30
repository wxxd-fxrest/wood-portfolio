import React, { useState } from "react";
import styled from "styled-components";
import mumbleIMG from '../../src/assets/mumble-mumble.png';
import movieBuddyIMG from '../../src/assets/movie-buddy.png';
import askIMG from '../../src/assets/Ask logo.png';
import { RiGithubFill, RiNotionFill } from 'react-icons/ri';
import { BiSolidLeftArrow, BiSolidRightArrow } from 'react-icons/bi';

const Project = () => {
    const projectData = [
        { 
            name: 'mumble-mumble',
            img: mumbleIMG,
            url: process.env.REACT_APP_MUMBLE_URL,
            notion: process.env.REACT_APP_MUMBLE_NOTION,
            github: process.env.REACT_APP_MUMBLE_GITHU,
        },
        { 
            name: 'movie-buddy',
            img: movieBuddyIMG,
            url: process.env.REACT_APP_MUMBLE_URL,
            notion: process.env.REACT_APP_MUMBLE_NOTION,
            github: process.env.REACT_APP_MUMBLE_GITHU,
        },
        { 
            name: 'Project-3',
            img: askIMG,
            url: process.env.REACT_APP_MUMBLE_URL,
            notion: process.env.REACT_APP_MUMBLE_NOTION,
            github: process.env.REACT_APP_MUMBLE_GITHU,
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
                <ProjectImg img={projectData[currentIndex].img} />
                <ProjectName>{projectData[currentIndex].name}</ProjectName>

                <ProjectButton>
                    <ProjectGithub onClick={handleGithubClick}>
                        <RiGithubFill />
                    </ProjectGithub>
                    <ProjectNotion onClick={handleNotionClick}>
                        <RiNotionFill />
                    </ProjectNotion>
                </ProjectButton>
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
    background: linear-gradient(5deg, #c1ccc8, #3E606F);
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

    @media (max-width: 620px) {
        width: 400px; 
    }
    @media (max-width: 450px) {
        width: 300px; 
    }
`;

const ProjectImg = styled.div`
    background-color: rgba(178, 235, 244, 0.7);
    width: 80%;
    height: 28%;
    background-image: url(${props => props.img});
    background-size: contain; /* 이미지가 가로 및 세로 중 하나의 방향으로 가득 차도록 설정 */
    background-position: center;
    background-repeat: no-repeat;
    margin-top: 10%;
    margin-bottom: 15%;
    border-radius: 100px;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2); /* 그림자 추가 */
`;

const ProjectName = styled.h1`
    font-size: 1rem;
    text-align: center;
`;

const ProjectButton = styled.div``;

const ProjectGithub = styled.div``;

const ProjectNotion = styled.div``;

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
    background-color: ${({ active }) => (active ? "#243e35" : "#c1ccc8")};
    border-radius: 50%;
    margin: 0 10px;
    cursor: pointer;
`;


export default Project;