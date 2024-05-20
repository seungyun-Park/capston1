import React from "react";
import styled from "styled-components";

const InputWrapper = styled.div`
    display: flex;
    margin-top: 15px;
    position: relative;
    width: 300px;
    margin-bottom: 20px;
`;

const Input = styled.input`
  width: 100%;
  height: 40px;
  padding-left: 10px;
`;

const Label = styled.label`
  position: absolute;
  top: -20px;
  left: 10px; 
  color: white;
  background-color: #494949;
  padding: 0 5px; 
`;

function InfoInput(props){
    const {name, value, onChange} = props;

    return (
        <>
            <InputWrapper>
                <Label>{name}</Label>
                <Input value={value} onChange={onChange}/>
            </InputWrapper>
        </>
    )
}

export default InfoInput;