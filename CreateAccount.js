import React, {Component} from "react";
import {Navigate} from "react-router-dom"; 

import {useState} from "react-router-dom"; 

import {useNavigate} from "react-router-dom"; 


import styled from "styled-components";

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
  top: 80px;
  left: 80px;
  width: 181.54px;
  height: 40px;
  z-index: 0;
`;
export const ResoluteFuture = styled.span`
  font-weight: 800;
`;
export const BelievesTheFuture = styled.span``;
export const ResoluteFutureBelievesContainer = styled.div`
  align-self: stretch;
  position: relative;
  letter-spacing: -0.02em;
  line-height: 32px;
  z-index: 1;
`;
export const WeAreResoluteContainer = styled.div`
  align-self: stretch;
  position: relative;
  letter-spacing: -0.02em;
  line-height: 32px;
  z-index: 2;
`;
export const Frame = styled.div`
  position: absolute;
  height: 100%;
  width: calc(100% - 752px);
  top: 0px;
  right: 752px;
  bottom: 0px;
  left: 0px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding: 80px 160px 80px 80px;
  box-sizing: border-box;
  gap: 40px;
  background-image: url("/frame@3x.png");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: top;
  font-size: 20px;
`;
export const AlreadyHaveAn1 = styled.div`
  position: relative;
  line-height: 24px;
`;
export const ArrowIcon5 = styled.img`
  position: relative;
  width: 16px;
  height: 16px;
  overflow: hidden;
  flex-shrink: 0;
  display: none;
`;
export const Label1 = styled.b`
  position: relative;
  line-height: 20px;
`;
export const Label = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0px 8px;
`;
export const ButtonDefault3 = styled.div`
  border-radius: 4px;
  background-color: #0f5ec2;
  overflow: hidden;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 6px 8px;
  text-align: center;
  font-size: 14px;
  color: #fff;
`;
export const Signup = styled.div`
  position: absolute;
  top: 40px;
  right: 81px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: 16px;
  text-align: right;
  font-size: 16px;
  color: #192131;
`;
export const CreateNewAccount1 = styled.b`
  align-self: stretch;
  position: relative;
  line-height: 40px;
`;
export const WeNeedA1 = styled.div`
  align-self: stretch;
  position: relative;
  font-size: 16px;
  line-height: 24px;
  font-family: Karla;
  color: #192131;
`;
export const Copy = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 10px;
  font-family: Montserrat;
`;
export const Label3 = styled.div`
  position: relative;
  line-height: 16px;
  font-weight: 500;
`;
export const Label2 = styled.div`
  background-color: #fff;
  height: 2px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  padding: 0px 4px;
  box-sizing: border-box;
`;
export const SearchIcon4 = styled.img`
  position: relative;
  width: 16px;
  height: 16px;
  overflow: hidden;
  flex-shrink: 0;
  display: none;
  mix-blend-mode: normal;
`;
export const InputText4 = styled.div`
  flex: 1;
  position: relative;
  line-height: 24px;
`;
export const CheckIcon4 = styled.img`
  position: relative;
  width: 16px;
  height: 16px;
  overflow: hidden;
  flex-shrink: 0;
`;
export const Input = styled.div`
  align-self: stretch;
  flex: 1;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: 8px;
  font-size: 16px;
`;
export const InputField = styled.div`
  flex: 1;
  border-radius: 4px;
  background-color: #fff;
  border: 1px solid #d9dbdd;
  box-sizing: border-box;
  height: 40px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0px 12px;
`;
export const Name1 = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 8px;
`;
export const InputField2 = styled.div`
  align-self: stretch;
  border-radius: 4px;
  background-color: #fff;
  border: 1px solid #d9dbdd;
  box-sizing: border-box;
  height: 40px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0px 12px;
`;
export const Form1 = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 24px;
  font-size: 12px;
  color: #64717f;
`;
export const CheckboxItemIcon1 = styled.img`
  position: relative;
  width: 20px;
  height: 20px;
`;
export const Terms = styled.b`
  text-decoration: underline;
  color: #0f5ec2;
`;
export const Label11 = styled.div`
  position: relative;
  line-height: 20px;
