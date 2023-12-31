import React from "react";
import styled from "styled-components";
import Profile from "../../../src/assets/profile.png";

const ProfileImg = () => {
    return (
        <>
            <ProfileImgContainer>
                <ProfileImgContainer2>
                    <ProfileImgContainer3>
                        <ProfileImage src={Profile} />
                    </ProfileImgContainer3>
                </ProfileImgContainer2>
            </ProfileImgContainer>

            <ProfileNameContainer>
                <ProfileNameText>최우드</ProfileNameText>
                <ProfileNameMini>wxxd-fxrest</ProfileNameMini>
            </ProfileNameContainer>
        </>
    )
};

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
    border: solid 1px black;
    align-items: flex-end;
    position: absolute;
    top: -6%;
    left: -6%;
`;

const ProfileImage = styled.img`
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

export default ProfileImg;