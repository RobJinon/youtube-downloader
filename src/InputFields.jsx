import React from 'react';

import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { Button, TextField } from "@mui/material"

function InputFields(props) {
    return (
        <>
            <TextField label="Enter YouTube URL" variant="standard" size='normal' sx={{minWidth: 400}}/>
            
            <FormControl variant="filled" sx={{ m: 0, minWidth: 120 }}>
            <InputLabel id="demo-simple-select-filled-label">Format</InputLabel>
            <Select
                labelId="format-label"
                id="format"
                label="Format"
                variant="standard"
            >
                <MenuItem value={'mp4'}>.mp4</MenuItem>
                <MenuItem value={'mp3'}>.mp3</MenuItem>
                <MenuItem value={'wav'}>.wav</MenuItem>
            </Select>
            </FormControl>

            <Button 
            variant="contained"
            sx={{
                mx: 2
            }}
            >
                Download
            </Button>
        </>
    );
}

export default InputFields;