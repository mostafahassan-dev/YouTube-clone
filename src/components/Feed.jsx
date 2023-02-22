import { useEffect,useState } from "react";
import {Stack ,Box , Typography} from '@mui/material';
import  {Sidebar, Videos}  from "./";
import { fetchAPI } from "../utils/fetchAPI";


function Feed() {

  const [selectedCategory, setselectedCategory] = useState('New');
  const [videos, setvideos] = useState([]);

  useEffect(() => {
    fetchAPI(`search?part=snippet&q=${selectedCategory}`)
    .then((data)=>{setvideos(data.items)})
    
  }, [selectedCategory]);

  return (
    <Stack sx= {{flexDirection:{ md: 'row', sx: 'column'}}}>
      <Box sx= {{height: {sx:'auto',md: '92vh'},
        borderRight: '1px solid #3d3d3d',
        px:{sx: 0 , md: 2}}}>

          <Sidebar
          selectedCategory = {selectedCategory}
          setselectedCategory ={setselectedCategory}
          />

          <Typography className="copyright"
          variant="body2" sx={{mt: 1.5,color:'#fff'}}>
            Copyright 2023 Youtube
          </Typography>
      </Box>

      <Box p={2} sx={{overflow: 'auto' ,height:'90vh', flex:'2'}}>

        <Typography variant="h4" fontWeight='bold' mb={2} color = "#fff">
          {selectedCategory}
          <span style={{color:'#F31503'}}> Videos</span>
        </Typography>

        <Videos videos = {videos}/>

      </Box>

    </Stack>
  )
}

export default Feed
