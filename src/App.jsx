import * as React from 'react';
import Box from '@mui/material/Box'

import InputFields from './InputFields';


function App() {

  return (
    <>
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        minHeight="100vh"

      >
        <InputFields />
      </Box>

    </>
  )
}

export default App
