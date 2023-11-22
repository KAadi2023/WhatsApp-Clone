import { ArrowBack } from '@mui/icons-material';
import { Box, Drawer, Typography, styled } from '@mui/material'
import React from 'react';
import Profile from './Profile';


const drawerStyle = {
    left: 20,
    top: 12.5,
    height: '96%',
    width: '34.5%',
    boxShadow: 'none'
}

const Header  = styled(Box)`
    height: 107px;
    background-color: #008069;
    // box-shadow: none;
    color: #FFFFFF;
    display: flex;
    & > p {
        margin-top: auto;
        padding: 15px;
        font-weight: 600px;
        font-size: 19px;
    }
    & > svg {
        margin-top: auto;
        padding: 15px;
        font-weight: 600px;
        font-size: 24px;
    }
`;

const Component = styled(Box)`
    background: #F0F2F5;
    height: 85%;
`

const InfoDrawer = ({open, setOpen}) => {

    const handleClose = () =>{
        setOpen(false);
    }

  return (
    <Drawer
        open={open}
        onClose={handleClose}
        PaperProps={{ sx: drawerStyle }}
        style={{ zIndex: 1500 }}
    >
    <Header>
        <ArrowBack onClick={() => setOpen(false)} />
        <Typography>Profile</Typography>
    </Header>
    <Component>
        <Profile/>
    </Component>
    </Drawer>
  )
}

export default InfoDrawer