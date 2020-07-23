import React from "react";
import  styled from "@emotion/styled"
import palette from "../../utils/palette"

const FootWrap = styled.div`
   display: flex;
   flex-flow: row nowrap;
   width: 100%;
   height: 250px;
   background-color: ${palette.footGrey};
   margin: 0;
   padding:0;
   position: relative;
   justify-content: space-around;
   text-align: center;
   
`

const LeftFoot = styled.div`
  display: flex;
  flex-flow: column nowrap;
  width: 45%;
  margin: 10px;
  padding:10px;
  background-color: ${palette.liteGrey};
  
`

const RightFoot = styled.div`
  display: flex;
  flex-flow: column nowrap;
  width: 45%;
  margin: 10px;
  padding:10px;
  background-color: ${palette.liteGrey};
 
`



const Footer = () => {

  return(
    <FootWrap>
      <LeftFoot>
        Left Foot
      </LeftFoot>
      <RightFoot>
        Right Foot
      </RightFoot>
    </FootWrap>

  );
}
export default Footer;