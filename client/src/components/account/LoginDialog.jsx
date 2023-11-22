import { Dialog, Box, Button, Typography, List, ListItem } from '@mui/material';
import { GoogleLogin } from '@react-oauth/google';
import React, { useContext } from 'react';
import MoreVertIcon from '@mui/icons-material/MoreVert';

// components
import icon from "../../assets/getApp.png";
import styled from '@emotion/styled';
import { qrCodeImage, whatsAppIcon } from '../../constants/data';
import { jwtDecode } from 'jwt-decode';
import { AccountContext } from '../../context/AccountProvider';
import { addUser } from '../../service/api';


const dialogStyle = {
    height: '96%',
    marginTop: '17%',
    width: '80%',
    maxWidth: '100%',
    maxHeight: '100%',
    overFlow: 'hidden',
    boxShadow: 'none'
}

// -----------------------------------------------------------------------------

const LogoContainer = styled(Box)`
    margin-top: 0px;
`;

const Logo = styled('img')`
    height: 30px;
    width: 30px;
`

const GetAppLogo = styled('img')`
    width: 100px;
    height: 80px;
    margin: auto;
`;

const FirstText = styled(Typography)`
    padding-left: 10px;
    padding-right: 10px;
    color: black;
    font-weight: 300;
    font-family: inherit;
    font-size: 18px;
`;

const SecondText = styled(Typography)`
    padding-left: 10px;
    padding-right: 10px;
    font-size: 14px;
    color: #9b9da1;
`;

const GetApp = styled(Button)`
    border-radius: 30px;
    min-width: 130px;
    height: 38px;
    background: #00a884;
    color: white;
    margin: 20px 0 20px 15px;
    font-size: 13px;
`;

const UpperContainer = styled(Box)`
    padding: 56px 80px 0 80px;

`;

const ShowFlex = styled(Box)`
    display: flex;
    border: 1px solid #919192;
    padding: 30px;
    border-radius: 10px;
    height: 70px;
    min-width: 550px;
    border-opacity: 0.2;
    margin-left: 5%;
    margin-right: 5%;
`;

// -----------------------------------------------------------------------------


const Component1 = styled(Box)`
    padding: 20px 56px 0 56px;
`;

const Component2 = styled(Box)`
    display: flex;
`;

const Container = styled(Box)`
    transform: translateX(30px);
`;

const QrCode = styled('img')`
    width: 264px;
    height: 264px;
    padding-right: 56px;
    padding-left: 56px;
`;

const Title = styled(Typography)`
    font-size: 26px;
    color: #525252;
    font-weight: 300;
    font-family: inherit;
    margin-bottom: 25px;
`;

const StyledList = styled(List)`
    & > li {
        padding: 0;
        margin-top: 15px;
        font-size: 18px;
        line-height: 28px; 
        color: #4a4a4a;
    }
`;

const ListItemStyle = {
    overflow: "hidden",
    whiteSpace: "nowrap"
};

// -----------------------------------------------------------------------------

// const BottomContainer  = styled(Box)`
//     margin: auto;
//     align-items: center;
// `;


const LoginDialog = () => {

    const { setAccount } = useContext(AccountContext);

    const onLoginSuccess = async (res) =>{
        const decoded = jwtDecode(res.credential);
        setAccount(decoded);
        await addUser(decoded);
    }

    const onLoginError = (res) =>{
        console.log('Login Failed', res);
    }

  return (
    <>
        <LogoContainer>
            <Box>
                <Logo src={whatsAppIcon} alt="logo" />
            </Box>
            <Typography>WHATSAPP WEB</Typography>
        </LogoContainer>
        <Dialog 
            open={true}
            PaperProps={{sx: dialogStyle}}
            hideBackdrop={true}
        >
            <Box>
                <Box>
                    <Box>
                        <UpperContainer>
                            <ShowFlex>
                                <Box>
                                    <GetAppLogo src={icon} alt='get the App'/>
                                </Box>
                                <Box>
                                    <FirstText>Download WhatsApp for Windows</FirstText>
                                    <SecondText>Get calling, screen sharing and a faster experience with the new Windows app.</SecondText>
                                </Box>
                                <Box>
                                    <GetApp>
                                        Get the app
                                    </GetApp>
                                </Box>
                            </ShowFlex>
                        </UpperContainer>
                    </Box>
                    <Component1>
                        <Component2>
                            <Container>
                                <Title>Use WhatsApp on your computer</Title>
                                <StyledList>
                                    <ListItem>1. Open WhatsApp on your phone</ListItem>
                                    <ListItem style={ListItemStyle}>2. Go to settings by tapping on your profile photo,<b>Menu</b><MoreVertIcon/></ListItem>
                                    <ListItem>3. Tap<b>"Linked devices"</b> and then <b>"Link a device"</b></ListItem>
                                    <ListItem>4. Point your phone to this screen to capture the QR code</ListItem>
                                </StyledList>
                            </Container>
                            <Box style={{position: 'relative', transform: 'translateX(100px)'}}>
                                <QrCode src={qrCodeImage} alt="qr code" />
                                <Box style={{position: 'absolute', top: '35%', right: '15%'}} >
                                    <GoogleLogin
                                        onSuccess={onLoginSuccess}
                                        onError={onLoginError}
                                    />
                                </Box>
                            </Box>
                        </Component2>
                        <hr style={{width: '90%', opacity: '0.3', marginTop: '20px'}} />
                        <Box>
                            <a href="/">Link with phone number</a>
                        </Box>
                    </Component1>
                </Box>
                <Box>
                    {/* Tutorials */}
                </Box>
            </Box>
        </Dialog>
    </>
  )
}

export default LoginDialog