`;
export const Checkbox = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: 8px;
  font-size: 14px;
  color: #050515;
`;
export const ArrowIcon7 = styled.img`
  position: relative;
  width: 24px;
  height: 24px;
  overflow: hidden;
  flex-shrink: 0;
  display: none;
`;
export const AlreadyHaveAn11 = styled.b`
  position: relative;
  line-height: 24px;
`;
export const ArrowIcon8 = styled.img`
  position: relative;
  width: 24px;
  height: 24px;
  overflow: hidden;
  flex-shrink: 0;
`;
export const ButtonDefault4 = styled.div`
  align-self: stretch;
  border-radius: 4px;
  background-color: #0f5ec2;
  overflow: hidden;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 8px 12px;
`;
export const ItemText3 = styled.div`
  align-self: stretch;
  position: relative;
  font-size: 14px;
  line-height: 20px;
  color: #050515;
`;
export const Google1 = styled.div`
  position: relative;
  width: 24px;
  height: 24px;
`;
export const ButtonDefault5 = styled.div`
  align-self: stretch;
  border-radius: 4px;
  border: 1px solid #d9dbdd;
  overflow: hidden;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 8px 12px;
  color: #0f5ec2;
`;
export const Buttons = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 24px;
  text-align: center;
  font-size: 16px;
  color: #fff;
`;
export const Form = styled.div`
  position: absolute;
  top: 148px;
  left: 864px;
  width: 384px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 32px;
  font-size: 32px;
  color: #0f5ec2;
`;
export const TermsConditions1 = styled.div`
  position: relative;
  text-decoration: underline;
  line-height: 16px;
  font-weight: 500;
`;
export const Frame1 = styled.div`
  position: absolute;
  bottom: 40px;
  left: 752px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 32px;
  color: #0f5ec2;
`;
export const Span = styled.span`
  font-weight: 500;
`;
export const AllRightsReserved1 = styled.span`
  font-weight: 500;
  font-family: Karla;
`;
export const AllRightsReservedContainer = styled.div`
  position: absolute;
  right: 80px;
  bottom: 40px;
  line-height: 16px;
  color: #64717f;
  text-align: right;
  font-family: Montserrat;
`;
export const GroupIcon1 = styled.img`
  position: relative;
  width: 16px;
  height: 16px;
`;
export const HaveFeedbackJoin1 = styled.a`
  position: relative;
  text-decoration: underline;
  line-height: 16px;
  font-weight: 500;
  color: inherit;
`;
export const SlackButton1 = styled.div`
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
`;
export const Signup1Root = styled.div`
  position: relative;
  background-color: #fff;
  width: 100%;
  height: 900px;
  overflow: hidden;
  text-align: left;
  font-size: 12px;
  color: #fff;
  font-family: Karla;
