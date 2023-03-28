import { Box } from "@mui/material"
import {  useParams } from "react-router-dom"
import {ChannelCard ,Videos} from "./"
import { useEffect , useState } from "react"
import { fetchAPI } from "../utils/fetchAPI"
import Loader from "./Loader"


function ChannelDetails() {

  const {id} = useParams()
  const [channelDetails, setChannelDetails] = useState();
  const [videos, setVideos] = useState([])
  
useEffect( () => {
  
    fetchAPI(`channels?part=snippet&id=${id}`)
    .then((data)=>{setChannelDetails(data?.items[0]);})

    fetchAPI(`search?channelId=${id}&part=snippet&order=date`)
    .then((data)=>{setVideos(data?.items);})
    
    
}, [id]);

if(!videos?.length) return <Loader/>


  return (
    <Box minHeight="95vh">
      
      <Box>
      <div style={{
          height:'300px',
          background: 'linear-gradient(to right, #8e0e00, #1f1c18)',
          zIndex: -1,
        }}/>
        
        
          <ChannelCard channelDetails={channelDetails} marginTop="-115px" id= {id} />
      
      </Box>
     
      <Box display='flex' p = {2}  >
        <Box sx={{mr: {sm:'100px'}}}/>
      
        <Videos videos={videos}/>
      </Box>
    
    </Box>
  )
}

export default ChannelDetails
