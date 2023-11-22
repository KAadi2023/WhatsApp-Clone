import { EmojiEmotionsOutlined, Mic } from '@mui/icons-material'

import { Box, InputBase, styled } from '@mui/material'
import React from 'react'
import ChatFooterMenu from './ChatFooterMenu';


const Component = styled(Box)`
    height: 44px;
    background: #ededed;
    display: flex;
    width: 100%;
    align-items: center;
    & > * {
        margin: 5px;
        padding: 0 10px;
    }
    & > svg {
        color: black;
        opacity: 0.6;
    }
`;

const InputField = styled(InputBase)`
    width: 100%;
    padding: 16px;
    background: #FFFFFF;
    color: grey;
    height: 15px;
    padding-left: 10px;
    font-size: 13px;
    border-radius: 5px;
`;

const Wrapper = styled(Box)`
    background-color: #FFFFFF;
    padding: 0 8px;
    position: relative;
    margin: 0 10px;
    border-radius: 5px;
    width: 100%;
    display: flex;
    align-items: center;
    & > svg {
        color: black;
        opacity: 0.6;
    }
`;


const ChatFooter = ({ sendText, setValue, value, file, setFile, setImage }) => {


  return (
    <Component>
        <ChatFooterMenu value={value} setValue={setValue} file={file} setFile={setFile} setImage={setImage}/>
        <Wrapper>
            <EmojiEmotionsOutlined/>
            <InputField
                placeholder='Type a message'
                onChange={(e)=> setValue(e.target.value)}
                onKeyPress={(e)=> sendText(e)}
                value={value}
            />
        </Wrapper>
        <Mic/>

    </Component>
  )
}

export default ChatFooter