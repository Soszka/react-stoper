import { useState, useEffect } from "react";
import TimeStoper from "./Components/TimeStoper/TimeStoper";
import Button from './Components/Button/Button'
import Container from './Components/Container/Container'


const App = () => {

  const [time, setTime] = useState(0);
  const [timer, setTimer] = useState('');

  const start = () => {
    setTimer(setInterval( () => {
      setTime(prevValue => prevValue + 1)}, 1)
    );
  }

  const stop = () => {
    clearInterval(timer)
  };

  const reset = () => {
    setTime(0);
  }

  useEffect(() => {
    return () => {
      if(timer) clearInterval(timer);
    };
  }, []);

  return (
    <Container>
      <TimeStoper />
      <Button action={start}>Start</Button>
      <Button action={stop}>Stop</Button>
      <Button action={reset}>Reset</Button>
    </Container>
  );
};

export default App;
