import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Aboutme from "./info/Aboutme";
import Skillset from "./info/Skillset";
import ProfileImg from "./info/ProfileImg";
import InfoContact from "./info/InfoContact";
import { BiSolidLeftArrow, BiSolidRightArrow } from 'react-icons/bi';

const Intro = () => {
    const [isMediumScreen, setIsMediumScreen] = useState(window.innerWidth >= 996);
    const [currentCard, setCurrentCard] = useState(1); // 1, 2, 3 중 하나의 값을 가짐

    const toggleCard = () => {
        setCurrentCard(prevCard => (prevCard % 3) + 1);
    };

    useEffect(() => {
        const handleResize = () => {
            setIsMediumScreen(window.innerWidth >= 996);
        };

        window.addEventListener("resize", handleResize);
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    return (
        <Container>
            {isMediumScreen ? (
                <InfoBox>
                    <InfoLeftBox>
                        <ProfileImg />
                        <InfoContact />
                    </InfoLeftBox>
                    <InfoEmpty />
                    <InfoRightBox>
                        <Aboutme /> 
                        <Skillset />
                    </InfoRightBox>
                </InfoBox>
            ) : (
                <InfoBox>
                    {currentCard === 1 && (
                        <InfoLeftBox>
                            <ProfileImg />
                            <InfoContact />
                        </InfoLeftBox>
                    )}
                
                    {currentCard === 2 && (
                        <InfoRightBox>
                            <Aboutme />
                        </InfoRightBox>
                    )}
                   
                    {currentCard === 3 && (
                        <InfoRightBox>
                            <Skillset />
                        </InfoRightBox>
                    )}
                </InfoBox>
            )}
            {!isMediumScreen && (
                <ControlButtons>
                    <BeforeBtn onClick={toggleCard}>
                        <LeftArrow />
                    </BeforeBtn>
                    <AfterBtn onClick={toggleCard}>
                        <RightArrow />
                    </AfterBtn>
                </ControlButtons>
            )}
            {!isMediumScreen && (
                <IndicatorContainer>
                    <IndicatorDot active={currentCard === 1} onClick={() => setCurrentCard(1)} />
                    <IndicatorDot active={currentCard === 2} onClick={() => setCurrentCard(2)} />
                    <IndicatorDot active={currentCard === 3} onClick={() => setCurrentCard(3)} />
                </IndicatorContainer>
            )}
        </Container>
    )
};

const Container = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    padding: 0px 10%;
    position: relative;
    transition: background-color 0.3s;
    transition: transform 0.2s ease;

    @media (max-width: 1151px) {
        justify-content: center;
        align-items: center;
    }
`;

const InfoBox = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    transition: transform 0.2s ease;

    @media (max-width: 1151px) {
        flex-direction: row;
        justify-content: center;
        align-items: center;
    }

    @media (max-width: 996px) {
        flex-direction: row;
        justify-content: center;
        align-items: center;
    }
`;

const InfoLeftBox = styled.div`
    margin: 50px 30px;
    padding: 5% 40px;
    margin-right: 1%;
    align-items: center;
    display: flex;
    flex-direction: column;
    transition: background-color 0.3s;

    @media (max-width: 1151px) {
        margin: 0% 3%; 
    }
`;

const InfoEmpty = styled.div`
    width: 5%;
    transition: transform 0.2s ease;
    /* background-color: yellowgreen; */

    @media (max-width: 1151px) {
        display: none;
    }
`;

const InfoRightBox = styled.div`
    width: 100%;
    margin: 0px 30px;
    padding: 0px 40px;
    margin-left: 10px;
    transition: transform 0.2s ease;
    display: flex;
    flex-direction: column;
    justify-content: center;

    @media (max-width: 1320px) {
        padding: 7% 4%; 
    }

    @media (max-width: 1135px) {
        padding: 0% 4%; 
    }

    @media (max-width: 996px) {
        margin: 0% 3%; 
        /* width: 70%; */
        /* margin-left: 0px; */
    }

    @media (max-width: 665px) {
        margin: 0% 0px; 
        /* width: 80%; */
    }
`;

const ControlButtons = styled.div`
    flex-direction: row;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: absolute;
    width: 80%;
    @media (max-width: 850px) {
        width: 90%; 
    }

    @media (max-width: 620px) {
        width: 90%; 
    }
    @media (max-width: 450px) {
        width: 95%; 
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

const IndicatorContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    /* margin-top: 20px; */
    z-index: 100;
    position: absolute;
    bottom: 30px;

    @media (max-width: 996px) {
        /* display: none; */
    }
`;

const IndicatorDot = styled.div`
    width: 10px;
    height: 10px;
    background-color: ${({ active }) => (active ? "#243e35" : "#a5b0ac")};
    border-radius: 50%;
    margin: 0 5px;
    cursor: pointer;
`;


export default Intro;