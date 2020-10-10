import React from "react";
import {Link} from "gatsby"
import styled from "@emotion/styled"
import palette from "../../utils/palette"
import LogoOne from "../media/logo-one"
import LogoTwo from "../media/logo-two"
import {mq} from "../../utils/presets"
import classes from "../../hoc/layout.module.css"
import { css } from "emotion"
import useToggleHook from "../../hooks/useToggleHook"
import AiPixelPerfect from "../media/exp-logos/ai-pixel-perfect"

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

const NavLinkBox = styled.button`
   display: block;
   background-color: ${palette.navDark};
   width: 100px;
   text-align: center;
   text-decoration: none;
   border-style: none;
   border: none;
   {activateButton}
   
   ${mq.tablet} {
    height: 50px;
  }
`

const NavLinkText = styled.h5`
  color: ${palette.liteGrey};
  // background-color: ${palette.navDark};
  font-size: 25px;
  &:hover, &:focus { transition: color 1s; color: ${palette.orange}};
  
${mq.tablet} {
  margin-top: 0;
  margin-bottom: 0;
  }
`

const activateButton = () => {
  css({background_color: 'red'})

}


const TopNav = (props) => {


    return (
    <NavRow>
      <LogoWrap>
        <Link to={'/'} className={`{classes.link}`}>
          <LogoBox>
            {/*<LogoTwo/>*/}
            <AiPixelPerfect/>
          </LogoBox>
        </Link>
      </LogoWrap>
      <NavLinksRow>
        <NavLinkBox>
          <Link to={'/page-2'} className={classes.link} >
            <NavLinkText>
              Page 2
            </NavLinkText>
          </Link>
        </NavLinkBox>
        <NavLinkBox>
          <Link to={'/page-3'} className={classes.link}>
            <NavLinkText>
              Page 3
            </NavLinkText>
          </Link>
        </NavLinkBox>
        <NavLinkBox>
          <Link to={'/page-4'} className={classes.link}>
            <NavLinkText>
              Page 4
            </NavLinkText>
          </Link>
        </NavLinkBox>
      </NavLinksRow>
    </NavRow>
  )
}
export default TopNav;