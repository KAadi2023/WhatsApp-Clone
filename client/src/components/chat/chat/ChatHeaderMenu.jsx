import styled from "@emotion/styled";
import { MoreVert } from "@mui/icons-material";
import { Menu, MenuItem } from "@mui/material";
import React, { useState } from "react";


const MenuOption = styled(MenuItem)`
    font-size: 14px;
    padding: 5px 10px 5px 10px;
    color: #4A4A4A;
`;

const ChatHeaderMenu = () => {

    const [open, setOpen] = useState(null);

    const handleClose = () => {
        setOpen(null);
    }

    const handleClick = (e) => {
        setOpen(e.currentTarget);
    }

  return (
    <>
      <MoreVert onClick={handleClick} />
      <Menu
        anchorEl={open}
        keepMounted
        open={open}
        onClose={handleClose}
        getContentAnchorE1={null}
        anchorOrigin={{
            vertical: 'top',
            horizontal: 'left'
        }}
        transformOrigin={{
          vertical: 'bottom',
          horizontal: 'center'
        }}
      >
        <MenuOption onClick={handleClose}>Contact info</MenuOption>
        <MenuOption onClick={handleClose}>Select messages</MenuOption>
        <MenuOption onClick={handleClose}>Close Chat</MenuOption>
        <MenuOption onClick={handleClose}>Mute notification</MenuOption>
        <MenuOption onClick={handleClose}>Disappearing messages</MenuOption>
        <MenuOption onClick={handleClose}>Clear Chat</MenuOption>
        <MenuOption onClick={handleClose}>Delete Chat</MenuOption>
        <MenuOption onClick={handleClose}>Report</MenuOption>
        <MenuOption onClick={handleClose}>Block</MenuOption>
      </Menu>
    </>
  );
};

export default ChatHeaderMenu;
