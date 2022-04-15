import './App.css';
import styled from 'styled-components';
import Title from './components/Title';
import Flex from './components/Flex';
import Console from './components/Console';
import Button from './components/Button';

const AppWrapper = styled.div`
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    background-color: #000;
    padding: 2rem;
`;

function App() {
    return (
        <AppWrapper className="App">
            <Flex justify="center">
                <Title color={'green'}>console cmd.exe</Title>
            </Flex>
            <Console color="green" />
        </AppWrapper>
    );
}

export default App;
