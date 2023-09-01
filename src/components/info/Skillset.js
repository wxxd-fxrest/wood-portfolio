import React from "react";
import { BiLogoReact, BiLogoJavascript, BiLogoFirebase } from 'react-icons/bi';
import { TiHtml5 } from 'react-icons/ti';
import { TbBrandCss3 } from 'react-icons/tb';
import { FaGithub } from 'react-icons/fa';
import { SiStyledcomponents } from 'react-icons/si';
import { GiSkills } from 'react-icons/gi';
import styled from "styled-components";

const skills = [
    { icon: <BiLogoReact size={40} />, name: 'React' },
    { icon: <BiLogoReact size={35} color='#c1ccc8' style={{ backgroundColor: '#2d4f43', borderRadius: '50px', margin: '3px' }} />, name: 'React Native' },
    { icon: <BiLogoJavascript size={40} />, name: 'JavaScript' },
    { icon: <TiHtml5 size={40} />, name: 'HTML5' },
    { icon: <TbBrandCss3 size={40} />, name: 'CSS3' },
    { icon: <SiStyledcomponents size={40} />, name: 'Styled-Components' },
    { icon: <FaGithub size={40} />, name: 'Github' },
    { icon: <BiLogoFirebase size={40} />, name: 'Firebase' },
];

const Skillset = () => {
    return (
        <SkillContainer>
            <SkillTitle> <GiSkills/> Skill Set. </SkillTitle>
            <SkillTree>
                {skills.map((skill, index) => (
                    <SkillBox>
                        <SkillIcon key={index}>
                            {skill.icon}
                        </SkillIcon>
                        <SkillName>{skill.name}</SkillName>
                    </SkillBox>
                ))}
            </SkillTree>
        </SkillContainer>
    )
};

const SkillContainer = styled.div`
    margin-top: 30px;
    display: flex;
    flex-direction: column;

    @media (max-width: 1025px) {
        margin-top: 15px;
    }
`;

const SkillTitle = styled.h1`
    font-size: 25px;
    font-weight: bold;
    color: #2d4f43;
    margin: 10px 0px;
    align-items: center;

    @media (max-width: 1135px) {
        margin: 5px 0px;
    }
    @media (max-width: 1025px) {
        margin: 3px 0px;
    }
`;

const SkillTree = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
    gap: 20px;
    border: solid 1px #2d4f43;
    border-radius: 10px;
    padding: 30px 50px;
    margin-bottom: 20px;
    justify-items: center;
    flex-direction: column;
    align-items: center;

    @media (max-width: 1135px) {
        /* padding: 20px 10px; */
    }
    @media (max-width: 1110px) {
        padding: 20px 20px;
    }
    @media (max-width: 1025px) {
        padding: 30px 20px;
    }
    @media (max-width: 768px) {
        padding: 30px 10px;
    }
`;

const SkillBox = styled.div`
    flex-direction: column;
    justify-content: center;
    align-items: center;
    display: flex;
`;

const SkillIcon = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: #2d4f43;
    background-color: rgba(255, 255, 255, 0.3);
    border-radius: 50px;
    width: 60px; 
    height: 60px; 
    cursor: pointer;
    transition: transform 0.2s ease;

    &:hover {
        color: white;
        background-color: rgba(249, 19, 0, 0.6);
        transform: scale(1.1); /* 호버 시 아이콘 크기 확대 */
    }

    @media (max-width: 768px) {
        width: 60px; 
        height: 60px; 
    }
`;

const SkillName = styled.h1`
    font-size: 12px;
    font-weight: bold;
    color: #2d4f43;
    margin-top: 5px;
    white-space: nowrap; /* 긴 텍스트가 줄 바꿈되지 않도록 설정 */
    overflow: hidden;
    text-overflow: ellipsis; /* 넘치는 텍스트는 ...으로 표시 */
`;



export default Skillset;