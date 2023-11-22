import { Box, Typography, styled } from '@mui/material'
import React, { useContext } from 'react'
import { AccountContext } from '../../context/AccountProvider'
import { Edit } from '@mui/icons-material';

const ImageContainer = styled(Box)`
    display: flex;
    justify-content: center;
`;

const Image = styled('img')({
    width: 200,
    height: 200,
    borderRadius: '50%',
    padding: '10px 0'
});

const BoxWrapper = styled(Box)`
    background: #FFFFFF;
    padding: 12px 30px 2px;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.5);
    & > p {
        font-size: 13px;
        color: #009688;
        font-wight: 200;
    }
    & :last-child {
        margin: 14px 0;
        height: 20px;
        & > p {
            color: #4A4A4A;
        }
        & > svg {
            margin-left: auto;
            transform: translateY(-40px);
        }
    }
    
`;

const DiscriptionContainer = styled(Box)`
    padding: 15px 20px 28px 15px;
    & > p {
        font-size: 13px;
        color: #8696a0;
    }
`;

const Profile = () => {

    const { account } = useContext(AccountContext);

  return (
    <>
        <ImageContainer>
            <Image src={account.picture} alt="DP" />
        </ImageContainer>
        <BoxWrapper>
            <Typography>Your name</Typography>
            <Box>
                <Typography>{account.name}</Typography>
                <Edit style={{ display: 'flex', justifyContent: 'left'}} />
            </Box>
        </BoxWrapper>
        <DiscriptionContainer>
            <Typography>
                This is not your username or pin. This name will be visible to your WhatsApp contacts.
            </Typography>
        </DiscriptionContainer>
        <BoxWrapper>
            <Typography>About</Typography>
            <Box>
                <Typography>No Tension No Drama , Only हरे कृष्णा...... हरे रामा!</Typography>
                <Edit style={{ display: 'flex', justifyContent: 'left'}} />
            </Box>
        </BoxWrapper>
    </>
  )
}

export default Profile