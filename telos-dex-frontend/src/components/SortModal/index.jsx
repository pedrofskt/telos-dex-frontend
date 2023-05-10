import * as React from 'react';
import Box from '@mui/material/Box';
import "./index.css"
import Modal from '@mui/material/Modal';
import { Checkbox, FormControlLabel, Typography } from '@mui/material';

const style = {
    position: "relative",
    width: "113px",
    height: "132px",
    background: "#DC0A2D",
    borderLeft: "4px solid #DC0A2D",
    boxShadow: "0px 3px 12px 3px rgba(0, 0, 0, 0.2)",
    borderRadius: "12px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "end",
    padding: "4px"
};

export default function SortModal({open, setOpen, content}) {
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
        <Typography id="modal-modal-title" variant="h6" component="h2" sx={{
               fontFamily: 'Poppins',
               fontStyle: "normal",
               fontWeight: "700",
               fontSize: "12px",
               lineHeight: "16px", 
               width: "47px",
               height: "16px",
               color: "#FFFFFF",
               paddingBottom: "16px",
        }}>
            Sort by:
          </Typography>
          <div className='SortPoke'>
            <div className='SortPokeCheckBox' style={{paddingTop: "19px",}}>
                <input type="radio" name="name" value="number"/>
                <label>Number</label>
            </div>
            <div className='SortPokeCheckBox'>
                <input type="radio" name="name" value="text"/>
                <label>Name</label>
            </div>
          </div>
        </Box>
      </Modal>
    </div>
  );
}