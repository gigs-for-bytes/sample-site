import React from "react"
import styled from "@emotion/styled"
import {css } from "emotion"
import SocialItem from "./social-item"
import {FaFacebook, FaInstagram, FaInstagramSquare,
FaLinkedin, FaLinkedinIn, FaTwitter, FaTwitterSquare, FaGithub, FaGithubAlt,
FaGithubSquare, FaTumblr, FaTumblrSquare, FaTwitch, FaSnapchat, FaSnapchatGhost} from "react-icons/all"
import palette from "../../../utils/palette"
import { animation } from "../../../utils/presets"

const SocialLinksRow = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-around;
  margin: 1px;
  padding: 1px;  
`

const SocialLinks = () => {

  return (
    <SocialLinksRow>

      <SocialItem toChannel={'https://www.facebook.com'}> <FaFacebook className={css`
      color: ${palette.orange};
      &:hover { transition: color 1s; color: ${animation.curveDefault}; }
      
      `} /> </SocialItem>
      <SocialItem> <FaTumblr/> </SocialItem>
      <SocialItem> <FaTwitter/> </SocialItem>
      <SocialItem> <FaInstagram/> </SocialItem>

    </SocialLinksRow>

  )

}
export default SocialLinks