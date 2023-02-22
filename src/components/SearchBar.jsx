import { IconButton, Paper } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

function SearchBar() {
    const [searchTerm, setsearchTerm] = useState('');
    const nav = useNavigate()
    
    const handleSubmit= (e)=>{
        e.preventDefault();

        if(searchTerm){
            nav(`search/${searchTerm}`)
            setsearchTerm('')
        }
    }

    return (
        <Paper 
            component='form'
            onSubmit={handleSubmit}
            sx={{
                borderRadius: 20,
                border: '1px solid #e3e3e3',
                pl: 2,
                boxShadow:'none',
                mr: {sm: 5}
            }}
        >
            <input className='search-bar'
            placeholder='search...'
            value= {searchTerm}
            onChange={(e)=>{setsearchTerm(e.target.value)}}
            />
            <IconButton type= 'submit' sx ={{p:"10", color:'red'}}>
                <SearchIcon />
            </IconButton>
        </Paper>
    )
}

export default SearchBar
