import React, { useContext, useState } from 'react';
import { AccountContext } from '../../../context/AccountProvider';
import { Box, styled } from '@mui/material';

import { FilterTiltShift, Sensors, Groups, Chat } from '@mui/icons-material';

// components
import HeaderMenu from './HeaderMenu';
import InfoDrawer from '../../drawer/InfoDrawer';

const Component = styled(Box)`
    height: 44px;
    background: #ededed;
    padding: 8px 16px;
    display: flex;
    align-items: center;
`;

const Wrapper = styled(Box)`
    margin-left: auto;
    & > * {
        margin-left: 2px;
        padding: 8px;
        color: #000;
        font-size: 20px;
        cursor: pointer;
    }
`;

const Image = styled('img')({
    height: 40,
    width: 40,
    borderRadius: '50%',
    cursor: 'pointer'
});

const Header = () => {

    const { account } = useContext(AccountContext);

    const [openDrwaer, setOpenDrwaer] = useState(false);
    
    const toggleDrawer = () => {
        setOpenDrwaer(true);
    }

  return (
    <>
        <Component>
            <Image src={account.picture} alt="dp" onClick={()=> toggleDrawer()} />
            <Wrapper>
                <Groups/>
                <FilterTiltShift/>
                <Sensors />
                <Chat/>
                <HeaderMenu />
            </Wrapper>
        </Component>
        <InfoDrawer open={openDrwaer} setOpen={setOpenDrwaer}/>
    </>
  )
}

export default Header