import React, { Component } from "react"
import styled from "@emotion/styled"
import palette from "../utils/palette"
import TopNav from "../components/navigation/topnav"
import Footer from "../components/footer/footer"


const LayoutWrapper = styled.div`
    display: flex;
    flex-flow: column nowrap;
    background-color: ${palette.liteGrey};
    width: 100%;
    height: auto;
    margin: 0 auto;
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
  margin: 7% 5px 5px 5px;
  padding: 5px;
  
`

class Layout extends Component {

  render() {

    return(
      <LayoutWrapper>
        <NavWrap>
          <TopNav/>
        </NavWrap>

        <Main>
          {this.props.children}
        </Main>
        <Footer/>

      </LayoutWrapper>
    );
  }
}

export default Layout;