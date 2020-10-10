import React from "react"
import { Link } from "gatsby"
import Layout from "../hoc/layout"
import SEO from "../components/seo"
import styled from "@emotion/styled"
import { animation, mq } from "../utils/presets"
import palette from "../utils/palette"
import { SomeSpace } from "../components/elements/base-elements"
import { css } from "emotion"
import { keyframes } from "@emotion/core"
import SplasherOne from "../components/media/splasher-one"
import ImageOne from "../components/media/ImageOne"
import AiGrouped from "../components/media/exp-logos/ai-grouped"
import AiExpanded from "../components/media/exp-logos/ai-expanded"
import AiRastered from "../components/media/exp-logos/ai-rastered"
import PsSmart from "../components/media/exp-logos/ps-smat"
import PsRaster from "../components/media/exp-logos/ps-raster"
import AiPixelPerfect from "../components/media/exp-logos/ai-pixel-perfect"
import useToggleHook from "../hooks/useToggleHook"


const IndyWrap = styled.div`
    display: flex;
    flex-flow: column nowrap;
    width: 950px;
    height: 100%;
    text-align: center;
    align-items: center;
    margin:0;
    padding:0;
    background-color: ${palette.blackBoard};
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

const backNForth = keyframes`
  from, 0% {
     opacity: 1;
     transform: translate3d(-273px, 20px, 0);
     color: ${palette.orange};
  } to, 50% {
      opacity: 1;
     transform: translate3d(273px, 20px, 0);
     color: ${palette.purple};
  } to, 70% {
       color: ${palette.yellow};
  } to, 100% {
       transform: translate3d(-273px, 20px, 0);
       color: ${palette.orange};
  }
`
const backNForthTwo = keyframes`
  from, 0% {
     opacity: 1;
     transform: translate3d(273px, 20px, 0);
     color: ${palette.red};
  } to, 50% {
      opacity: 1;
     transform: translate3d(-273px, 20px, 0);
     color: ${palette.yellow};
  } to, 70% {
       color: ${palette.purple};
  } to, 100% {
       transform: translate3d(273px, 20px, 0);
       color: ${palette.red};
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

const SampleLogBox = styled.div`
    display: block;
    width: 600px;
    margin: 25px 10%;
    padding: 25px;   
`

const HookButton = styled.button`
  color: ${palette.okay};
  border: 1px solid ${palette.orange};
  margin: 10px;
  [adding: 5px;
`




const IndexPage = () => {
  const [regularLink , activeLink] = useToggleHook();

  const inActiveLink = () => {
    regularLink(css(`color: ${palette.okay}`));
  }

  const currentPageLink = () => {
    activeLink(css(`color:${palette.warning}`));
  }



  return (
  <Layout>
    <SEO title="Home"/>


    <IndyWrap>
      <Link onClick={() => activeLink(currentPageLink)} className={`? ${inActiveLink} : ${currentPageLink}`} to="#sectionOne">Section One</Link>
      <Link  onClick={() => activeLink(currentPageLink)} className={` ? ${inActiveLink} : ${currentPageLink}`} to="#sectionTwo">Section Two</Link>
      <Link  onClick={() => activeLink(currentPageLink)} className={` ? ${inActiveLink} : ${currentPageLink}`} to="#sectionThree">Section Three</Link>

      <div className={css`display: flex;`}>
        <HookButton onClick={() => activeLink(currentPageLink)}  to="#sectionOne">Section One</HookButton>
        <HookButton  onClick={() => activeLink(currentPageLink)}  to="#sectionTwo">Section Two</HookButton>
        <HookButton  onClick={() => activeLink(currentPageLink)}  to="#sectionThree">Section Three</HookButton>


      </div>


      <SomeSpace/>


      <section id='sectionOne' className={css`margin-bottom: 600px;`}>

        <h1 className={css`
      animation: ${backNForth} 10s ease infinite; 
      font-size: 60px;
      margin: 0;
      padding: 0;
      `}>Small Tasks, Done Well.</h1>
        <h1 className={css`
      animation: ${backNForthTwo} 10s ease infinite; 
      font-size: 60px;
      margin: 0;
      padding: 0;      
      `}>www.gigsforbytes.com</h1>


        <SampleLogBox>
          <h3 className={css`color: ${palette.orange}`}>Ai Grouped</h3>
          <SomeSpace/>
          <AiGrouped/>
        </SampleLogBox>


        <SampleLogBox>
          <h3 className={css`color: ${palette.orange}`}>Ai Expanded</h3>
          <SomeSpace/>
          <AiExpanded/>
        </SampleLogBox>

        <SampleLogBox>
          <h3 className={css`color: ${palette.orange}`}>Ai Rastered</h3>
          <SomeSpace/>
          <AiRastered/>
        </SampleLogBox>


        <SomeSpace/>
        <SampleLogBox>
          <h3 className={css`color: ${palette.orange}`}>Ps Smart</h3>
          <SomeSpace/>
          <PsSmart/>
        </SampleLogBox>

        <SampleLogBox>
          <SomeSpace/>
          <h3 className={css`color: ${palette.orange}`}>Ps Raster</h3>
          <PsRaster/>
        </SampleLogBox>

        <SampleLogBox>
          <SomeSpace/>
          <h3 className={css`color: ${palette.orange}`}>AI Pixel Perfect</h3>
         <AiPixelPerfect/>
        </SampleLogBox>

        <h1 className={css`
      animation: ${backNForthTwo} 10s ease infinite; 
      font-size: 60px;
      margin: 0;
      padding: 0;      
      `}>www.gigsforbytes.com</h1>

        <h1 className={css`
      animation: ${backNForth} 10s ease infinite; 
      font-size: 60px;
      margin: 0;
      padding: 0;
      `}>Small Tasks, Done Well.</h1>

      </section>
      <section id='sectionTwo' className={css`margin-bottom: 600px;`}>
        <h3 className={css`
          animation: ${bounceTwo} 7s ease infinite;
        `}>Part Two</h3>

      </section>

      <section id='sectionThree'>


        <h3 className={css`
          animation: ${bounceTwo} 7s ease infinite;
        `}>Part Three</h3>


      </section>

    </IndyWrap>

  </Layout>
)};

export default IndexPage
