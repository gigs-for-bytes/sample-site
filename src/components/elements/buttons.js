import React from "react";
import styled from "@emotion/styled"
import palette from "../../utils/palette"

const ButtonOne = styled.button`
  display: block; 
  width: 160px;
  height: 40px;
  border: 1px solid transparent;
  border-radius:5px;
  text-decoration: none;
   cursor: pointer;
  color: ${palette.liteGrey};
  background-color: ${palette.purple};
  &:hover, &:focus { transition: background-color 1s, border 1s; border: 2px solid ${palette.sgmOrange}; background-color: ${palette.sgmLiteYellow}};
  
`

const ButtonTwo = styled.button`
  display: block; 
  width: 160px;
  height: 40px;
  border: 1px solid transparent;
  border-radius:5px;
  text-decoration: none;
  cursor: pointer;
  color: ${palette.yellow};
  background-color: ${palette.drkDark};
  &:hover, &:focus { transition: background-color 1s, border 1s; border: 2px solid ${palette.sgmLiteYellow}; background-color: ${palette.sgmPurpleLIte}};
  
`
const ButtonThree = styled.button`
  display: block; 
  width: 160px;
  height: 40px;
  border: 1px solid transparent;
  border-radius:5px;
  text-decoration: none;
  cursor: pointer;
  color: ${palette.medDark};
  background-color: ${palette.orange};
  &:hover, &:focus { transition: background-color 1s, border 1s; border: 2px solid ${palette.sgmLiteYellow}; background-color: ${palette.sgmPurpleLIte}};
  
`

const SubmitButton = styled.button`
  display: block; 
  width: 160px;
  height: 40px;
  border: 1px solid transparent;
  border-radius:5px;
  text-decoration: none;
  cursor: pointer;
  color: ${palette.medGrey};
  background-color: ${palette.proceed};
  &:hover, &:focus { transition: background-color 1s, border 1s; border: 2px solid ${palette.sgmLiteYellow}; background-color: ${palette.sgmPurpleLIte}};
  
`


const ConfirmButton = styled.button`
  display: block; 
  width: 160px;
  height: 40px;
  border: 1px solid transparent;
  border-radius:5px;
  text-decoration: none;
  cursor: pointer;
  color: ${palette.medDark};
  background-color: ${palette.okay};
  &:hover, &:focus { transition: background-color 1s, border 1s; border: 2px solid ${palette.sgmLiteYellow}; background-color: ${palette.sgmPurpleLIte}};
  
`

const RejectButton = styled.button`
  display: block; 
  width: 160px;
  height: 40px;
  border: 1px solid transparent;
  border-radius:5px;
  text-decoration: none;
  cursor: pointer;
  color: ${palette.liteGrey};
  background-color: ${palette.warning};
  &:hover, &:focus { transition: background-color 1s, border 1s; border: 2px solid ${palette.sgmLiteYellow}; background-color: ${palette.sgmPurpleLIte}};
  
`



export {ButtonOne, ButtonTwo, ButtonThree, SubmitButton, ConfirmButton, RejectButton};

