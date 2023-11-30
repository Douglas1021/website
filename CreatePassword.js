import React, {Component} from "react";
import {Navigate} from "react-router-dom"; 

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
export const AlreadyHaveAn = styled.div`
  position: relative;
  line-height: 24px;
`;
export const ArrowIcon = styled.img`
  position: relative;
  width: 16px;
  height: 16px;
  overflow: hidden;
  flex-shrink: 0;
  display: none;
`;
export const ItemText = styled.b`
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
export const ButtonDefault = styled.div`
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
export const CheckIcon = styled.img`
  position: relative;
  width: 16px;
  height: 16px;
  overflow: hidden;
  flex-shrink: 0;
`;
export const ButtonDefault1 = styled.div`
  position: absolute;
  top: 40px;
  left: 864px;
  border-radius: 4px;
  border: 1px solid #d9dbdd;
  overflow: hidden;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 6px 8px;
  text-align: center;
  font-size: 14px;
  color: #0f5ec2;
`;
export const CreatePassword = styled.b`
  align-self: stretch;
  position: relative;
  line-height: 40px;
`;
export const PleaseCreateA = styled.div`
  align-self: stretch;
  position: relative;
  font-size: 16px;
  line-height: 24px;
  font-family: Karla;
  color: #192131;
`;
export const Copy = styled.div`
  position: absolute;
  top: 148px;
  left: 864px;
  width: 384px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 10px;
  font-size: 32px;
  color: #0f5ec2;
  font-family: Montserrat;
`;
export const Label5 = styled.div`
  position: relative;
  line-height: 16px;
  font-weight: 500;
`;
export const Label4 = styled.div`
  background-color: #fff;
  height: 2px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  padding: 0px 4px;
  box-sizing: border-box;
`;
export const SearchIcon = styled.img`
  position: relative;
  width: 16px;
  height: 16px;
  overflow: hidden;
  flex-shrink: 0;
  display: none;
  mix-blend-mode: normal;
`;
export const InputText = styled.div`
  flex: 1;
  position: relative;
  line-height: 24px;
`;
export const EyeIcon = styled.img`
  position: relative;
  width: 16px;
  height: 16px;
  overflow: hidden;
  flex-shrink: 0;
  mix-blend-mode: normal;
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
  border-radius: 4px;
  background-color: #fff;
  border: 1px solid #d9dbdd;
  box-sizing: border-box;
  width: 384px;
  height: 40px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0px 12px;
`;
export const Form = styled.div`
  position: absolute;
  top: 278px;
  left: 864px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 24px;
  color: #64717f;
`;
export const ArrowIcon4 = styled.img`
  position: relative;
  width: 24px;
  height: 24px;
  overflow: hidden;
  flex-shrink: 0;
  display: none;
`;
export const AlreadyHaveAn1 = styled.b`
  position: relative;
  line-height: 24px;
`;
export const ArrowIcon5 = styled.img`
  position: relative;
  width: 24px;
  height: 24px;
  overflow: hidden;
  flex-shrink: 0;
`;
export const ButtonDefault2 = styled.div`
  position: absolute;
  top: 550px;
  left: 864px;
  border-radius: 4px;
  background-color: #0f5ec2;
  width: 384px;
  overflow: hidden;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 8px 12px;
  box-sizing: border-box;
  text-align: center;
  font-size: 16px;
`;
export const CheckWrapper = styled.div`
  border-radius: 2px;
  background-color: #0f5ec2;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 2px;
`;
export const ItemText1 = styled.div`
  position: relative;
  line-height: 20px;
`;
export const Checkbox = styled.div`
  width: 384px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: 8px;
`;
export const CheckFrame = styled.div`
  border-radius: 2px;
  background-color: #f4f5f7;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 2px;
`;
export const CheckboxParent = styled.div`
  position: absolute;
  top: 414px;
  left: 864px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 8px;
  font-size: 14px;
  color: #050515;
`;
export const TermsConditions = styled.div`
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
export const AllRightsReserved = styled.span`
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
export const Signup2Root = styled.div`
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

export default function MakePassword(){

  const [goToCreatePassword, setGoToCreatePassword] = React.useState(false);

  //redirect page to signIn
  if(goToCreatePassword){return <Navigate to="/createAccount" />;}

    return(
        <Signup2Root>
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
    <AlreadyHaveAn>Already have an account?</AlreadyHaveAn>
    <ButtonDefault>
      <ArrowIcon alt="" src="/arrow.svg" />
      <Label>
        <ItemText>Sign in</ItemText>
      </Label>
      <ArrowIcon alt="" src="/arrow.svg" />
    </ButtonDefault>
  </Signup>
  <ButtonDefault1 onClick={() => {setGoToCreatePassword(true)}}>
    <CheckIcon alt="" src="/arrow1.svg" />
    <Label>
      <ItemText>Back</ItemText>
    </Label>
    <ArrowIcon alt="" src="/arrow.svg" />
  </ButtonDefault1>
  <Copy>
    <CreatePassword>Create password</CreatePassword>
    <PleaseCreateA>
      Please create a secure password including the following criteria
      below.
    </PleaseCreateA>
  </Copy>
  <Form>
    <InputField>
      <Label4>
        <Label5>Password</Label5>
      </Label4>
      <Input>
        <SearchIcon alt="" src="/arrow.svg" />
        <InputText>••••••••••</InputText>
        <EyeIcon alt="" src="/eye.svg" />
      </Input>
    </InputField>
    <InputField>
      <Label4>
        <Label5>Confirm Password</Label5>
      </Label4>
      <Input>
        <SearchIcon alt="" src="/arrow.svg" />
        <InputText>••••••••••</InputText>
        <EyeIcon alt="" src="/eye.svg" />
      </Input>
    </InputField>
  </Form>
  <ButtonDefault2>
    <ArrowIcon4 alt="" src="/arrow.svg" />
    <Label>
      <AlreadyHaveAn1>Let's get started</AlreadyHaveAn1>
    </Label>
    <ArrowIcon5 alt="" src="/arrow2.svg" />
  </ButtonDefault2>
  <CheckboxParent>
    <Checkbox>
      <CheckWrapper>
        <CheckIcon alt="" src="/check.svg" />
      </CheckWrapper>
      <ItemText1>At least 1 lower-case letter</ItemText1>
    </Checkbox>
    <Checkbox>
      <CheckWrapper>
        <CheckIcon alt="" src="/check1.svg" />
      </CheckWrapper>
      <ItemText1>At least 1 upper-case letter</ItemText1>
    </Checkbox>
    <Checkbox>
      <CheckFrame>
        <CheckIcon alt="" src="/check2.svg" />
      </CheckFrame>
      <ItemText1>
        At least 1 number or special character letter (e.g @#$)
      </ItemText1>
    </Checkbox>
    <Checkbox>
      <CheckFrame>
        <CheckIcon alt="" src="/check3.svg" />
      </CheckFrame>
      <ItemText1>At least 8 total characters</ItemText1>
    </Checkbox>
  </CheckboxParent>
  <Frame1>
    <TermsConditions>{`Terms & Conditions`}</TermsConditions>
    <TermsConditions>Privacy Policy</TermsConditions>
  </Frame1>
  <AllRightsReservedContainer>
    <Span>©</Span>
    <AllRightsReserved> 2020 All rights reserved.</AllRightsReserved>
  </AllRightsReservedContainer>
  <SlackButton>
    <GroupIcon alt="" src="/group.svg" />
    <HaveFeedbackJoin
      href="https://join.slack.com/share/enQtMzkxODMxNTg4OTE1OC05NWU4MDQ0ZjBhNDZlMjhjNmY0OGMzYjI3MmI4ZTg1ZWVhM2Y5YjA4Yjg1NzBhOWMyYTM0NzYyNWYzYTViNWY3"
      target="_blank"
    >
      Have feedback? Join our slack
    </HaveFeedbackJoin>
  </SlackButton>
</Signup2Root>
    )
}