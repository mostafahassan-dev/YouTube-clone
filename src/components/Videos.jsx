import { Stack ,Box} from "@mui/system";
import { ChannelCard, VideoCard } from "./";
import Loader from "./Loader";


function Videos({ videos, direction }) {

    if(!videos?.length) return <Loader/>

    return (
        <Stack direction={direction ||'row'} flexWrap='wrap' 
        justifyContent='start' gap={2}>
            {videos.map((item,index) =>(
                
            <Box key={index}>
                {item.id.videoId && <VideoCard video={item}/>}
                {item.id.channelId && <ChannelCard channelDetails={item}/>}
            </Box>
            
            ))}
        
            
        </Stack>
    )
}

export default Videos
