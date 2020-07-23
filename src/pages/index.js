import React from "react"
import { Link } from "gatsby"
import Layout from "../hoc/layout"
import SEO from "../components/seo"
import styled from "@emotion/styled"
import {mq} from "../utils/presets"
import palette from "../utils/palette"


const IndyWrap = styled.div`
    width: 950px;
    height: 100vh;
    text-align: center;
    background-color: ${palette.medGrey};
    ${mq.tablet} {
      width: 100%;
    }
`

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <IndyWrap>

      <h1>Index Page</h1>

    </IndyWrap>

  </Layout>
)

export default IndexPage
