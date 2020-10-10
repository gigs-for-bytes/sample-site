import React, { Component } from "react"
import styled from "@emotion/styled"
import palette from "../utils/palette"
import TopNav from "../components/navigation/topnav"
import Footer from "../components/footer/footer"
import "./layout.module.css"
import SplasherOne from "../components/media/splasher-one"

const LayoutWrapper = styled.div`
    display: flex;
    flex-flow: column nowrap;
    background-color: ${palette.blackBoard};
    width: 100%;
    height: auto;
    margin: 0;
    padding: 0;
    align-items: center;
`

const NavWrap = styled.div`
  display: flex;
  flex-flow: row nowrap;
  width: 100%;
  background-color: ${palette.navDark};
  align-items: center;
  justify-content: center;
  position: fixed;
  z-index:200;
`

const Main = styled.main`
  background-color: ${palette.medGrey};
  max-width: 1200px;
  position: relative;
  margin: 0 0 0 0;
  padding: 0;
  
`
const SplashBox = styled.div`
  display:block;
  width: 80%;
  margin:0;
  padding:0;
  // height: 100vh;
`

class Layout extends Component {

  render() {

    return(
      <LayoutWrapper>
        <NavWrap>
          <TopNav/>
        </NavWrap>
        <SplashBox>
          <SplasherOne/>
        </SplashBox>

        <Main>
          {this.props.children}
        </Main>
        <Footer/>

      </LayoutWrapper>
    );
  }
}

export default Layout;