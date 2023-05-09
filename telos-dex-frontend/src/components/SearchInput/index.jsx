import React from 'react'
import { OutlinedInput } from '@mui/material'

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
                    lineHeight: "16px",}}
                  type="text"
                  placeholder="Search"
                  ></OutlinedInput>
      )
}

export default SearchInput