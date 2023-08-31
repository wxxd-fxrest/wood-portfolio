import React from "react";
import styled from "styled-components";
import Profile from "../../src/assets/profile.png";
import { FiPhoneIncoming } from 'react-icons/fi';
import { MdAlternateEmail } from 'react-icons/md';

import { BiLogoReact, BiLogoJavascript, BiLogoFirebase } from 'react-icons/bi';
import { TiHtml5 } from 'react-icons/ti';
import { TbBrandCss3 } from 'react-icons/tb';
import { FaGithub } from 'react-icons/fa';
import { SiStyledcomponents } from 'react-icons/si';


const Intro = () => {
    return(
        <Container>
            <InfoLeftBox>

                <ProfileImgContainer>
                    <ProfileImgContainer2>
                        <ProfileImgContainer3>
                            <ProfileImg src={Profile} />
                        </ProfileImgContainer3>
                    </ProfileImgContainer2>
                </ProfileImgContainer>

                <ProfileNameContainer>
                    <ProfileNameText>최우드</ProfileNameText>
                    <ProfileNameMini>wxxd-fxrest</ProfileNameMini>
                </ProfileNameContainer>

                <InfoWrapper>
                    <InfoBox>
                        <InfoStick />
                        <InfoTitle> 생일 </InfoTitle>
                        <Empty />
                        <InfoText> 1999년 9월 12일 </InfoText>
                    </InfoBox>
                    <InfoBox>
                        <InfoStick />
                        <InfoTitle> 주소 </InfoTitle>
                        <Empty />
                        <InfoText> 서울 관악구 </InfoText>
                    </InfoBox>
                </InfoWrapper>

                <ProfileContactContainer>
                    <ContactTitle> Contact. </ContactTitle>

                    <ContactComponent>
                        <IconWrapper>
                            <PhoneIcon />
                        </IconWrapper>
                        <Empty />
                        <ContactBox>
                            <ContactText> Phone </ContactText>
                            <Contact> 010-0000-0000 </Contact>
                        </ContactBox>
                    </ContactComponent>
                    
                    <ContactComponent>
                        <IconWrapper>
                            <EmailIcon />
                        </IconWrapper>
                        <Empty />
                        <ContactBox>
                            <ContactText> Email </ContactText>
                            <Contact> fxrest704@gmail.com </Contact>
                        </ContactBox>
                    </ContactComponent>
                </ProfileContactContainer>

            </InfoLeftBox>

            <InfoEmpty />

            <InfoRightBox>
                <AboutMeContainer>
                    <AboutMeTitle> About Me. </AboutMeTitle>
                    <AboutMeText>
                        √ 사용자 경험을 중요하게 생각하여 UX와 기획에 관심이 많습니다.
                    </AboutMeText>
                    <AboutMeText>
                        √ 프로젝트에서 협업을 가장 중요하게 생각하여, 꾸준한 소통을 통해 커뮤니케이션 능력을 기르고자 노력하며 맡은 업무는 끝까지 마무리합니다.
                    </AboutMeText>
                    <AboutMeText>
                        √ 재사용 할 수 있는 코드를 구현하고자 노력하며, 이를 위해 프로젝트 진행 시 코드 아카이빙과 기록하는 습관을 들이려 노력합니다.
                    </AboutMeText>
                    <AboutMeText>
                        √ 주로 파이어 베이스 및 리액트 라이브러리를 사용하여 반응형 웹사이트를 구현할 수 있으며, 빠르게 변화하는 언어에 꾸준히 관심을 가지고 자바, 스프링 등의 백엔드 언어는 물론 리액트 네이티브를 학습하여 백엔드 및 크로스 플랫폼 영역까지 확장하고자 합니다.
                    </AboutMeText>
                </AboutMeContainer>

                <SkillContainer>
                    <SkillTitle> Skill Set. </SkillTitle>
                    <SkillTree>
                        <SkillIcon>
                            <BiLogoReact size={40} />
                            <SkillName> React </SkillName>
                        </SkillIcon>
                        <SkillIcon>
                            <BiLogoReact size={35} color='#c1ccc8' style={{backgroundColor: '#2d4f43', borderRadius: '50px', margin: '3px'}}/>
                            <SkillName> React Native </SkillName>
                        </SkillIcon>
                        <SkillIcon>
                            <BiLogoJavascript size={40} />
                            <SkillName> JavaScript </SkillName>
                        </SkillIcon>

                        <SkillIcon>
                            <TiHtml5 size={40} />
                            <SkillName> HTML5 </SkillName>
                        </SkillIcon>
                        <SkillIcon>
                            <TbBrandCss3 size={40} />
                            <SkillName> CSS3 </SkillName>
                        </SkillIcon>
                        <SkillIcon>
                            <SiStyledcomponents size={40} />
                            <SkillName> Styled-Components </SkillName>
                        </SkillIcon>
                    </SkillTree>

                    <SkillTree>
                        <SkillIcon>
                            <FaGithub size={40} />
                            <SkillName> Github </SkillName>
                        </SkillIcon>
                        <SkillIcon>
                            <BiLogoFirebase size={40} />
                            <SkillName> Firebase </SkillName>
                        </SkillIcon>

                        <SkillIcon style={{opacity: 0}}>
                            <BiLogoReact size={40} />
                            <SkillName> React </SkillName>
                        </SkillIcon>
                        <SkillIcon style={{opacity: 0}}>
                            <BiLogoReact size={40} />
                            <SkillName> React </SkillName>
                        </SkillIcon>
                        <SkillIcon style={{opacity: 0}}>
                            <BiLogoReact size={40} />
                            <SkillName> React </SkillName>
                        </SkillIcon>
                        <SkillIcon style={{opacity: 0}}>
                            <BiLogoReact size={40} />
                            <SkillName> React </SkillName>
                        </SkillIcon>
                    </SkillTree>
                </SkillContainer>
            </InfoRightBox>
        </Container>
    )
};

