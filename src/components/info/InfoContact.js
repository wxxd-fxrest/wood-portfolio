import React from "react";
import styled from "styled-components";
import { FiPhoneIncoming } from 'react-icons/fi';
import { MdAlternateEmail } from 'react-icons/md';

const InfoContact = () => {
    return (
        <>
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
        </>
    )
};

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

export default InfoContact;