`;

export default function CreateAccount(){

    //vairables for redirect
    const [goToSignIn, setGoToSignIn] = React.useState(false);
    const [goToMakePassword, setGoToMakePassword] = React.useState(false);
    

    //redirect page to signIn
    if(goToSignIn){return <Navigate to="/signIn" />;}

    //redirect page to createPassword
    if(goToMakePassword){return <Navigate to="/MakePassword" />;}
    

    return(
        <Signup1Root>
  <Frame>
    <Logo>
      <EeLogo2 alt="" src="/ee-logo-2@2x.png" />
    </Logo>
    <ResoluteFutureBelievesContainer>
      <ResoluteFuture>Resolute Future</ResoluteFuture>
      <BelievesTheFuture>
        {" "}
        believes the future is filled with people who take control of their
        lives and their time to pursue their passions.
      </BelievesTheFuture>
    </ResoluteFutureBelievesContainer>
    <WeAreResoluteContainer>
      <BelievesTheFuture>{`We are resolute in our mission to remove the friction in the Entrepreneurial world and create a `}</BelievesTheFuture>
      <ResoluteFuture>Future of Entrepreneurs</ResoluteFuture>
      <BelievesTheFuture>.</BelievesTheFuture>
    </WeAreResoluteContainer>
  </Frame>
  <Signup>
    <AlreadyHaveAn1>Already have an account?</AlreadyHaveAn1>
    <ButtonDefault3 onClick={() => {setGoToSignIn(true)}}>
      <ArrowIcon5 alt="" src="/arrow.svg" />
      <Label>
        <Label1>Sign in</Label1>
      </Label>
      <ArrowIcon5 alt="" src="/arrow.svg" />
    </ButtonDefault3>
  </Signup>
  <Form>
    <Copy>
      <CreateNewAccount1>Create new account</CreateNewAccount1>
      <WeNeedA1>
        We need a new world of Entrepreneurship for Entrepreneurs, by
        Entrepreneurs. Enter your details below to help shape this new
        world.
      </WeNeedA1>
    </Copy>
    <Form1>
      <Name1>
        <InputField>
          <Label2>
            <Label3>First Name</Label3>
          </Label2>
          <Input>
            <SearchIcon4 alt="" src="/arrow.svg" />
            <InputText4>Michael</InputText4>
            <CheckIcon4 alt="" src="/check.svg" />
          </Input>
        </InputField>
        <InputField>
          <Label2>
            <Label3>Last Name</Label3>
          </Label2>
          <Input>
            <SearchIcon4 alt="" src="/arrow.svg" />
            <InputText4>Kelly</InputText4>
            <CheckIcon4 alt="" src="/check.svg" />
          </Input>
        </InputField>
      </Name1>
      <InputField2>
        <Label2>
          <Label3>Email Address</Label3>
        </Label2>
        <Input>
          <SearchIcon4 alt="" src="/arrow.svg" />
          <InputText4>michael.kelly@email.com</InputText4>
          <CheckIcon4 alt="" src="/check.svg" />
        </Input>
      </InputField2>
      <InputField2>
        <Label2>
          <Label3>Phone Number</Label3>
        </Label2>
        <Input>
          <SearchIcon4 alt="" src="/arrow.svg" />
          <InputText4>000 000 000</InputText4>
          <CheckIcon4 alt="" src="/check1.svg" />
        </Input>
      </InputField2>
    </Form1>
    <Checkbox>
      <CheckboxItemIcon1 alt="" src="/checkbox-item.svg" />
      <Label11>
        <BelievesTheFuture>{`I agree to all the `}</BelievesTheFuture>
        <Terms>Terms</Terms>
        <BelievesTheFuture>{` and `}</BelievesTheFuture>
        <Terms>{`Privacy policy `}</Terms>
      </Label11>
    </Checkbox>
    <Buttons>
      <ButtonDefault4 onClick={() => {setGoToMakePassword(true)}}>
        <ArrowIcon7 alt="" src="/arrow.svg" />
        <Label>
          <AlreadyHaveAn11>Continue</AlreadyHaveAn11>
        </Label>
        <ArrowIcon8 alt="" src="/arrow1.svg" />
      </ButtonDefault4>
      <ItemText3>Or</ItemText3>
      <ButtonDefault5>
        <Google1>
          <EeLogo2 alt="" src="/iconfinder-google-1298745-1@2x.png" />
        </Google1>
        <Label>
          <AlreadyHaveAn11>Sign in with Google</AlreadyHaveAn11>
        </Label>
        <ArrowIcon7 alt="" src="/arrow.svg" />
      </ButtonDefault5>
    </Buttons>
  </Form>
  <Frame1>
    <TermsConditions1>{`Terms & Conditions`}</TermsConditions1>
    <TermsConditions1>Privacy Policy</TermsConditions1>
  </Frame1>
  <AllRightsReservedContainer>
    <Span>©</Span>
    <AllRightsReserved1> 2020 All rights reserved.</AllRightsReserved1>
  </AllRightsReservedContainer>
  <SlackButton1>
    <GroupIcon1 alt="" src="/group.svg" />
    <HaveFeedbackJoin1
      href="https://join.slack.com/share/enQtMzkxODMxNTg4OTE1OC05NWU4MDQ0ZjBhNDZlMjhjNmY0OGMzYjI3MmI4ZTg1ZWVhM2Y5YjA4Yjg1NzBhOWMyYTM0NzYyNWYzYTViNWY3"
      target="_blank"
    >
      Have feedback? Join our slack
    </HaveFeedbackJoin1>
  </SlackButton1>
</Signup1Root>
       
    )
}