const Container = styled.div`
    /* background-color: aliceblue; */
    height: 100%;
    width: 100%;
    display: flex;
    transition: background-color 0.3s;
    padding: 0px 70px;

    @media (max-width: 550px) {
        justify-content: center;
    }
`;

const InfoLeftBox = styled.div`
    margin: 50px 0px;
    padding: 30px;
    align-items: center;
    display: flex;
    flex-direction: column;
    transition: background-color 0.3s;
    /* background-color: green; */

    @media (max-width: 550px) {
        margin-left: 20px 0px;
    }
`;

const ProfileImgContainer = styled.div`
    background-color: #54786b;
    width: 180px;
    height: 235px;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    position: relative;
    margin-top: 35px;
`;

const ProfileImgContainer2 = styled.div`
    background-color: #2d4f43;
    width: 180px;
    height: 235px;
    display: inline-flex;
    justify-content: center;
    align-items: flex-end;
    position: absolute;
    top: -6%;
    left: -6%;
`;

const ProfileImgContainer3 = styled.div`
    width: 180px;
    height: 235px;
    display: inline-flex;
    justify-content: center;
    align-items: flex-end;
    position: absolute;
    top: -6%;
    left: -6%;
`;

const ProfileImg = styled.img`
    width: 160px;
    height: 160px;
    margin-bottom: 10px;
    position: absolute;
    top: 25%;
    left: 12%;
`;

const ProfileNameContainer = styled.div`
    /* background-color: wheat; */
    margin-top: 15px;
    justify-content: center;
    align-items: flex-end;
    display: flex;
    flex-direction: column;
`;

const ProfileNameText = styled.h1`
    font-size: 35px;
    font-weight: bold;
    color: #2d4f43;
    letter-spacing: 15px;
    padding-left: 15px;
`;

