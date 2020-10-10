import React from "react"
import { Link } from "gatsby"

import Layout from "../hoc/layout"
import SEO from "../components/seo"
import { SomeSpace } from "../components/elements/base-elements"
import styled from "@emotion/styled"
import palette from "../utils/palette"
import { animation, mq } from "../utils/presets"
import { keyframes } from "@emotion/core"
import { css } from "emotion"

const PageTwoWrap = styled.div`
    width: 950px;
    height: 100%;
    text-align: center;
    background-color: ${palette.medGrey};
    ${mq.tablet} {
      width: 100%;
    }
`

const bounce = keyframes`
  from, 20%, 53%, 80%, to {
    transform: translate3d(0,0,0);
  }

  40%, 43% {
    transform: translate3d(0, -30px, 0);
  }

  70% {
    transform: translate3d(0, -15px, 0);
  }

  90% {
    transform: translate3d(0,-4px,0);
  }
`

const drawVee = keyframes`
  from, 5% {
     opacity: 1;
     transform: translate3d(60px, 100px, 0);
  } to, 50% {
      opacity: 1;
     transform: translate3d(300px, 500px, 0);
  } 
  from, 70% {
      opacity: 1;
  transform: translate3d(500px, 500px, 0);
  }
  to, 80% {
      opacity: 1;
      transform: translate3d(800px, 100px, 0);
  } to, 90% {
   opacity: 0.0;
  }
  
  0%{
    opacity: 0.0 !important;
    transform: translate3d(60px, 100px, 0);
  }
`

const growLeft = keyframes`
  //not working
  from {left: 0px;}
  to {left: 200px}
`

const bounceOne = keyframes`
  from, 20%, 53%, 80%, to {
    transform: translate3d(0,0,0);
  }

  40%, 43% {
    transform: translate3d(0, -30px, 0);
  }

  70% {
    transform: translate3d(0, -15px, 0);
  }

  90% {
    transform: translate3d(0,-4px,0);
  }
`

const bounceTwo = keyframes`
  from, 20%, 53%, 80%, to {
    transform: translate3d(0,0,0);
  }

  40%, 43% {
    transform: translate3d(0, 40px, 0);
  }

  70% {
    transform: translate3d(0, 5px, 0);
  }

  90% {
    transform: translate3d(0, 30px,0);
  }
`

const sCurve = keyframes`
  from, 5% to 90% {
    transform: ${animation.curveSss};
  }
`



const Page2 = () => (
  <Layout>
    <SEO title="About" />
    <PageTwoWrap>
        <Link to="#sectionOne">Section One</Link>
        <Link to="#sectionTwo">Section Two</Link>
        <Link to="#sectionThree">Section Three</Link>

        <SomeSpace/>


        <section id='sectionOne'>

            <h1 className={css`animation: ${bounce} 1s ease 5;`}>Index Page</h1>

            <div className={css`
         display: block;
         width: 50px;
         height: 100px;
         background-color: ${palette.red};
         animation: ${drawVee} 10s ${animation.curveSss} infinite ;
      `}>





            </div>

        </section>
        <section id='sectionTwo'>
            <div>
                <h2 className={css`
           animation: ${bounceOne} ${animation.speedSlow} ${animation.curveExpo} infinite ;
        `}>What Do You Want</h2>
                <h2 className={css`animation: ${bounceTwo} ${animation.speedSlow} ${animation.curveSss} infinite ;`}>in a website?</h2>
            </div>

            <SomeSpace/>

            <SomeSpace className={css`margin-bottom: 600px;`}/>

            <h3 className={css`
          animation: ${bounceTwo} 7s ease infinite;
        `}>Part Two</h3>

        </section>

        <section id='sectionThree'>


            <SomeSpace className={css`margin-bottom: 600px;`}/>


            <h3 className={css`
          animation: ${bounceTwo} 7s ease infinite;
          margin-bottom: 500px;
        `}>Part Three</h3>
        </section>


    </PageTwoWrap>
  </Layout>
)

export default Page2
