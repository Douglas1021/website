//import * from './components'
import styled from 'styled-components'
import React, {Component} from "react";
import {Navigate} from "react-router-dom"; 



    export const WeBelieve = styled.span``;
    export const Entrepreneurship = styled.b``;
    export const WeBelieveEntrepreneurshipContainer1 = styled.span`
      line-break: anywhere;
      width: 100%;
    `;
    export const WeBelieveEntrepreneurshipContainer = styled.div`
      position: relative;
      letter-spacing: -0.02em;
      line-height: 32px;
      display: flex;
      align-items: center;
      width: 832px;
      z-index: 0;
    `;
    export const SplashChild = styled.div`
      position: relative;
      width: 100px;
      height: 100px;
      overflow: hidden;
      flex-shrink: 0;
      z-index: 1;
    `;
    export const ArrowIcon = styled.img`
      position: relative;
      width: 24px;
      height: 24px;
      overflow: hidden;
      flex-shrink: 0;
      display: none;
    `;
    export const Label1 = styled.div`
      position: relative;
      line-height: 24px;
    `;
    export const Label = styled.div` //changed from styled.b
      display: flex;
      flex-direction: row;
      align-items: flex-start;
      justify-content: flex-start;
      padding: 0px 8px;
    `;
    export const ArrowIcon1 = styled.img`
      position: relative;
      width: 24px;
      height: 24px;
      overflow: hidden;
      flex-shrink: 0;
    `;
    export const ButtonDefault = styled.button`  //changed from styled.div
      border-radius: 4px;
      border: 1px solid #fff;
      overflow: hidden;
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
      padding: 8px 12px;
      z-index: 2;
      font-size: 16px;
    `;
    export const GroupIcon = styled.img`
      position: relative;
      width: 16px;
      height: 16px;
    `;
    export const HaveFeedbackJoin = styled.a`
      position: relative;
      text-decoration: underline;
      line-height: 16px;
      font-weight: 500;
      color: inherit;
    `;
    export const SlackButton = styled.div`
      margin: 0 !important;
      position: absolute;
      right: 16px;
      bottom: 16px;
      border-radius: 8px;
      background-color: #050515;
      border: 1px solid #192131;
      overflow: hidden;
      display: flex;
      flex-direction: row;
      align-items: flex-start;
      justify-content: flex-start;
      padding: 8px;
      gap: 8px;
      z-index: 3;
      text-align: left;
      font-size: 12px;
    `;
    export const EeLogo2 = styled.img`
      position: absolute;
      height: 100%;
      width: 100%;
      top: 0%;
      right: 0%;
      bottom: 0%;
      left: 0%;
      max-width: 100%;
      overflow: hidden;
      max-height: 100%;
      object-fit: cover;
    `;
    export const Logo = styled.div`
      position: absolute;
      margin: 0 !important;
      top: 104px;
      left: calc(50% - 145px);
      width: 290.46px;
      height: 64px;
      z-index: 4;
    `;
     export const SplashRoot = styled.div`
      position: relative;
      width: 100%;
      height: 900px;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      padding: 334px 80px;
      box-sizing: border-box;
      gap: 40px;
      background-image: url("./images/background.png");
      background-size: cover;
      background-repeat: no-repeat;
      background-position: top;
      text-align: center;
      font-size: 20px;
      color: #fff;
      font-family: Karla;
    `;

    

export default function Welcome(){

    //redirect page to signIn
    const [goToSignIn, setGoToSignIn] = React.useState(false);
    if(goToSignIn){
        return <Navigate to="/signIn" />;
    }

    return(
        <SplashRoot>
  <WeBelieveEntrepreneurshipContainer>
    <WeBelieveEntrepreneurshipContainer1>
      <WeBelieve>{`We believe `}</WeBelieve>
      <Entrepreneurship>Entrepreneurship</Entrepreneurship>
      <WeBelieve>
        {" "}
        is the greatest way to change a life, a family, and a community. Our
        goal is to make Entrepreneurship accessible for everyone by
        surrounding founders with the resources most relevant to their
        business. We hope you like it, and appreciate any feedback you're
        willing to provide.
      </WeBelieve>
    </WeBelieveEntrepreneurshipContainer1>
  </WeBelieveEntrepreneurshipContainer>
  <SplashChild />

    

  <ButtonDefault onClick={() => {setGoToSignIn(true)}}>
    <ArrowIcon alt="" src="/arrow.svg" />
    <Label>
      <Label1>Let's get started</Label1>
    </Label>
    <ArrowIcon1 alt="" src="/arrow1.svg" />
  </ButtonDefault>
  
  
  <Logo>
    <EeLogo2 alt="" src="./images/entrpreneur.png" />
  </Logo>
</SplashRoot>
        
    )
}