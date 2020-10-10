import React from "react";
import styled from "@emotion/styled"

const SocialLink = styled.a`
   text-decoration: none;
`
const SocialIcon = styled.div`
   width: 80px;
   height: 80px;
   font-size: 80px;
   color: inherit;
`


const SocialItem = (props) => {

  return (
    <SocialLink href={props.toChannel} target="_blank">
    <SocialIcon>
      {props.children}
    </SocialIcon>
    </SocialLink>

  )

}
export default SocialItem;