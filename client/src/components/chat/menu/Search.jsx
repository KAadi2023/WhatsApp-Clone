import { Box, InputBase } from '@mui/material'
import React from 'react'

import {Search as SearchIcon, FilterList} from '@mui/icons-material';
import styled from '@emotion/styled';


const Component = styled(Box)`
    background: #fff;
    height: 45px;
    border-bottom: 1px solid #F2F2F2;
    display: flex;
    align-items: center
`;

const Wrapper = styled(Box)`
    background-color: #f0f2f5;
    position: relative;
    margin: 0 13px;
    border-radius: 5px;
    width: 100%;
`;

const Icon = styled(Box)`
    position: absolute;
    height: 100%;
    padding: 8px;
    color: #919191;
`;

const InputField = styled(InputBase)`
    width: 100%;
    padding: 16px;
    color: #919191;
    height: 15px;
    padding-left: 60px;
    font-size: 15px;
`;

const FilterListStyle = styled(FilterList)`
    margin: auto;
    margin-right: 5px;
    font-size: 16px;
    color: #919191;
`;

const Search = ({ setText }) => {
  return (
    <Component>
        <Wrapper>
            <Icon>
                <SearchIcon/>
            </Icon>
            <InputField
                placeholder='Search or start new chat'
                onChange={(e) => setText(e.target.value)}
            />
        </Wrapper>
        <Box>
            <FilterListStyle/>
        </Box>
    </Component>
  )
}

export default Search