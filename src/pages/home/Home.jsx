import { Avatar, Button } from '@mui/material';
import React from 'react'
import { NavLink } from 'react-router-dom';
import SendIcon from '@mui/icons-material/Send';

const Home = () => {
    return (
        <div>
            <div>
                <h2>Home page !</h2>
                <Avatar alt="Remy Sharp" src="https://cdn.pixabay.com/photo/2024/05/26/10/15/bird-8788491_1280.jpg" />
            </div>
            <div style={{ textAlign: 'center', marginTop: '110px' }}>
                <NavLink to="/profile">
                <Button variant="contained" startIcon={<SendIcon />}>View Profile</Button>
                </NavLink>
            </div>
        </div>
    )
};

export default Home;