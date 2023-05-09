import React from 'react'
import { IconButton, InputAdornment, OutlinedInput } from '@mui/material'
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';

function SearchInput() {
    return (
        <OutlinedInput
                  sx={{
                    background: "#FFFFFF", 
                    boxShadow: "inset 0px 1px 3px 1px rgba(0, 0, 0, 0.25)",
                    borderRadius: "16px",
                    width: "280px",
                    height: "32px",
                    padding: "8px 10px 8px 10px",
                    marginLeft: "16px",
                    fontFamily: 'Poppins',
                    fontStyle: "normal",
                    fontWeight: "400",
                    fontSize: "10px",
                    lineHeight: "16px",
                    color: "#666666",}}
                  type="search"
                  placeholder="Search"
                  startAdornment={
                    <InputAdornment>
                      <IconButton>
                        <SearchOutlinedIcon sx={{ color: "#DC0A2D", width:"11.8px", height:
"11.78px",}}/>
                      </IconButton>
                    </InputAdornment>
                  }
                  ></OutlinedInput>
      )
}

export default SearchInput