import styled from "styled-components";

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  text-align: left;
  flex-wrap: wrap;
  font-size: 14px;
  width: 100%;
  padding-bottom: 12px;
`;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

export const InputLeft = styled.div`
  display: flex;
  flex-direction: column;
`;

export const InputRight = styled.div`
  display: flex;
  flex-direction: column;
`;

export const BigContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const SwitchContainer = styled.div`
 display: flex;
 flex-direction: row;
`;

export const Title = styled.div`
  text-align: center;
  height: 44px;
`;

export const Results = styled.div`
  display: flex;
  flex-direction: row;
`;

export const Input1 = styled.input`
  display: flex;
  text-align: right;
  width: 100px;
  height: 19px;
  background-color: rgb(231, 229, 248);
  border-radius: 5px;
  border: 1px solid black;
  font-size: 12px;
  //padding-bottom: 10px;
`;

export const Result = styled.div`
  text-align: right;
  width: 100px;
  height: 19px;
  background-color: rgb(211, 209, 231);
  border-radius: 5px;
  border: 1px solid black;
`;