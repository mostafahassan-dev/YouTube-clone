import { CheckCircle } from '@mui/icons-material';
import { CardContent, CardMedia, Typography, Box } from '@mui/material';
import { Link } from 'react-router-dom';


function ChannelCard({ channelDetails , marginTop , id}) {
  
  return (
    <Box
      sx={{
            borderRadius: '20px',
            boxShadow:'none',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            width: { xs: '356px', md: '320px' },
            height: '326px',
            margin: 'auto',
            marginTop,
            }}>

      <Link to={ channelDetails?.snippet?.channelId? `/channel/${channelDetails?.snippet?.channelId}`: `/channel/${id}`} >
      
        <CardContent
          sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                textAlign: 'center',
                color: '#fff' 
                }}>

        <CardMedia 
        image={channelDetails?.snippet?.thumbnails?.high?.url }
        alt={channelDetails?.snippet?.title}
        sx={{
              borderRadius: '50%',
              height: '180px',
              width: '180px',
              mb: 2,
              border: '1px solid #e3e3e3'
            }}
        />                   
        <Typography
          variant="h6" fontWeight="500" color='grey' display='flex' alignItems='center' >
          <Box>
              {channelDetails?.snippet?.title }
          </Box>
          <CheckCircle sx={{fontSize: 14, ml: '8px' }}  />
        </Typography>

        {channelDetails?.statistics?.subscriberCount && (

          <Typography sx={{ fontSize: '15px', fontWeight: 500, color: 'gray' }}>
            {parseInt(channelDetails?.statistics?.subscriberCount).toLocaleString('en-US')} Subscribers
          </Typography>
        )}
                  
            </CardContent>
      </Link>
    </Box>
  )
}

export default ChannelCard
