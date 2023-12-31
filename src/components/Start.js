import React, { useEffect, useState } from "react";
import styled from 'styled-components';

const Start = () => {
    const titleContent = "PORTFOLIO";

    const [title, setTitle] = useState('');

    useEffect(() => {
        let titleIndex = 0;

        const titleInterval = setInterval(() => {
            if (titleIndex < titleContent.length) {
                setTitle(titleContent.substring(0, titleIndex + 1));
                titleIndex++;
            } else {
                clearInterval(titleInterval);
            }
        }, 100);

        return () => {
            clearInterval(titleInterval);
        };
    }, []);

    return(
        <Container>
            <Text> Frontend developer </Text>
            <Title> {title} </Title>
        </Container>
    )
};

const Container = styled.div`
    position: absolute;
    top: 30%;
    left: 30%;
    transform: translate(-30%, -70%);
    color: white;

    @media (max-width: 768px) {
        width: 90%;
        top: 30%;
        left: 55%;
        transform: translate(-50%, -70%); /* 수정된 부분 */
        text-align: start;
    }
`;

const Text = styled.h1`
    font-size: 2vw;
    font-weight: 100;
    margin-bottom: 10px;
    font-family: 'Quicksand', sans-serif;
    transition: font-size 0.3s, letter-spacing 0.3s; 

    @media (max-width: 768px) {
        margin-bottom: 10px;
        font-size: 2.5vw;
    }
`;

const Title = styled.h1`
    font-family: 'Abril Fatface', cursive;
    font-size: 5rem; 
    letter-spacing: 2rem;
    font-weight: bold;
    transition: font-size 0.3s, letter-spacing 0.3s; 

    @media (max-width: 1000px) {
        font-size: 4rem;
        letter-spacing: 1.5rem;
    }
    @media (max-width: 768px) {
        font-size: 3rem;
        letter-spacing: 1rem;
    }
    @media (max-width: 450px) {
        font-size: 2rem;
        letter-spacing: 0.5rem;
    }
`;


export default Start;
