import React from "react";
import styled from "styled-components";

const Aboutme = () => {
    return (
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
    )
};

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

export default Aboutme;