import React, {Component} from "react";
import {Navigate} from "react-router-dom"; 


    import styled from "styled-components";

    export const ResoluteFuture = styled.span`
      font-weight: 800;
    `;
    export const BelievesTheFuture = styled.span``;
    export const ResoluteFutureBelievesContainer = styled.div`
      align-self: stretch;
      position: relative;
      letter-spacing: -0.02em;
      line-height: 32px;
      z-index: 0;
    `;
    export const WeAreResoluteContainer = styled.div`
      align-self: stretch;
      position: relative;
      letter-spacing: -0.02em;
      line-height: 32px;
      z-index: 1;
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
      top: 80px;
      left: 80px;
      width: 181.54px;
      height: 40px;
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
      background-image: url("./images/background.png");
      background-size: cover;
      background-repeat: no-repeat;
      background-position: top;
      font-size: 20px;
    `;
    export const DontHaveAn = styled.div`
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
    export const HelloAgain = styled.b`
      align-self: stretch;
      position: relative;
      line-height: 40px;
    `;
    export const ItIsNice = styled.div`
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
    export const CheckIcon = styled.img`
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
    export const EyeIcon = styled.img`
      position: relative;
      width: 16px;
      height: 16px;
      overflow: hidden;
      flex-shrink: 0;
      mix-blend-mode: normal;
    `;
    export const InputFieldParent = styled.div`
      align-self: stretch;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: flex-start;
      gap: 24px;
      font-size: 12px;
      color: #64717f;
    `;
    export const ForgotPassword = styled.b`
      position: relative;
      font-size: 14px;
      text-decoration: underline;
      line-height: 20px;
    `;
    export const ArrowIcon2 = styled.img`
      position: relative;
      width: 24px;
      height: 24px;
      overflow: hidden;
      flex-shrink: 0;
      display: none;
    `;
    export const DontHaveAn1 = styled.b`
      position: relative;
      line-height: 24px;
    `;
    export const ArrowIcon3 = styled.img`
      position: relative;
      width: 24px;
      height: 24px;
      overflow: hidden;
      flex-shrink: 0;
    `;
    export const ButtonDefault1 = styled.div`
      align-self: stretch;
      border-radius: 4px;
      background-color: #0f5ec2;
      overflow: hidden;
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
      padding: 8px 12px;
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
    export const SigninRoot = styled.div`
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

export default function SignIn(){

    //redirect page to create account
    const [goToCreateAccount, setGoToCreateAccount] = React.useState(false);
    if(goToCreateAccount){
        return <Navigate to="/createAccount" />;
    }

    return(
        <SigninRoot>
  <Frame>
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
    <Logo>
      <EeLogo2 alt="" src="./images/entrpreneur.png" />
    </Logo>

        

  </Frame>
  <Signup>
    <DontHaveAn>Don't have an account?</DontHaveAn>
    <ButtonDefault onClick={() => {setGoToCreateAccount(true)}}>
      <ArrowIcon alt="" src="/arrow.svg" />
      <Label>
        <Label1>Create new account</Label1>
      </Label>
      <ArrowIcon alt="" src="/arrow.svg" />
    </ButtonDefault>
  </Signup>
  <Form>
    <Copy>
      <HelloAgain>Hello again!</HelloAgain>
      <ItIsNice>It is nice to have you back.</ItIsNice>
    </Copy>
    <InputFieldParent>
      <InputField>
        <Label2>
          <Label3>Email</Label3>
        </Label2>
        <Input>
          <SearchIcon alt="" src="/arrow.svg" />
          <InputText>michael.kelly@email.com</InputText>
          <CheckIcon alt="" src="/check.svg" />
        </Input>
      </InputField>
      <InputField>
        <Label2>
          <Label3>Password</Label3>
        </Label2>
        <Input>
          <SearchIcon alt="" src="/arrow.svg" />
          <InputText>••••••••••</InputText>
          <EyeIcon alt="" src="/eye.svg" />
        </Input>
      </InputField>
    </InputFieldParent>
    <ForgotPassword>Forgot password?</ForgotPassword>
    <ButtonDefault1>
      <ArrowIcon2 alt="" src="/arrow.svg" />
      <Label>
        <DontHaveAn1>Log in</DontHaveAn1>
      </Label>
      <ArrowIcon3 alt="" src="/arrow1.svg" />
    </ButtonDefault1>
  </Form>
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
</SigninRoot>
       
    )
}