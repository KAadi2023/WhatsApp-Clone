import { Box, Typography, styled } from '@mui/material'
import React, { useContext } from 'react';
import { formatDate, downloadMedia } from '../../../utils/common-utils';
import { AccountContext } from '../../../context/AccountProvider';
import { GetApp } from '@mui/icons-material';
import { iconPDF } from '../../../constants/data'

const Own = styled(Box)`
    background: #dcf8c6;
    max-width: 60%;
    margin: 5px 15px 0 auto;
    padding: 5px;
    width: fit-content;
    display: flex;
    border-radius: 10px;
    align-items: end
`;

const Received = styled(Box)`
    background: #FFFFFF;
    max-width: 60%;
    margin: 5px 0 0 15px;
    padding: 5px;
    width: fit-content;
    display: flex;
    border-radius: 10px;
`;

const Text = styled(Typography)`
    font-size: 14px;
    padding: 0 15px 0 5px;
    word-break: break-word;
`;

const Time = styled(Typography)`
    font-size: 10px;
    color: #919191;
    margin-top: 6px;
    // word-break: keep all;
    margin-top: auto;

`;

const Message = ({ message }) => {

    const { account } = useContext(AccountContext);

  return (
    <>
        {
            account.sub === message.senderId ?
                <Own>
                    {
                        message.type === 'file' ? <ImageMessage message={message} /> : <TextMessage message={message} />
                    }
                </Own>
            :
                <Received>
                    {
                        message.type === 'file' ? <ImageMessage message={message} /> : <TextMessage message={message} />
                    }
                </Received>
        }   
    </>
    
  )
}

const ImageMessage = ({ message }) => {
    return (
        <Box style={{ position: 'relative'}}>
            {
                message?.text?.includes('.pdf') ? 
                <Box style={{display: 'flex'}}>
                    <img src={iconPDF} style={{ width: 80}} alt="pdf" />
                    <Typography style={{ fontSize: 14}}>{message.text.split('/').pop()}</Typography>
                </Box>
                :
                <img src={message.text} style={{ width: 300, height: '100%', objectFit: 'cover'}} alt={message.text} />
            }
            <Time style={{ position: 'absolute', bottom: 0, right: 0}}>
                <GetApp
                    onClick={(e)=> downloadMedia(e, message.text)}
                    style={{ marginRight: 10, border: '1px solid grey', borderRadius: '50%', fontSize: 'small'}}
                />
                {formatDate(message.createdAt)}</Time>
        </Box>
    )
}

const TextMessage = ({ message }) => {
    return (
        <>
            <Text>{message.text}</Text>
            <Time>{formatDate(message.createdAt)}</Time>
        </>
    )
}

export default Message;