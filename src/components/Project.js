import React, { useState } from "react";
import styled from "styled-components";

const Project = () => {
    const projectData = [
        { bgColor: 'skyblue', name: 'Project-1' },
        { bgColor: 'pink', name: 'Project-2' },
        { bgColor: 'lightgreen', name: 'Project-3' },
        // ... 추가 프로젝트 데이터
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    const handleNextClick = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % projectData.length);
    };

    const handlePrevClick = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? projectData.length - 1 : prevIndex - 1
        );
    };

    return (
        <Container>
            <ProjectBox style={{ backgroundColor: projectData[currentIndex].bgColor }}>
                <ProjectImg />
                <ProjectName>{projectData[currentIndex].name}</ProjectName>
            </ProjectBox>
            <ControlButtons>
                <BeforeBtn onClick={handlePrevClick}>이전</BeforeBtn>
                <AfterBtn onClick={handleNextClick}>다음</AfterBtn>
            </ControlButtons>
            <Dots>
                {projectData.map((_, index) => (
                    <Dot key={index} active={index === currentIndex} onClick={() => setCurrentIndex(index)} />
                ))}
            </Dots>
        </Container>
    );
};

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const ProjectBox = styled.div`
    width: 300px;
    height: 200px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const ProjectImg = styled.div`
    width: 100px;
    height: 100px;
    background-color: #ccc;
    margin-bottom: 10px;
`;

const ProjectName = styled.h1`
    font-size: 1rem;
    text-align: center;
`;

const ControlButtons = styled.div`
    display: flex;
    margin-top: 10px;
`;

const BeforeBtn = styled.button`
    margin-right: 10px;
`;

const AfterBtn = styled.button``;

const Dots = styled.div`
    display: flex;
    margin-top: 10px;
`;

const Dot = styled.div`
    width: 10px;
    height: 10px;
    background-color: ${({ active }) => (active ? "#000" : "#ccc")};
    border-radius: 50%;
    margin: 0 5px;
    cursor: pointer;
`;

export default Project;


// import React, { useState } from 'react';
// import styled from 'styled-components';

// const Project = () => {
//     const projectData = [
//         { bgColor: 'skyblue', name: 'Project-1' },
//         { bgColor: 'pink', name: 'Project-2' },
//         { bgColor: 'lightgreen', name: 'Project-3' },
//         { bgColor: 'lightblue', name: 'Project-4' },
//         { bgColor: 'orange', name: 'Project-5' },
//         { bgColor: 'purple', name: 'Project-6' },

//         { bgColor: 'skyblue', name: 'Project-7' },
//         { bgColor: 'pink', name: 'Project-8' },
//         { bgColor: 'lightgreen', name: 'Project-9' },
//         { bgColor: 'lightblue', name: 'Project-10' },
//         { bgColor: 'orange', name: 'Project-11' },
//         { bgColor: 'purple', name: 'Project-12' },
//     ];

//     const itemsPerPage = 3; // 한 페이지에 보여질 아이템 개수
//     const [currentPage, setCurrentPage] = useState(0);

//     const handleNextClick = () => {
//         setCurrentPage((prevPage) => prevPage + 1);
//     };

//     const handlePrevClick = () => {
//         setCurrentPage((prevPage) => prevPage - 1);
//     };

//     const startIndex = currentPage * itemsPerPage;
//     const visibleItems = projectData.slice(startIndex, startIndex + itemsPerPage);

//     return (
//         <Container>
//             <ProjectBoxWrapper>
//                 {visibleItems.map((item, index) => (
//                     <ProjectBox key={index} style={{ backgroundColor: item.bgColor }}>
//                         <ProjectImg />
//                         <ProjectName>{item.name}</ProjectName>
//                     </ProjectBox>
//                 ))}
//             </ProjectBoxWrapper>
//             <ButtonWrapper>
//                 <BeforeBtn onClick={handlePrevClick} disabled={currentPage === 0}>
//                     이전
//                 </BeforeBtn>
//                 <AfterBtn
//                     onClick={handleNextClick}
//                     disabled={startIndex + itemsPerPage >= projectData.length}
//                 >
//                     다음
//                 </AfterBtn>
//             </ButtonWrapper>
//         </Container>
//     );
// };

// const Container = styled.div`
//     display: flex;
//     flex-direction: column;
//     align-items: center;
// `;

// const ProjectBoxWrapper = styled.div`
//     display: flex;
//     overflow-x: auto;
// `;

// const ProjectBox = styled.div`
//     width: 300px;
//     height: 200px;
//     margin: 0 10px;
//     display: flex;
//     flex-direction: column;
//     align-items: center;
//     justify-content: center;
// `;

// const ProjectImg = styled.div`
//     width: 100px;
//     height: 100px;
//     background-color: #ccc;
//     margin-bottom: 10px;
// `;

// const ProjectName = styled.h1`
//     font-size: 1rem;
//     text-align: center;
// `;

// const ButtonWrapper = styled.div`
//     display: flex;
//     margin-top: 10px;
// `;

// const BeforeBtn = styled.button`
//     margin-right: 10px;
// `;

// const AfterBtn = styled.button``;

// export default Project;
