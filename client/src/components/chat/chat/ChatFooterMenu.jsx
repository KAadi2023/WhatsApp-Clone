import styled from "@emotion/styled";
import {
  Add,
  AddReaction,
  Close,
  Description,
  PermMedia,
  Person,
  PhotoCamera,
  Poll,
} from "@mui/icons-material";
import { Menu, MenuItem } from "@mui/material";
import React, { useEffect, useState } from "react";
import CustomWebCam from "../../webcam/CustomWebCam";
import { uploadFile } from "../../../service/api";

const MenuOption = styled(MenuItem)`
  font-size: 14px;
  padding: 3px 40px 5px 10px;
  color: #4a4a4a;
  margin: 5px;
  display: flex;

  & > * {
    padding-right: 10px;
  }
`;

const DesriptionStyle = styled(Description)`
  color: #7f66ff;
`;

const PermMediaStyle = styled(PermMedia)`
  color: #007bfc;
`;
const PhotoCameraStyle = styled(PhotoCamera)`
  color: #ff2e74;
`;
const PersonStyle = styled(Person)`
  color: #009de2;
`;
const PollStyle = styled(Poll)`
  color: #ffbc38;
`;
const AddReactionStyle = styled(AddReaction)`
  color: #02a698;
`;

const ChatFooterMenu = ({value, setValue, file, setFile, setImage}) => {
  const [open, setOpen] = useState(null);

  const [toggle, setToggle] = useState(false);

  useEffect(() => {
    const getImage = async () => {
      if(file){
        const data = new FormData();
        data.append("name", file.name);
        data.append("file", file);

        let response = await uploadFile(data);
        setImage(response.data);
      }
    }
    getImage();
  }, [file])
  

  const handleClose = () => {
    setOpen(null);
    setToggle(false);
  };

  const handleClick = (e) => {
    setToggle(true);
    setOpen(e.currentTarget);
  };

  const [openDrawer, setOpenDrawer] = useState(false);

  const toggleDrawer = () => {
    setOpenDrawer(true);
  };

  const onFileChange = (e) => {
    setFile(e.target.files[0]);
    setValue(e.target.files[0].name);
  }

  return (
    <>
      {toggle ? <Close onClick={handleClose} /> : <Add onClick={handleClick} />}
      <Menu
        anchorEl={open}
        keepMounted
        open={open}
        onClose={handleClose}
        anchorReference="anchorPosition"
        anchorPosition={{ top: 335, left: 410 }}
        anchorOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
      >
        <label htmlFor="documentInput">
          <MenuOption>
            <DesriptionStyle />
            Document
          </MenuOption>
        </label>
        <input type="file" id="documentInput" style={{ display: "none" }} onChange={(e)=> onFileChange(e)} />

        <label htmlFor="mediaInput">
          <MenuOption>
            <PermMediaStyle />
            Photos & Videos
          </MenuOption>
        </label>
        <input type="file" id="mediaInput" style={{ display: "none" }} />

        <MenuOption onClick={() => toggleDrawer()}>
          <PhotoCameraStyle />
          Camera
        </MenuOption>
        <CustomWebCam open={openDrawer} setOpen={setOpenDrawer} />

        <MenuOption>
          <PersonStyle />
          Contact
        </MenuOption>
        <MenuOption>
          <PollStyle />
          Poll
        </MenuOption>

        <label htmlFor="reactionInput">
          <MenuOption>
            <AddReactionStyle />
            New Sticker
          </MenuOption>
        </label>
        <input type="file" id="reactionInput" style={{ display: "none" }} />
      </Menu>
    </>
  );
};

export default ChatFooterMenu;
