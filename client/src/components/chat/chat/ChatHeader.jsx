import { Box, Typography, styled } from '@mui/material'
import React, { useContext }  from 'react'

import { Search, Videocam } from '@mui/icons-material'
import ChatHeaderMenu from './ChatHeaderMenu';
import { AccountContext } from '../../../context/AccountProvider';


const Component = styled(Box)`
    height: 44px;
    background: #ededed;
    padding: 8px 16px;
    display: flex;
    align-items: center;
    cursor: pointer;
`;

const Image = styled('img')({
    width: 40,
    height: 40,
    borderRadius: '50%'
});

const Name = styled(Typography)`
    margin-left: 12px !important;
`;

const Status = styled(Typography)`
    margin-left: 12px !important;
    font-size: 12px;
    color: rgb(0, 0, 0, 0.6);
`;

const RightContainer = styled(Box)`
    margin-left: auto;
    & > svg {
        padding: 8px;
        font-size: 22px;
        color: #000;
        cursor: pointer;
    }
`;

const ChatHeader = ({ person }) => {

    const { activeUsers } = useContext(AccountContext);

  return (
    <Component>
        <Image src={person.picture} alt="dp" />
        <Box> 
            <Name>{person.name}</Name>
            <Status>{activeUsers?.find(user => user.sub === person.sub) ? 'Online' : 'Offline'}</Status>
        </Box>
        <RightContainer>
            <Videocam/>
            <Search/>
            <ChatHeaderMenu/>
        </RightContainer>
    </Component>
  )
}

export default ChatHeader