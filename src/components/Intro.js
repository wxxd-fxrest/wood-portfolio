// import React, { useEffect, useState } from "react";
// import styled from "styled-components";
// import Aboutme from "./info/Aboutme";
// import Skillset from "./info/Skillset";
// import ProfileImg from "./info/ProfileImg";
// import InfoContact from "./info/InfoContact";
// import { BiSolidLeftArrow, BiSolidRightArrow } from 'react-icons/bi';

// const Intro = () => {
//     const [isMediumScreen, setIsMediumScreen] = useState(window.innerWidth >= 996);
//     const [currentCard, setCurrentCard] = useState(1); // 1, 2, 3 중 하나의 값을 가짐

//     const toggleCard = () => {
//         setCurrentCard(prevCard => (prevCard % 3) + 1);
//     };

//     useEffect(() => {
//         const handleResize = () => {
//             setIsMediumScreen(window.innerWidth >= 996);
//         };

//         window.addEventListener("resize", handleResize);
//         return () => {
//             window.removeEventListener("resize", handleResize);
//         };
//     }, []);

//     return (
//         <Container>
//             {isMediumScreen ? (
//                 <InfoBox>
//                     <InfoLeftBox>
//                         <ProfileImg />
//                         <InfoContact />
//                     </InfoLeftBox>
//                     <InfoEmpty />
//                     <InfoRightBox>
//                         <Aboutme /> 
//                         <Skillset />
//                     </InfoRightBox>
//                 </InfoBox>
//             ) : (
//                 <InfoBox>
//                     {currentCard === 1 && (
//                         <InfoLeftBox>
//                             <ProfileImg />
//                             <InfoContact />
//                         </InfoLeftBox>
//                     )}
                
//                     {currentCard === 2 && (
//                         <InfoRightBox>
//                             <Aboutme />
//                         </InfoRightBox>
//                     )}
                   
//                     {currentCard === 3 && (
//                         <InfoRightBox>
//                             <Skillset />
//                         </InfoRightBox>
//                     )}
//                 </InfoBox>
//             )}
//             {!isMediumScreen && (
//                 <ControlButtons>
//                     <BeforeBtn onClick={toggleCard}>
//                         <LeftArrow />
//                     </BeforeBtn>
//                     <AfterBtn onClick={toggleCard}>
//                         <RightArrow />
//                     </AfterBtn>
//                 </ControlButtons>
//             )}
//             {!isMediumScreen && (
//                 <IndicatorContainer>
//                     <IndicatorDot active={currentCard === 1} onClick={() => setCurrentCard(1)} />
//                     <IndicatorDot active={currentCard === 2} onClick={() => setCurrentCard(2)} />
//                     <IndicatorDot active={currentCard === 3} onClick={() => setCurrentCard(3)} />
//                 </IndicatorContainer>
//             )}
//         </Container>
//     )
// };

// const Container = styled.div`
//     background-color: aliceblue;
//     height: 100%;
//     width: 100%;
//     display: flex;
//     padding: 0px 150px;
//     position: relative;
//     transition: background-color 0.3s;
//     transition: transform 0.2s ease;

//     @media (max-width: 1151px) {
//         justify-content: center;
//         align-items: center;
//     }

//     @media (max-width: 1030px) {
//         padding: 0px 30px;
//     }

//     @media (max-width: 850px) {
//         padding: 0px 20px;
//     }
//     @media (max-width: 850px) {
//         padding: 0px 20px;
//     }
// `;

// const InfoBox = styled.div`
//     display: flex;
//     justify-content: space-between;
//     width: 100%;
//     transition: transform 0.2s ease;

//     @media (max-width: 1151px) {
//         flex-direction: row;
//         justify-content: center;
//         align-items: center;
//         /* width: 80%; */
//     }

//     @media (max-width: 996px) {
//         flex-direction: row;
//         justify-content: center;
//         align-items: center;
//     }

//     @media (max-width: 450px) {
//         /* width: 80%; */
//     }
// `;

// const InfoLeftBox = styled.div`
//     background-color: yellowgreen;
//     margin: 50px 30px;
//     padding: 60px 40px;
//     margin-right: 10px;
//     align-items: center;
//     display: flex;
//     flex-direction: column;
//     transition: background-color 0.3s;

//     @media (max-width: 1151px) {
//         margin: 20px 30px;
//     }
// `;

