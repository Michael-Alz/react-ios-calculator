import './App.css';
import Wrapper from './components/Wrapper';
import Screen from './components/Screen';
import Button from './components/Button';
import ButtonContainer from './components/ButtonContainer';
function App() {
    const buttonValues = [
        "AC","+/-","%","÷",
        "7","8","9","x",
        "4","5","6","-",
        "1","2","3","+",
        "0",".","="]
	
        return (
		<>
			<Wrapper>
                <Screen/>
                <ButtonContainer>   
                    {buttonValues.map((value, index) => {
                        return <Button key={index} value={value}/>
                    })}
                </ButtonContainer>
            </Wrapper>
		</>
	);
}

export default App;
