import React from 'react';
import {Box, CardMedia, Paper, Typography, Stack, Grid} from '@mui/material';
import './dashboard.css';

const Dashboard = () => {
    return (
        <Box p='24px' className='maindashboardcont'>
            <Typography variant='h6' pb='16px'>Hi, Ganesh</Typography>
            
            <Grid container rowSpacing={4} columnSpacing={6}>
                {[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]?.map((val) => <Grid key={val} item xs={6}>
                <Paper elevation={3} sx={{padding:'16px', cursor: 'pointer'}} className='eachcard'>
                
                <Stack  direction='row' gap='16px'>
                <CardMedia
        component="img"
        image="https://cdn1.iconfinder.com/data/icons/bokbokstars-121-classic-stock-icons-1/512/person-man.png"
                    alt="image_"
                    sx={{width: '100px'}}
                    />
                    
                    <Box component={Stack} direction='column' gap='12px'>
                    <Stack direction='row' gap='16px' alignItems='center'>
                        <Typography>Name:</Typography>
                        <Typography>Surya</Typography>
                    </Stack>
                    <Stack direction='row' gap='16px' alignItems='center'>
                        <Typography>Native:</Typography>
                        <Typography>Asur</Typography>
                    </Stack>
                    </Box>
      </Stack>
            </Paper>
                </Grid>)}
            </Grid>
        </Box>
  );
};

export default Dashboard