// const InfoEmpty = styled.div`
//     width: 5%;
//     transition: transform 0.2s ease;
//     background-color: yellowgreen;

//     @media (max-width: 1150px) {
//         display: none;
//     }
// `;

// const InfoRightBox = styled.div`
//     background-color: yellowgreen;
//     border-radius: 5px;
//     margin: 50px 30px;
//     padding: 60px 40px;
//     margin-left: 10px;
//     transition: transform 0.2s ease;

//     @media (max-width: 1320px) {
//         padding: 30px 40px;
//     }

//     @media (max-width: 1180px) {
//         /* width: 60%; */
//         /* margin: 0px; */
//         margin-right: 30px;
//         padding: 30px 0px;
//     }

//     @media (max-width: 1135px) {
//         margin-right: 30px;
//         padding: 0px;
//     }

//     @media (max-width: 996px) {
//         margin: 0px 30px;
//         width: 70%;
//     }

//     @media (max-width: 665px) {
//         margin: 0px 0px;
//         width: 80%;
//     }
// `;

// const ControlButtons = styled.div`
//     display: flex;
//     justify-content: space-between; /* 수평 중앙 정렬 */
//     align-items: center; /* 수직 중앙 정렬 */
//     width: 75%; 
//     position: absolute;
//     transition: transform 0.3s ease; /* left 속성에 대한 트랜지션 추가 */

//     @media (max-width: 850px) {
//         width: 80%; 
//     }

//     @media (max-width: 665px) {
//         width: 90%; 
//     }
// `;

// const BeforeBtn = styled.button`
//     border: none;
//     background-color: transparent;
//     cursor: pointer;
//     justify-content: center;
//     align-items: center;
//     display: flex;
//     border-radius: 50%;
//     padding: 3px 3px;
// `;

// const AfterBtn = styled.button`
//     border: none;
//     background-color: transparent;
//     cursor: pointer;
//     justify-content: center;
//     align-items: center;
//     display: flex;
//     border-radius: 50%;
//     padding: 3px 3px;
// `;

// const LeftArrow = styled(BiSolidLeftArrow)`
//     width: 30px;
//     height: 30px;
//     color: #243e35;

//     &:hover {
//         color: #f91300;
//     }
// `;

// const RightArrow = styled(BiSolidRightArrow)`
//     width: 30px;
//     height: 30px;
//     color: #243e35;

//     &:hover {
//         color: #f91300;
//     }
// `;

// const IndicatorContainer = styled.div`
//     display: flex;
//     justify-content: center;
//     align-items: center;
//     /* margin-top: 20px; */
//     z-index: 100;
//     position: absolute;
//     bottom: 30px;

//     @media (max-width: 996px) {
//         /* display: none; */
//     }
// `;

// const IndicatorDot = styled.div`
//     width: 10px;
//     height: 10px;
//     background-color: ${({ active }) => (active ? "#243e35" : "#a5b0ac")};
//     border-radius: 50%;
//     margin: 0 5px;
//     cursor: pointer;
// `;


// export default Intro;


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
                    {/* <InfoEmpty /> */}
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
    /* background-color: aliceblue; */
    height: 100%;
    width: 100%;
    display: flex;
    padding: 0px 150px;
    position: relative;
    transition: background-color 0.3s;
    transition: transform 0.2s ease;
`;

const InfoBox = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    transition: transform 0.2s ease;
`;

const InfoLeftBox = styled.div`
    /* background-color: yellowgreen; */
    margin: 50px 10px; /* 변경된 여백 값 */
    padding: 60px 40px;
    flex: 30%; /* 30%로 변경 */
    transition: background-color 0.3s;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const InfoRightBox = styled.div`
    /* background-color: yellowgreen; */
    margin: 50px 10px; /* 변경된 여백 값 */
    padding: 60px 40px;
    flex: 70%; /* 70%로 변경 */
    transition: transform 0.2s ease;
`;

const InfoEmpty = styled.div`
    width: 5%;
    transition: transform 0.2s ease;
    background-color: yellowgreen;
`;

const ControlButtons = styled.div`
    display: flex;
    justify-content: space-between; /* 수평 중앙 정렬 */
    align-items: center; /* 수직 중앙 정렬 */
    width: 75%; 
    position: absolute;
    transition: transform 0.3s ease; /* left 속성에 대한 트랜지션 추가 */
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
