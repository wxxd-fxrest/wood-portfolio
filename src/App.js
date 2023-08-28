import React from 'react';
import styled from 'styled-components';
import Intro from './components/Intro';
import Project from './components/Project';
import Start from './components/Start';

const App = () => {
  return (
		<Container>
            <Component>
                <Start />
            </Component>
            <Component>
                <Intro />
            </Component>
            <Component>
                <Project />
            </Component>
		</Container>
	);
};

const Container = styled.div``;

const Component = styled.div``;


export default App;
