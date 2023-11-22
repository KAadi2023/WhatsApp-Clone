import styled from "@emotion/styled";
import { MoreVert } from "@mui/icons-material";
import { Menu, MenuItem } from "@mui/material";
import React, { useState } from "react";


const MenuOption = styled(MenuItem)`
    font-size: 14px;
    padding: 15px 60px 5px 24px;
    color: #4A4A4A;
`;

const HeaderMenu = ({ setOpenDrawer }) => {

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
            vertical: 'bottom',
            horizontal: 'center'
        }}
        transformOrigin={{
            vertical: 'top',
            horizontal: 'right'
        }}
      >
        <MenuOption onClick={handleClose}>New group</MenuOption>
        <MenuOption onClick={handleClose}>New Community</MenuOption>
        <MenuOption onClick={handleClose}>Archived</MenuOption>
        <MenuOption onClick={handleClose}>Starred messages</MenuOption>
        <MenuOption onClick={handleClose}>Select chats</MenuOption>
        <MenuOption onClick={handleClose}>Settings</MenuOption>
        <MenuOption onClick={handleClose}>Logout</MenuOption>
        <hr />
        <MenuOption onClick={handleClose}>Get WhatsApp for Windows</MenuOption>
      </Menu>
    </>
  );
};

export default HeaderMenu;
