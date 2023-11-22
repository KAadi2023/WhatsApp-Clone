import React, { useContext } from 'react';
import { whatsAppIcon } from '../constants/data';

// components
import LoginDialog from './account/LoginDialog';
import { AppBar, Box, Toolbar, Typography, styled } from '@mui/material'
import ChatDialog from './chat/ChatDialog';
import { AccountContext } from '../context/AccountProvider';

const Component = styled(Box)`
    height: 100vh;
    background: #DCDCDC;
`;

const Header  = styled(AppBar)`
    height: 125px;
    background-color: #00a884;
    box-shadow: none
`;

const LoginHeader  = styled(AppBar)`
    height: 222px;
    background-color: #00a884;
    box-shadow: none
`;

const Logo  = styled('img')`
  width: 35px;
  height: 35px;
`;

const LogoTitle = styled(Box)`
  display: flex;
  margin-top: 30px;
  margin-left: 100px;
`;

const Title = styled(Box)`
  margin-left: 10px;
  margin-top: 8px
`;


const Messenger = () => {

  const { account } = useContext(AccountContext);

  return (
    <Component>
      {
        account ?
          <>
            <Header>
                <Toolbar>
                    
                </Toolbar>
            </Header>
            <ChatDialog/> 
          </>
        :
        <>
          <LoginHeader>
              <Toolbar>
                  <LogoTitle>
                    <Box><Logo src={whatsAppIcon} alt="LOGO" /></Box>
                    <Title><Typography style={{}}>WHATSAPP WEB</Typography></Title>
                  </LogoTitle>
              </Toolbar>
          </LoginHeader>
          <LoginDialog/>
        </>
      }
    </Component>
  )
}

export default Messenger