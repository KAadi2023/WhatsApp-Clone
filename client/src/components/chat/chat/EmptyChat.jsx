import { Box, Button, Typography, styled } from "@mui/material";
import React from "react";

import DeskTopHero from "../../../assets/DesktopHero.png";
import { Lock } from "@mui/icons-material";

const Image = styled("img")({
  width: 320,
  height: 188,
});

const Component = styled(Box)`
  background: #f0f2f5;
  padding: 30px 0;
  text-align: center;
  height: 100vh;
`;

const Container = styled(Box)`
  padding: 0 100px;
  margin-top: 10%;
`;

const Title = styled(Typography)`
    font-size: 36px;
    color: #41525D;
    margin-top: 38px;
    font-family: inherit;
    font-weight: 300;
`;

const SubTitle = styled(Typography)`
  font-size: 14px;
  color: #667781;
  margin-top: 24px;
  font-family: inherit;
  font-weight: 300;
`;

const ButtonStyle = styled(Button)`
  background: #008069;
  color: white;
  border-radius: 30px;
  height: 38px;
  min-width: 124px;
  font-size: 14px;
  margin-top: 10px;
`;

const BottomContainer = styled(Box)`
    display: flex;
    margin: 70px 250px ;

    & > svg {
      font-size: 18px;
      margin-right: 5px;
      color: #8696A0;
    }
`;

const BottomTitle = styled(Typography)`
  font-size: 14px;
  color: #8696A0;
`;

const EmptyChat = () => {
  return (
    <Component>
      <Container>
        <Image src={DeskTopHero} alt="image" />
        <Title>Download WhatsApp for Windows</Title>
        <SubTitle>
          Make calls, share your screen and get a faster experience when you
          download the Windows app.
        </SubTitle>
        <ButtonStyle>Get the app</ButtonStyle>
      </Container>
      <BottomContainer>
        <Lock/>
        <BottomTitle>Your personal messages are end-to-end encrypted</BottomTitle>
      </BottomContainer>
    </Component>
  );
};

export default EmptyChat;
