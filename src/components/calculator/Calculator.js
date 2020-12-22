import React, {useState, useEffect} from 'react';
import './Calculator.css'
import Title from "./title/Title";
import Result from "./result/Result";
import BtnWrapper from "./btnWrapper/BtnWrapper";
import InputWrapper from "./inputWrapper/InputWrapper";

export default function Calculator() {
  const arrNums = [1, -1, 100, -100];

  const [result, setResultState] = useState(0);
  const [inputValue, setInputValue] = useState('')

  const multiplayFunc = (value) => {
    setResultState(result + value)
  }
  const resetFunc = () => {
    setResultState(0)
  }

  useEffect(() => {
    const num = result + +inputValue
    setInputValue(num)
  }, [result, inputValue])


  return (
      <div className='calc-wrapper'>
        <Title/>
        <Result result={result}/>
        <BtnWrapper arrNums={arrNums} multiplayFunc={multiplayFunc} resetFunc={resetFunc}/>
        <InputWrapper setInputValue={setInputValue}/>
      </div>
  );
}
