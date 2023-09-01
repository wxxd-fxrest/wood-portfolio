import React from "react";
import { BiLogoReact, BiLogoJavascript, BiLogoFirebase } from 'react-icons/bi';
import { TiHtml5 } from 'react-icons/ti';
import { TbBrandCss3 } from 'react-icons/tb';
import { FaGithub } from 'react-icons/fa';
import { SiStyledcomponents } from 'react-icons/si';
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
            <SkillTitle> Skill Set. </SkillTitle>
            <SkillTree>
                {skills.map((skill, index) => (
                    <SkillIcon key={index}>
                        {skill.icon}
                        <SkillName>{skill.name}</SkillName>
                    </SkillIcon>
                ))}
            </SkillTree>
        </SkillContainer>
    )
};

const SkillContainer = styled.div`
    margin-top: 30px;
    display: flex;
    flex-direction: column;
`;

const SkillTitle = styled.h1`
    font-size: 25px;
    font-weight: bold;
    color: #2d4f43;
    margin: 10px 0px;

    @media (max-width: 1135px) {
        margin: 5px 0px;
    }
`;

const SkillTree = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
    gap: 20px;
    border: solid 1px #2d4f43;
    border-radius: 10px;
    padding: 10px 50px;
    margin-bottom: 20px;

    @media (max-width: 1135px) {
        padding: 20px 10px;
    }

    @media (max-width: 768px) {
        padding: 10px;
    }
`;

const SkillIcon = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: #2d4f43;
`;

const SkillName = styled.h1`
    font-size: 14px;
    font-weight: bold;
    color: #2d4f43;
    margin-top: 5px;
`;


export default Skillset;