const ProfileNameMini = styled.h1`
    font-size: 15px;
    color: #2d4f43;
    font-weight: 200;
    margin-right: 15px;
`;

const InfoWrapper = styled.div`
    /* background-color: yellowgreen; */
    display: flex;
    flex-direction: column;
    width: 100%;
    margin: 35px 0px;
`;

const InfoBox = styled.div`
    display: flex;
    flex-direction: row;
    margin-top: 10px;
    justify-content: flex-start;
`;

const InfoStick = styled.div`
    display: flex;
    height: 90%;
    background-color: #2d4f43;
    width: 3px;
    margin-right: 5px;
`;

const InfoTitle = styled.h1`
    color:  #2d4f43;
    font-size: 15px;
`;

const InfoText = styled.h1`
    color:  #2d4f43;
    font-size: 15px;
    font-weight: 800;
`;

const ProfileContactContainer = styled.div`
    /* background-color: yellowgreen; */
    display: flex;
    width: 100%;
    flex-direction: column;
`;

const ContactTitle = styled.h1`
    font-size: 25px;
    font-weight: bold;
    color: #2d4f43;
    margin: 10px 0px;
`;

const ContactComponent = styled.div`
    margin-bottom: 10px;
    flex-direction: row;
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
`;

const ContactBox = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
`;

const PhoneIcon = styled(FiPhoneIncoming)`
    font-size: 18px;
    color: white;
`;

const EmailIcon = styled(MdAlternateEmail)`
    font-size: 18px;
    color: white;
`;

const IconWrapper = styled.div`
    background-color: #2d4f43;
    width: 25px;
    height: 25px;
    justify-content: center;
    align-items: center;
    display: flex;
    border-radius: 50px;
    padding: 5px;
`;

const Empty = styled.div`
    width: 10px;
`;

const ContactText = styled.h1`
    font-size: 14px;
    font-weight: 400;
    color: #2d4f43;
    background-color: rgba(36, 62, 53, 0.3);
    padding: 3px 5px;
`;

const Contact = styled.h1`
    font-size: 16px;
    font-weight: 800;
    color: #2d4f43;
    width: max-content;
    padding: 5px 0px;
`;

const InfoEmpty = styled.div`
    width: 5%;
    @media (max-width: 550px) {
        display: none;
    }
`;

const InfoRightBox = styled.div`
    /* background-color: yellowgreen; */
    margin: 50px 0px;
    align-items: flex-start;
    display: flex;
    flex-direction: column;
    transition: background-color 0.3s;
    width: 80%;

    @media (max-width: 550px) {
        display: none;
    }
`;

const AboutMeContainer = styled.div`
    border: solid 1px #2d4f43;
    padding: 20px 30px;
    position: relative;
    margin-top: 30px;
    border-radius: 10px;
`;

const AboutMeTitle = styled.h1`
    font-size: 25px;
    font-weight: bold;
    color: #2d4f43;
    margin: 20px 0px;
    position: absolute;
    background-color: #c1ccc8;
    top: -35px;
    padding: 0px 10px;
`;

const AboutMeText = styled.h1`
    font-size: 15px;
    font-weight: 300;
    margin: 15px 0px;
    color: #2d4f43;
`;

const SkillContainer = styled.div`
    /* background-color: yellowgreen; */
    margin-top: 30px;
    width: 100%;
`;

const SkillTitle = styled.h1`
    font-size: 25px;
    font-weight: bold;
    color: #2d4f43;
    margin: 10px 0px;
`;

const SkillTree = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    border: solid 1px #2d4f43;
    border-radius: 10px;
    padding: 10px 50px;
    margin-bottom: 20px;
`;

const SkillIcon = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    margin: 10px 10px;
    color: #2d4f43;
`;

const SkillName = styled.h1`
    font-size: 14px;
    font-weight: bold;
    color: #2d4f43;
`;

export default Intro;