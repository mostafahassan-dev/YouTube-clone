import { Link } from "react-router-dom";
import { Typography,Card,CardContent,CardMedia, Box } from "@mui/material";

import { CheckCircle } from "@mui/icons-material";

function VideoCard({video: { id:{videoId}, snippet} }) {
    
    return (
        <Card sx= {{width: { xs: '100%',sm: '343px', md: '320px' },
                    borderRadius: 0
                    , boxShadow: 'none' }}>
            <Link to={videoId ? `/video/${videoId}`:'/'}>
                <CardMedia
                    image={snippet?.thumbnails?.high?.url}
                    alt={snippet?.title}
                    sx={{width: { xs: '100%', sm: '343px',md: '320px'},
                        height: 180 }}
                    />               
            </Link>
            <CardContent sx={{
                background: '#1e1e1e'
                ,height: '106px'}}>
                <Link to={videoId ? `/video/${videoId}`: '/'}>
                    <Typography
                    variant="subtitle1" fontWeight="bold" color='#fff'>
                        {snippet?.title.slice(0,53) }
                    </Typography>
                </Link>  
                
                <Link to={snippet?.channelId ? `/channel/${snippet?.channelId}`: '/'}>
                    <Typography
                        variant="subtitle2" fontWeight="500" color='grey' display='flex' alignItems='center' >
                        <Box>
                            {snippet?.channelTitle }
                        </Box>
                        <CheckCircle sx={{fontSize: 14, ml: '8px' }}  />
                    </Typography>
                </Link>   
            </CardContent>
        </Card>
    )
}

export default VideoCard
