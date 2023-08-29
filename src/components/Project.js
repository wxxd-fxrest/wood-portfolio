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
            url: 'https://wxxd-fxrest.github.io/wood-forest-MumbleMumble/auth',
            notion: 'https://puffy-poinsettia-b48.notion.site/wood-forest-MumbleTrash-8b4b2adfd8bb477fa8bffc9ab37ba887', 
            github: 'https://github.com/wxxd-fxrest/wood-forest-MumbleMumble',
        },
        { 
            name: 'movie-buddy',
            img: movieBuddyIMG,
            url: 'https://wxxd-fxrest.github.io/wood-forest-MumbleMumble/auth',
            notion: 'https://puffy-poinsettia-b48.notion.site/wood-forest-MumbleTrash-8b4b2adfd8bb477fa8bffc9ab37ba887', 
            github: 'https://github.com/wxxd-fxrest/wood-forest-MumbleMumble',
        },
        { 
            name: 'Project-3',
            img: askIMG,
            url: 'https://wxxd-fxrest.github.io/wood-forest-MumbleMumble/auth',
            notion: 'https://puffy-poinsettia-b48.notion.site/wood-forest-MumbleTrash-8b4b2adfd8bb477fa8bffc9ab37ba887', 
            github: 'https://github.com/wxxd-fxrest/wood-forest-MumbleMumble',
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
        <Container style={{ backgroundColor: 'white' }}>
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
                    <BiSolidLeftArrow size={30}/>
                </BeforeBtn>

                <AfterBtn onClick={handleNextClick}>
                    <BiSolidRightArrow size={30}/>
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
    width: 100vw; /* 뷰포트 너비 100%로 설정 */
    height: 100vh; /* 뷰포트 높이 100%로 설정 */
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const ProjectBox = styled.div`
    background-color: rgba(41, 50, 65, 0.8);
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 80%;
    height: 80%;
    border-radius: 20px;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1); /* 그림자 추가 */
    transition: transform 0.2s ease; /* 호버 시 약간의 애니메이션 효과 추가 */
`;

const ProjectImg = styled.div`
    background-color: rgba(255, 255, 255, 0.1);
    width: 60%;
    height: 40%;
    background-image: url(${props => props.img});
    background-size: contain; /* 이미지가 가로 및 세로 중 하나의 방향으로 가득 차도록 설정 */
    background-position: center;
    background-repeat: no-repeat;
    margin-bottom: 10px;
    margin-top: 5%;
    margin-bottom: 5%;
    border-radius: 20px;
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
    width: 70%;
    position: absolute;
`;

const BeforeBtn = styled.button`
    border: none;
    background-color: transparent;
    cursor: pointer;
`;

const AfterBtn = styled.button`
    border: none;
    background-color: transparent;
    cursor: pointer;
`;

const Dots = styled.div`
    display: flex;
    margin-top: 30px;
`;

const Dot = styled.div`
    width: 10px;
    height: 10px;
    background-color: ${({ active }) => (active ? "#000" : "#ccc")};
    border-radius: 50%;
    margin: 0 10px;
    cursor: pointer;
`;


export default Project;