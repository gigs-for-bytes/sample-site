import React from "react";
import  styled from "@emotion/styled"
import {css} from "emotion"
import palette from "../../utils/palette"
import LogoTwo from "../media/logo-two"
import SocialLinks from "../socialBlocks/socialLinks/social-links"
import LogoOne from "../media/logo-one"
import { mq } from "../../utils/presets"

const FootWrap = styled.div`
   display: flex;
   flex-flow: row wrap;
   width: 100%;
   height: 250px;
   background-color: ${palette.footGrey};
   margin: 0;
   padding:0;
   position: relative;
   justify-content: space-around;
   text-align: center;
   // position: relative;
   
`

const LeftFoot = styled.div`
  display: flex;
  flex-flow: column nowrap;
  width: 45%;
  margin: 10px;
  padding:10px;
  background-color: ${palette.liteGrey};
  ${mq.tablet} {
   width: 100%;
  }
  
`

const RightFoot = styled.div`
  display: flex;
  flex-flow: column nowrap;
  width: 45%;
  margin: 10px;
  padding:10px;
  background-color: ${palette.liteGrey};
  ${mq.tablet} {
   width: 100%;
  }
 
`

const FootRow = styled.div`
  display: flex;
  flex-flow: row nowrap;
  width: 100%;
  height: 45%;
`

const FootLogoBox = styled.div`
  display: block;
  width: 300px;
`


const Footer = () => {

  return(
    <FootWrap>
      <LeftFoot>
        <FootRow>
          <FootLogoBox>
            <LogoOne/>
          </FootLogoBox>
        </FootRow>
        <FootRow className={css`justify-content: center;`}>
          <SocialLinks/>
        </FootRow>
      </LeftFoot>
      <RightFoot>
        <FootRow>
          Left Foot Row 1
        </FootRow>
        <FootRow>
          Left Foot Row 2
        </FootRow>
      </RightFoot>
    </FootWrap>

  );
}
export default Footer;