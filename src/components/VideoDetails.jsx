
import { CheckCircle } from "@mui/icons-material";
import { Box, Stack, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import ReactPlayer from "react-player";
import { useParams, Link } from "react-router-dom";
import { fetchAPI } from "../utils/fetchAPI";
import {Videos} from "./";
import Loader from "./Loader";

function VideoDetails() {
  const [videoDetails, setvideoDetails] = useState([]);

  const [videos, setvideos] = useState([]);
  const {id} = useParams()

  useEffect(() => {

    fetchAPI(`videos?&part=snippet,statistics&id=${id}`)
    .then((data)=>{setvideoDetails(data.items[0]);})
    
    fetchAPI(`search?part=snippet&relatedToVideoId=${id}&type=video`)
    .then((data)=>{setvideos(data.items);})
  }, [id]);

if(!videoDetails?.snippet) return <Loader/>
if(!videos?.length) return <Loader/>


const {snippet:{title , channelId , channelTitle},
      statistics:{viewCount, likeCount}
      } = videoDetails


  return (
      <Box minHeight= '95vh'>
          <Stack direction={{xs: 'column' , md: 'row'}}>
            <Box flex={1} >
              <Box sx={{
                width:'100%' ,
                position: 'sticky',
                top: '82px',
                paddingLeft: '3px'
                }}>
                  <ReactPlayer url={`https://www.youtube.com/watch?v=${id}`} 
                  className = 'react-player' controls  />
                  <Typography variant= 'h5' color ='#fff' fontWeight='bold' p={2}>
                    {title}
                  </Typography>

                  <Stack direction='row' justifyContent='space-between' py={1} px ={2} color= '#fff'>

                    <Link to={`/channel/${channelId}`}>
                      <Typography
                            variant={{ sm: 'subtitle1', md:'h6'}} pt='4px' color='#fff' display='flex' alignItems='center' >
                            <Box fontWeight='300'>
                                {channelTitle}
                            </Box>
                            <CheckCircle sx={{fontSize: 12, ml: '5px', color: 'gray'}}  />
                        </Typography>
                    </Link>
                    
                    <Stack direction='row' gap={2} alignItems ='center' >
                      <Typography variant="body1" sx={{opacity:0.7}}>
                        {parseInt(viewCount).toLocaleString('en-US') } views
                      </Typography>
                      <Typography variant="body1" sx={{opacity:0.7}}>
                        {parseInt(likeCount).toLocaleString('en-US') } likes
                      </Typography>
                    </Stack>

                  </Stack>
              </Box>
            </Box>
            <Box px= {2} py= {{md:1 ,xs:5}} justifyContent= 'center' alignItems='center'>
              <Videos videos={videos} direction='column'/>
            </Box>
          </Stack>

      </Box>
    
  )
}

export default VideoDetails
