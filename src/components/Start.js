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
        left: 50%;
        transform: translate(-40%, -60%);
        text-align: start;
    }
`;

const Text = styled.h1`
    font-size: 2vw;
    font-weight: 100;
    margin-bottom: 15px;

    @media (max-width: 768px) {
        margin-bottom: 10px;
        font-size: 4vw;
    }
`;

const Title = styled.h1`
    font-size: 5vw;
    letter-spacing: 2.5vw;
    font-weight: bold;

    @media (max-width: 768px) {
        font-size: 10vw;
    }
`;



export default Start;
