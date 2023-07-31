import React, { useState } from 'react';
import { Box } from '@mui/system';
import TextField from '@mui/material/TextField';

function LoginContainer() {
    return (
        <Box
            sx={{
                width: 400,
                height: 500,
                backgroundColor: '#FDCEDF',
                position: 'absolute',
                top: '50%',
                right: '0',
                transform: 'translateY(-50%)',
            }}
        >
            <TextField id="outlined-basic" label="User Name" variant="outlined" />
            <TextField
                id="outlined-password-input"
                label="Password"
                type="password"
                autoComplete="current-password"
            />

        </Box>
    );
}

export default LoginContainer;
