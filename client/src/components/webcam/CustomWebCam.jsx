import { Close, PhotoCamera } from '@mui/icons-material';
import { Box, Drawer, Fab, Typography, styled } from '@mui/material'
import React, { useRef } from 'react';
import Webcam from 'react-webcam'

const drawerStyle = {
    left: 475,
    top: 75,
    height: 'fit-content',
    width: 'fit-content',
    boxShadow: 'none'
}

const Header  = styled(Box)`
    height: 50px;
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

const FabStyle = styled(Fab)`
    position: absolute;
    bottom: 10px;
    left: 45%;
`


const CustomWebCam = ({open, setOpen}) => {

    const handleClose = () =>{
        setOpen(false);
    }

    const WebRef = useRef(null);

    const getImage = () =>{
        let image = WebRef.current.getScreenshot();
        console.log(image);
    }

  return (
    <Drawer
        open={open}
        anchor='bottom'
        onClose={handleClose}
        PaperProps={{ sx: drawerStyle }}
        style={{ zIndex: 1500 }}
    >
    <Header>
        <Close onClick={() => setOpen(false)} />
        <Typography>Take Photo</Typography>
    </Header>
    <Box>
        
        <FabStyle onClick={()=>{getImage()}} color="primary" aria-label="add">
            <PhotoCamera />
        </FabStyle>
        <Webcam/>
    </Box>
    </Drawer>
  )
}

export default CustomWebCam