import React from 'react';
import { useState } from 'react';

import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { Button, TextField } from "@mui/material"

function InputFields(props) {
    const [format, setFormat] = useState('wav');
    const [url, setUrl] = useState('');

    const handleChange = (e) => {
        setFormat(e.target.value)
    }

    const handleURL = (e) => {
        setUrl(e.target.value);
    }

    function downloadVideo() {
        console.log('URL: ' + url + '\nFormat: ' + format)
    }

    return (
        <>
            <TextField 
                id='format'
                label='Enter YouTube URL' 
                variant='standard'
                size='normal' 
                sx={{minWidth: 400}}
                onChange={handleURL}
            />
            
            <FormControl variant="filled" sx={{ m: 0, minWidth: 120 }}>
                <InputLabel id="demo-simple-select-filled-label">Format</InputLabel>
                <Select
                    labelId="format-label"
                    id="format"
                    label="Format"
                    variant="standard"
                    value={format}
                    onChange={handleChange}
                >
                    <MenuItem value={'mp4'}>.mp4</MenuItem>
                    <MenuItem value={'mp3'}>.mp3</MenuItem>
                    <MenuItem value={'wav'}>.wav</MenuItem>
                </Select>
            </FormControl>

            <Button variant="contained" sx={{ mx: 2 }} onClick={downloadVideo}> Download </Button>
        </>
    );
}

export default InputFields;