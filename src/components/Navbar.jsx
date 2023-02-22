import { Stack } from '@mui/system'
import { Link } from 'react-router-dom'
import logo from '../assets/logo.ico'
import SearchBar from './SearchBar'

function Navbar() {

    return (
        <Stack 
        direction= 'row' p={2} alignItems ='center' 
        sx={{backgroundColor:'#000',
            position:'sticky',
            top :0,
            justifyContent: 'space-between'
            }}
        >
            <Link to='/' style={{display:'flex', alignItems:'center'}}>
                <img src= {logo} alt= 'logo' height= {45}/>
            </Link>
        <SearchBar/>
        </Stack>
    )
}

export default Navbar
