import React from "react";
import {Link} from "gatsby"
import styled from "@emotion/styled"
import palette from "../../utils/palette"
import LogoOne from "../media/logo-one"
import LogoTwo from "../media/logo-two"
import {mq} from "../../utils/presets"

const NavRow = styled.div`
  display: flex;
  flex-flow: row wrap;
  max-width: 1220px;
  height: 100%;
  background-color: ${palette.navDark};
  justify-content: space-around;
  align-items: center;
  // position: fixed;
`

const LogoWrap = styled.div`
  display: flex;
  width: 500px;
  height: 100%;
  align-items: center;
  justify-content: flex-start;
  margin: 5px;
  padding: 5px;
  // background-color: red;
  ${mq.desktop} {
  justify-content: center;
  }
    ${mq.tablet} {
  justify-content: center;
  }
`

const LogoBox = styled.div`
   display: block;
   width: 310px;  
`

const NavLinksRow = styled.div`
   display: flex;
   width: 460px;
   height: 100%;
   flex-flow: row nowrap;
   justify-content: flex-end;
   margin: 5px;
   padding: 5px;
// background-color: green;
  ${mq.desktop} {
  justify-content: center;
  }
  ${mq.tablet} {
    height: 50px;
    margin-top:0;
    justify-content: center;
  }
`

const NavLinkBox = styled.div`
   display: block;
   width: 80px;
   text-align: center;
   ${mq.tablet} {
    height: 50px;
  }
`

const NavLinkText = styled.h5`
  color: ${palette.liteGrey};
  font-size: 20px;
  &:hover, &:focus { transition: color 1s; color: ${palette.orange}};
  ${mq.tablet} {
  margin-top: 0;
  margin-bottom: 0;
  }
`





const TopNav = () => (
  <NavRow>
    <LogoWrap>
    <LogoBox>
      <LogoTwo/>
    </LogoBox>
    </LogoWrap>
  <NavLinksRow>
    <NavLinkBox>
      <NavLinkText>
        Services
      </NavLinkText>
    </NavLinkBox>
    <NavLinkBox>
    <NavLinkText>
      About
    </NavLinkText>
    </NavLinkBox>
    <NavLinkBox>
    <NavLinkText>
      Contact
    </NavLinkText>
      </NavLinkBox>
  </NavLinksRow>
  </NavRow>
)
export default TopNav;