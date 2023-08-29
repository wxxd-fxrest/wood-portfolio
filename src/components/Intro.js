import React from "react";
import styled from "styled-components";
import Profile from "../../src/assets/profile.png";

const Intro = () => {
    return(
        <Container>
            <p> intro </p>
            <ProfileImgContainer>
                <ProfileImg src={Profile} />
            </ProfileImgContainer>
        </Container>
    )
};

const Container = styled.div``;

const ProfileImgContainer = styled.div``;

const ProfileImg = styled.img``;

export default Intro;